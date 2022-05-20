import { connect } from '../database'

export const getProgramas = async (req, res) => {
    try {
        var sql = 'SELECT * FROM programa'
        if (req.body.PRG_CLAVE) {
            sql += ' WHERE PRG_CLAVE LIKE "%' + req.body.PRG_CLAVE + '%"'
        }
        if (req.body.PRG_NOMBRE) {
            sql += ' WHERE PRG_NOMBRE LIKE "%' + req.body.PRG_NOMBRE + '%"'
        }
        if (req.body.PRG_RUTA) {
            sql += ' WHERE PRG_RUTA LIKE "%' + req.body.PRG_RUTA + '%"'
        }
        if (req.body.PRG_DESC) {
            sql += ' WHERE PRG_DESC LIKE "%' + req.body.PRG_DESC + '%"'
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

export const getPrograma = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT * FROM programa WHERE PRG_NUMCTRL = ?', [req.params.id,])
        res.json(rows[0])
    } catch (error) {
        res.sendStatus(400)
    }
}

export const countProgramas = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT COUNT(*) FROM programa')
        res.json(rows[0]['COUNT(*)'])
    } catch (error) {
        res.sendStatus(400)
    }
}

export const createPrograma = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query("INSERT INTO programa(PRG_CLAVE, PRG_NOMBRE, PRG_RUTA, PRG_DESC) VALUES (?, ?, ?, ?)",
            [
                req.body.PRG_CLAVE,
                req.body.PRG_NOMBRE,
                req.body.PRG_RUTA,
                req.body.PRG_DESC
            ])
        res.json({
            id: rows.insertId,
            ...req.body
        })
    } catch (error) {
        res.sendStatus(400)
    }
}

export const deletePrograma = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('DELETE FROM programa WHERE PRG_NUMCTRL = ?',
            [
                req.params.id
            ])
        res.sendStatus(204)
    } catch (error) {
        res.sendStatus(400)
    }
}

export const updatePrograma = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('UPDATE programa SET ? WHERE PRG_NUMCTRL = ?',
            [
                req.body,
                req.params.id
            ])
        res.json(rows)
    } catch (error) {
        res.sendStatus(400)
    }
}