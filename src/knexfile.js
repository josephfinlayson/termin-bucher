import * as _ from 'lodash'
import * as d from 'dotenv'

d.config()

const conf = {
    client: 'pg',
    version: '12',
    migrations: {
        tableName: 'knex_migrations',
    },
    connection: {
        host: 'hobby-paas-db-do-user-7897539-0.b.db.ondigitalocean.com',
        port: '25060',
        debug: true,
        ssl: true,
        user: 'doadmin',
        password: process.env.DATABASE_PASSWORD,
        database: 'terminator',
        pool: {
            min: 1,
            max: 2
        }
    }
}

export const config = {
    development: conf,
    production: _.merge(_.cloneDeep(conf), { connection: { host: 'postgres.default.svc' } })
}