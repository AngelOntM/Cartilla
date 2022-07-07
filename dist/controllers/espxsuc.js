import { connect } from '../database/database.js';
export const getEspxsucs = async (req, res) => {
  try {
    var val = ' WHERE';
    var sql = 'SELECT espxsuc.ESP_NUMCTRL, especialidad.ESP_NOMBRE, espxsuc.SXP_NUMCTRL, sucxprv.SXP_NOMBRE from espxsuc inner join especialidad on especialidad.ESP_NUMCTRL = espxsuc.ESP_NUMCTRL inner join sucxprv on sucxprv.SXP_NUMCTRL = sucxprv.SXP_NUMCTRL';

    if (req.body.ESP_NUMCTRL) {
      sql += val + ' Espxsuc.ESP_NUMCTRL LIKE "%' + req.body.ESP_NUMCTRL + '%"';
      val = ' AND';
    }

    if (req.body.ESP_NOMBRE) {
      sql += val + ' propietario.ESP_NOMBRE LIKE "%' + req.body.ESP_NOMBRE + '%"';
      val = ' AND';
    }

    if (req.body.SXP_NUMCTRL) {
      sql += val + ' Espxsuc.SXP_NUMCTRL LIKE "%' + req.body.SXP_NUMCTRL + '%"';
      val = ' AND';
    }

    if (req.body.SXP_NOMBRE) {
      sql += val + ' Espxsuc.SXP_NOMBRE LIKE "%' + req.body.SXP_NOMBRE + '%"';
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
export const getEspxsuc = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query('SELECT espxsuc.ESP_NUMCTRL, especialidad.ESP_NOMBRE, espxsuc.SXP_NUMCTRL, sucxprv.SXP_NOMBRE from espxsuc inner join especialidad on especialidad.ESP_NUMCTRL = espxsuc.ESP_NUMCTRL inner join sucxprv on sucxprv.SXP_NUMCTRL = sucxprv.SXP_NUMCTRL WHERE ESP_NUMCTRL = ?', [req.params.id]);
    res.json(rows[0]);
  } catch (error) {
    res.sendStatus(400);
  }
};
export const countEspxsucs = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query('SELECT COUNT(*) FROM Espxsuc');
    res.json(rows[0]['COUNT(*)']);
  } catch (error) {
    res.sendStatus(400);
  }
};
export const createEspxsuc = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query("INSERT INTO Espxsuc(ESP_NUMCTRL, SXP_NUMCTRL) VALUES (?, ?)", [req.body.ESP_NUMCTRL, req.body.SXP_NUMCTRL]);
    res.json({
      id: rows.insertId,
      ...req.body
    });
  } catch (error) {
    res.sendStatus(400);
  }
};
export const deleteEspxsuc = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query('DELETE FROM Espxsuc WHERE ESP_NUMCTRL = ?', [req.params.id]);
    res.sendStatus(204);
  } catch (error) {
    res.sendStatus(400);
  }
};
export const updateEspxsuc = async (req, res) => {
  try {
    const connection = await connect();
    const [rows] = await connection.query('UPDATE Espxsuc SET ? WHERE ESP_NUMCTRL = ?', [req.body, req.params.id]);
    res.json(rows);
  } catch (error) {
    res.sendStatus(400);
  }
};