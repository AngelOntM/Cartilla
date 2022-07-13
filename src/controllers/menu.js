import { connect } from '../database/database.js'

export const getMenus = async (req, res) => {
    try {
        var val = ' WHERE'
        var sql = 'SELECT menu.MEN_NUMCTRL,menu.MEN_CLAVE,menu.MEN_NOMBRE,menu.MEN_ICON,menu.MEN_DESC,menu.MEN_ORDEN,modxtipu.MXT_NUMCTRL FROM menu inner join modxtipu on modxtipu.MXT_NUMCTRL = menu.MXT_NUMCTRL'
        if (req.body.MEN_NUMCTRL) {
            sql += val + ' menu.MEN_NUMCTRL LIKE "%' + req.body.MEN_NUMCTRL + '%"'
            val = ' AND'
        }
        if (req.body.MEN_CLAVE) {
            sql += val + ' menu.MEN_CLAVE LIKE "%' + req.body.MEN_CLAVE + '%"'
            val = ' AND'
        }
        if (req.body.MEN_NOMBRE) {
            sql += val + ' menu.MEN_NOMBRE LIKE "%' + req.body.MEN_NOMBRE + '%"'
            val = ' AND'
        }
        if (req.body.MEN_DESC) {
            sql += val + ' menu.MEN_DESC LIKE "%' + req.body.MEN_DESC + '%"'
            val = ' AND'
        }
        if (req.body.MEN_ORDEN) {
            sql += val + ' menu.MEN_ORDEN LIKE "%' + req.body.MEN_ORDEN + '%"'
            val = ' AND'
        }
        if (req.body.MXT_NUMCTRL) {
            sql += val + ' modxtipu.MXT_NUMCTRL LIKE "%' + req.body.MXT_NUMCTRL + '%"'
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
        console.error(error)
        res.sendStatus(400)
    }
}

export const getMenu = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT menu.MEN_NUMCTRL,menu.MEN_CLAVE,menu.MEN_NOMBRE,menu.MEN_ICON,menu.MEN_DESC,menu.MEN_ORDEN,modxtipu.MXT_NUMCTRL FROM menu inner join modxtipu on modxtipu.MXT_NUMCTRL = menu.MXT_NUMCTRL WHERE MEN_NUMCTRL = ?', [req.params.id,])
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
        const [orden] = await connection.query('SELECT * FROM menu WHERE MEN_ORDEN = ? AND MXT_NUMCTRL = ?',
            [
                req.body.MEN_ORDEN,
                req.body.MXT_NUMCTRL
            ])
        if (orden[0] != undefined) { return res.sendStatus(400) }
        const [rows] = await connection.query("INSERT INTO menu(MEN_CLAVE,MEN_NOMBRE,MEN_ICON,MEN_DESC,MEN_ORDEN,MXT_NUMCTRL) VALUES (?, ?, ?, ?, ?, ?)",
            [
                req.body.MEN_CLAVE,
                req.body.MEN_NOMBRE,
                req.body.MEN_ICON,
                req.body.MEN_DESC,
                req.body.MEN_ORDEN,
                req.body.MXT_NUMCTRL
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
        const [up] = await connection.query('UPDATE menu SET MEN_ORDEN = MEN_ORDEN - 1 WHERE MEN_ORDEN > ? AND MXT_NUMCTRL = ?',
            [
                orden[0].MEN_ORDEN,
                orden[0].MXT_NUMCTRL
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
                await connection.query('UPDATE menu SET MEN_ORDEN = MEN_ORDEN - 1 WHERE MXT_NUMCTRL = ? AND MEN_ORDEN > ? AND MEN_ORDEN <= ?',
                    [
                        orden[0].MXT_NUMCTRL,
                        orden[0].MEN_ORDEN,
                        req.body.MEN_ORDEN
                    ])
            }
            else if (orden[0].MEN_ORDEN > req.body.MEN_ORDEN) {
                await connection.query('UPDATE menu SET MEN_ORDEN = MEN_ORDEN + 1 WHERE MXT_NUMCTRL = ? AND MEN_ORDEN < ? AND MEN_ORDEN >= ?',
                    [
                        orden[0].MXT_NUMCTRL,
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