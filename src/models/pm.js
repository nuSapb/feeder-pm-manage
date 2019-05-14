const pool = require("../db")

const updatePm = async (feederId, status) => {
  let [rows] = await pool.query(
    `update feeder_pm_detail 
         set status=? 
         where feeder_id=? or mfg_tooling_id=?`,
    [status, feederId, feederId]
  )
}

const insertHistory = async (feederId, pmType, user) => {
  let [rows] = await pool.query(
    `
    INSERT INTO feeder_pm_history (feeder_id, pm_type, pm_by,
                                pm_date)
    VALUE (?, ?, ?,
      now() )`,
    [feederId, pmType, user]
  )
}

module.exports = {
  updatePm,
  insertHistory
}
