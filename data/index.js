import knex from 'knex'
import config from '../knexfile'

function getEnv() {
  if (process.env.NODE_ENV) {
    return process.env.NODE_ENV.toLowerCase()
  }
  return 'development'
}

export default knex(getEnv());

