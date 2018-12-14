const user = {
  user: "nuhundred@gmail.com", //input your email address
  password: "Beegle_001" //input your email password
}

const mailuser = user.user
const password = user.password

const conf = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: mailuser,
    pass: password
  }
}
module.exports = {
  conf,
  user
}
