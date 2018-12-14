const pool = require('../db')

const findAll = async () => {
  const [rows] = await pool.query(`
	SELECT ROL_ID_PK, ROL_NAME
	FROM ref_role
	`)
  return rows
}

const findRoleByUser = async username => {
  const [rows] = await pool.query(
    `
	SELECT r.ROL_NAME
	FROM mas_user u join ref_role r on u.usr_rol_id_fk = r.ROL_ID_PK
	WHERE usr_username = ?
	`,
    [username]
  )
  return rows
}

module.exports = {
  findAll,
  findRoleByUser
}
