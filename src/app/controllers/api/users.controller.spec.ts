// std
import { ok, strictEqual } from 'assert'

// 3p
import { Context, createController, getHttpMethod, getPath, isHttpResponseOK } from '@foal/core'

// App
import { UsersController } from './users.controller'
import { createConnection, Connection } from 'typeorm'

describe.skip('UsersController', () => {
  let controller: UsersController
  let connection: Connection
  beforeEach(() => controller = createController(UsersController))

  before(async () => {
    connection = await createConnection()
  })

  after(() => connection.close())

  describe('has a "foo" method that', () => {
    it('should return an HttpResponseOK.', async () => {
      const ctx = new Context({ body: { email: 'Joseph.Finlayson@gmail.com', phone_number: '017698455845', first_name: 'Joseph', last_name: 'Finlayson', authority_id: '12671', time: { 1: [0], 2: [0], 3: [0], 4: [0], 5: [0] } } })
      const response = await controller.foo(ctx)
      ok(isHttpResponseOK(response))
    })
  })
})
