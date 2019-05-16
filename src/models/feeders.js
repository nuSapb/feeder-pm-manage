const pool = require("../db")

const findFeeders = async () => {
  const [rows] = await pool.query(
    `select feeder_id, mfg_tooling_id, tooling_name, model, pm_group, location, status
     from feeder_pm_detail
	   where 1`
  )

  return rows
}

const countFeeder = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where status <> 'scrap'
    `
  )
  return rows
}

const countASM = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where brand = 'ASM' and status <> 'scrap'
    `
  )
  return rows
}

const countNXT = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where brand = 'NXT' and status <> 'scrap'
    `
  )
  return rows
}

const countDue = async () => {
  const [rows] = await pool.query(
    `
    select count(status) as count
    from feeder_pm_detail
    where status like 'due'
    `
  )
  return rows
}

const countOverDue = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where status = 'overdue'
    `
  )
  return rows
}

const countOngoing = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where status = 'wait_approve' or status = 'wait_scrap'
    `
  )
  return rows
}

const countScrap = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where status = 'scrap'
    `
  )
  return rows
}

const countRepair = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where status = 'repair'
    `
  )
  return rows
}

const count8Due = async () => {
  const [rows] = await pool.query(
    `
    select count(status) as count
    from feeder_pm_detail
    where status = 'due' and size = 8 
    `
  )
  return rows
}

const count12Due = async () => {
  const [rows] = await pool.query(
    `
    select count(status) as count
    from feeder_pm_detail
    where status = 'due' and size = 12
    `
  )
  return rows
}

const count16Due = async () => {
  const [rows] = await pool.query(
    `
    select count(status) as count
    from feeder_pm_detail
    where status = 'due' and size = 16
    `
  )
  return rows
}

const count24Due = async () => {
  const [rows] = await pool.query(
    `
    select count(status) as count
    from feeder_pm_detail
    where status = 'due' and size = 24
    `
  )
  return rows
}

const count32Due = async () => {
  const [rows] = await pool.query(
    `
    select count(status) as count
    from feeder_pm_detail
    where status = 'due' and size = 32
    `
  )
  return rows
}

const count44Due = async () => {
  const [rows] = await pool.query(
    `
    select count(status) as count
    from feeder_pm_detail
    where status = 'due' and size = 44
    `
  )
  return rows
}

const count56Due = async () => {
  const [rows] = await pool.query(
    `
    select count(status) as count
    from feeder_pm_detail
    where status = 'due' and size = 56
    `
  )
  return rows
}

const count68Due = async () => {
  const [rows] = await pool.query(
    `
    select count(status) as count
    from feeder_pm_detail
    where status = 'due' and size = 68
    `
  )
  return rows
}

const countOtherDue = async () => {
  const [rows] = await pool.query(
    `
    select count(status) as count
    from feeder_pm_detail
    where status = 'due' and size > 32 
    `
  )
  return rows
}

const count8NXT = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where brand = 'NXT' and status <> 'scrap' and size = 8
    `
  )
  return rows
}

const count12NXT = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where brand = 'NXT' and status <> 'scrap' and size = 12
    `
  )
  return rows
}

const count16NXT = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where brand = 'NXT' and status <> 'scrap' and size = 16
    `
  )
  return rows
}

const count18NXT = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where brand = 'NXT' and status <> 'scrap' and size = 18
    `
  )
  return rows
}

const count24NXT = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where brand = 'NXT' and status <> 'scrap' and size = 24
    `
  )
  return rows
}

const count32NXT = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where brand = 'NXT' and status <> 'scrap' and size = 32
    `
  )
  return rows
}

const count44NXT = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where brand = 'NXT' and status <> 'scrap' and size = 44
    `
  )
  return rows
}

const count56NXT = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where brand = 'NXT' and status <> 'scrap' and size = 56
    `
  )
  return rows
}

const count68NXT = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where brand = 'NXT' and status <> 'scrap' and size = 68
    `
  )
  return rows
}

const count8ASM = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where brand = 'ASM' and status <> 'scrap' and size = 8
    `
  )
  return rows
}

const count12ASM = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where brand = 'ASM' and status <> 'scrap' and size = 12
    `
  )
  return rows
}

const count16ASM = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where brand = 'ASM' and status <> 'scrap' and size = 16
    `
  )
  return rows
}

const count18ASM = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where brand = 'ASM' and status <> 'scrap' and size = 18
    `
  )
  return rows
}

const count24ASM = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where brand = 'ASM' and status <> 'scrap' and size = 24
    `
  )
  return rows
}

const count32ASM = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where brand = 'ASM' and status <> 'scrap' and size = 32
    `
  )
  return rows
}

const count44ASM = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where brand = 'ASM' and status <> 'scrap' and size = 44
    `
  )
  return rows
}

const count56ASM = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where brand = 'ASM' and status <> 'scrap' and size = 56
    `
  )
  return rows
}

const count68ASM = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where brand = 'ASM' and status <> 'scrap' and size = 68
    `
  )
  return rows
}

const findAllDue = async () => {
  const [rows] = await pool.query(
    `
      select feeder_id,mfg_tooling_id,tooling_name,model,size,location,status
      from feeder_pm_detail
      where status ='due'
      `
  )
  return rows
}

const findAll = async () => {
  const [rows] = await pool.query(
    `
    select feeder_id, mfg_tooling_id, tooling_name, brand, model, size, location, status, update_date
    from feeder_pm_detail
    where 1 and status <> 'scrap'
    ORDER BY create_date DESC
    `
  )
  return rows
}

const findWaitApprove = async () => {
  const [rows] = await pool.query(
    `
    select feeder_id, status, updater, update_date, detail
    from feeder_pm_detail 
    where status = 'wait_approve' or status = 'wait_scrap'
    `
  )
  return rows
}

const findLast30Rows = async () => {
  const [rows] = await pool.query(
    `
    SELECT feeder_id,mfg_tooling_id,tooling_name, brand, model,location,create_date,status
    FROM (SELECT feeder_id,mfg_tooling_id,tooling_name, brand, model,location,create_date,status
          FROM feeder_pm_detail ORDER BY create_date DESC LIMIT 30) sub
    ORDER BY create_date DESC
    `
  )
  return rows
}

const findOverDue = async () => {
  const [rows] = await pool.query(
    `
    select feeder_id,mfg_tooling_id,tooling_name,model,brand,size,location,status
    from feeder_pm_detail
    where status = 'overdue'
    `
  )
  return rows
}

const tableManualPM = async () => {
  const [rows] = await pool.query(
    `
    select feeder_id,mfg_tooling_id,tooling_name,model,brand,size,location,status
    from feeder_pm_detail
    where status = 'overdue' or status = 'due'
    `
  )
  return rows
}

const findRepair = async () => {
  const [rows] = await pool.query(
    `
    select feeder_id,mfg_tooling_id,tooling_name,model,brand,size,location,status
    from feeder_pm_detail
    where status = 'repair'
    `
  )
  return rows
}

const findOngoing = async () => {
  const [rows] = await pool.query(
    `
    select feeder_id,mfg_tooling_id,tooling_name,model,brand,size,location,status
    from feeder_pm_detail
    where status = 'wait_approve' or status = 'wait_scrap'
    `
  )
  return rows
}

const findScrap = async () => {
  const [rows] = await pool.query(
    `
    select feeder_id,mfg_tooling_id,tooling_name,model,brand,size,location,status, detail
    from feeder_pm_detail
    where status = 'scrap'
    `
  )
  return rows
}

const findHistory = async (feederId) => {
  let [rows] = await pool.query(
    `
    select feeder_id,pm_type,pm_by,pm_date
    from feeder_pm_history
    where feeder_id = ?`,
    [feederId]
  )
  return rows
}

const addFeeders = async (
  feederId,
  mfgToolingId,
  toolingName,
  model,
  brand,
  size,
  location,
  status,
  pm_group,
  creater,
  updater
) => {
  let [rows] = await pool.query(
    `
    INSERT INTO feeder_pm_detail (feeder_id, mfg_tooling_id, tooling_name,
                                model, brand, size, location, 
                                status, pm_group, creater, create_date, 
                                updater, update_date)
    VALUE (?, ?, ?,
           ?, ?, ?, ?,
           ?, ?, ?, now(), 
           ?, now())`,
    [
      feederId,
      mfgToolingId,
      toolingName,
      model,
      brand,
      size,
      location,
      status,
      pm_group,
      creater,
      updater
    ]
  )
}

const updateFeeders = async (
  feederId,
  mfgToolingId,
  toolingName,
  brand,
  model,
  size,
  location,
  updater
) => {
  let [rows] = await pool.query(
    `
    UPDATE feeder_pm_detail
    SET feeder_id = ?, mfg_tooling_id = ?, tooling_name = ?,
         model = ?,brand = ?, size = ?, location = ?, 
         updater = ?, update_date = now()
    WHERE feeder_id = ?`,
    [
      feederId,
      mfgToolingId,
      toolingName,
      brand,
      model,
      size,
      location,
      updater,
      feederId
    ]
  )
}

const updateManualPMFeeder = async (feederId, updater, desc) => {
  let [rows] = await pool.query(
    `
    UPDATE feeder_pm_detail
    SET status = "wait_approve", updater = ?, 
    update_date = now(), detail = ?
    WHERE feeder_id = ?`,
    [updater, desc, feederId]
  )
}

const approve = async (feederId, updater, status) => {
  let [rows] = await pool.query(
    `
    UPDATE feeder_pm_detail
    SET status = ?, updater = ?, 
    update_date = now()
    WHERE feeder_id = ?`,
    [status, updater, feederId]
  )
}

const scrapFeeders = async (feederId, updater, status, desc) => {
  let [rows] = await pool.query(
    `
    UPDATE feeder_pm_detail
    SET status = ?, updater = ?, update_date = now(), detail = ?
    WHERE feeder_id = ?`,
    [status, updater, desc, feederId]
  )
}

module.exports = {
  findFeeders,
  countFeeder,
  countASM,
  countNXT,
  countDue,
  countOverDue,
  countOngoing,
  countScrap,
  countRepair,
  count8Due,
  count12Due,
  count16Due,
  count24Due,
  count32Due,
  count44Due,
  count56Due,
  count68Due,
  countOtherDue,
  findAll,
  findHistory,
  findAllDue,
  findOverDue,
  findRepair,
  findOngoing,
  findScrap,
  findLast30Rows,
  addFeeders,
  updateFeeders,
  scrapFeeders,
  tableManualPM,
  updateManualPMFeeder,
  findWaitApprove,
  approve,
  count8NXT,
  count12NXT,
  count16NXT,
  count18NXT,
  count24NXT,
  count32NXT,
  count44NXT,
  count56NXT,
  count68NXT,
  count8ASM,
  count12ASM,
  count16ASM,
  count18ASM,
  count24ASM,
  count32ASM,
  count44ASM,
  count56ASM,
  count68ASM
}
