const pool = require('../db')

const findFeeders = async projectId => {
  const [rows] = await pool.query(
    `select feeder_id, mfg_tooling_id, tooling_name, model, feeder_group, location, status
     from feeder_details
	 where 1`
  )

  return rows
}

module.exports = {
  findFeeders
}
