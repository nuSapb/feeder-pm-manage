const Router = require('koa-router')
const signIn = require('./signin')
const signUp = require('./signup')
const signOut = require('./signout')
const signUpCompleted = require('./signup_completed')

const router = new Router()

const checkAuth = async (ctx, next) => {
  if (ctx.session && ctx.session.username) {
    // ctx.session.flash = {
    // 	error: '',
    // 	success: ''
    // }
    return ctx.redirect('/feeders')
  }
  await next()
}

//router.get('/signin', checkAuth, signIn.getHandler)
router.get('/', checkAuth, signIn.getHandler)
router.post('/signin', signIn.postHandler)
router.get('/signup', checkAuth, signUp.getHandler)
router.post('/signup_completed', signUpCompleted.postHandler)
router.get('/signout', signOut.getHandler)

module.exports = router.routes()
