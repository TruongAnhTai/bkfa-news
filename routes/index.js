const admin = require('./admin');
const theloai = require('./theloai');
const loaitin = require('./loaitin');
const baiviet = require('./baiviet');
const home = require('./home');

module.exports = (app) => {
	app.use('/', home)
  	app.use('/admin', admin)
  	app.use('/admin/theloai', theloai)
  	app.use('/admin/loaitin', loaitin)
  	app.use('/admin/baiviet', baiviet)
}
