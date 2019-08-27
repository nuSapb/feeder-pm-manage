const CronJob = require("cron").CronJob
const feeder = require("../../../models/feeders")

/***
 * verifyDueDate Cronjob Runs every 5 minute
 */
const verifyDueDate = new CronJob("0 */5 * * * *", async () => {
  try {
    console.log("pmSchedule.verifyDueDate.start()")
    await feeder.updateDueStatus()
    await feeder.updateOverDueStatus()
    console.log("pmSchedule.verifyDueDate..................DONE")
  } catch (err) {
    console.log(err)
  }
})

module.exports = {
  verifyDueDate
}
