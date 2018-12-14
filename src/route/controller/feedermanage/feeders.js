const uuid4 = require('uuid4')
const fs = require('fs-extra')
const path = require('path')

const feeders = require('../../../models/feeders')

const config = require('../../../config')
const users = require('../../../models/user')

const getHandler = async ctx => {
  console.log(ctx.session.username)
  let data = {}
  let user = ctx.session.username
  const userDetail = await users.findUserByUsername(user)
  const result = await feeders.findFeeders()
  data = {
    info: result,
    userDetail: userDetail
  }

  await ctx.render('feeders', data)
}

module.exports = {
  getHandler
}
