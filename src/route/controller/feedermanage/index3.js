const uuid4 = require("uuid4")
const fs = require("fs-extra")
const path = require("path")

const feeders = require("../../../models/index3")

const users = require("../../../models/user")

const getHandler = async (ctx) => {
  console.log(ctx.session.username)
  let data = {}
  let user = ctx.session.username
  console.log(user)
  const name = await users.userFullName(user)
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
  const size44Due = await feeders.count44Due()
  const size56Due = await feeders.count56Due()
  const size68Due = await feeders.count68Due()
  const otherSizeDue = await feeders.countOtherDue()

  data = {
    user: user,
    info: result,
    name: name,
    allFeeder: allFeeder,
    due: due,
    overDue: overDue,
    onGoing,
    onGoing,
    scrap: scrap,
    repair: repair,
    size8Due: size8Due,
    size12Due: size12Due,
    size16Due: size16Due,
    size24Due: size24Due,
    size32Due: size32Due,
    size44Due: size44Due,
    size56Due: size56Due,
    size68Due: size68Due,
    otherSizeDue: otherSizeDue
  }

  await ctx.render("index3", data)
}

const getPmData = async (ctx) => {
  console.log(ctx.session.username)
  let data = {}
  let user = ctx.session.username
  console.log(user)
  const name = await users.userFullName(user)
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
  const size44Due = await feeders.count44Due()
  const size56Due = await feeders.count56Due()
  const size68Due = await feeders.count68Due()
  const otherSizeDue = await feeders.countOtherDue()

  data = {
    user: user,
    info: result,
    name: name,
    allFeeder: allFeeder,
    due: due,
    overDue: overDue,
    onGoing,
    onGoing,
    scrap: scrap,
    repair: repair,
    size8Due: size8Due,
    size12Due: size12Due,
    size16Due: size16Due,
    size24Due: size24Due,
    size32Due: size32Due,
    size44Due: size44Due,
    size56Due: size56Due,
    size68Due: size68Due,
    otherSizeDue: otherSizeDue
  }

  ctx.body = data
}

const listAllFeederDue = async (ctx) => {
  const listAllDue = await feeders.findAllDue()
  console.log(listAllDue)
  data = {
    listAllDue: listAllDue
  }
  await ctx.render("tables_dynamics", data)
}

const listAllOnhands = async (ctx) => {
  const listAllDue = await feeders.findAllDue()
  console.log(listAllDue)
  data = {
    listAllDue: listAllDue
  }
  await ctx.render("tables_dynamics", data)
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
  await ctx.render("tables", data)
}

module.exports = {
  getHandler,
  listAllFeederDue,
  findAllFeeder,
  getPmData
}
