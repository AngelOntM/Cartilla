import { connect } from '../database/database.js'

export const getMasfotos = async (req, res) => {
    try {
        var val = ' WHERE'
        var sql = 'SELECT masfoto.MAF_NUMCTRL, masfoto.MAS_NUMCTRL, mascota.MAS_NOMBRE, masfoto.MAF_FOTO from masfoto inner join mascota on masfoto.MAS_NUMCTRL = mascota.MAS_NUMCTRL'
        if (req.body.MAS_NUMCTRL) {
            sql += val + ' masfoto.MAS_NUMCTRL LIKE "%' + req.body.MAS_NUMCTRL + '%"'
            val = ' AND'
        }
        if (req.body.MAS_NOMBRE) {
            sql += val + ' propietario.MAS_NOMBRE LIKE "%' + req.body.MAS_NOMBRE + '%"'
            val = ' AND'
        }
        if (req.body.MAF_FOTO) {
            sql += val + ' masfoto.MAF_FOTO LIKE "%' + req.body.MAF_FOTO + '%"'
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

export const getMasfoto = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT masfoto.MAF_NUMCTRL, masfoto.MAS_NUMCTRL, mascota.MAS_NOMBRE, masfoto.MAF_FOTO from masfoto inner join mascota on masfoto.MAS_NUMCTRL = mascota.MAS_NUMCTRL WHERE MAF_NUMCTRL = ?', [req.params.id,])
        res.json(rows[0])
    } catch (error) {
        res.sendStatus(400)
    }
}

export const countMasfotos = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT COUNT(*) FROM Masfoto')
        res.json(rows[0]['COUNT(*)'])
    } catch (error) {
        res.sendStatus(400)
    }
}

export const createMasfoto = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query("INSERT INTO Masfoto(MAS_NUMCTRL, MAF_FOTO) VALUES (?, ?)",
            [
                req.body.MAS_NUMCTRL,
                req.body.MAF_FOTO
            ])
        res.json({
            id: rows.insertId,
            ...req.body
        })
    } catch (error) {
        res.sendStatus(400)
    }
}

export const deleteMasfoto = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('DELETE FROM Masfoto WHERE MAF_NUMCTRL = ?',
            [
                req.params.id
            ])
        res.sendStatus(204)
    } catch (error) {
        res.sendStatus(400)
    }
}

export const updateMasfoto = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('UPDATE Masfoto SET ? WHERE MAF_NUMCTRL = ?',
            [
                req.body,
                req.params.id
            ])
        res.json(rows)
    } catch (error) {
        res.sendStatus(400)
    }
}