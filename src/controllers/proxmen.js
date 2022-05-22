import { connect } from '../database'

export const getProxmens = async (req, res) => {
    try {
        var sql = 'SELECT proxmen.PXM_NUMCTRL, proxmen.PRG_NUMCTRL, programa.PRG_NOMBRE, proxmen.MEN_NUMCTRL, menu.MEN_NOMBRE, programa.PRG_CLAVE, programa.PRG_DESC FROM proxmen INNER JOIN programa ON programa.PRG_NUMCTRL = proxmen.PRG_NUMCTRL inner join menu ON menu.MEN_NUMCTRL = proxmen.MEN_NUMCTRL'
        if (req.body.MEN_NUMCTRL) {
            sql += ' WHERE proxmen.MEN_NUMCTRL LIKE "%' + req.body.MEN_NUMCTRL + '%"'
        }
        if (req.body.PRG_NOMBRE) {
            sql += ' WHERE programa.PRG_NOMBRE LIKE "%' + req.body.PRG_NOMBRE + '%"'
        }
        if (req.body.PRG_DESC) {
            sql += ' WHERE programa.PRG_DESC LIKE "%' + req.body.PRG_DESC + '%"'
        }
        if (req.body.PRG_CLAVE) {
            sql += ' WHERE programa.PRG_CLAVE LIKE "%' + req.body.PRG_CLAVE + '%"'
        }
        if (req.body.MEN_NOMBRE) {
            sql += ' WHERE menu.MEN_NOMBRE LIKE "%' + req.body.MEN_NOMBRE + '%"'
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
        const [rows] = await connection.query('SELECT proxmen.PXM_NUMCTRL, proxmen.PRG_NUMCTRL, programa.PRG_NOMBRE, proxmen.MEN_NUMCTRL, menu.MEN_NOMBRE FROM proxmen INNER JOIN programa ON programa.PRG_NUMCTRL = proxmen.PRG_NUMCTRL inner join menu ON menu.MEN_NUMCTRL = proxmen.MEN_NUMCTRL WHERE proxmen.MEN_NUMCTRL = ?', [req.params.id,])
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