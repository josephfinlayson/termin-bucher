import knex from '../data/index'

export default async function markUserAsFound (user) {
  try {
    return await knex('users').where({ id: user.id }).update({ appointment_found: true })
  } catch (e) {
    console.error('cannot get users', e)
  }
}
