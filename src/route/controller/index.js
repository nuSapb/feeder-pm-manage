const Router = require('koa-router')

const router = new Router()

router.use(require('./auth'))
router.use(require('./feedermanage'))

module.exports = router.routes()
