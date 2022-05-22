import { connect } from '../database'

export const getMenus = async (req, res) => {
    console.log(req)
    console.log(res)
    try {
        var sql = 'SELECT * FROM menu'
        if (req.headers.MEN_NUMCTRL) {
            sql += ' WHERE MEN_NUMCTRL LIKE "%' + req.body.MEN_NUMCTRL + '%"'
        }
        if (req.headers.MEN_CLAVE) {
            sql += ' WHERE MEN_CLAVE LIKE "%' + req.body.MEN_CLAVE + '%"'
        }
        if (req.headers.MEN_NOMBRE) {
            sql += ' WHERE MEN_NOMBRE LIKE "%' + req.body.MEN_NOMBRE + '%"'
        }
        if (req.headers.MEN_DESC) {
            sql += ' WHERE MEN_DESC LIKE "%' + req.body.MEN_DESC + '%"'
        }
        if (req.headers.ORDER) {
            sql += ' ORDER BY ' + req.body.ORDER + ' '
        }
        if (req.headers.BY) {
            sql += req.body.BY
        }
        sql += ' LIMIT ' + req.query.LIMIT1 + ', ' + req.query.LIMIT2
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
        const [rows] = await connection.query("INSERT INTO menu(MEN_CLAVE,MEN_NOMBRE,MEN_DESC) VALUES (?, ?,?)",
            [
                req.body.MEN_CLAVE,
                req.body.MEN_NOMBRE,
                req.body.MEN_DESC
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