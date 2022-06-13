import { connect } from '../database/database.js'

export const getTipousus = async (req, res) => {
    try {
        var val = ' WHERE'
        var sql = 'SELECT * FROM tipousu'
        if (req.body.TIU_NOMBRE) {
            sql += val + ' tipousu.TIU_NOMBRE LIKE "%' + req.body.TIU_NOMBRE + '%"'
        }
        if (req.body.ORDER) {
            sql += ' ORDER BY ' + req.body.ORDER + ' '
        }
        if (req.body.BY) {
            sql += req.body.BY
        }
        const connection = await connect()
        const [rows] = await connection.query(sql)
        res.json(rows)
    } catch (error) {
        res.sendStatus(400)
    }
}

export const getTipousu = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT * FROM Tipousu WHERE TIU_NUMCTRL = ?', [req.params.id,])
        res.json(rows[0])
    } catch (error) {
        res.sendStatus(400)
    }
}

export const countTipousus = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT COUNT(*) FROM Tipousu')
        res.json(rows[0]['COUNT(*)'])
    } catch (error) {
        res.sendStatus(400)
    }
}

export const createTipousu = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query("INSERT INTO Tipousu(TIU_NOMBRE) VALUES (?)",
            [
                req.body.TIU_NOMBRE
            ])
        res.json({
            id: rows.insertId,
            ...req.body
        })
    } catch (error) {
        res.sendStatus(400)
    }
}

export const deleteTipousu = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('DELETE FROM Tipousu WHERE TIU_NUMCTRL = ?',
            [
                req.params.id
            ])
        res.sendStatus(204)
    } catch (error) {
        res.sendStatus(400)
    }
}

export const updateTipousu = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('UPDATE Tipousu SET ? WHERE TIU_NUMCTRL = ?',
            [
                req.body,
                req.params.id
            ])
        res.json(rows)
    } catch (error) {
        res.sendStatus(400)
    }
}