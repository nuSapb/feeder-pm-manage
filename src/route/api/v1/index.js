const Router = require('koa-router')

const router = new Router()

router.use(require('./pm-manage'))

module.exports = router.routes()
