var pg = require("pg");

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'news',
    password: 'dmt',
    port: 2197,
});

module.exports = pool;