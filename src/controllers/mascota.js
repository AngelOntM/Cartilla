import { connect } from '../database/database.js'

export const getMascotas = async (req, res) => {
    try {
        var val = ' WHERE'
        var sql = 'SELECT mascota.MAS_NUMCTRL, mascota.PRO_NUMCTRL, propietario.PRO_NOMBRE, mascota.MAS_NOMBRE, mascota.MAS_FECHANAC, mascota.MAS_RAZA, mascota.RAZ_NUMCTRL, raza.RAZ_NOMBRE, mascota.MAS_SEXO, mascota.MAS_SENPAR from mascota inner join propietario on propietario.PRO_NUMCTRL = mascota.PRO_NUMCTRL inner join raza on raza.RAZ_NUMCTRL = mascota.RAZ_NUMCTRL'
        if (req.body.PRO_NUMCTRL) {
            sql += val + ' mascota.PRO_NUMCTRL LIKE "%' + req.body.PRO_NUMCTRL + '%"'
            val = ' AND'
        }
        if (req.body.PRO_NOMBRE) {
            sql += val + ' propietario.PRO_NOMBRE LIKE "%' + req.body.PRO_NOMBRE + '%"'
            val = ' AND'
        }
        if (req.body.MAS_NOMBRE) {
            sql += val + ' mascota.MAS_NOMBRE LIKE "%' + req.body.MAS_NOMBRE + '%"'
            val = ' AND'
        }
        if (req.body.MAS_FECHANAC) {
            sql += val + ' mascota.MAS_FECHANAC LIKE "%' + req.body.MAS_FECHANAC + '%"'
            val = ' AND'
        }
        if (req.body.MAS_RAZA) {
            sql += val + ' mascota.MAS_RAZA LIKE "%' + req.body.MAS_RAZA + '%"'
            val = ' AND'
        }
        if (req.body.RAZ_NUMCTRL) {
            sql += val + ' mascota.RAZ_NUMCTRL LIKE "%' + req.body.RAZ_NUMCTRL + '%"'
            val = ' AND'
        }
        if (req.body.RAZ_NOMBRE) {
            sql += val + ' raza.RAZ_NOMBRE LIKE "%' + req.body.RAZ_NOMBRE + '%"'
            val = ' AND'
        }
        if (req.body.MAS_SEXO) {
            sql += val + ' mascota.MAS_SEXO LIKE "%' + req.body.MAS_SEXO + '%"'
            val = ' AND'
        }
        if (req.body.MAS_SENPAR) {
            sql += val + ' mascota.MAS_SENPAR LIKE "%' + req.body.MAS_SENPAR + '%"'
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

export const getMascota = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT mascota.MAS_NUMCTRL, mascota.PRO_NUMCTRL, propietario.PRO_NOMBRE, mascota.MAS_NOMBRE, mascota.MAS_FECHANAC, mascota.MAS_RAZA, mascota.RAZ_NUMCTRL, raza.RAZ_NOMBRE, mascota.MAS_SEXO, mascota.MAS_SENPAR from mascota inner join propietario on propietario.PRO_NUMCTRL = mascota.PRO_NUMCTRL inner join raza on raza.RAZ_NUMCTRL = mascota.RAZ_NUMCTRL WHERE MAS_NUMCTRL = ?', [req.params.id,])
        res.json(rows[0])
    } catch (error) {
        res.sendStatus(400)
    }
}

export const countMascotas = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT COUNT(*) FROM mascota')
        res.json(rows[0]['COUNT(*)'])
    } catch (error) {
        res.sendStatus(400)
    }
}

export const createMascota = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query("INSERT INTO mascota(PRO_NUMCTRL, MAS_NOMBRE, MAS_FECHANAC, MAS_RAZA, RAZ_NUMCTRL, MAS_SEXO, MAS_SENPAR) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [
                req.body.PRO_NUMCTRL,
                req.body.MAS_NOMBRE,
                req.body.MAS_FECHANAC,
                req.body.MAS_RAZA,
                req.body.RAZ_NUMCTRL,
                req.body.MAS_SEXO,
                req.body.MAS_SENPAR
            ])
        res.json({
            id: rows.insertId,
            ...req.body
        })
    } catch (error) {
        res.sendStatus(400)
    }
}

export const deleteMascota = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('DELETE FROM mascota WHERE MAS_NUMCTRL = ?',
            [
                req.params.id
            ])
        res.sendStatus(204)
    } catch (error) {
        res.sendStatus(400)
    }
}

export const updateMascota = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('UPDATE mascota SET ? WHERE MAS_NUMCTRL = ?',
            [
                req.body,
                req.params.id
            ])
        res.json(rows)
    } catch (error) {
        res.sendStatus(400)
    }
}