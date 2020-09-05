
exports.up = function (knex) {
  return knex.schema.createTable('locations', function (table) {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()')).notNull()
    table.string('location_name').notNull()
    table.string('location_id').notNull()
    table.string('authority_id').notNull()
    table.string('authority_name').notNull()

  }).then(() => {
    return knex.schema
      .createTable('location_user_mapping',
        function (table) {
          table.uuid('user_id').notNull()
          table.foreign('user_id').references( 'users.id')
          table.string('authority_id').notNull()
        //   table.foreign('authority_id').references('locations.authority_id')
        
        })
  })
}

exports.down = async function (knex) {
    await knex.schema.dropTable('location_user_mapping')
    await knex.schema.dropTable('locations')
}
