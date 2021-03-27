import { Context, Get, HttpResponseOK } from '@foal/core'
import { startTime, endTime } from '../../services/appointment-time-mapper.service'

export class TimesController {
  @Get('/')
  foo (ctx: Context) {
    return new HttpResponseOK({
      startTime,
      endTime
    })
  }
}
