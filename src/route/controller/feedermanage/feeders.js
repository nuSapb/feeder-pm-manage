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
  let data = {}
  const listAllDue = await feeders.findAllDue()
  console.log(listAllDue)
  data = {
    listAllDue: listAllDue,
  }
  await ctx.render('tables_dynamics', data)
}

const listAllOnhands = async (ctx) => {
  let data = {}
  const listAllDue = await feeders.findAllDue()
  console.log(listAllDue)
  data = {
    listAllDue: listAllDue,
  }
  await ctx.render('tables_dynamics', data)
}

const findAllFeeder = async (ctx) => {
  let data = {}
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

const findlastTenRows = async (ctx) => {
  let data = {}
  const last10Rows = await feeders.findLast10Rows()
  console.log(last10Rows)
  ctx.session.flash = {
    success: 'add feeder done'
  }
  data = {
    last10Rows: last10Rows,
    flash: ctx.flash
  }
  await ctx.render('form', data)
}

const addFeeders = async ctx => {

  console.log("addFeeders")
  console.log(ctx.request.body)
  const feederGroup = assignFeederGroup()
  console.log("feederGroup= " + feederGroup)
  const user = ctx.session.username
  const creator = user
  const updater = user
  const { feederId, mfgToolingId, toolingName, model, location, status } = ctx.request.body
  try {
    await feeders.addFeeders(feederId, mfgToolingId, toolingName, model, feederGroup, location, creator, updater, status)
    console.log("Insert new feeder complete")
    ctx.status = 200
    if (ctx.status === 200) {
      ctx.session.flash = {
        success: 'add feeder ' + feederId + ' done'
      }
      await ctx.redirect('/form')
    } 
  }
  catch (err) {
    console.error(err)
    ctx.session.flash = {
      error: 'fail to add new feeder => duplicate feeder ID' 
    }
    await ctx.redirect('/form')
  }


}

const assignFeederGroup = (group) => {
  const d = new Date()
  const currentMonth = d.getMonth() + 1
  if ([1, 2, 3].includes(currentMonth)) {
    return group = 1
  } else if ([4, 5, 6].includes(currentMonth)) {
    return group = 2
  } else if ([7, 8, 9].includes(currentMonth)) {
    return group = 3
  } else {
    return group = 4
  }
}



module.exports = {
  getHandler,
  listAllFeederDue,
  findAllFeeder,
  findlastTenRows,
  addFeeders
}
