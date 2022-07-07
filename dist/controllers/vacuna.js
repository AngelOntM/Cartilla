import { connect } from '../database/database.js';
export const getVacunas = async (req, res) => {
  try {
    var val = ' WHERE';
    var sql = 'SELECT vacuna.VAC_NUMCTRL, vacuna.RAZ_NUMCTRL, vacuna.VAC_NOMBRE, vacuna.VAC_DESC, raza.RAZ_NOMBRE from vacuna inner join raza on raza.RAZ_NUMCTRL = vacuna.RAZ_NUMCTRL';

    if (req.body.RAZ_NUMCTRL) {
      sql += val + ' vacuna.RAZ_NUMCTRL LIKE "%' + req.body.RAZ_NUMCTRL + '%"';
      val = ' AND';
    }

    if (req.body.VAC_NOMBRE) {
      sql += val + ' vacuna.VAC_NOMBRE LIKE "%' + req.body.VAC_NOMBRE + '%"';
      val = ' AND';
    }

    if (req.body.VAC_DESC) {
      sql += val + ' vacuna.VAC_DESC LIKE "%' + req.body.VAC_DESC + '%"';
      val = ' AND';
    }

    if (req.body.RAZ_NOMBRE) {
      sql += val + ' raza.RAZ_NOMBRE LIKE "%' + req.body.RAZ_NOMBRE + '%"';
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
    console.error(error);
    res.sendStatus(400);
  }
};
export const getVacuna = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query('SELECT vacuna.VAC_NUMCTRL, vacuna.RAZ_NUMCTRL, vacuna.VAC_NOMBRE, vacuna.VAC_DESC, raza.RAZ_NOMBRE from vacuna inner join raza on raza.RAZ_NUMCTRL = vacuna.RAZ_NUMCTRL WHERE VAC_NUMCTRL = ?', [req.params.id]);
    res.json(rows[0]);
  } catch (error) {
    res.sendStatus(400);
  }
};
export const countVacunas = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query('SELECT COUNT(*) FROM vacuna');
    res.json(rows[0]['COUNT(*)']);
  } catch (error) {
    res.sendStatus(400);
  }
};
export const createVacuna = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query("INSERT INTO vacuna(RAZ_NUMCTRL,VAC_NOMBRE,VAC_DESC) VALUES (?, ?, ?)", [req.body.RAZ_NUMCTRL, req.body.VAC_NOMBRE, req.body.VAC_DESC]);
    res.json({
      id: rows.insertId,
      ...req.body
    });
  } catch (error) {
    res.sendStatus(400);
  }
};
export const deleteVacuna = async (req, res) => {
  try {
    const connection = await connect();
    await connection.query('DELETE FROM vacuna WHERE VAC_NUMCTRL = ?', [req.params.id]);
    res.sendStatus(204);
  } catch (error) {
    res.sendStatus(400);
  }
};
export const updateVacuna = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query('UPDATE vacuna SET ? WHERE VAC_NUMCTRL = ?', [req.body, req.params.id]);
    res.json(rows);
  } catch (error) {
    res.sendStatus(400);
  }
};