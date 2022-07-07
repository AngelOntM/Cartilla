import { connect } from '../database/database.js';
export const getSerxsucs = async (req, res) => {
  try {
    var val = ' WHERE';
    var sql = 'SELECT serxsuc.SXS_NUMCTRL, serxsuc.SXP_NUMCTRL, sucxprv.SXP_NOMBRE, serxsuc.SXS_NOMBRE, serxsuc.SXS_DESCRIPTION, serxsuc.SXS_PRECIO from serxsuc inner join sucxprv on sucxprv.SXP_NUMCTRL = serxsuc.SXP_NUMCTRL';

    if (req.body.SXS_NUMCTRL) {
      sql += val + ' serxsuc.SXS_NUMCTRL LIKE "%' + req.body.SXS_NUMCTRL + '%"';
      val = ' AND';
    }

    if (req.body.SXP_NUMCTRL) {
      sql += val + ' propietario.SXP_NUMCTRL LIKE "%' + req.body.SXP_NUMCTRL + '%"';
      val = ' AND';
    }

    if (req.body.SXP_NOMBRE) {
      sql += val + ' serxsuc.SXP_NOMBRE LIKE "%' + req.body.SXP_NOMBRE + '%"';
      val = ' AND';
    }

    if (req.body.SXS_NOMBRE) {
      sql += val + ' serxsuc.SXS_NOMBRE LIKE "%' + req.body.SXS_NOMBRE + '%"';
      val = ' AND';
    }

    if (req.body.SXS_DESCRIPTION) {
      sql += val + ' serxsuc.SXS_DESCRIPTION LIKE "%' + req.body.SXS_DESCRIPTION + '%"';
      val = ' AND';
    }

    if (req.body.SXS_PRECIO) {
      sql += val + ' serxsuc.SXS_PRECIO LIKE "%' + req.body.SXS_PRECIO + '%"';
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
export const getSerxsuc = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query('SELECT serxsuc.SXS_NUMCTRL, serxsuc.SXP_NUMCTRL, sucxprv.SXP_NOMBRE, serxsuc.SXS_NOMBRE, serxsuc.SXS_DESCRIPTION, serxsuc.SXS_PRECIO from serxsuc inner join sucxprv on sucxprv.SXP_NUMCTRL = serxsuc.SXP_NUMCTRL WHERE SXS_NUMCTRL = ?', [req.params.id]);
    res.json(rows[0]);
  } catch (error) {
    res.sendStatus(400);
  }
};
export const countSerxsucs = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query('SELECT COUNT(*) FROM Serxsuc');
    res.json(rows[0]['COUNT(*)']);
  } catch (error) {
    res.sendStatus(400);
  }
};
export const createSerxsuc = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query("INSERT INTO Serxsuc(SXP_NUMCTRL, SXP_NOMBRE, SXS_NOMBRE, SXS_DESCRIPTION, SXS_PRECIO) VALUES (?, ?, ?, ?, ?)", [req.body.SXP_NUMCTRL, req.body.SXP_NOMBRE, req.body.SXS_NOMBRE, req.body.SXS_DESCRIPTION, req.body.SXS_PRECIO]);
    res.json({
      id: rows.insertId,
      ...req.body
    });
  } catch (error) {
    res.sendStatus(400);
  }
};
export const deleteSerxsuc = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query('DELETE FROM Serxsuc WHERE SXS_NUMCTRL = ?', [req.params.id]);
    res.sendStatus(204);
  } catch (error) {
    res.sendStatus(400);
  }
};
export const updateSerxsuc = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query('UPDATE Serxsuc SET ? WHERE SXS_NUMCTRL = ?', [req.body, req.params.id]);
    res.json(rows);
  } catch (error) {
    res.sendStatus(400);
  }
};