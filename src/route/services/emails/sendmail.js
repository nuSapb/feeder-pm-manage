const nodemailer = require('nodemailer')
const mailAuth = require('../../../config/mailAuth')

const conf = mailAuth.conf
/**
 * transporter
 * require email user and password in /config/mailAuth.js
 */
const transporter = nodemailer.createTransport(conf)

/**
 * sendMail
 * @param {*} subject
 * @param {*} sender
 * @param {*} reciever
 * @param {*} htmlContent
 */
async function sendMail(subject, sender, reciever, htmlContent) {
  // setup email data
  let mailOptions = {
    from: sender, // sender address
    to: reciever, // list of receivers
    subject: subject, // Subject line
    // text: mailContent, // plain text body
    html: htmlContent
    // html: '<b>Hello world</b>' // html body
  }
  try {
    const result = await transporter.sendMail(mailOptions)
    console.log('Message sent: %s', result.messageId)
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  sendMail
}
