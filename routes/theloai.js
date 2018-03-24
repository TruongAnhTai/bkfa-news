var express = require('express');
var router = express.Router();

var pg = require("pg");

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'news',
    password: 'dmt',
    port: 2197,
});


/* GET users listing. */
router.get('/danhsach', function(req, res, next) {
    (async() => {
        const client = await pool.connect()
        try {
            const result = await client.query('SELECT * FROM theloai')
            res.render('theloai/danhsach',{theloai: result.rows});
        } finally {
            client.release()
        }
    })().catch(e => console.log(e.stack))
});
module.exports = router;