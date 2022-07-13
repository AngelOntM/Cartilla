import { connect } from '../database/database.js'

export const getModxtipus = async (req, res) => {
    try {
        var val = ' WHERE'
        var sql = 'SELECT modxtipu.MXT_NUMCTRL, modxtipu.MXT_ORDEN, modxtipu.MOD_NUMCTRL, modulo.MOD_NOMBRE, modulo.MOD_CLAVE, modxtipu.TIU_NUMCTRL, tipousu.TIU_NOMBRE FROM modxtipu INNER JOIN modulo ON modulo.MOD_NUMCTRL = modxtipu.MOD_NUMCTRL inner join tipousu ON tipousu.TIU_NUMCTRL = modxtipu.TIU_NUMCTRL'
        if (req.body.MXT_ORDEN) {
            sql += val + ' modxtipu.MXT_ORDEN = ' + req.body.MXT_ORDEN
            val = ' AND'
        }
        if (req.body.MOD_NUMCTRL) {
            sql += val + ' modxtipu.MOD_NUMCTRL = ' + req.body.MOD_NUMCTRL
            val = ' AND'
        }
        if (req.body.MOD_NOMBRE) {
            sql += val + ' modulo.MOD_NOMBRE LIKE "%' + req.body.MOD_NOMBRE + '%"'
            val = ' AND'
        }
        if (req.body.MOD_CLAVE) {
            sql += val + ' modulo.MOD_CLAVE LIKE "%' + req.body.MOD_CLAVE + '%"'
            val = ' AND'
        }
        if (req.body.TIU_NUMCTRL) {
            sql += val + ' modxtipu.TIU_NUMCTRL LIKE "%' + req.body.TIU_NUMCTRL + '%"'
            val = ' AND'
        }
        if (req.body.TIU_NOMBRE) {
            sql += val + ' tipousu.TIU_NOMBRE LIKE "%' + req.body.TIU_NOMBRE + '%"'
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

export const getModxtipu = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT modxtipu.MXT_NUMCTRL, modxtipu.MXT_ORDEN, modxtipu.MOD_NUMCTRL, modulo.MOD_NOMBRE, modulo.MOD_CLAVE, modxtipu.TIU_NUMCTRL, tipousu.TIU_NOMBRE FROM modxtipu INNER JOIN modulo ON modulo.MOD_NUMCTRL = modxtipu.MOD_NUMCTRL inner join tipousu ON tipousu.TIU_NUMCTRL = modxtipu.TIU_NUMCTRL WHERE modxtipu.MXT_NUMCTRL = ?', [req.params.id,])
        res.json(rows)
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}

export const countModxtipus = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT COUNT(*) FROM modxtipu')
        res.json(rows[0]['COUNT(*)'])
    } catch (error) {
        res.sendStatus(400)
    }
}

export const createModxtipu = async (req, res) => {
    try {
        const connection = await connect()
        const [orden] = await connection.query('SELECT * FROM modxtipu WHERE MXT_NUMCTRL = ? AND MXT_ORDEN = ?',
            [
                req.body.MEN_NUMCTRL,
                req.body.PXM_ORDEN
            ])
        if (orden[0] != undefined) { return res.sendStatus(400) }
        const [rows] = await connection.query("INSERT INTO modxtipu(MXT_ORDEN, MOD_NUMCTRL, TIU_NUMCTRL) VALUES (?, ?, ?)",
            [
                req.body.MXT_ORDEN,
                req.body.MOD_NUMCTRL,
                req.body.TIU_NUMCTRL
            ])
        res.json({
            id: rows.insertId,
            ...req.body
        })
    } catch (error) {
        res.sendStatus(400)
    }
}

export const deleteModxtipu = async (req, res) => {
    try {
        const connection = await connect()
        const [orden] = await connection.query('SELECT * FROM modxtipu WHERE MXT_NUMCTRL = ?',
            [
                req.params.id
            ])
        await connection.query('DELETE FROM modxtipu WHERE MXT_NUMCTRL = ?',
            [
                req.params.id
            ])
        const [up] = await connection.query('UPDATE modxtipu SET MXT_ORDEN = MXT_ORDEN - 1 WHERE MXT_ORDEN > ? AND MOD_NUMCTRL = ?',
            [
                orden[0].MXT_ORDEN,
                orden[0].MOD_NUMCTRL
            ])
        res.sendStatus(204)
    } catch (error) {
        res.sendStatus(400)
    }
}

export const updateModxtipu = async (req, res) => {
    try {
        const connection = await connect()
        if (req.body.MXT_ORDEN) {
            const [orden] = await connection.query('SELECT * FROM modxtipu WHERE MXT_NUMCTRL = ?', [req.params.id])
            if (orden[0].MXT_ORDEN < req.body.MXT_ORDEN) {
                await connection.query('UPDATE modxtipu SET MXT_ORDEN = MXT_ORDEN - 1 WHERE MOD_NUMCTRL = ? AND MXT_ORDEN > ? AND MXT_ORDEN <= ?',
                    [
                        orden[0].MOD_NUMCTRL,
                        orden[0].MXT_ORDEN,
                        req.body.MXT_ORDEN
                    ])
            }
            else if (orden[0].MXT_ORDEN > req.body.MXT_ORDEN) {
                await connection.query('UPDATE modxtipu SET MXT_ORDEN = MXT_ORDEN + 1 WHERE MOD_NUMCTRL = ? AND MXT_ORDEN < ? AND MXT_ORDEN >= ?',
                    [
                        orden[0].MOD_NUMCTRL,
                        orden[0].MXT_ORDEN,
                        req.body.MXT_ORDEN
                    ])
            }
        }
        const [rows] = await connection.query('UPDATE modxtipu SET ? WHERE MXT_NUMCTRL = ?',
            [
                req.body,
                req.params.id
            ])
        res.json(rows)
    } catch (error) {
        res.sendStatus(400)
    }
}