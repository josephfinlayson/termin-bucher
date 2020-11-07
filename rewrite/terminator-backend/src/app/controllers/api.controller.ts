import { Context, controller, Get, HttpResponseOK } from '@foal/core';
import { TimesController } from './api';

export class ApiController {
  subControllers = [
    controller('/times', TimesController)
  ];


  @Get('/')
  index(ctx: Context) {
    return new HttpResponseOK('Hello world!');
  }

}
