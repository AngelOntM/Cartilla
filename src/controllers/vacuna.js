import { connect } from '../database'

export const getVacunas = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM vacuna')
    res.json(rows)
}

export const getVacuna = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM vacuna WHERE VAC_NUMCTRL = ?', [req.params.id,])
    res.json(rows[0])
}

export const countVacunas = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT COUNT(*) FROM vacuna')
    res.json(rows[0]['COUNT(*)'])
}

export const createVacuna = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query("INSERT INTO vacuna(VAC_NOMBRE, VAC_DESC) VALUES (?, ?)",
        [
            req.body.VAC_NOMBRE,
            req.body.VAC_DESC
        ])
    res.json({
        id: rows.insertId,
        ...req.body
    })
}

export const deleteVacuna = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('DELETE FROM vacuna WHERE VAC_NUMCTRL = ?',
        [
            req.params.id
        ])
    res.sendStatus(204)
}

export const updateVacuna = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('UPDATE vacuna SET ? WHERE VAC_NUMCTRL = ?',
        [
            req.body,
            req.params.id
        ])
    res.json(rows)
}