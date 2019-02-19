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
  console.log(user)
  const userDetail = await users.findUserByUsername(user)
  const allFeeder = await feeders.countFeeder()
  const result = await feeders.findFeeders()
  const due = await feeders.countDue()
  const overDue = await feeders.countOverDue()
  const onGoing = await feeders.countOngoing()
  const scrap = await feeders.countScrap()
  const repair = await feeders.countRepair()
  const size8Due = await feeders.count8Due()
  const size12Due = await feeders.count12Due()
  const size16Due = await feeders.count16Due()
  const size24Due = await feeders.count24Due()
  const size32Due = await feeders.count32Due()
  const otherSizeDue = await feeders.countOtherDue()

  data = {
    info: result,
    userDetail: userDetail,
    allFeeder: allFeeder,
    due: due,
    overDue: overDue,
    onGoing, onGoing,
    scrap: scrap,
    repair: repair,
    size8Due: size8Due,
    size12Due: size12Due,
    size16Due: size16Due,
    size24Due: size24Due,
    size32Due: size32Due,
    otherSizeDue: otherSizeDue,
  }

  await ctx.render('index', data)
}

const listAllFeederDue = async (ctx) => {
  const listAllDue = await feeders.findAllDue()
  console.log(listAllDue)
  data = {
    listAllDue: listAllDue,
  }
  await ctx.render('tables_dynamics', data)
}

const listAllOnhands = async (ctx) => {
  const listAllDue = await feeders.findAllDue()
  console.log(listAllDue)
  data = {
    listAllDue: listAllDue,
  }
  await ctx.render('tables_dynamics', data)
}

const findAllFeeder = async (ctx) => {
  const listAllFeeder = await feeders.findAll()
  const listAllOverDue = await feeders.findOverDue()
  const listAllRepair = await feeders.findRepair()
  const listAllScrap = await feeders.findScrap()

  data = {
    listAllFeeder: listAllFeeder,
    listAllOverDue: listAllOverDue,
    listAllRepair: listAllRepair,
    listAllScrap: listAllScrap
  }
  await ctx.render('tables', data)
}

const addFeeders = async ctx => {
  console.log("addFeeders")
  let data = {}
  const {brand } = ctx.request.body
  console.log(brand)
  ctx.redirect('/form')
}



module.exports = {
  getHandler,
  listAllFeederDue,
  findAllFeeder,
  addFeeders
}
