import { Context, ValidateBody, Get, Post, HttpResponseOK, HttpResponseInternalServerError } from '@foal/core';
import { getRepository } from 'typeorm';
import { Users } from '../../entities/user.entity';

export class UsersController {

    @Post('/')
    @ValidateBody({
        additionalProperties: true,
        properties: {
            email: { type: 'string' }
        }
    })
    async foo(ctx: Context) {
        console.log('valid email', ctx.request.body.email)
        const { first_name, last_name, email, phone_number, authority_id } = ctx.request.body
        try {
            const rep = getRepository(Users)
            const result = await rep.insert({
                firstName: first_name,
                lastName: last_name,
                email,
                phoneNumber: phone_number,
                locationUserMappings: [{ authorityId: authority_id }]
            })

            return new HttpResponseOK(result)

        } catch (e) {
            return new HttpResponseInternalServerError()
        }
    }
}