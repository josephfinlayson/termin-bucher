import { Context, controller, Get, HttpResponseOK, Post } from '@foal/core'
import { LocationsController, TimesController, UsersController } from './api'

export class ApiController {
    subControllers = [
      controller('/times', TimesController),
      controller('/locations', LocationsController),
      controller('/user', UsersController)
    ];

    @Get('/*')
    index (ctx: Context) {
      return new HttpResponseOK()
    }
}
