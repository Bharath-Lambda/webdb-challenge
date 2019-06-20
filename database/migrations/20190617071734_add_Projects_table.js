
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Projects', table => {
    table.increments('id');
    table.string('Name').notNullable().unique();
    table.string('Description')
    table.boolean('Completed').defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Projects')
};
