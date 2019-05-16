const pool = require("../db")

const register = async (username, password, fullname) => {
  if (await checkHasEmail(email)) {
  }
}

const saveUser = async (signupData) => {
  const [results] = await pool.query(
    `
			insert into mas_user(
				usr_fullname,usr_username,usr_email,
				usr_password,usr_rol_id_fk,status,
				creator,create_date,
				updater,update_date,
				usr_receive_email,usr_tel
			)
		values (
			?,?,?,
			?,?,'a',
			'SYSTEM ADMIN',now(),
			'SYSTEM ADMIN',now(),
			'y',?
			)`,
    signupData
  )
  console.log(results)
}

const findUserByUsername = async (username) => {
  const [results] = await pool.query(
    `
			select usr_id_pk as id,usr_fullname as fullname,usr_password as password,usr_username as username,
			usr_email as email,usr_tel as phone,date(create_date) as register_date,
			rol_name as role
			from mas_user inner join ref_role on rol_id_pk = usr_rol_id_fk
			where usr_username = ?`,
    username
  )

  console.log(results)
  return results
}

const checkHasUser = async (username) => {
  const [rows] = await pool.query(
    `
	SELECT usr_id_pk, password
	FROM mas_user
	WHERE USR_USERNAME = ?
	`,
    [username]
  )
  return rows
}

const listRole = async () => {
  const [rows] = await pool.query(`
	SELECT rol_id,rol_name
	FROM ref_role`)
  return rows
}

const userRole = async (username) => {
  const [rows] = await pool.query(
    `
	SELECT usr_rol_id_fk
	FROM mas_user
	WHERE USR_USERNAME = ?
	`,
    [username]
  )
  return rows
}

const userFullName = async (username) => {
  const [rows] = await pool.query(
    `
	SELECT usr_fullname as fullname
	FROM mas_user
	WHERE USR_USERNAME = ?
	`,
    [username]
  )
  return rows
}

const userEmailList = async () => {
  const [rows] = await pool.query(
    `
    select usr_email as email
    from mas_user
    where 1
    `
  )
  return rows
}

const adminEmailList = async () => {
  const [rows] = await pool.query(
    `
    select usr_email as email
    from mas_user
    where usr_rol_id_fk = 1
    `
  )
  return rows
}

module.exports = {
  register,
  saveUser,
  findUserByUsername,
  checkHasUser,
  userRole,
  userEmailList,
  adminEmailList,
  userFullName
}
