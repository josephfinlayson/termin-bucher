const Compiler = require('knex/lib/dialects/postgres/query/compiler')
const types = require('pg').types
const _ =  require('lodash')
Compiler.prototype.forUpdate = function forUpdate() {
    console.warn('table lock is not supported by cockroachdb/postgres dialect');
    return '';
};

/**
 * Required because postgres returns int as string and 
 * knex checks for isLocked are evaluating to true all the time
 */
types.setTypeParser(20, function (val) {
    return parseInt(val)
})


const conf =
{
    client: "pg",
    version: '9.5',
    migrations: {
        tableName: "knex_migrations",
        disableTransactions: true
    },
    connection: {
        host: '127.0.0.1',
        port: '26257',
        user: 'root',
        database: 'terminator',
        pool: {
            min: 1,
            max: 2
        },

    }
}

module.exports = {
    development: conf,
    production: _.merge(conf, { connection: { host: "cockroach-cockroachdb.default.svc" }  })
};
