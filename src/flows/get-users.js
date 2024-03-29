import * as mom from 'moment'
import { extendMoment } from 'moment-range'
import knex from '../data/index'
import { RethrownError } from '../app/services/logger.service'

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
      .joinRaw('join location_user_mapping on location_user_mapping.user_id = users.id')
      .andWhereRaw('authority_id IS NOT NULL')
      .select('users.id')
      .limit(1)
  } catch (e) {
    throw new RethrownError('cannot get users', e)
  }
}
