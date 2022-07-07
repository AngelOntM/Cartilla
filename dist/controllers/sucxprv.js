import { connect } from '../database/database.js';
export const getSucxprvs = async (req, res) => {
  try {
    var val = ' WHERE';
    var sql = 'SELECT sucxprv.SXP_NUMCTRL, sucxprv.PRV_NUMCTRL, proveedor.PRV_PROPIETARIO, proveedor.PRV_NOMBRE, sucxprv.SXP_NOMBRE, sucxprv.SXP_DIRECCION, sucxprv.SXP_COLONIA, sucxprv.SXP_CP, sucxprv.SXP_ENCARGADO, sucxprv.SXP_TELEFONO, sucxprv.SXP_LAT, sucxprv.SXP_LON, sucxprv.SXP_CORREO from sucxprv inner join proveedor on sucxprv.PRV_NUMCTRL = proveedor.PRV_NUMCTRL';

    if (req.body.PRV_NUMCTRL) {
      sql += val + ' sucxprv.PRV_NUMCTRL LIKE "%' + req.body.PRV_NUMCTRL + '%"';
      val = ' AND';
    }

    if (req.body.PRV_PROPIETARIO) {
      sql += val + ' proveedor.PRV_PROPIETARIO LIKE "%' + req.body.PRV_PROPIETARIO + '%"';
      val = ' AND';
    }

    if (req.body.PRV_NOMBRE) {
      sql += val + ' proveedor.PRV_NOMBRE LIKE "%' + req.body.PRV_NOMBRE + '%"';
      val = ' AND';
    }

    if (req.body.SXP_NOMBRE) {
      sql += val + ' sucxprv.SXP_NOMBRE LIKE "%' + req.body.SXP_NOMBRE + '%"';
      val = ' AND';
    }

    if (req.body.SXP_DIRECCION) {
      sql += val + ' sucxprv.SXP_DIRECCION LIKE "%' + req.body.SXP_DIRECCION + '%"';
      val = ' AND';
    }

    if (req.body.SXP_COLONIA) {
      sql += val + ' sucxprv.SXP_COLONIA LIKE "%' + req.body.SXP_COLONIA + '%"';
      val = ' AND';
    }

    if (req.body.SXP_CP) {
      sql += val + ' sucxprv.SXP_CP LIKE "%' + req.body.SXP_CP + '%"';
      val = ' AND';
    }

    if (req.body.SXP_ENCARGADO) {
      sql += val + ' sucxprv.SXP_ENCARGADO LIKE "%' + req.body.SXP_ENCARGADO + '%"';
      val = ' AND';
    }

    if (req.body.SXP_TELEFONO) {
      sql += val + ' sucxprv.SXP_TELEFONO LIKE "%' + req.body.SXP_TELEFONO + '%"';
      val = ' AND';
    }

    if (req.body.SXP_LAT) {
      sql += val + ' sucxprv.SXP_LAT LIKE "%' + req.body.SXP_LAT + '%"';
      val = ' AND';
    }

    if (req.body.SXP_LON) {
      sql += val + ' sucxprv.SXP_LON LIKE "%' + req.body.SXP_LON + '%"';
      val = ' AND';
    }

    if (req.body.SXP_CORREO) {
      sql += val + ' sucxprv.SXP_CORREO LIKE "%' + req.body.SXP_CORREO + '%"';
      val = ' AND';
    }

    if (req.body.ORDER) {
      sql += ' ORDER BY ' + req.body.ORDER + ' ';
    }

    if (req.body.BY) {
      sql += req.body.BY;
    }

    const connection = await connect();
    const [rows] = await connection.query(sql);
    res.json(rows);
  } catch (error) {
    res.sendStatus(400);
  }
};
export const getSucxprv = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query('SELECT sucxprv.SXP_NUMCTRL, sucxprv.PRV_NUMCTRL, proveedor.PRV_PROPIETARIO, proveedor.PRV_NOMBRE, sucxprv.SXP_NOMBRE, sucxprv.SXP_DIRECCION, sucxprv.SXP_COLONIA, sucxprv.SXP_CP, sucxprv.SXP_ENCARGADO, sucxprv.SXP_TELEFONO, sucxprv.SXP_LAT, sucxprv.SXP_LON, sucxprv.SXP_CORREO WHERE sucxprv.SXP_NUMCTRL = ?', [req.params.id]);
    res.json(rows[0]);
  } catch (error) {
    res.sendStatus(400);
  }
};
export const countSucxprvs = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query('SELECT COUNT(*) FROM sucxprv');
    res.json(rows[0]['COUNT(*)']);
  } catch (error) {
    res.sendStatus(400);
  }
};
export const createSucxprv = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query("INSERT INTO sucxprv(PRV_NUMCTRL, SXP_NOMBRE, SXP_DIRECCION, SXP_COLONIA, SXP_CP, SXP_ENCARGADO, SXP_TELEFONO, SXP_LAT, SXP_LON, SXP_CORREO, SXP_CONTRA) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [req.body.PRV_NUMCTRL, req.body.SXP_NOMBRE, req.body.SXP_DIRECCION, req.body.SXP_COLONIA, req.body.SXP_CP, req.body.SXP_ENCARGADO, req.body.SXP_TELEFONO, req.body.SXP_LAT, req.body.SXP_LON, req.body.SXP_CORREO, req.body.SXP_CONTRA]);
    res.json({
      id: rows.insertId,
      ...req.body
    });
  } catch (error) {
    res.sendStatus(400);
  }
};
export const deleteSucxprv = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query('DELETE FROM sucxprv WHERE SXP_NUMCTRL = ?', [req.params.id]);
    res.sendStatus(204);
  } catch (error) {
    res.sendStatus(400);
  }
};
export const updateSucxprv = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query('UPDATE sucxprv SET ? WHERE SXP_NUMCTRL = ?', [req.body, req.params.id]);
    res.json(rows);
  } catch (error) {
    res.sendStatus(400);
  }
};