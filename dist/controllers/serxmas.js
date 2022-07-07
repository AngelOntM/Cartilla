import { connect } from '../database/database.js';
export const getSerxmass = async (req, res) => {
  try {
    var val = ' WHERE';
    var sql = 'SELECT serxmas.SXM_NUMCTRL, serxmas.MAS_NUMCTRL, mascota.MAS_NOMBRE, serxmas.SXM_FECHA, serxmas.SXM_PRECIO from serxmas inner join mascota on serxmas.SXM_MAS_NUMCTRL = mascota.MAS_NUMCTRL';

    if (req.body.MAS_NUMCTRL) {
      sql += val + ' serxmas.MAS_NUMCTRL LIKE "%' + req.body.MAS_NUMCTRL + '%"';
      val = ' AND';
    }

    if (req.body.MAS_NOMBRE) {
      sql += val + ' mascota.MAS_NOMBRE LIKE "%' + req.body.MAS_NOMBRE + '%"';
      val = ' AND';
    }

    if (req.body.SXM_FECHA) {
      sql += val + ' serxmas.SXM_FECHA LIKE "%' + req.body.SXM_FECHA + '%"';
      val = ' AND';
    }

    if (req.body.SXM_PRECIO) {
      sql += val + ' serxmas.SXM_PRECIO LIKE "%' + req.body.SXM_PRECIO + '%"';
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
export const getSerxmas = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query('SELECT serxmas.SXM_NUMCTRL, serxmas.MAS_NUMCTRL, mascota.MAS_NOMBRE, serxmas.SXM_FECHA, serxmas.SXM_PRECIO from serxmas inner join mascota on serxmas.SXM_MAS_NUMCTRL = mascota.MAS_NUMCTRL WHERE SXM_NUMCTRL = ?', [req.params.id]);
    res.json(rows[0]);
  } catch (error) {
    res.sendStatus(400);
  }
};
export const countSerxmass = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query('SELECT COUNT(*) FROM Serxmas');
    res.json(rows[0]['COUNT(*)']);
  } catch (error) {
    res.sendStatus(400);
  }
};
export const createSerxmas = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query("INSERT INTO Serxmas(MAS_NUMCTRL, SXM_FECHA, SXM_PRECIO) VALUES (?, ?, ?)", [req.body.MAS_NUMCTRL, req.body.SXM_FECHA, req.body.SXM_PRECIO]);
    res.json({
      id: rows.insertId,
      ...req.body
    });
  } catch (error) {
    res.sendStatus(400);
  }
};
export const deleteSerxmas = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query('DELETE FROM Serxmas WHERE SXM_NUMCTRL = ?', [req.params.id]);
    res.sendStatus(204);
  } catch (error) {
    res.sendStatus(400);
  }
};
export const updateSerxmas = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query('UPDATE Serxmas SET ? WHERE SXM_NUMCTRL = ?', [req.body, req.params.id]);
    res.json(rows);
  } catch (error) {
    res.sendStatus(400);
  }
};