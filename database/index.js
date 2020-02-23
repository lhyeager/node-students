const knex = require('knex')( {
    client: 'pg',
    connection: {
        host: 'localhost',
        database: 'students_db'
    }
});

module.exports = knex;