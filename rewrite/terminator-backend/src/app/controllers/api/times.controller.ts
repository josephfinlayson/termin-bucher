import { Context, Get, HttpResponseOK } from '@foal/core';

export const startTime = 8
export const endTime = 18

export class TimesController {

  @Get('/')
  foo(ctx: Context) {
    return new HttpResponseOK({
        startTime,
        endTime
    });
  }

}
