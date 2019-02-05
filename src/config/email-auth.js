const user = {
  user: "feeder_pm_management@kimballelectronics.com",
  password: ""
}

const mailuser = user.user

const conf = {
  host: "smtpa.ketl.keint.com",
  port: 25, // port for secure SMTP
  secure: false, // secure:true for port 465, secure:false for port 587
  tls: {
    rejectUnauthorized: false
  }
  
}

module.exports = {
  conf,
  user,
  mailuser
}
