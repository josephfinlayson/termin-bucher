
exports.up = function (knex) {
  return knex.schema.table('users', (table) => {
    table.string('first_name')
    table.string('last_name')
    table.string('phone_number')
  })
}

exports.down = function (knex) {

}
