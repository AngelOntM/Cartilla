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
        const [rows] = await connection.query('UPDATE usuario SET ? WHERE PRV_NUMCTRL = ?',
            [
                req.body,
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
        const [rows] = await connection.query('UPDATE propietario SET ? WHERE PRO_NUMCTRL = ?',
            [
                req.body,
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
        var datos = null
        var [rows] = await connection.query('SELECT * FROM proveedor WHERE PRV_CORREO = ? AND PRV_CONTRA = ?',
            [
                req.body.correo,
                req.body.password
            ])
        if (rows[0] != null) {
            datos = rows[0]
            rows = await connection.query('SELECT menu.MEN_NOMBRE, programa.PRG_NOMBRE FROM menu inner join proxmen on menu.MEN_NUMCTRL= proxmen.MEN_NUMCTRL INNER JOIN programa ON programa.PRG_NUMCTRL= proxmen.PRG_NUMCTRL INNER JOIN proxusu on proxusu.PRG_NUMCTRL=programa.PRG_NUMCTRL INNER JOIN tipousu on tipousu.TIU_NUMCTRL= proxusu.TIU_NUMCTRL inner JOIN proveedor on proveedor.TIU_NUMCTRL=tipousu.TIU_NUMCTRL WHERE proveedor.TIU_NUMCTRL = 1')
            datos = { datos, rows }
        }
        else {
            [rows] = await connection.query('SELECT * FROM propietario WHERE PRO_CORREO = ? AND PRO_CONTRA = ?',
                [
                    req.body.correo,
                    req.body.password
                ])
            if (rows[0] != null) {
                datos = rows[0]
                rows = await connection.query('SELECT menu.MEN_NOMBRE, programa.PRG_NOMBRE FROM menu inner join proxmen on menu.MEN_NUMCTRL= proxmen.MEN_NUMCTRL INNER JOIN programa ON programa.PRG_NUMCTRL= proxmen.PRG_NUMCTRL INNER JOIN proxusu on proxusu.PRG_NUMCTRL=programa.PRG_NUMCTRL INNER JOIN tipousu on tipousu.TIU_NUMCTRL= proxusu.TIU_NUMCTRL inner JOIN propietario on propietario.TIU_NUMCTRL=tipousu.TIU_NUMCTRL WHERE propietario.TIU_NUMCTRL = 2')
                datos = { datos, rows }
            }
        }
        if (datos != null) {
            res.json(datos)
        }
        else {
            res.sendStatus(400)
        }
    } catch (error) {
        res.sendStatus(400)
    }

}