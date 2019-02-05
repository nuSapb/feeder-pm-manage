const Router = require('koa-router')
const feeders = require('./feeders')
const index2 = require('./index2')
const index3 = require('./index3')
const testapi = require('./testapi')



const router = new Router()


const checkAuth = async (ctx, next) => {
  console.log(ctx.session.username)
  if (ctx.session && ctx.session.username) {
    console.log('If checkAuth', ctx.session.username)
    await next()
  } else {
    console.log('Else checkAuth', ctx.session.username)
    return ctx.redirect('/')
  }
}

router.get('/index', checkAuth, feeders.getHandler)

router.get('/index2', checkAuth, index2.getHandler)

router.get('/index3', checkAuth, index3.getHandler)


router.get('/chartjs', async ctx => {
  await ctx.render('chartjs')
})

router.get('/form', async ctx => {
  await ctx.render('form')
})

router.get('/tables', checkAuth, feeders.findAllFeeder)



router.get('/tables_dynamic', checkAuth, feeders.listAllFeederDue)


router.post('/testapi', testapi.log)

/**
 * the last route get * and render 404error pasge
 */
// router.get('*', async (ctx) => {
//     ctx.status = 400
//     await ctx.render("404error")
// })

module.exports = router.routes()
