"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSupervisor = exports.updateProveedor = exports.updatePropietario = exports.loginUsuario = exports.getSupervisores = exports.getSupervisor = exports.getProveedores = exports.getProveedor = exports.getPropietarios = exports.getPropietario = exports.deleteSupervisor = exports.deleteProveedor = exports.deletePropietario = exports.createSupervisor = exports.createProveedor = exports.createPropietario = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database/database.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var getPropietarios = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var val, sql, connection, _yield$connection$que, _yield$connection$que2, rows;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            val = ' WHERE';
            sql = 'SELECT * FROM propietario';

            if (req.body.PRO_NOMBRE) {
              sql += val + ' propietario.PRO_NOMBRE LIKE "%' + req.body.PRO_NOMBRE + '%"';
              val = ' AND';
            }

            if (req.body.PRO_CELULAR) {
              sql += val + ' propietario.PRO_CELULAR LIKE "%' + req.body.PRO_CELULAR + '%"';
              val = ' AND';
            }

            if (req.body.PRO_CORREO) {
              sql += val + ' propietario.PRO_CORREO LIKE "%' + req.body.PRO_CORREO + '%"';
              val = ' AND';
            }

            if (req.body.ORDER) {
              sql += ' ORDER BY ' + req.body.ORDER + ' ';
            }

            if (req.body.BY) {
              sql += req.body.BY;
            }

            _context.next = 10;
            return (0, _database.connect)();

          case 10:
            connection = _context.sent;
            _context.next = 13;
            return connection.query(sql);

          case 13:
            _yield$connection$que = _context.sent;
            _yield$connection$que2 = (0, _slicedToArray2["default"])(_yield$connection$que, 1);
            rows = _yield$connection$que2[0];
            res.json(rows);
            _context.next = 22;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](0);
            res.sendStatus(400);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 19]]);
  }));

  return function getPropietarios(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getPropietarios = getPropietarios;

var getProveedores = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var sql, connection, _yield$connection$que3, _yield$connection$que4, rows;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            sql = 'SELECT * FROM proveedor';

            if (req.body.PRV_NOMBRE) {
              sql += val + ' proveedor.PRV_NOMBRE LIKE "%' + req.body.PRV_NOMBRE + '%"';
              val = ' AND';
            }

            if (req.body.PRV_PROPIETARIO) {
              sql += val + ' proveedor.PRV_PROPIETARIO LIKE "%' + req.body.PRV_PROPIETARIO + '%"';
              val = ' AND';
            }

            if (req.body.PRV_CELULAR) {
              sql += val + ' proveedor.PRV_CELULAR LIKE "%' + req.body.PRV_CELULAR + '%"';
              val = ' AND';
            }

            if (req.body.PRV_TELOFICINA) {
              sql += val + ' proveedor.PRV_TELOFICINA LIKE "%' + req.body.PRV_TELOFICINA + '%"';
              val = ' AND';
            }

            if (req.body.PRV_CORREO) {
              sql += val + ' proveedor.PRV_CORREO LIKE "%' + req.body.PRV_CORREO + '%"';
              val = ' AND';
            }

            if (req.body.ORDER) {
              sql += ' ORDER BY ' + req.body.ORDER + ' ';
            }

            if (req.body.BY) {
              sql += req.body.BY;
            }

            _context2.next = 11;
            return (0, _database.connect)();

          case 11:
            connection = _context2.sent;
            _context2.next = 14;
            return connection.query(sql);

          case 14:
            _yield$connection$que3 = _context2.sent;
            _yield$connection$que4 = (0, _slicedToArray2["default"])(_yield$connection$que3, 1);
            rows = _yield$connection$que4[0];
            res.json(rows);
            _context2.next = 23;
            break;

          case 20:
            _context2.prev = 20;
            _context2.t0 = _context2["catch"](0);
            res.sendStatus(400);

          case 23:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 20]]);
  }));

  return function getProveedores(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getProveedores = getProveedores;

var getSupervisores = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var sql, connection, _yield$connection$que5, _yield$connection$que6, rows;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            sql = 'SELECT * FROM supervisor';

            if (req.body.SUP_NOMBRE) {
              sql += ' WHERE SUP_NOMBRE LIKE "%' + req.body.SUP_NOMBRE + '%"';
            }

            if (req.body.SUP_CORREO) {
              sql += ' WHERE SUP_CORREO LIKE "%' + req.body.SUP_CORREO + '%"';
            }

            if (req.body.ORDER) {
              sql += ' ORDER BY ' + req.body.ORDER + ' ';
            }

            if (req.body.BY) {
              sql += req.body.BY;
            }

            _context3.next = 8;
            return (0, _database.connect)();

          case 8:
            connection = _context3.sent;
            _context3.next = 11;
            return connection.query(sql);

          case 11:
            _yield$connection$que5 = _context3.sent;
            _yield$connection$que6 = (0, _slicedToArray2["default"])(_yield$connection$que5, 1);
            rows = _yield$connection$que6[0];
            res.json(rows);
            _context3.next = 20;
            break;

          case 17:
            _context3.prev = 17;
            _context3.t0 = _context3["catch"](0);
            res.sendStatus(400);

          case 20:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 17]]);
  }));

  return function getSupervisores(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getSupervisores = getSupervisores;

var getPropietario = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var connection, _yield$connection$que7, _yield$connection$que8, rows;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return (0, _database.connect)();

          case 3:
            connection = _context4.sent;
            _context4.next = 6;
            return connection.query('SELECT * FROM propietario WHERE PRO_NUMCTRL = ?', [req.params.id]);

          case 6:
            _yield$connection$que7 = _context4.sent;
            _yield$connection$que8 = (0, _slicedToArray2["default"])(_yield$connection$que7, 1);
            rows = _yield$connection$que8[0];
            res.json(rows[0]);
            _context4.next = 15;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](0);
            res.sendStatus(400);

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 12]]);
  }));

  return function getPropietario(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getPropietario = getPropietario;

var getProveedor = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var connection, _yield$connection$que9, _yield$connection$que10, rows;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return (0, _database.connect)();

          case 3:
            connection = _context5.sent;
            _context5.next = 6;
            return connection.query('SELECT * FROM proveedor WHERE PRV_NUMCTRL = ?', [req.params.id]);

          case 6:
            _yield$connection$que9 = _context5.sent;
            _yield$connection$que10 = (0, _slicedToArray2["default"])(_yield$connection$que9, 1);
            rows = _yield$connection$que10[0];
            res.json(rows[0]);
            _context5.next = 15;
            break;

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](0);
            res.sendStatus(400);

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 12]]);
  }));

  return function getProveedor(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getProveedor = getProveedor;

var getSupervisor = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var connection, _yield$connection$que11, _yield$connection$que12, rows;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return (0, _database.connect)();

          case 3:
            connection = _context6.sent;
            _context6.next = 6;
            return connection.query('SELECT * FROM proveedor WHERE SUP_NUMCTRL = ?', [req.params.id]);

          case 6:
            _yield$connection$que11 = _context6.sent;
            _yield$connection$que12 = (0, _slicedToArray2["default"])(_yield$connection$que11, 1);
            rows = _yield$connection$que12[0];
            res.json(rows[0]);
            _context6.next = 15;
            break;

          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](0);
            res.sendStatus(400);

          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 12]]);
  }));

  return function getSupervisor(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getSupervisor = getSupervisor;

var createPropietario = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var connection, _yield$connection$que13, _yield$connection$que14, rows;

    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return (0, _database.connect)();

          case 3:
            connection = _context7.sent;
            _context7.next = 6;
            return connection.query("INSERT INTO propietario (PRO_NOMBRE, PRO_CELULAR, PRO_CORREO, PRO_CONTRA, TIU_NUMCTRL) VALUES (?, ?, ?, ?, ?)", [req.body.PRO_NOMBRE, req.body.PRO_CELULAR, req.body.PRO_CORREO, req.body.PRO_CONTRA, 2]);

          case 6:
            _yield$connection$que13 = _context7.sent;
            _yield$connection$que14 = (0, _slicedToArray2["default"])(_yield$connection$que13, 1);
            rows = _yield$connection$que14[0];
            res.json(_objectSpread({
              id: rows.insertId
            }, req.body));
            _context7.next = 15;
            break;

          case 12:
            _context7.prev = 12;
            _context7.t0 = _context7["catch"](0);
            res.sendStatus(400);

          case 15:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 12]]);
  }));

  return function createPropietario(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.createPropietario = createPropietario;

var createProveedor = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var connection, _yield$connection$que15, _yield$connection$que16, rows;

    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return (0, _database.connect)();

          case 3:
            connection = _context8.sent;
            _context8.next = 6;
            return connection.query("INSERT INTO proveedor (PRV_NOMBRE, PRV_PROPIETARIO, PRV_CELULAR, PRV_TELOFICINA, PRV_CORREO, PRV_CONTRA, TIU_NUMCTRL) VALUES (?, ?, ?, ?, ?, ?, ?)", [req.body.PRV_NOMBRE, req.body.PRV_PROPIETARIO, req.body.PRV_CELULAR, req.body.PRV_TELOFICINA, req.body.PRV_CORREO, req.body.PRV_CONTRA, 1]);

          case 6:
            _yield$connection$que15 = _context8.sent;
            _yield$connection$que16 = (0, _slicedToArray2["default"])(_yield$connection$que15, 1);
            rows = _yield$connection$que16[0];
            res.json(_objectSpread({
              id: rows.insertId
            }, req.body));
            _context8.next = 15;
            break;

          case 12:
            _context8.prev = 12;
            _context8.t0 = _context8["catch"](0);
            res.sendStatus(400);

          case 15:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 12]]);
  }));

  return function createProveedor(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.createProveedor = createProveedor;

var createSupervisor = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var connection, _yield$connection$que17, _yield$connection$que18, rows;

    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return (0, _database.connect)();

          case 3:
            connection = _context9.sent;
            _context9.next = 6;
            return connection.query("INSERT INTO supervisor (SUP_NOMBRE, SUP_CORREO, SUP_CONTRA, TIU_NUMCTRL) VALUES (?, ?, ?, ?)", [req.body.SUP_NOMBRE, req.body.SUP_CORREO, req.body.SUP_CONTRA, 3]);

          case 6:
            _yield$connection$que17 = _context9.sent;
            _yield$connection$que18 = (0, _slicedToArray2["default"])(_yield$connection$que17, 1);
            rows = _yield$connection$que18[0];
            res.json(_objectSpread({
              id: rows.insertId
            }, req.body));
            _context9.next = 15;
            break;

          case 12:
            _context9.prev = 12;
            _context9.t0 = _context9["catch"](0);
            res.sendStatus(400);

          case 15:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 12]]);
  }));

  return function createSupervisor(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

exports.createSupervisor = createSupervisor;

var deleteProveedor = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    var connection, _yield$connection$que19, _yield$connection$que20, rows;

    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return (0, _database.connect)();

          case 3:
            connection = _context10.sent;
            _context10.next = 6;
            return connection.query('DELETE FROM proveedor WHERE PRV_NUMCTRL = ?', [req.params.id]);

          case 6:
            _yield$connection$que19 = _context10.sent;
            _yield$connection$que20 = (0, _slicedToArray2["default"])(_yield$connection$que19, 1);
            rows = _yield$connection$que20[0];
            res.sendStatus(204);
            _context10.next = 15;
            break;

          case 12:
            _context10.prev = 12;
            _context10.t0 = _context10["catch"](0);
            res.sendStatus(400);

          case 15:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[0, 12]]);
  }));

  return function deleteProveedor(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

exports.deleteProveedor = deleteProveedor;

var deletePropietario = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
    var connection, _yield$connection$que21, _yield$connection$que22, rows;

    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _context11.next = 3;
            return (0, _database.connect)();

          case 3:
            connection = _context11.sent;
            _context11.next = 6;
            return connection.query('DELETE FROM propietario WHERE PRO_NUMCTRL = ?', [req.params.id]);

          case 6:
            _yield$connection$que21 = _context11.sent;
            _yield$connection$que22 = (0, _slicedToArray2["default"])(_yield$connection$que21, 1);
            rows = _yield$connection$que22[0];
            res.sendStatus(204);
            _context11.next = 15;
            break;

          case 12:
            _context11.prev = 12;
            _context11.t0 = _context11["catch"](0);
            res.sendStatus(400);

          case 15:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[0, 12]]);
  }));

  return function deletePropietario(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();

exports.deletePropietario = deletePropietario;

var deleteSupervisor = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req, res) {
    var connection, _yield$connection$que23, _yield$connection$que24, rows;

    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            _context12.next = 3;
            return (0, _database.connect)();

          case 3:
            connection = _context12.sent;
            _context12.next = 6;
            return connection.query('DELETE FROM supervisor WHERE SUP_NUMCTRL = ?', [req.params.id]);

          case 6:
            _yield$connection$que23 = _context12.sent;
            _yield$connection$que24 = (0, _slicedToArray2["default"])(_yield$connection$que23, 1);
            rows = _yield$connection$que24[0];
            res.sendStatus(204);
            _context12.next = 15;
            break;

          case 12:
            _context12.prev = 12;
            _context12.t0 = _context12["catch"](0);
            res.sendStatus(400);

          case 15:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[0, 12]]);
  }));

  return function deleteSupervisor(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();

exports.deleteSupervisor = deleteSupervisor;

var updateProveedor = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(req, res) {
    var connection, _yield$connection$que25, _yield$connection$que26, rows;

    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            _context13.next = 3;
            return (0, _database.connect)();

          case 3:
            connection = _context13.sent;
            _context13.next = 6;
            return connection.query('UPDATE usuario SET ? WHERE PRV_NUMCTRL = ?', [req.body, req.params.id]);

          case 6:
            _yield$connection$que25 = _context13.sent;
            _yield$connection$que26 = (0, _slicedToArray2["default"])(_yield$connection$que25, 1);
            rows = _yield$connection$que26[0];
            res.json(rows);
            _context13.next = 15;
            break;

          case 12:
            _context13.prev = 12;
            _context13.t0 = _context13["catch"](0);
            res.sendStatus(400);

          case 15:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[0, 12]]);
  }));

  return function updateProveedor(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();

exports.updateProveedor = updateProveedor;

var updatePropietario = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(req, res) {
    var connection, _yield$connection$que27, _yield$connection$que28, rows;

    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
            _context14.next = 3;
            return (0, _database.connect)();

          case 3:
            connection = _context14.sent;
            _context14.next = 6;
            return connection.query('UPDATE propietario SET ? WHERE PRO_NUMCTRL = ?', [req.body, req.params.id]);

          case 6:
            _yield$connection$que27 = _context14.sent;
            _yield$connection$que28 = (0, _slicedToArray2["default"])(_yield$connection$que27, 1);
            rows = _yield$connection$que28[0];
            res.json(rows);
            _context14.next = 15;
            break;

          case 12:
            _context14.prev = 12;
            _context14.t0 = _context14["catch"](0);
            res.sendStatus(400);

          case 15:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14, null, [[0, 12]]);
  }));

  return function updatePropietario(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();

exports.updatePropietario = updatePropietario;

var updateSupervisor = /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(req, res) {
    var connection, _yield$connection$que29, _yield$connection$que30, rows;

    return _regenerator["default"].wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.prev = 0;
            _context15.next = 3;
            return (0, _database.connect)();

          case 3:
            connection = _context15.sent;
            _context15.next = 6;
            return connection.query('UPDATE supervisor SET ? WHERE SUP_NUMCTRL = ?', [req.body, req.params.id]);

          case 6:
            _yield$connection$que29 = _context15.sent;
            _yield$connection$que30 = (0, _slicedToArray2["default"])(_yield$connection$que29, 1);
            rows = _yield$connection$que30[0];
            res.json(rows);
            _context15.next = 15;
            break;

          case 12:
            _context15.prev = 12;
            _context15.t0 = _context15["catch"](0);
            res.sendStatus(400);

          case 15:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, null, [[0, 12]]);
  }));

  return function updateSupervisor(_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();

exports.updateSupervisor = updateSupervisor;

var loginUsuario = /*#__PURE__*/function () {
  var _ref16 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(req, res) {
    var connection, DATOS, MODULOS, PROGRAMAS, MENUS, rows, _yield$connection$que31, _yield$connection$que32, _yield$connection$que33, _yield$connection$que34, _yield$connection$que35, _yield$connection$que36, x, y;

    return _regenerator["default"].wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.prev = 0;
            _context16.next = 3;
            return (0, _database.connect)();

          case 3:
            connection = _context16.sent;
            DATOS = null;
            MODULOS = null;
            PROGRAMAS = null;
            MENUS = null;
            rows = [];

            if (!(rows[0] == undefined)) {
              _context16.next = 15;
              break;
            }

            _context16.next = 12;
            return connection.query('SELECT * FROM proveedor WHERE PRV_CORREO = ? AND PRV_CONTRA = ?', [req.body.correo, req.body.password]);

          case 12:
            _yield$connection$que31 = _context16.sent;
            _yield$connection$que32 = (0, _slicedToArray2["default"])(_yield$connection$que31, 1);
            rows = _yield$connection$que32[0];

          case 15:
            if (!(rows[0] == undefined)) {
              _context16.next = 21;
              break;
            }

            _context16.next = 18;
            return connection.query('SELECT * FROM supervisor WHERE SUP_CORREO = ? AND SUP_CONTRA = ?', [req.body.correo, req.body.password]);

          case 18:
            _yield$connection$que33 = _context16.sent;
            _yield$connection$que34 = (0, _slicedToArray2["default"])(_yield$connection$que33, 1);
            rows = _yield$connection$que34[0];

          case 21:
            if (!(rows[0] == undefined)) {
              _context16.next = 27;
              break;
            }

            _context16.next = 24;
            return connection.query('SELECT * FROM propietario WHERE PRO_CORREO = ? AND PRO_CONTRA = ?', [req.body.correo, req.body.password]);

          case 24:
            _yield$connection$que35 = _context16.sent;
            _yield$connection$que36 = (0, _slicedToArray2["default"])(_yield$connection$que35, 1);
            rows = _yield$connection$que36[0];

          case 27:
            if (!(rows[0] != null)) {
              _context16.next = 60;
              break;
            }

            DATOS = rows[0];
            _context16.next = 31;
            return connection.query('SELECT modulo.MOD_NUMCTRL,modulo.MOD_CLAVE,modulo.MOD_ICONO,modulo.MOD_DESC,modulo.MOD_NOMBRE, modxtipu.MXT_NUMCTRL FROM modulo INNER JOIN modxtipu ON modxtipu.MOD_NUMCTRL = modulo.MOD_NUMCTRL INNER JOIN tipousu ON modxtipu.TIU_NUMCTRL = tipousu.TIU_NUMCTRL WHERE tipousu.TIU_NUMCTRL = ?', [rows[0].TIU_NUMCTRL]);

          case 31:
            rows = _context16.sent;
            MODULOS = rows[0];
            x = 0;

          case 34:
            if (!(x < MODULOS.length)) {
              _context16.next = 59;
              break;
            }

            _context16.next = 37;
            return connection.query('SELECT menu.MEN_NUMCTRL,menu.MEN_CLAVE,menu.MEN_NOMBRE,menu.MEN_ICON,menu.MEN_DESC,menu.MEN_ORDEN, menu.MXT_NUMCTRL FROM menu INNER JOIN modxtipu ON modxtipu.MXT_NUMCTRL = menu.MXT_NUMCTRL WHERE modxtipu.TIU_NUMCTRL = ? AND menu.MXT_NUMCTRL = ?', [DATOS.TIU_NUMCTRL, MODULOS[x].MXT_NUMCTRL]);

          case 37:
            rows = _context16.sent;
            MENUS = rows[0];
            MODULOS[x].MENUS = MENUS;
            y = 0;

          case 41:
            if (!(y < MODULOS[x].MENUS.length)) {
              _context16.next = 50;
              break;
            }

            _context16.next = 44;
            return connection.query('SELECT programa.PRG_NUMCTRL,programa.PRG_CLAVE,programa.PRG_NOMBRE,programa.PRG_RUTA,programa.PRG_DESC FROM programa INNER JOIN proxmen ON proxmen.PRG_NUMCTRL = programa.PRG_NUMCTRL INNER JOIN menu ON proxmen.MEN_NUMCTRL = menu.MEN_NUMCTRL WHERE menu.MEN_NUMCTRL = ?', [MODULOS[x].MENUS[y].MEN_NUMCTRL]);

          case 44:
            rows = _context16.sent;
            PROGRAMAS = rows[0];
            MODULOS[x].MENUS[y].PROGRAMAS = PROGRAMAS;

          case 47:
            y++;
            _context16.next = 41;
            break;

          case 50:
            _context16.next = 52;
            return connection.query('SELECT programa.PRG_NUMCTRL,programa.PRG_CLAVE,programa.PRG_NOMBRE,programa.PRG_RUTA,programa.PRG_ORDEN,programa.PRG_DESC, programa.MXT_NUMCTRL FROM programa INNER JOIN modxtipu ON modxtipu.MXT_NUMCTRL = programa.MXT_NUMCTRL WHERE modxtipu.TIU_NUMCTRL = ? AND programa.MXT_NUMCTRL = ?', [DATOS.TIU_NUMCTRL, MODULOS[x].MXT_NUMCTRL]);

          case 52:
            rows = _context16.sent;
            PROGRAMAS = rows[0];
            PROGRAMAS.forEach(function (PROGRAMA) {
              MODULOS[x].MENUS.push(PROGRAMA);
            });
            MODULOS[x].MENUS.sort(function (a, b) {
              return a.MEN_ORDEN - b.MEN_ORDEN || a.PRG_ORDEN - b.PRG_ORDEN || a.PRG_ORDEN - b.MEN_ORDEN || a.MEN_ORDEN - b.PRG_ORDEN;
            });

          case 56:
            x++;
            _context16.next = 34;
            break;

          case 59:
            DATOS = {
              DATOS: DATOS,
              MODULOS: MODULOS
            };

          case 60:
            if (DATOS != null) {
              res.json(DATOS);
            } else {
              res.sendStatus(400);
            }

            _context16.next = 67;
            break;

          case 63:
            _context16.prev = 63;
            _context16.t0 = _context16["catch"](0);
            console.log(_context16.t0);
            res.sendStatus(400);

          case 67:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16, null, [[0, 63]]);
  }));

  return function loginUsuario(_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}();

exports.loginUsuario = loginUsuario;