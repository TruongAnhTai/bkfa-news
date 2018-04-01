const admin = require('./admin');
const theloai = require('./theloai');

module.exports = (app) => {
  app.use('/admin', admin)
  app.use('/theloai', theloai)
}