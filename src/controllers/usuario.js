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

export const getSupervisores = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT * FROM supervisor')
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

export const getSupervisor = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('SELECT * FROM proveedor WHERE SUP_NUMCTRL = ?', [req.params.id,])
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

export const createSupervisor = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query("INSERT INTO supervisor (SUP_NOMBRE, SUP_CORREO, SUP_CONTRA, TIU_NUMCTRL) VALUES (?, ?, ?, ?)",
            [
                req.body.SUP_NOMBRE,
                req.body.SUP_CORREO,
                req.body.SUP_CONTRA,
                3
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

export const deleteSupervisor = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('DELETE FROM supervisor WHERE SUP_NUMCTRL = ?',
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

export const updateSupervisor = async (req, res) => {
    try {
        const connection = await connect()
        const [rows] = await connection.query('UPDATE supervisor SET ? WHERE SUP_NUMCTRL = ?',
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
        var menu = null
        var [rows] = await connection.query('SELECT * FROM proveedor WHERE PRV_CORREO = ? AND PRV_CONTRA = ?',
            [
                req.body.correo,
                req.body.password
            ])
        if (rows[0] != null) {
            datos = rows[0]
            rows = await connection.query('SELECT programa.PRG_CLAVE, programa.PRG_NOMBRE, programa.PRG_RUTA FROM menu inner join proxmen on menu.MEN_NUMCTRL = proxmen.MEN_NUMCTRL INNER JOIN programa ON programa.PRG_NUMCTRL = proxmen.PRG_NUMCTRL INNER JOIN proxusu on proxusu.PRG_NUMCTRL = programa.PRG_NUMCTRL INNER JOIN tipousu on tipousu.TIU_NUMCTRL = proxusu.TIU_NUMCTRL WHERE menu.MEN_NUMCTRL = ? AND tipousu.TIU_NUMCTRL = ?', [rows[0].TIU_NUMCTRL, rows[0].TIU_NUMCTRL])
            menu = rows[0]
            datos = { datos, menu }
        }
        else {
            [rows] = await connection.query('SELECT * FROM propietario WHERE PRO_CORREO = ? AND PRO_CONTRA = ?',
                [
                    req.body.correo,
                    req.body.password
                ])
            if (rows[0] != null) {
                datos = rows[0]
                rows = await connection.query('SELECT programa.PRG_CLAVE, programa.PRG_NOMBRE, programa.PRG_RUTA FROM menu inner join proxmen on menu.MEN_NUMCTRL = proxmen.MEN_NUMCTRL INNER JOIN programa ON programa.PRG_NUMCTRL = proxmen.PRG_NUMCTRL INNER JOIN proxusu on proxusu.PRG_NUMCTRL = programa.PRG_NUMCTRL INNER JOIN tipousu on tipousu.TIU_NUMCTRL = proxusu.TIU_NUMCTRL WHERE menu.MEN_NUMCTRL = ? AND tipousu.TIU_NUMCTRL = ?', [rows[0].TIU_NUMCTRL, rows[0].TIU_NUMCTRL])
                menu = rows[0]
                datos = { datos, menu }
            }
            else {
                [rows] = await connection.query('SELECT * FROM supervisor WHERE SUP_CORREO = ? AND SUP_CONTRA = ?',
                    [
                        req.body.correo,
                        req.body.password
                    ])
                if (rows[0] != null) {
                    datos = rows[0]
                    rows = await connection.query('SELECT programa.PRG_CLAVE, programa.PRG_NOMBRE, programa.PRG_RUTA FROM menu inner join proxmen on menu.MEN_NUMCTRL = proxmen.MEN_NUMCTRL INNER JOIN programa ON programa.PRG_NUMCTRL = proxmen.PRG_NUMCTRL INNER JOIN proxusu on proxusu.PRG_NUMCTRL = programa.PRG_NUMCTRL INNER JOIN tipousu on tipousu.TIU_NUMCTRL = proxusu.TIU_NUMCTRL WHERE menu.MEN_NUMCTRL = ? AND tipousu.TIU_NUMCTRL = ?', [rows[0].TIU_NUMCTRL, rows[0].TIU_NUMCTRL])
                    menu = rows[0]
                    datos = { datos, menu }
                }

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