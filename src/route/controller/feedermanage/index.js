const Router = require('koa-router')
const feeders = require('./feeders')
const testapi = require('./testapi')

const router = new Router()

const checkAuth = async (ctx, next) => {
  if (ctx.session && ctx.session.username) {
    console.log('If checkAuth', ctx.session.username)
    await next()
  } else {
    console.log('Else checkAuth', ctx.session.username)
    return ctx.redirect('/')
  }
}

router.get('/feeders', checkAuth, feeders.getHandler)
router.get('/chart', async ctx => {
  await ctx.render('chart')
})
router.get('/pie', async ctx => {
  await ctx.render('pie')
})

router.post('/testapi', testapi.log)

/**
 * the last route get * and render 404error pasge
 */
// router.get('*', async (ctx) => {
//     ctx.status = 400
//     await ctx.render("404error")
// })

module.exports = router.routes()
