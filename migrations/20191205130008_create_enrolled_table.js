
exports.up = function(knex, Promise) {
    return knex.schema.createTable('enrolled', function(table) {
        table.integer('student_id').notNullable();
        table.integer('class_id').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('enrolled');
};
