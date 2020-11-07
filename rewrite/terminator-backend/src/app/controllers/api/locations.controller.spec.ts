// std
import { ok, strictEqual } from 'assert';

// 3p
import { Context, createController, getHttpMethod, getPath, isHttpResponseOK } from '@foal/core';

// App
import { LocationsController } from './locations.controller';

describe('LocationsController', () => {

  let controller: LocationsController;

  beforeEach(() => controller = createController(LocationsController));

  describe('has a "foo" method that', () => {

    it('should handle requests at GET /.', () => {
      strictEqual(getHttpMethod(LocationsController, 'foo'), 'GET');
      strictEqual(getPath(LocationsController, 'foo'), '/');
    });

    it('should return an HttpResponseOK.', () => {
      const ctx = new Context({});
      ok(isHttpResponseOK(controller.foo(ctx)));
    });

  });

});
