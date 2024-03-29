// 3p
import { createApp } from '@foal/core'
import * as request from 'supertest'
import { createConnection, getConnection } from 'typeorm'

// App
import { AppController } from '../app/app.controller'

describe('The server', () => {
  let app

  before(async () => {
    await createConnection()
    app = createApp(AppController)
  })

  after(() => getConnection().close())

  it('should return a 200 status on GET / requests.', () => {
    return request(app)
      .get('/')
      .expect(200)
  })
})
