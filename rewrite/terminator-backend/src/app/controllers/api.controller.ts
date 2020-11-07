import { Context, controller, Get, HttpResponseOK } from '@foal/core';
import { LocationsController, TimesController } from './api';

export class ApiController {
  subControllers = [
    controller('/times', TimesController),
    controller('/locations', LocationsController)
  ];


  @Get('/')
  index(ctx: Context) {
    return new HttpResponseOK('Hello world!');
  }

}
