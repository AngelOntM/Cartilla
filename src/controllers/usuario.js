import { connect } from '../database'

export const getUsuarios = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM usuario')
    res.json(rows)
}

export const getUsuario = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM usuario WHERE USU_NUMCTRL = ?', [req.params.id,])
    res.json(rows[0])
}

export const countUsuarios = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT COUNT(*) FROM usuario')
    res.json(rows[0]['COUNT(*)'])
}

export const createUsuario = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query("INSERT INTO usuario(USU_CORREO, USU_CLAVE) VALUES (?, ?)",
        [
            req.body.USU_CORREO,
            req.body.USU_CLAVE
        ])
    res.json({
        id: rows.insertId,
        ...req.body
    })
}

export const deleteUsuario = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('DELETE FROM usuario WHERE USU_NUMCTRL = ?',
        [
            req.params.id
        ])
    res.sendStatus(204)
}

export const updateUsuario = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('UPDATE usuario SET ? WHERE USU_NUMCTRL = ?',
        [
            req.body,
            req.params.id
        ])
    res.json(rows)
}