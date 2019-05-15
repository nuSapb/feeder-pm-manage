const Router = require("koa-router")
const feeders = require("./feeders")
const index2 = require("./index2")
const index3 = require("./index3")
const testapi = require("./testapi")
const pm = require("./pm")

const router = new Router()

const checkAuth = async (ctx, next) => {
  console.log(ctx.session.username)
  if (ctx.session && ctx.session.username) {
    console.log("If checkAuth", ctx.session.username)
    await next()
  } else {
    console.log("Else checkAuth", ctx.username)
    return ctx.redirect("/")
  }
}

const userRole = async (ctx, next) => {
  console.log(ctx.session.role)
  if (ctx.session.role === "admin") {
    console.log("admin", ctx.session.role)
    await next()
  } else {
    console.log("Else checkAuth", ctx.username)
    return ctx.render("page_403")
  }
}

router.get("/index", checkAuth, feeders.getHandler)
router.get("/onhand", checkAuth, feeders.onhandHandler)

router.get("/index2", checkAuth, index2.getHandler)

router.get("/index3", checkAuth, index3.getHandler)

router.get("/feederdata", checkAuth, feeders.getData)

router.get("/chartjs", async (ctx) => {
  await ctx.render("chartjs")
})

router.get("/form", checkAuth, feeders.findlastTenRows)
router.get("/edit_form", checkAuth, feeders.editHandler)
router.get("/manual_pm_form", checkAuth, feeders.manualPmHandler)
router.get("/scrap_form", checkAuth, feeders.scrapHandler)
router.post("/insert_feeders", checkAuth, feeders.addFeeders)
router.post("/edit_feeders", checkAuth, feeders.editFeeders)
router.get("/history/:feederId", checkAuth, feeders.findHistory)
router.post("/scrap_feeders", checkAuth, feeders.scrapFeeders)
router.post("/manual_pm_feeders", checkAuth, feeders.updateDataManualPM)
router.get("/tables", feeders.findAllFeeder)
router.get("/tables_dynamic", checkAuth, feeders.listAllFeederDue)
router.post("/testapi", testapi.log)
router.post("/update_pm", checkAuth, pm.postHandler)
router.get("/approval", checkAuth, userRole, feeders.tableWaitApprove)
router.post("/feeders/approve", feeders.approve)

/**
 * the last route get * and render 404error pasge
 */
// router.get('*', async (ctx) => {
//     ctx.status = 400
//     await ctx.render("404error")
// })

module.exports = router.routes()
