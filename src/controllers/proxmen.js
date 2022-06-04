import { connect } from '../database/database.js'

export const getProxmens = async (req, res) => {
    try {
        var val = ' WHERE'
        var sql = 'SELECT proxmen.PXM_NUMCTRL, proxmen.PRG_NUMCTRL, programa.PRG_NOMBRE, proxmen.MEN_NUMCTRL, menu.MEN_NOMBRE, programa.PRG_CLAVE, programa.PRG_DESC, proxmen.PXM_ORDEN, menu.MEN_ICON, menu.MEN_DESC FROM proxmen INNER JOIN programa ON programa.PRG_NUMCTRL = proxmen.PRG_NUMCTRL inner join menu ON menu.MEN_NUMCTRL = proxmen.MEN_NUMCTRL'
        if (req.body.MEN_NUMCTRL) {
            sql += val + ' proxmen.MEN_NUMCTRL = ' + req.body.MEN_NUMCTRL
            val = ' AND'
        }
        if (req.body.PRG_NOMBRE) {
            sql += val + ' programa.PRG_NOMBRE LIKE "%' + req.body.PRG_NOMBRE + '%"'
            val = ' AND'
        }
        if (req.body.PRG_DESC) {
            sql += val + ' programa.PRG_DESC LIKE "%' + req.body.PRG_DESC + '%"'
            val = ' AND'
        }
        if (req.body.PRG_CLAVE) {
            sql += val + ' programa.PRG_CLAVE LIKE "%' + req.body.PRG_CLAVE + '%"'
            val = ' AND'
        }
        if (req.body.MEN_NOMBRE) {
            sql += val + ' menu.MEN_NOMBRE LIKE "%' + req.body.MEN_NOMBRE + '%"'
            val = ' AND'
        }
        if (req.body.PXM_ORDEN) {
            sql += val + ' proxmen.PXM_ORDEN LIKE "%' + req.body.PXM_ORDEN + '%"'
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

export const getProxmen = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT proxmen.PXM_NUMCTRL, proxmen.PRG_NUMCTRL, programa.PRG_NOMBRE, proxmen.MEN_NUMCTRL, menu.MEN_NOMBRE, proxmen.PXM_ORDEN FROM proxmen INNER JOIN programa ON programa.PRG_NUMCTRL = proxmen.PRG_NUMCTRL inner join menu ON menu.MEN_NUMCTRL = proxmen.MEN_NUMCTRL WHERE proxmen.MEN_NUMCTRL = ?', [req.params.id,])
        res.json(rows)
    } catch (error) {
        console.log(error)
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
        const [orden] = await connection.query('SELECT * FROM proxmen WHERE MEN_NUMCTRL = ? AND PXM_ORDEN = ?',
            [
                req.body.MEN_NUMCTRL,
                req.body.PXM_ORDEN
            ])
        if (orden[0] != undefined) { return res.sendStatus(400) }
        const [rows] = await connection.query("INSERT INTO proxmen(PRG_NUMCTRL, MEN_NUMCTRL, proxmen.PXM_ORDEN) VALUES (?, ?, ?)",
            [
                req.body.PRG_NUMCTRL,
                req.body.MEN_NUMCTRL,
                req.body.PXM_ORDEN
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
        const [orden] = await connection.query('SELECT * FROM proxmen WHERE PXM_NUMCTRL = ?',
            [
                req.params.id
            ])
        await connection.query('DELETE FROM proxmen WHERE PXM_NUMCTRL = ?',
            [
                req.params.id
            ])
        const [up] = await connection.query('UPDATE proxmen SET PXM_ORDEN = PXM_ORDEN - 1 WHERE PXM_ORDEN > ? AND MEN_NUMCTRL = ?',
            [
                orden[0].PXM_ORDEN,
                orden[0].MEN_NUMCTRL
            ])
        res.sendStatus(204)
    } catch (error) {
        res.sendStatus(400)
    }
}

export const updateProxmen = async (req, res) => {
    try {
        const connection = await connect()
        if (req.body.PXM_ORDEN) {
            const [orden] = await connection.query('SELECT * FROM proxmen WHERE PXM_NUMCTRL = ?', [req.params.id])
            if (orden[0].PXM_ORDEN < req.body.PXM_ORDEN) {
                await connection.query('UPDATE proxmen SET PXM_ORDEN = PXM_ORDEN - 1 WHERE MEN_NUMCTRL = ? AND PXM_ORDEN > ? AND PXM_ORDEN <= ?',
                    [
                        orden[0].MEN_NUMCTRL,
                        orden[0].PXM_ORDEN,
                        req.body.PXM_ORDEN
                    ])
            }
            else if (orden[0].PXM_ORDEN > req.body.PXM_ORDEN) {
                await connection.query('UPDATE proxmen SET PXM_ORDEN = PXM_ORDEN + 1 WHERE MEN_NUMCTRL = ? AND PXM_ORDEN < ? AND PXM_ORDEN >= ?',
                    [
                        orden[0].MEN_NUMCTRL,
                        orden[0].PXM_ORDEN,
                        req.body.PXM_ORDEN
                    ])
            }
        }
        const [rows] = await connection.query('UPDATE proxmen SET ? WHERE PXM_NUMCTRL = ?',
            [
                req.body,
                req.params.id
            ])
        res.json(rows)
    } catch (error) {
        res.sendStatus(400)
    }
}