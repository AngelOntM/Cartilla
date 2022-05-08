import { connect } from '../database'

export const getPropietarios = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT * FROM propietario')
        res.json(rows)
    } catch (error) {
        res.sendStatus(400)
    }
}

export const getProveedores = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT * FROM proveedor')
        res.json(rows)
    } catch (error) {
        res.sendStatus(400)
    }
}

export const getPropietario = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT * FROM propietario WHERE PRO_NUMCTRL = ?', [req.params.id,])
        res.json(rows[0])
    } catch (error) {
        res.sendStatus(400)
    }
}

export const getProveedor = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT * FROM proveedor WHERE PRV_NUMCTRL = ?', [req.params.id,])
        res.json(rows[0])
    } catch (error) {
        res.sendStatus(400)
    }
}

export const createPropietario = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query("INSERT INTO propietario (PRO_NOMBRE, PRO_CELULAR, PRO_CORREO, PRO_CONTRA, TIU_NUMCTRL) VALUES (?, ?, ?, ?, ?)",
            [
                req.body.PRO_NOMBRE,
                req.body.PRO_CELULAR,
                req.body.PRO_CORREO,
                req.body.PRO_CONTRA,
                2
            ])
        res.json({
            id: rows.insertId,
            ...req.body
        })
    } catch (error) {
        res.sendStatus(400)
    }
}

export const createProveedor = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query("INSERT INTO proveedor (PRV_NOMBRE, PRV_PROPIETARIO, PRV_CELULAR, PRV_TELOFICINA, PRV_CORREO, PRV_CONTRA, TIU_NUMCTRL) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [
                req.body.PRV_NOMBRE,
                req.body.PRV_PROPIETARIO,
                req.body.PRV_CELULAR,
                req.body.PRV_TELOFICINA,
                req.body.PRV_CORREO,
                req.body.PRV_CONTRA,
                1
            ])
        res.json({
            id: rows.insertId,
            ...req.body
        })
    } catch (error) {
        res.sendStatus(400)
    }
}

export const deleteProveedor = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('DELETE FROM proveedor WHERE PRV_NUMCTRL = ?',
            [
                req.params.id
            ])
        res.sendStatus(204)
    } catch (error) {
        res.sendStatus(400)
    }
}

export const deletePropietario = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('DELETE FROM propietario WHERE PRO_NUMCTRL = ?',
            [
                req.params.id
            ])
        res.sendStatus(204)
    } catch (error) {
        res.sendStatus(400)
    }
}

export const updateProveedor = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('UPDATE usuario SET PRV_NOMBRE = ?, PRV_PROPIETARIO = ?, PRV_CELULAR = ?, PRV_TELOFICINA = ?, PRV_CORREO = ?, PRV_CONTRA = ? WHERE PRV_NUMCTRL = ?',
            [
                req.body.PRV_NOMBRE,
                req.body.PRV_PROPIETARIO,
                req.body.PRO_CELULAR,
                req.body.PRV_TELOFICINA,
                req.body.PRO_CORREO,
                req.body.PRO_CONTRA,
                req.params.id
            ])
        res.json(rows)
    } catch (error) {
        res.sendStatus(400)
    }
}

export const updatePropietario = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('UPDATE propietario SET PRO_NOMBRE = ?, PRO_CELULAR = ?, PRO_CORREO = ?, PRO_CONTRA = ? WHERE PRO_NUMCTRL = ?',
            [
                req.body.PRO_NOMBRE,
                req.body.PRO_CELULAR,
                req.body.PRO_CORREO,
                req.body.PRO_CONTRA,
                req.params.id
            ])
        res.json(rows)
    } catch (error) {
        res.sendStatus(400)
    }
}

export const loginUsuario = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT * FROM proveedor WHERE PRV_CORREO = ? AND PRV_CONTRA = ?',
            [
                req.body.correo,
                req.body.password
            ])
        if (rows[0] == null) {
            const [rows1] = await connection.query('SELECT * FROM propietario WHERE PRO_CORREO = ? AND PRO_CONTRA = ?',
                [
                    req.body.correo,
                    req.body.password
                ])
            res.json(rows1)
        }
        res.json(rows[0])
    } catch (error) {
        res.sendStatus(400)
    }

}