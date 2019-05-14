const pool = require("../db")

const findFeeders = async () => {
  const [rows] = await pool.query(
    `select feeder_id, mfg_tooling_id, tooling_name, model, pm_group, location, status
     from feeder_pm_detail
       where brand = 'ASM'
       `
  )

  return rows
}

const countASM = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where brand = 'ASM' 
    `
  )
  return rows
}

const countNXT = async () => {
  const [rows] = await pool.query(
    `
      select count(feeder_id) as count
      from feeder_pm_detail
      where brand = 'NXT' 
      `
  )
  return rows
}

const countDue = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where brand = 'ASM' and status = 'Due'
    `
  )
  return rows
}

const countOverDue = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where brand = 'ASM' and status = 'Over'
    `
  )
  return rows
}

const countOngoing = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where brand = 'ASM' and status = 'Ongoing'
    `
  )
  return rows
}

const countScrap = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where brand = 'ASM' and status = 'Scrap'
    `
  )
  return rows
}

const countRepair = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where brand = 'ASM' and status = 'repair'
    `
  )
  return rows
}

const count8Due = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where brand = 'ASM' and status = 'Due' and size = 8 
    `
  )
  return rows
}

const count12Due = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where brand = 'ASM' and status = 'Due' and size = 12
    `
  )
  return rows
}

const count16Due = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where brand = 'ASM' and status = 'Due' and size = 16
    `
  )
  return rows
}

const count24Due = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where brand = 'ASM' and status = 'Due' and size = 24
    `
  )
  return rows
}

const count32Due = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where brand = 'ASM' and status = 'Due' and size = 32
    `
  )
  return rows
}

const countOtherDue = async () => {
  const [rows] = await pool.query(
    `
    select count(feeder_id) as count
    from feeder_pm_detail
    where brand = 'ASM' and status = 'Due' and size > 32 
    `
  )
  return rows
}

const findAllDue = async () => {
  const [rows] = await pool.query(
    `
      select feeder_id,mfg_tooling_id,tooling_name,model,brand,size,location,status
      from feeder_pm_detail
      where brand = 'ASM' and status ='Due'
      `
  )
  return rows
}

const findAll = async () => {
  const [rows] = await pool.query(
    `
    select feeder_id,mfg_tooling_id,tooling_name,model,brand,size,location,status
    from feeder_pm_detail
    where brand = 'ASM' and
    `
  )
  return rows
}

const findOverDue = async () => {
  const [rows] = await pool.query(
    `
    select feeder_id,mfg_tooling_id,tooling_name,model,brand,size,location,status
    from feeder_pm_detail
    where brand = 'ASM' and status = 'overdue'
    `
  )
  return rows
}

const findRepair = async () => {
  const [rows] = await pool.query(
    `
    select feeder_id,mfg_tooling_id,tooling_name,model,brand,size,location,status
    from feeder_pm_detail
    where brand = 'ASM' and status = 'repair'
    `
  )
  return rows
}

const findScrap = async () => {
  const [rows] = await pool.query(
    `
    select feeder_id,mfg_tooling_id,tooling_name,model,brand,size,location,status
    from feeder_pm_detail
    where brand = 'ASM' and status = 'Scrap'
    `
  )
  return rows
}

module.exports = {
  findFeeders,
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
  countOtherDue,
  findAll,
  findAllDue,
  findOverDue,
  findRepair,
  findScrap
}
