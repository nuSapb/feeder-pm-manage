const uuid4 = require("uuid4")
const fs = require("fs-extra")
const path = require("path")

const feeders = require("../../../models/feeders")

const config = require("../../../config")
const users = require("../../../models/user")
const pm = require("../../../models/pm")
const sendEmail = require("../../services/emails/sendmail")

const getHandler = async (ctx) => {
  console.log(ctx.session.username)
  let data = {}
  let user = ctx.session.username
  console.log(user)
  const name = await users.userFullName(user)
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
  const size44Due = await feeders.count44Due()
  const size56Due = await feeders.count56Due()
  const size68Due = await feeders.count68Due()
  const otherSizeDue = await feeders.countOtherDue()

  data = {
    name: name,
    user: user,
    info: result,
    userDetail: userDetail,
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

  await ctx.render("index", data)
}

const onhandHandler = async (ctx) => {
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
  const otherSizeDue = await feeders.countOtherDue()
  const size8NXT = await feeders.count8NXT()
  const size12NXT = await feeders.count12NXT()
  const size16NXT = await feeders.count16NXT()
  const size18NXT = await feeders.count18NXT()
  const size24NXT = await feeders.count24NXT()
  const size32NXT = await feeders.count32NXT()
  const size44NXT = await feeders.count44NXT()
  const size56NXT = await feeders.count56NXT()
  const size68NXT = await feeders.count68NXT()
  const size8ASM = await feeders.count8ASM()
  const size12ASM = await feeders.count12ASM()
  const size16ASM = await feeders.count16ASM()
  const size18ASM = await feeders.count18ASM()
  const size24ASM = await feeders.count24ASM()
  const size32ASM = await feeders.count32ASM()
  const size44ASM = await feeders.count44ASM()
  const size56ASM = await feeders.count56ASM()
  const size68ASM = await feeders.count68ASM()

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
    otherSizeDue: otherSizeDue,
    size8NXT: size8NXT,
    size12NXT: size12NXT,
    size16NXT: size16NXT,
    size18NXT: size18NXT,
    size24NXT: size24NXT,
    size32NXT: size32NXT,
    size44NXT: size44NXT,
    size56NXT: size56NXT,
    size68NXT: size68NXT,
    size8ASM: size8ASM,
    size12ASM: size12ASM,
    size16ASM: size16ASM,
    size18ASM: size18ASM,
    size24ASM: size24ASM,
    size32ASM: size32ASM,
    size44ASM: size44ASM,
    size56ASM: size56ASM,
    size68ASM: size68ASM
  }

  await ctx.render("onhand", data)
}

const getData = async (ctx) => {
  console.log(ctx.session.username)
  let data = {}
  let user = ctx.session.username
  console.log(user)
  const userDetail = await users.findUserByUsername(user)
  const allFeeder = await feeders.countFeeder()
  const asmTotal = await feeders.countASM()
  const nxtTotal = await feeders.countNXT()
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
    info: result,
    userDetail: userDetail,
    allFeeder: allFeeder,
    asm: asmTotal,
    nxt: nxtTotal,
    due: due,
    overDue: overDue,
    onGoing: onGoing,
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
  let data = {}
  let user = ctx.session.username
  const listAllDue = await feeders.findAllDue()
  const name = await users.userFullName(user)
  console.log(listAllDue)
  data = {
    user: user,
    name: name,
    listAllDue: listAllDue
  }
  await ctx.render("tables_dynamics", data)
}

const listAllOnhands = async (ctx) => {
  let data = {}
  const listAllDue = await feeders.findAllDue()
  console.log(listAllDue)
  data = {
    listAllDue: listAllDue
  }
  await ctx.render("tables_dynamics", data)
}

const findAllFeeder = async (ctx) => {
  let data = {}
  let user = ctx.session.username
  const listAllFeeder = await feeders.findAll()
  const listAllOverDue = await feeders.findOverDue()
  const listAllOngoing = await feeders.findOngoing()
  const listAllRepair = await feeders.findRepair()
  const listAllScrap = await feeders.findScrap()
  const name = await users.userFullName(user)

  data = {
    user: user,
    name: name,
    listAllFeeder: listAllFeeder,
    listAllOverDue: listAllOverDue,
    listAllOngoing: listAllOngoing,
    listAllRepair: listAllRepair,
    listAllScrap: listAllScrap
  }
  await ctx.render("tables", data)
}

const findlastTenRows = async (ctx) => {
  let data = {}
  let user = ctx.session.username
  const last10Rows = await feeders.findLast30Rows()
  const name = await users.userFullName(user)
  console.log(last10Rows)
  ctx.session.flash = {
    success: "add feeder done"
  }
  data = {
    user: user,
    name: name,
    last10Rows: last10Rows,
    flash: ctx.flash
  }
  await ctx.render("form", data)
}

const findHistory = async (ctx) => {
  let data = {}
  const feederId = ctx.params.feederId
  const history = await feeders.findHistory(feederId)
  console.log(feederId)
  data = {
    history: history
  }
  ctx.status = 200
  ctx.body = JSON.stringify(data)
}

const editHandler = async (ctx) => {
  let data = {}
  let user = ctx.session.username
  const listAllFeeder = await feeders.findAll()
  const name = await users.userFullName(user)
  console.log(listAllFeeder)

  ctx.session.flash = {
    success: "edit feeder done"
  }

  data = {
    user: user,
    name: name,
    listAllFeeder: listAllFeeder,
    flash: ctx.flash
  }
  await ctx.render("edit_form", data)
}

const manualPmHandler = async (ctx) => {
  let data = {}
  let user = ctx.session.username
  const tableManualPM = await feeders.tableManualPM()
  const name = await users.userFullName(user)
  // console.log(tableManualPM)

  ctx.session.flash = {
    success: "edit feeder done"
  }

  data = {
    user: user,
    name: name,
    tableManualPM: tableManualPM,
    flash: ctx.flash
  }
  await ctx.render("manual_pm_form", data)
}

const updateDataManualPM = async (ctx) => {
  console.log("updateDataManualPM")
  const user = ctx.session.username
  const updater = user
  const { feederId, desc } = ctx.request.body
  console.log(feederId, desc)
  const pmType = "manual"
  try {
    await feeders.updateManualPMFeeder(feederId, updater, desc)
    await pm.insertHistory(feederId, pmType, user)
    console.log("Update manual PM data complete")
    const status = "wait_approve"
    await sendEmail.sendRequestMail(feederId, status)
    ctx.status = 200
    await ctx.redirect("/manual_pm_form")
  } catch (err) {
    console.error(err)
    ctx.status = 404
    ctx.session.flash = {
      error: "fail to update manual PM data "
    }
  }
}

const scrapHandler = async (ctx) => {
  let data = {}
  let user = ctx.session.username
  const listAllFeeder = await feeders.findAll()
  const name = await users.userFullName(user)
  console.log(listAllFeeder)

  ctx.session.flash = {
    success: "scrap feeder done"
  }

  data = {
    user: user,
    name: name,
    listAllFeeder: listAllFeeder,
    flash: ctx.flash
  }
  await ctx.render("scrap_form", data)
}

const tableWaitApprove = async (ctx) => {
  let data = {}
  let user = ctx.session.username
  const listAllFeeder = await feeders.findWaitApprove()
  const name = await users.userFullName(user)
  console.log(listAllFeeder)
  data = {
    user: user,
    name: name,
    listAllFeeder: listAllFeeder
  }
  await ctx.render("approval", data)
}

const addFeeders = async (ctx) => {
  console.log("addFeeders")
  console.log(ctx.request.body)
  const pm_group = assignpmGroup()
  console.log("pmGroup= " + pm_group)
  const user = ctx.session.username
  console.log("User is : " + user)
  const creater = user
  const updater = user
  const {
    feederId,
    mfgToolingId,
    toolingName,
    model,
    brand,
    size,
    location,
    status
  } = ctx.request.body
  try {
    await feeders.addFeeders(
      feederId,
      mfgToolingId,
      toolingName,
      model,
      brand,
      size,
      location,
      status,
      pm_group,
      creater,
      updater
    )
    console.log("Insert new feeder complete")
    ctx.status = 200
    if (ctx.status === 200) {
      ctx.session.flash = {
        success: "add feeder " + feederId + " done"
      }
      await ctx.redirect("/form")
    }
  } catch (err) {
    console.error(err)
    ctx.session.flash = {
      error: "fail to add new feeder => duplicate feeder ID"
    }
    await ctx.redirect("/form")
  }
}

const editFeeders = async (ctx) => {
  console.log("editFeeders")
  const user = ctx.session.username
  const updater = user
  const {
    feederId,
    mfgToolingId,
    toolingName,
    brand,
    model,
    size,
    location
  } = ctx.request.body
  try {
    feeders.updateFeeders(
      feederId,
      mfgToolingId,
      toolingName,
      brand,
      model,
      size,
      location,
      updater
    )
    console.log("Update new data complete")
    ctx.status = 200
    if (ctx.status === 200) {
      ctx.session.flash = {
        success: "edit feeder done"
      }
      await ctx.redirect("/edit_form")
    }
  } catch (err) {
    console.error(err)
    ctx.status = 404
    ctx.session.flash = {
      error: "fail to edit feeder!"
    }
    await ctx.redirect("/edit_form")
  }
}

const scrapFeeders = async (ctx) => {
  console.log("scrapFeeders")
  const user = ctx.session.username
  const updater = user
  const { feederId, desc } = ctx.request.body
  const status = "wait_scrap"
  try {
    feeders.scrapFeeders(feederId, updater, status, desc)
    console.log("Update new data complete")
    ctx.status = 200
    if (ctx.status === 200) {
      await sendEmail.sendRequestMail(feederId, status)
      ctx.session.flash = {
        success: "scrap feeder done"
      }
      await ctx.redirect("/scrap_form")
    }
  } catch (err) {
    console.error(err)
    ctx.status = 404
    ctx.session.flash = {
      error: "fail to scrap feeder!"
    }
    await ctx.redirect("/scrap_form")
  }
}

const approve = async (ctx) => {
  console.log("approve feeder")
  const user = ctx.session.username
  const updater = user
  let status = ""
  const { feederId, reqStatus } = ctx.request.body
  console.log(reqStatus)
  if (reqStatus === "wait_approve") {
    status = "normal"
  } else {
    status = "scrap"
  }
  try {
    await feeders.approve(feederId, updater, status)
    console.log("Update new data complete")
    await sendEmail.sendApproveMail(feederId, status)
    ctx.status = 200
    if (ctx.status === 200) {
      ctx.session.flash = {
        success: "approve feeder done"
      }
      // await ctx.redirect("/scrap_form")
    }
  } catch (err) {
    console.error(err)
    ctx.status = 404
    ctx.body = err
    // await ctx.redirect("/scrap_form")
  }
}

const assignpmGroup = (group) => {
  const d = new Date()
  const currentMonth = d.getMonth() + 1
  if ([1, 2, 3].includes(currentMonth)) {
    return (group = 1)
  } else if ([4, 5, 6].includes(currentMonth)) {
    return (group = 2)
  } else if ([7, 8, 9].includes(currentMonth)) {
    return (group = 3)
  } else {
    return (group = 4)
  }
}

module.exports = {
  getHandler,
  onhandHandler,
  getData,
  findHistory,
  listAllFeederDue,
  findAllFeeder,
  findlastTenRows,
  editHandler,
  scrapHandler,
  addFeeders,
  editFeeders,
  manualPmHandler,
  scrapFeeders,
  updateDataManualPM,
  tableWaitApprove,
  approve
}
