
exports.up = function(knex, Promise) {
    return knex.schema.createTable('classes', function(table) {
        table.increments();
        table.string('Class_Name').notNullable();
        table.integer('Class_Level').notNullable();
        table.string('Description').notNullable();
    })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('classes');
};
