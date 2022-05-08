import { connect } from '../database'

export const getMenus = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT * FROM menu')
        res.json(rows)
    } catch (error) {
        res.sendStatus(400)
    }
}

export const getMenu = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT * FROM menu WHERE MEN_NUMCTRL = ?', [req.params.id,])
        res.json(rows[0])
    } catch (error) {
        res.sendStatus(400)
    }
}

export const countMenus = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT COUNT(*) FROM menu')
        res.json(rows[0]['COUNT(*)'])
    } catch (error) {
        res.sendStatus(400)
    }
}

export const createMenu = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query("INSERT INTO menu(MEN_CLAVE,MEN_NOMBRE) VALUES (?, ?)",
            [
                req.body.MEN_CLAVE,
                req.body.MEN_NOMBRE,
            ])
        res.json({
            id: rows.insertId,
            ...req.body
        })
    } catch (error) {
        res.sendStatus(400)
    }
}

export const deleteMenu = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('DELETE FROM menu WHERE MEN_NUMCTRL = ?',
            [
                req.params.id
            ])
        res.sendStatus(204)
    } catch (error) {
        res.sendStatus(400)
    }
}

export const updateMenu = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('UPDATE menu SET MEN_CLAVE = ?, MEN_NOMBRE = ? WHERE MEN_NUMCTRL = ?',
            [
                req.body.MEN_CLAVE,
                rea.body.MEN_NOMBRE,
                req.params.id
            ])
        res.json(rows)
    } catch (error) {
        res.sendStatus(400)
    }
}