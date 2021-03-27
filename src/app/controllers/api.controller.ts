import { Context, controller, Get, HttpResponseOK, Post } from '@foal/core'
import { LocationsController, TimesController, UsersController } from './api'

export class ApiController {
    subControllers = [
      controller('/times', TimesController),
      controller('/locations', LocationsController),
      controller('/user', UsersController)
    ];

    @Post('/*')
    index (ctx: Context) {
      const message = ctx.request.body.text
      const reversedMessage = message.split('').reverse().join('')

      return new HttpResponseOK({ message: reversedMessage })
    }
}
