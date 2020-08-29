import knex from 'knex'
import config from '../knexfile'

function getEnv() {
  if (process.env.NODE_ENV === 'test' || !process.env.NODE_ENV) {
    return 'development'
  }
  return 'production'
}

const knexConfigured = knex(config[getEnv()])

export default knexConfigured


