import { connect } from '../database'

export const getRazas = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT * FROM raza')
        res.json(rows)
    } catch (error) {
        res.sendStatus(400)
    }
}

export const getRaza = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT * FROM raza WHERE RAZ_NUMCTRL = ?', [req.params.id,])
        res.json(rows[0])
    } catch (error) {
        res.sendStatus(400)
    }
}

export const countRazas = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT COUNT(*) FROM raza')
        res.json(rows[0]['COUNT(*)'])
    } catch (error) {
        res.sendStatus(400)
    }
}

export const createRaza = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query("INSERT INTO vacuna(RAZ_NOMBRE) VALUES (?)",
            [
                req.body.RAZ_NOMBRE,
            ])
        res.json({
            id: rows.insertId,
            ...req.body
        })
    } catch (error) {
        res.sendStatus(400)
    }
}

export const deleteRaza = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('DELETE FROM raza WHERE RAZ_NUMCTRL = ?',
            [
                req.params.id
            ])
        res.sendStatus(204)
    } catch (error) {
        res.sendStatus(400)
    }
}

export const updateRaza = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('UPDATE raza SET RAZ_NOMBRE = ? WHERE RAZ_NUMCTRL = ?',
            [
                req.body.RAZ_NOMBRE,
                req.params.id
            ])
        res.json(rows)
    } catch (error) {
        res.sendStatus(400)
    }
}
