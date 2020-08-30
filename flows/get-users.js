import mom from 'moment'
import { extendMoment } from 'moment-range'
import knex from '../data/index'

const moment = extendMoment(mom)

export default async function getUsersRegisteredInLast7Days () {
  try {
    return await knex('users')
      .whereBetween('created_at', [
        moment()
          .subtract(7, 'days').format('YYYY-MM-DD HH:mm:ss'),
        moment().format('YYYY-MM-DD HH:mm:ss')
      ])
      .andWhere({ appointment_found: false })
      .select('*')
      .limit(1)
  } catch (e) {
    console.error('cannot get users', e)
  }
}
