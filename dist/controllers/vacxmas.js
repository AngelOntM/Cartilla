import { connect } from '../database/database.js';
export const getVacxmass = async (req, res) => {
  try {
    var val = ' WHERE';
    var sql = 'SELECT vacxmas.VXM_NUMCTRL, vacxmas.MAS_NUMCTRL, mascota.MAS_NOMBRE, vacxmas.PRV_NUMCTRL, proveedor.PRV_NOMBRE, proveedor.PRV_PROPIETARIO, vacxmas.VAC_NUMCTRL, vacuna.VAC_NOMBRE, vacxmas.VXM_PESO, vacxmas.VXM_FECHA, vacxmas.VXM_FECHAAPLICA from vacxmas inner join mascota on mascota.MAS_NUMCTRL = vacxmas.MAS_NUMCTRL inner join vacuna on vacuna.VAC_NUMCTRL = vacxmas.VAC_NUMCTRL inner join proveedor on proveedor.PRV_NUMCTRL = vacxmas.PRV_NUMCTRL';

    if (req.body.MAS_NUMCTRL) {
      sql += val + ' Vacxmas.MAS_NUMCTRL LIKE "%' + req.body.MAS_NUMCTRL + '%"';
      val = ' AND';
    }

    if (req.body.PRV_NUMCTRL) {
      sql += val + ' propietario.PRV_NUMCTRL LIKE "%' + req.body.PRV_NUMCTRL + '%"';
      val = ' AND';
    }

    if (req.body.VAC_NUMCTRL) {
      sql += val + ' Vacxmas.VAC_NUMCTRL LIKE "%' + req.body.VAC_NUMCTRL + '%"';
      val = ' AND';
    }

    if (req.body.VXM_PESO) {
      sql += val + ' Vacxmas.VXM_PESO LIKE "%' + req.body.VXM_PESO + '%"';
      val = ' AND';
    }

    if (req.body.VXM_FECHA) {
      sql += val + ' Vacxmas.VXM_FECHA LIKE "%' + req.body.VXM_FECHA + '%"';
      val = ' AND';
    }

    if (req.body.VXM_FECHAAPLICA) {
      sql += val + ' Vacxmas.VXM_FECHAAPLICA LIKE "%' + req.body.VXM_FECHAAPLICA + '%"';
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
export const getVacxmas = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query('SELECT vacxmas.VXM_NUMCTRL, vacxmas.MAS_NUMCTRL, mascota.MAS_NOMBRE, vacxmas.PRV_NUMCTRL, proveedor.PRV_NOMBRE, proveedor.PRV_PROPIETARIO, vacxmas.VAC_NUMCTRL, vacuna.VAC_NOMBRE, vacxmas.VXM_PESO, vacxmas.VXM_FECHA, vacxmas.VXM_FECHAAPLICA from vacxmas inner join mascota on mascota.MAS_NUMCTRL = vacxmas.MAS_NUMCTRL inner join vacuna on vacuna.VAC_NUMCTRL = vacxmas.VAC_NUMCTRL inner join proveedor on proveedor.PRV_NUMCTRL = vacxmas.PRV_NUMCTRL WHERE VXM_NUMCTRL = ?', [req.params.id]);
    res.json(rows[0]);
  } catch (error) {
    res.sendStatus(400);
  }
};
export const countVacxmass = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query('SELECT COUNT(*) FROM Vacxmas');
    res.json(rows[0]['COUNT(*)']);
  } catch (error) {
    res.sendStatus(400);
  }
};
export const createVacxmas = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query("INSERT INTO Vacxmas(MAS_NUMCTRL, PRV_NUMCTRL, VAC_NUMCTRL, VXM_PESO, VXM_FECHA, VXM_FECHAAPLICA) VALUES (?, ?, ?, ?, ?, ?)", [req.body.MAS_NUMCTRL, req.body.PRV_NUMCTRL, req.body.VAC_NUMCTRL, req.body.VXM_PESO, req.body.VXM_FECHA, req.body.VXM_FECHAAPLICA]);
    res.json({
      id: rows.insertId,
      ...req.body
    });
  } catch (error) {
    res.sendStatus(400);
  }
};
export const deleteVacxmas = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query('DELETE FROM Vacxmas WHERE VXM_NUMCTRL = ?', [req.params.id]);
    res.sendStatus(204);
  } catch (error) {
    res.sendStatus(400);
  }
};
export const updateVacxmas = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query('UPDATE Vacxmas SET ? WHERE VXM_NUMCTRL = ?', [req.body, req.params.id]);
    res.json(rows);
  } catch (error) {
    res.sendStatus(400);
  }
};