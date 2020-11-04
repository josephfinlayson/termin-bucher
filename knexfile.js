const Compiler = require('knex/lib/dialects/postgres/query/compiler')
const types = require('pg').types
const _ = require('lodash')
Compiler.prototype.forUpdate = function forUpdate () {
  console.warn('table lock is not supported by cockroachdb/postgres dialect')
  return ''
}

/**
 * Required because postgres returns int as string and
 * knex checks for isLocked are evaluating to true all the time
 */
types.setTypeParser(20, function (val) {
  return parseInt(val)
})

const conf =
{
  client: 'pg',
  version: '12',
  migrations: {
    tableName: 'knex_migrations',
  },
  connection: {
    host: 'localhost',
    port: '25060',
    user: 'doadmin',
    password: process.env.postgres_password,
    database: 'terminator',
    pool: {
      min: 1,
      max: 2
    }
  }
}

module.exports = {
  development: conf,
  production: _.merge(_.cloneDeep(conf), { connection: { host: 'postgres.default.svc' } })
}
