import { connect } from '../database/database.js'

export const getMenus = async (req, res) => {
    try {
        var val = ' WHERE'
        var sql = 'SELECT * FROM menu'
        if (req.body.MEN_NUMCTRL) {
            sql += val + ' MEN_NUMCTRL LIKE "%' + req.body.MEN_NUMCTRL + '%"'
            val = ' AND'
        }
        if (req.body.MEN_CLAVE) {
            sql += val + ' MEN_CLAVE LIKE "%' + req.body.MEN_CLAVE + '%"'
            val = ' AND'
        }
        if (req.body.MEN_NOMBRE) {
            sql += val + ' MEN_NOMBRE LIKE "%' + req.body.MEN_NOMBRE + '%"'
            val = ' AND'
        }
        if (req.body.MEN_DESC) {
            sql += val + ' MEN_DESC LIKE "%' + req.body.MEN_DESC + '%"'
            val = ' AND'
        }
        if (req.body.MEN_ORDEN) {
            sql += val + ' MEN_ORDEN LIKE "%' + req.body.MEN_ORDEN + '%"'
            val = ' AND'
        }
        if (req.body.SUM_NUMCTRL) {
            sql += val + ' SUM_NUMCTRL LIKE "%' + req.body.SUM_NUMCTRL + '%"'
            val = ' AND'
        }
        if (req.body.ORDER) {
            sql += ' ORDER BY ' + req.body.ORDER + ' '
        }
        if (req.body.BY) {
            sql += req.body.BY
        }
        sql += ' LIMIT ' + req.body.LIMIT1 + ', ' + req.body.LIMIT2
        const connection = await connect()
        const [rows] = await connection.query(sql)
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
        const [orden] = await connection.query('SELECT * FROM menu WHERE MEN_ORDEN = ? AND SUM_NUMCTRL = ?',
            [
                req.body.MEN_ORDEN,
                req.body.SUM_NUMCTRL
            ])
        if (orden[0] != undefined) { return res.sendStatus(400) }
        const [rows] = await connection.query("INSERT INTO menu(MEN_CLAVE,MEN_NOMBRE,MEN_ICON,MEN_DESC,MEN_ORDEN,SUM_NUMCTRL) VALUES (?, ?, ?, ?, ?, ?)",
            [
                req.body.MEN_CLAVE,
                req.body.MEN_NOMBRE,
                req.body.MEN_ICON,
                req.body.MEN_DESC,
                req.body.MEN_ORDEN,
                req.body.SUM_NUMCTRL
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
        const [orden] = await connection.query('SELECT * FROM menu WHERE MEN_NUMCTRL = ?',
            [
                req.params.id
            ])
        await connection.query('DELETE FROM menu WHERE MEN_NUMCTRL = ?',
            [
                req.params.id
            ])
        const [up] = await connection.query('UPDATE menu SET MEN_ORDEN = MEN_ORDEN - 1 WHERE MEN_ORDEN > ? AND SUM_NUMCTRL = ?',
            [
                orden[0].MEN_ORDEN,
                orden[0].SUM_NUMCTRL
            ])
        res.sendStatus(204)
    } catch (error) {
        res.sendStatus(400)
    }
}

export const updateMenu = async (req, res) => {
    try {
        const connection = await connect()
        if (req.body.MEN_ORDEN) {
            const [orden] = await connection.query('SELECT * FROM menu WHERE MEN_NUMCTRL = ?', [req.params.id])
            if (orden[0].MEN_ORDEN < req.body.MEN_ORDEN) {
                await connection.query('UPDATE menu SET MEN_ORDEN = MEN_ORDEN - 1 WHERE SUM_NUMCTRL = ? AND MEN_ORDEN > ? AND MEN_ORDEN <= ?',
                    [
                        orden[0].SUM_NUMCTRL,
                        orden[0].MEN_ORDEN,
                        req.body.MEN_ORDEN
                    ])
            }
            else if (orden[0].MEN_ORDEN > req.body.MEN_ORDEN) {
                await connection.query('UPDATE menu SET MEN_ORDEN = MEN_ORDEN + 1 WHERE SUM_NUMCTRL = ? AND MEN_ORDEN < ? AND MEN_ORDEN >= ?',
                    [
                        orden[0].SUM_NUMCTRL,
                        orden[0].MEN_ORDEN,
                        req.body.MEN_ORDEN
                    ])
            }
        }
        const [rows] = await connection.query('UPDATE menu SET ? WHERE MEN_NUMCTRL = ?',
            [
                req.body,
                req.params.id
            ])
        res.json(rows)
    } catch (error) {
        res.sendStatus(400)
    }
}