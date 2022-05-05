import { connect } from '../database'

export const getTipos = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM tipo')
    res.json(rows)
}

export const getTipo = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM tipo WHERE TIP_NUMCTRL = ?', [req.params.id,])
    res.json(rows[0])
}

export const countTipos = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT COUNT(*) FROM tipo')
    res.json(rows[0]['COUNT(*)'])
}

export const createTipo = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query("INSERT INTO tipo(TIP_NOMBRE) VALUES (?)",
        [
            req.body.TIP_NOMBRE
        ])
    res.json({
        id: rows.insertId,
        ...req.body
    })
}

export const deleteTipo = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('DELETE FROM tipo WHERE TIP_NUMCTRL = ?',
        [
            req.params.id
        ])
    res.sendStatus(204)
}

export const updateTipo = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('UPDATE tipo SET ? WHERE TIP_NUMCTRL = ?',
        [
            req.body,
            req.params.id
        ])
    res.json(rows)
}