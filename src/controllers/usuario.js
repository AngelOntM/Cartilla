import { connect } from '../database/database.js'

export const getPropietarios = async (req, res) => {
    try {
        var val = ' WHERE'
        var sql = 'SELECT * FROM propietario'
        if (req.body.PRO_NOMBRE) {
            sql += val + ' propietario.PRO_NOMBRE LIKE "%' + req.body.PRO_NOMBRE + '%"'
            val = ' AND'
        }
        if (req.body.PRO_CELULAR) {
            sql += val + ' propietario.PRO_CELULAR LIKE "%' + req.body.PRO_CELULAR + '%"'
            val = ' AND'
        }
        if (req.body.PRO_CORREO) {
            sql += val + ' propietario.PRO_CORREO LIKE "%' + req.body.PRO_CORREO + '%"'
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

export const getProveedores = async (req, res) => {
    try {
        var sql = 'SELECT * FROM proveedor'
        if (req.body.PRV_NOMBRE) {
            sql += val + ' proveedor.PRV_NOMBRE LIKE "%' + req.body.PRV_NOMBRE + '%"'
            val = ' AND'
        }
        if (req.body.PRV_PROPIETARIO) {
            sql += val + ' proveedor.PRV_PROPIETARIO LIKE "%' + req.body.PRV_PROPIETARIO + '%"'
            val = ' AND'
        }
        if (req.body.PRV_CELULAR) {
            sql += val + ' proveedor.PRV_CELULAR LIKE "%' + req.body.PRV_CELULAR + '%"'
            val = ' AND'
        }
        if (req.body.PRV_TELOFICINA) {
            sql += val + ' proveedor.PRV_TELOFICINA LIKE "%' + req.body.PRV_TELOFICINA + '%"'
            val = ' AND'
        }
        if (req.body.PRV_CORREO) {
            sql += val + ' proveedor.PRV_CORREO LIKE "%' + req.body.PRV_CORREO + '%"'
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

export const getSupervisores = async (req, res) => {
    try {
        var sql = 'SELECT * FROM supervisor'
        if (req.body.SUP_NOMBRE) {
            sql += ' WHERE SUP_NOMBRE LIKE "%' + req.body.SUP_NOMBRE + '%"'
        }
        if (req.body.SUP_CORREO) {
            sql += ' WHERE SUP_CORREO LIKE "%' + req.body.SUP_CORREO + '%"'
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
        var DATOS = null
        var MODULOS = null
        var PROGRAMAS = null
        var MENUS = null
        var rows = []
        if (rows[0] == undefined) {
            var [rows] = await connection.query('SELECT * FROM proveedor WHERE PRV_CORREO = ? AND PRV_CONTRA = ?',
                [
                    req.body.correo,
                    req.body.password
                ])
        }
        if (rows[0] == undefined) {
            var [rows] = await connection.query('SELECT * FROM supervisor WHERE SUP_CORREO = ? AND SUP_CONTRA = ?',
                [
                    req.body.correo,
                    req.body.password
                ])
        }
        if (rows[0] == undefined) {
            var [rows] = await connection.query('SELECT * FROM propietario WHERE PRO_CORREO = ? AND PRO_CONTRA = ?',
                [
                    req.body.correo,
                    req.body.password
                ])
        }
        if (rows[0] != null) {
            DATOS = rows[0]
            rows = await connection.query('SELECT modulo.MOD_NUMCTRL,modulo.MOD_CLAVE,modulo.MOD_ICONO,modulo.MOD_DESC,modulo.MOD_NOMBRE, modxtipu.MXT_NUMCTRL FROM modulo INNER JOIN modxtipu ON modxtipu.MOD_NUMCTRL = modulo.MOD_NUMCTRL INNER JOIN tipousu ON modxtipu.TIU_NUMCTRL = tipousu.TIU_NUMCTRL WHERE tipousu.TIU_NUMCTRL = ?', [rows[0].TIU_NUMCTRL])
            MODULOS = rows[0]
            for (var x = 0; x < MODULOS.length; x++) {
                rows = await connection.query('SELECT menu.MEN_NUMCTRL,menu.MEN_CLAVE,menu.MEN_NOMBRE,menu.MEN_ICON,menu.MEN_DESC,menu.MEN_ORDEN, menu.MXT_NUMCTRL FROM menu INNER JOIN modxtipu ON modxtipu.MXT_NUMCTRL = menu.MXT_NUMCTRL WHERE modxtipu.TIU_NUMCTRL = ? AND menu.MXT_NUMCTRL = ?', [DATOS.TIU_NUMCTRL, MODULOS[x].MXT_NUMCTRL])
                MENUS = rows[0]
                MODULOS[x].MENUS = MENUS
                for (var y = 0; y < MODULOS[x].MENUS.length; y++) {
                    rows = await connection.query('SELECT programa.PRG_NUMCTRL,programa.PRG_CLAVE,programa.PRG_NOMBRE,programa.PRG_RUTA,programa.PRG_DESC FROM programa INNER JOIN proxmen ON proxmen.PRG_NUMCTRL = programa.PRG_NUMCTRL INNER JOIN menu ON proxmen.MEN_NUMCTRL = menu.MEN_NUMCTRL WHERE menu.MEN_NUMCTRL = ?', [MODULOS[x].MENUS[y].MEN_NUMCTRL])
                    PROGRAMAS = rows[0]
                    MODULOS[x].MENUS[y].PROGRAMAS = PROGRAMAS
                }
                rows = await connection.query('SELECT programa.PRG_NUMCTRL,programa.PRG_CLAVE,programa.PRG_NOMBRE,programa.PRG_RUTA,programa.PRG_ORDEN,programa.PRG_DESC, programa.MXT_NUMCTRL FROM programa INNER JOIN modxtipu ON modxtipu.MXT_NUMCTRL = programa.MXT_NUMCTRL WHERE modxtipu.TIU_NUMCTRL = ? AND programa.MXT_NUMCTRL = ?', [DATOS.TIU_NUMCTRL, MODULOS[x].MXT_NUMCTRL])
                PROGRAMAS = rows[0]
                PROGRAMAS.forEach(PROGRAMA => {
                    MODULOS[x].MENUS.push(PROGRAMA)
                });
                MODULOS[x].MENUS.sort(function (a, b) {
                    return a.MEN_ORDEN - b.MEN_ORDEN || a.PRG_ORDEN - b.PRG_ORDEN || a.PRG_ORDEN - b.MEN_ORDEN || a.MEN_ORDEN - b.PRG_ORDEN
                });
            }
            DATOS = { DATOS, MODULOS }
        }
        if (DATOS != null) {
            res.json(DATOS)
        }
        else {
            res.sendStatus(400)
        }
    } catch (error) {
        console.log(error)
        res.sendStatus(400)
    }
}