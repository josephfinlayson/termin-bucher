import knex from 'knex'
import config from '../knexfile'

function getEnv() {
  if (process.env.NODE_ENV) {
    return process.env.NODE_ENV.toLowerCase()
  }
  return 'development'
}

console.log(getEnv(), process.env.NODE_ENV)

export default knex(config[getEnv()]);

