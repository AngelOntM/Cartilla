import { connect } from '../database/database.js';
export const getSubmenus = async (req, res) => {
  try {
    var val = ' WHERE';
    var sql = 'SELECT * FROM Submenu';

    if (req.body.SUM_ETIQUETA) {
      sql += val + ' SUM_ETIQUETA LIKE "%' + req.body.SUM_ETIQUETA + '%"';
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
export const getSubmenu = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM Submenu WHERE SUM_NUMCTRL = ?', [req.params.id]);
    res.json(rows[0]);
  } catch (error) {
    res.sendStatus(400);
  }
};
export const countSubmenus = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query('SELECT COUNT(*) FROM Submenu');
    res.json(rows[0]['COUNT(*)']);
  } catch (error) {
    res.sendStatus(400);
  }
};
export const createSubmenu = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query("INSERT INTO Submenu(SUM_ETIQUETA) VALUES (?)", [req.body.SUM_ETIQUETA]);
    res.json({
      id: rows.insertId,
      ...req.body
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};
export const deleteSubmenu = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query('DELETE FROM Submenu WHERE SUM_NUMCTRL = ?', [req.params.id]);
    res.sendStatus(204);
  } catch (error) {
    res.sendStatus(400);
  }
};
export const updateSubmenu = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query('UPDATE Submenu SET ? WHERE SUM_NUMCTRL = ?', [req.body, req.params.id]);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.sendStatus(400);
  }
};