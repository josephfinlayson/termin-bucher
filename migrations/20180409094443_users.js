exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()')).notNull()
    table.string('email').notNull()
    table.string('first_name').notNull()
    table.string('last_name').notNull()
    table.string('phone_number').notNull()
    table.boolean('appointment_found').notNull().defaultTo('false')

    table.timestamp('created_at', { useTz: false }).defaultTo(knex.fn.now()).notNull()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
}
