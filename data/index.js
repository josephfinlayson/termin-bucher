import knex from 'knex'
import config from '../knexfile'

function getEnv() {
  if (process.env.NODE_ENV === 'test' || !process.env.NODE_ENV) {
    return 'development'
  }
  return 'production'
}

console.log(getEnv(), process.env.NODE_ENV)

export default knex(config[getEnv()]);

