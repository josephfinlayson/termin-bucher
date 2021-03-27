
import { config } from '../knexfile'
import Knex = require('knex')

function getEnv () {
  if (process.env.NODE_ENV === 'test' || !process.env.NODE_ENV) {
    return 'development'
  }
  return 'production'
}

const knexConfigured = Knex(config.development)

export default knexConfigured
