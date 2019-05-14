// const sendEmail = require('./email-transfer')
const sendEmail = require("./email-transfer")
const mailSys = require("../../../../src/config/email-auth")
const ejs = require("ejs")
const CronJob = require("cron").CronJob
const fs = require("fs-extra")
const path = require("path")

const feeder = require("../../../models/feeders")

const getDueData = async () => {
  const data = await feeder.countDue()
  console.log("countDue" + ": " + data[0].count)
}

const autoSendMail = new CronJob("0 */60 * * * *", async () => {
  try {
    console.log(">>> Auto send email cronjob start <<<")
    const maillist = [`Anu.Sakpibal@KimballElectronics.com`]
    console.log(mailSys.mailuser + " " + maillist)
    const emailTemplate = path.join(
      process.cwd(),
      "src/views/emails/template.ejs"
    )
    const compiled = ejs.compile(fs.readFileSync(emailTemplate, "utf8"))
    console.log("Before job instantiation")
    const d = await new Date()
    console.log("Every Tenth Sec:", d)
    let html = await compiled({
      title: "Feeder PM Manageement",
      text: "Feeder PM"
    })
    await sendEmail.sendMail(
      "Feeder PM Alert",
      mailSys.mailuser,
      maillist,
      html
    )
  } catch (err) {
    console.log(err)
  }
})

module.exports = {
  autoSendMail,
  getDueData
}
