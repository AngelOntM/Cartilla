import { connect } from '../database'

export const getProxmens = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT programa.PRG_NOMBRE, MEN_NOMBRE FROM proxmen INNER JOIN programa ON programa.PRG_NUMCTRL = proxmen.PRG_NUMCTRL inner join menu ON menu.MEN_NUMCTRL = proxmen.MEN_NUMCTRL')
        res.json(rows)
    } catch (error) {
        res.sendStatus(400)
    }
}

export const getProxmen = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT programa.PRG_NOMBRE, MEN_NOMBRE FROM proxmen INNER JOIN programa ON programa.PRG_NUMCTRL = proxmen.PRG_NUMCTRL inner join menu ON menu.MEN_NUMCTRL = proxmen.MEN_NUMCTRL WHERE PXM_NUMCTRL = ?', [req.params.id,])
        res.json(rows[0])
    } catch (error) {
        res.sendStatus(400)
    }
}

export const countProxmens = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT COUNT(*) FROM proxmen')
        res.json(rows[0]['COUNT(*)'])
    } catch (error) {
        res.sendStatus(400)
    }
}

export const createProxmen = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query("INSERT INTO proxmen(PRG_NUMCTRL, MEN_NUMCTRL) VALUES (?, ?)",
            [
                req.body.PRG_NUMCTRL,
                req.body.MEN_NUMCTRL
            ])
        res.json({
            id: rows.insertId,
            ...req.body
        })
    } catch (error) {
        res.sendStatus(400)
    }
}

export const deleteProxmen = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('DELETE FROM proxmen WHERE PXM_NUMCTRL = ?',
            [
                req.params.id
            ])
        res.sendStatus(204)
    } catch (error) {
        res.sendStatus(400)
    }
}

export const updateProxmen = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('UPDATE proxmen SET PRG_NUMCTRL = ?, MEN_NUMCTRL = ? WHERE PXM_NUMCTRL = ?',
            [
                req.body.PRG_NUMCTRL,
                req.body.MEN_NUMCTRL,
                req.params.id
            ])
        res.json(rows)
    } catch (error) {
        res.sendStatus(400)
    }
}