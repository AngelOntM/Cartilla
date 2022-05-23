import { connect } from '../database'

export const getRazas = async (req, res) => {
    try {
        var val = ' WHERE'
        var sql = 'SELECT * FROM raza'
        if (req.body.RAZ_NOMBRE) {
            sql += val + ' raza.RAZ_NOMBRE LIKE "%' + req.body.RAZ_NOMBRE + '%"'
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

export const getRaza = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT * FROM raza WHERE RAZ_NUMCTRL = ?', [req.params.id,])
        res.json(rows[0])
    } catch (error) {
        res.sendStatus(400)
    }
}

export const countRazas = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT COUNT(*) FROM raza')
        res.json(rows[0]['COUNT(*)'])
    } catch (error) {
        res.sendStatus(400)
    }
}

export const createRaza = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query("INSERT INTO vacuna(RAZ_NOMBRE) VALUES (?)",
            [
                req.body.RAZ_NOMBRE,
            ])
        res.json({
            id: rows.insertId,
            ...req.body
        })
    } catch (error) {
        res.sendStatus(400)
    }
}

export const deleteRaza = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('DELETE FROM raza WHERE RAZ_NUMCTRL = ?',
            [
                req.params.id
            ])
        res.sendStatus(204)
    } catch (error) {
        res.sendStatus(400)
    }
}

export const updateRaza = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('UPDATE raza SET ? WHERE RAZ_NUMCTRL = ?',
            [
                req.body,
                req.params.id
            ])
        res.json(rows)
    } catch (error) {
        res.sendStatus(400)
    }
}
