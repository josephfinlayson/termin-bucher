// std
import { ok, strictEqual } from 'assert'

// 3p
import { Context, createController, getHttpMethod, getPath, isHttpResponseOK } from '@foal/core'

// App
import { TimesController } from './times.controller'
import { createConnection, Connection } from 'typeorm'

describe.skip('TimesController', () => {
  // let controller: ApiController;
  let connection: Connection
  // Create a connection to the database before running all the tests.
  before(async () => {
    // The connection uses the configuration defined in the file config/test.json.
    // By default, the file has three connection options:
    //  "database": "./test_db.sqlite3" -> Use a different database for running the tests.
    // "synchronize": true ->  Auto create the database schema when the connection is established.
    // "dropSchema": true -> Drop the schema when the connection is established (empty the database).
    connection = await createConnection()
  })
  after(() => connection.close())

  let controller: TimesController

  beforeEach(() => controller = createController(TimesController))

  describe('has a "foo" method that', () => {
    it('should handle requests at GET /.', () => {
      strictEqual(getHttpMethod(TimesController, 'foo'), 'GET')
      strictEqual(getPath(TimesController, 'foo'), '/')
    })

    it('should return an HttpResponseOK.', () => {
      const ctx = new Context({})
      ok(isHttpResponseOK(controller.foo(ctx)))
    })
  })
})
