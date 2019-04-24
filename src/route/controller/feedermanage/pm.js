const pm = require('../../../models/pm')

const postHandler = async ctx => {
    let data = {}

    const { feederId } = ctx.request.body
    status = 'normal'

    try {
        await pm.updatePm(feederId, status )
        console.log("Update PM record complete => feeder id: " + feederId )
        ctx.status = 200
      }
      catch (err) {
        console.error(err)
        ctx.status = 404
      }
  }


  module.exports = {
      postHandler
  }