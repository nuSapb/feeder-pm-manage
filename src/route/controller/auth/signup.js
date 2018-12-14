const bcrypt = require('bcrypt')
const user = require('../../../models/user')
const refRole = require('../../../models/refRole')

const getHandler = async ctx => {
  let data = {}
  const roles = await refRole.findAll()
  data.roles = roles
  await ctx.render('signup', data)
}

module.exports = {
  getHandler
  //postHandler
}
