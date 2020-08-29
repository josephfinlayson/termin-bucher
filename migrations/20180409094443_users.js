exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('email');
    table.timestamps(true, true);
  })

};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
};
