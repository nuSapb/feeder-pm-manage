const Router = require('koa-router')
const sendEmail = require('./sendmail')

const router = new Router()
module.exports = router.routes()
