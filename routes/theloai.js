const Router = require('express-promise-router')
const router = new Router()
const pool = require('../model')
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
router.use(bodyParser.urlencoded({ extended: false }))

module.exports = router

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


router.post('/sua/:id', function(req, res, next) {
    const id = req.params.id;
    const ten = req.body.suaten;
    (async() => {
        const client = await pool.connect()
        try {
            const result = await client.query('SELECT * FROM theloai WHERE idtheloai =' + id)
            await client.query("UPDATE theloai SET tentheloai = '" + ten + "' WHERE idtheloai = " + id)
            res.redirect("/theloai/danhsach")
        } finally {
            client.release()
        }
    })().catch(e => console.log(e.stack))
});

