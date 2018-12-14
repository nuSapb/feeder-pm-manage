const Router = require('koa-router')

const router = new Router()

router.use(require('./emails'))

module.exports = router.routes()