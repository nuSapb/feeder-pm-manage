const nodemailer = require("nodemailer")
const mailAuth = require("./config/email-auth")

const conf = mailAuth.conf

const transporter = nodemailer.createTransport(conf)



sendMail = async (subject, sender, reciever, mailContents) => {
  let mailOptions = {
    from: sender, // sender address
    to: reciever, // list of receivers
    subject: subject, // Subject line
    //text: mailContents // plain text body
    html: mailContents
  }
  try {
    const result = await transporter.sendMail(mailOptions)
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx => Message sent: %s", result.messageId)
  } catch (err) {
    console.log("have errer !!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    console.log(err)
  }
}

module.exports = {
  sendMail
}
