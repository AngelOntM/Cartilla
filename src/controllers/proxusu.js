import { connect } from '../database/database.js'

export const getProxusus = async (req, res) => {
    try {
        var val = ' WHERE'
        var sql = 'SELECT proxusu.PXU_NUMCTRL, proxusu.TIU_NUMCTRL, tipousu.TIU_NOMBRE, proxusu.PRG_NUMCTRL, programa.PRG_CLAVE, programa.PRG_NOMBRE, programa.PRG_RUTA, programa.PRG_DESC FROM proxusu INNER JOIN programa ON programa.PRG_NUMCTRL = proxusu.PRG_NUMCTRL inner join tipousu ON tipousu.TIU_NUMCTRL = proxusu.TIU_NUMCTRL'
        if (req.body.TIU_NOMBRE) {
            sql += val + ' tipousu.TIU_NOMBRE LIKE "%' + req.body.TIU_NOMBRE + '%"'
            val = ' AND'
        }
        if (req.body.PRG_CLAVE) {
            sql += val + ' programa.PRG_CLAVE LIKE "%' + req.body.PRG_CLAVE + '%"'
            val = ' AND'
        }
        if (req.body.PRG_NOMBRE) {
            sql += val + ' programa.PRG_NOMBRE LIKE "%' + req.body.PRG_NOMBRE + '%"'
            val = ' AND'
        }
        if (req.body.PRG_RUTA) {
            sql += val + ' programa.PRG_RUTA LIKE "%' + req.body.PRG_RUTA + '%"'
            val = ' AND'
        }
        if (req.body.PRG_DESC) {
            sql += val + ' programa.PRG_DESC LIKE "%' + req.body.PRG_DESC + '%"'
            val = ' AND'
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

export const getProxusu = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT proxusu.PXU_NUMCTRL, proxusu.TIU_NUMCTRL, tipousu.TIU_NOMBRE, proxusu.PRG_NUMCTRL, programa.PRG_CLAVE, programa.PRG_NOMBRE, programa.PRG_RUTA, programa.PRG_DESC FROM proxusu INNER JOIN programa ON programa.PRG_NUMCTRL = proxusu.PRG_NUMCTRL inner join tipousu ON tipousu.TIU_NUMCTRL = proxusu.TIU_NUMCTRL WHERE PXU_NUMCTRL = ?', [req.params.id,])
        res.json(rows[0])
    } catch (error) {
        res.sendStatus(400)
    }
}

export const countProxusus = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT COUNT(*) FROM proxusu')
        res.json(rows[0]['COUNT(*)'])
    } catch (error) {
        res.sendStatus(400)
    }
}

export const createProxusu = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query("INSERT INTO proxusu(TIU_NUMCTRL, PRG_NUMCTRL) VALUES (?, ?)",
            [
                req.body.TIU_NUMCTRL,
                req.body.PRG_NUMCTRL
            ])
        res.json({
            id: rows.insertId,
            ...req.body
        })
    } catch (error) {
        res.sendStatus(400)
    }
}

export const deleteProxusu = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('DELETE FROM proxusu WHERE PXU_NUMCTRL = ?',
            [
                req.params.id
            ])
        res.sendStatus(204)
    } catch (error) {
        res.sendStatus(400)
    }
}

export const updateProxusu = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('UPDATE proxusu SET ? WHERE PXU_NUMCTRL = ?',
            [
                req.body,
                req.params.id
            ])
        res.json(rows)
    } catch (error) {
        res.sendStatus(400)
    }
}