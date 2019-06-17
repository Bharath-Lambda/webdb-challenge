
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Actions', table => {
    table.increments('id');
    table.string('Description').notNullable()
    table.string('Notes')
    table.boolean('Completed').defaultTo(false)
    table.integer('ProjectID').unsigned()
    table.foreign('ProjectID').references('id').inTable('Projects');
  
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Actions')
};
