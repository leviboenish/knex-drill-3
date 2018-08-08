
exports.up = function(knex, Promise) {
  return knex.schema.createTable('gametable', (table) => {
    table.increments('id'),
    table.string('name'),
    table.string('developer'),
    table.float('rating')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('gametable')
};
