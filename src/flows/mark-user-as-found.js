import knex from '../data/index'
import { RethrownError } from '../app/services/logger.service'

export default async function markUserAsFound (user) {
  try {
    await knex('users').where({ id: user.id }).update({ appointment_found: true })
  } catch (e) {
    throw new RethrownError('cannot get users', e)
  }
}
