// const sendEmail = require('./email-transfer')
const sendEmail = require("./email-transfer")
const mailSys = require("../../../../src/config/email-auth")
const ejs = require("ejs")
const CronJob = require("cron").CronJob
const fs = require("fs-extra")
const path = require("path")
const user = require("../../../models/user")

const feeder = require("../../../models/feeders")

const getDueData = async () => {
  const data = await feeder.countDue()
  console.log("countDue" + ": " + data[0].count)
  const objMail = await user.userEmailList()

  let emailList = []
  for (let key in objMail) {
    let obj = objMail[key]
    for (let i in obj) {
      let j = obj[i]
      emailList.push(j)
    }
  }
  console.log(emailList)
}

/***
 * autoSendMail Cronjob Runs every day
 * at 08:00:00
 */
const autoSendMail = new CronJob("0 8 * * *", async () => {
  try {
    const data = await feeder.countDue()
    const objMail = await user.userEmailList()
    let emailList = []
    for (let key in objMail) {
      let obj = objMail[key]
      for (let i in obj) {
        let j = obj[i]
        emailList.push(j)
      }
    }
    console.log(emailList)
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
      text: "Feeder PM",
      data: data[0].count
    })

    let totalFeeder = data[0].count
    if (totalFeeder >= 1) {
      await sendEmail.sendMail(
        "Feeder PM Alert",
        mailSys.mailuser,
        emailList,
        html
      )
    }
  } catch (err) {
    console.log(err)
  }
})

const sendApproveMail = async (feederId, status) => {
  try {
    let data = {}
    data = {
      feederId: feederId,
      status: status
    }
    const adminMail = await user.adminEmailList()
    console.log(adminMail)
    const objMail = await user.userEmailList()
    let emailList = []
    for (let key in objMail) {
      let obj = objMail[key]
      for (let i in obj) {
        let j = obj[i]
        emailList.push(j)
      }
    }
    console.log(emailList)

    mailList = adminMail[1].email
    console.log(">>> send email from approval start <<<")
    console.log(mailSys.mailuser + " " + mailList)
    const emailTemplate = path.join(
      process.cwd(),
      "src/views/emails/mailApprove.ejs"
    )
    const compiled = ejs.compile(fs.readFileSync(emailTemplate, "utf8"))
    console.log("Before job instantiation")
    const d = await new Date()
    console.log("Every Tenth Sec:", d)
    let html = await compiled({
      title: "Feeder PM Manageement",
      text: "Feeder PM",
      data: data
    })
    await sendEmail.sendMail(
      "Feeder PM Alert",
      mailSys.mailuser,
      emailList,
      html
    )
  } catch (err) {
    console.log(err)
  }
}

const sendRequestMail = async (feederId, status) => {
  try {
    let data = {}
    data = {
      feederId: feederId,
      status: status
    }
    const adminMail = await user.adminEmailList()
    const objMail = await user.userEmailList()
    let emailList = []
    for (let key in objMail) {
      let obj = objMail[key]
      for (let i in obj) {
        let j = obj[i]
        emailList.push(j)
      }
    }
    console.log(emailList)

    console.log(">>> send email from approval start <<<")
    const emailTemplate = path.join(
      process.cwd(),
      "src/views/emails/mailRequest.ejs"
    )
    const compiled = ejs.compile(fs.readFileSync(emailTemplate, "utf8"))
    console.log("Before job instantiation")
    const d = await new Date()
    console.log("Every Tenth Sec:", d)
    let html = await compiled({
      title: "Feeder PM Manageement",
      text: "Feeder PM",
      data: data
    })
    await sendEmail.sendMail(
      "Feeder PM Alert",
      mailSys.mailuser,
      emailList,
      html
    )
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  autoSendMail,
  getDueData,
  sendApproveMail,
  sendRequestMail
}
