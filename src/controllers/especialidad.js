import { connect } from '../database/database.js'

export const getEspecialidades = async (req, res) => {
    try {
        var val = ' WHERE'
        var sql = 'SELECT * FROM especialidad'
        if (req.body.ESP_NOMBRE) {
            sql += val + ' especialidad.ESP_NOMBRE LIKE "%' + req.body.ESP_NOMBRE + '%"'
            val = ' AND'
        }
        if (req.body.ESP_DESC) {
            sql += val + ' especialidad.ESP_DESC LIKE "%' + req.body.ESP_DESC + '%"'
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

export const getEspecialidad = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT * FROM especialidad WHERE ESP_NUMCTRL = ?', [req.params.id,])
        res.json(rows[0])
    } catch (error) {
        res.sendStatus(400)
    }
}

export const countEspecialidades = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT COUNT(*) FROM especialidad')
        res.json(rows[0]['COUNT(*)'])
    } catch (error) {
        res.sendStatus(400)
    }
}

export const createEspecialidad = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query("INSERT INTO especialidad(ESP_NOMBRE,ESP_DESC) VALUES (?,?)",
            [
                req.body.ESP_NOMBRE,
                req.body.ESP_DESC
            ])
        res.json({
            id: rows.insertId,
            ...req.body
        })
    } catch (error) {
        res.sendStatus(400)
    }
}

export const deleteEspecialidad = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('DELETE FROM especialidad WHERE ESP_NUMCTRL = ?',
            [
                req.params.id
            ])
        res.sendStatus(204)
    } catch (error) {
        res.sendStatus(400)
    }
}

export const updateEspecialidad = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('UPDATE especialidad SET ? WHERE ESP_NUMCTRL = ?',
            [
                req.body,
                req.params.id
            ])
        res.json(rows)
    } catch (error) {
        res.sendStatus(400)
    }
}
