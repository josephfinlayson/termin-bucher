
import Knex = require('knex')
import { config } from '../knexfile'

function getEnv() {
    if (process.env.NODE_ENV === 'test' || !process.env.NODE_ENV) {
        return 'development'
    }
    return 'production'
}

const knexConfigured = Knex(config['development'])

export default knexConfigured