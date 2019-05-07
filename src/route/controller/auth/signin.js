const bcrypt = require("bcrypt")
const user = require("../../../models/user")

const getHandler = async (ctx) => {
  let data = { flash: ctx.flash }
  await ctx.render("signin", data)
}

const postHandler = async (ctx) => {
  const results = await user.findUserByUsername(ctx.request.body.username)

  if (results[0]) {
    const same = await bcrypt.compare(
      ctx.request.body.password,
      results[0].password
    )
    if (same) {
      ctx.session.userId = results[0].id
      ctx.session.username = results[0].username
      ctx.session.role = results[0].role
      return ctx.redirect("/index")
    } else {
      ctx.session.flash = {
        error: "Wrong password"
      }
      return ctx.redirect("/")
    }
  } else {
    ctx.session.flash = {
      error: "Mail not found"
    }
    return ctx.redirect("/")
  }
}

module.exports = {
  getHandler,
  postHandler
}
