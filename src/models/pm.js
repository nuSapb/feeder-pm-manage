const pool = require('../db')

const updatePm = async (feederId,status) => {
    let [rows] = await pool.query(
        `update feeder_pm_detail 
         set status=? 
         where feeder_id=? or mfg_tooling_id=?`,[status,feederId,feederId]
    )
  }

  module.exports = {
    updatePm
  }
  