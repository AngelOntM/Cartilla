import { connect } from '../database'

export const getSubmenus = async (req, res) => {
    try {
        var val = ' WHERE'
        var sql = 'SELECT * FROM Submenu'
        if (req.body.MEN_NUMCTRL) {
            sql += val + ' MEN_NUMCTRL LIKE "%' + req.body.MEN_NUMCTRL + '%"'
            val = ' AND'
        }
        if (req.body.SUM_ORDEN) {
            sql += val + ' SUM_ORDEN LIKE "%' + req.body.SUM_ORDEN + '%"'
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

export const getSubmenu = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT * FROM Submenu WHERE SUM_NUMCTRL = ?', [req.params.id,])
        res.json(rows[0])
    } catch (error) {
        res.sendStatus(400)
    }
}

export const countSubmenus = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT COUNT(*) FROM Submenu')
        res.json(rows[0]['COUNT(*)'])
    } catch (error) {
        res.sendStatus(400)
    }
}

export const createSubmenu = async (req, res) => {
    try {
        const connection = await connect()
        const [orden] = await connection.query("SELECT * FROM submenu WHERE MEN_NUMCTRL = ? AND SUM_ORDEN = ?",
            [
                req.body.MEN_NUMCTRL,
                req.body.SUM_ORDEN
            ])
        if (orden[0] != null) { return res.sendStatus(400) }
        const [rows] = await connection.query("INSERT INTO Submenu(MEN_NUMCTRL,SUM_ORDEN) VALUES (?, ?)",
            [
                req.body.MEN_NUMCTRL,
                req.body.SUM_ORDEN
            ])
        res.json({
            id: rows.insertId,
            ...req.body
        })
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}

export const deleteSubmenu = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('DELETE FROM Submenu WHERE SUM_NUMCTRL = ?',
            [
                req.params.id
            ])
        res.sendStatus(204)
    } catch (error) {
        res.sendStatus(400)
    }
}

export const updateSubmenu = async (req, res) => {
    try {
        const connection = await connect()
        if (req.body.SUM_ORDEN) {
            const [orden] = await connection.query('SELECT * FROM Submenu WHERE SUM_NUMCTRL = ?', [req.params.id])
            if (orden[0].SUM_ORDEN < req.body.SUM_ORDEN) {
                await connection.query('UPDATE Submenu SET SUM_ORDEN = SUM_ORDEN - 1 WHERE SUM_ORDEN > ? AND SUM_ORDEN <= ?',
                    [
                        orden[0].SUM_ORDEN,
                        req.body.SUM_ORDEN
                    ])
            }
            else if (orden[0].SUM_ORDEN > req.body.SUM_ORDEN) {
                await connection.query('UPDATE proxmen SET SUM_ORDEN = SUM_ORDEN + 1 WHERE SUM_ORDEN < ? AND SUM_ORDEN >= ?',
                    [
                        orden[0].SUM_ORDEN,
                        req.body.SUM_ORDEN
                    ])
            }
        }
        const [rows] = await connection.query('UPDATE Submenu SET ? WHERE SUM_NUMCTRL = ?',
            [
                req.body,
                req.params.id
            ])
        res.json(rows)
    } catch (error) {
        console.error(error)
        res.sendStatus(400)
    }
}