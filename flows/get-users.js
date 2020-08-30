import mom from 'moment'
import { extendMoment } from 'moment-range'
import knex from '../data/index'

const moment = extendMoment(mom)

export default function getUsersRegisteredInLast7Days () {
  return knex('users')
    .whereBetween('created_at', [
      moment()
        .subtract(7, 'days')
        .format('YYYY-MM-DD'),
      moment().format('YYYY-MM-DD')
    ])
    .select('*')
}
