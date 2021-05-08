import { Context, ValidateBody, Get, Post, dependency, HttpResponseOK, HttpResponseInternalServerError, Dependency } from '@foal/core'
import { getRepository } from 'typeorm'
import { Users } from '../../entities/user.entity'
import { AppointmentTimeMapper } from '../../services'
import { LoggerService, loggerInstance } from '../../services/logger.service'

export class UsersController {
    @dependency
    timeMapper: AppointmentTimeMapper

    @dependency
    logger: LoggerService

    @Post('/')
    @ValidateBody({
      additionalProperties: true,
      properties: {
        email: { type: 'string' },
        authority_id: { type: 'string' },
        last_name: { type: 'string' },
      }
    })
    async foo (ctx: Context) {
      this.logger.info(`valid email ${ctx.request.body.email}`)
      const { first_name, last_name, email, phone_number, authority_id } = ctx.request.body
      try {
        const rep = getRepository(Users)
        const result = await rep.save({
          firstName: first_name,
          lastName: last_name,
          email,
          phoneNumber: phone_number,
          locationUserMappings: [{ authorityId: authority_id }],
          appointmentTimes: this.timeMapper.mapRequestToDB(ctx.request.body.time)
        })

        return new HttpResponseOK(result)
      } catch (e) {
        loggerInstance.error(e)
        return new HttpResponseInternalServerError()
      }
    }
}
