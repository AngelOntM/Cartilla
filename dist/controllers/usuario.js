"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProveedor = exports.updatePropietario = exports.loginUsuario = exports.getProveedores = exports.getProveedor = exports.getPropietarios = exports.getPropietario = exports.deleteProveedor = exports.deletePropietario = exports.createProveedor = exports.createPropietario = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var getPropietarios = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var connection, _yield$connection$que, _yield$connection$que2, rows;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _database.connect)();

          case 3:
            connection = _context.sent;
            _context.next = 6;
            return connection.query('SELECT * FROM propietario');

          case 6:
            _yield$connection$que = _context.sent;
            _yield$connection$que2 = (0, _slicedToArray2["default"])(_yield$connection$que, 1);
            rows = _yield$connection$que2[0];
            res.json(rows);
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            res.sendStatus(400);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function getPropietarios(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getPropietarios = getPropietarios;

var getProveedores = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var connection, _yield$connection$que3, _yield$connection$que4, rows;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0, _database.connect)();

          case 3:
            connection = _context2.sent;
            _context2.next = 6;
            return connection.query('SELECT * FROM proveedor');

          case 6:
            _yield$connection$que3 = _context2.sent;
            _yield$connection$que4 = (0, _slicedToArray2["default"])(_yield$connection$que3, 1);
            rows = _yield$connection$que4[0];
            res.json(rows);
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            res.sendStatus(400);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 12]]);
  }));

  return function getProveedores(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getProveedores = getProveedores;

var getPropietario = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var connection, _yield$connection$que5, _yield$connection$que6, rows;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return (0, _database.connect)();

          case 3:
            connection = _context3.sent;
            _context3.next = 6;
            return connection.query('SELECT * FROM propietario WHERE PRO_NUMCTRL = ?', [req.params.id]);

          case 6:
            _yield$connection$que5 = _context3.sent;
            _yield$connection$que6 = (0, _slicedToArray2["default"])(_yield$connection$que5, 1);
            rows = _yield$connection$que6[0];
            res.json(rows[0]);
            _context3.next = 15;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](0);
            res.sendStatus(400);

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 12]]);
  }));

  return function getPropietario(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getPropietario = getPropietario;

var getProveedor = /*#__PURE__*/function () {
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
            return connection.query('SELECT * FROM proveedor WHERE PRV_NUMCTRL = ?', [req.params.id]);

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

  return function getProveedor(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getProveedor = getProveedor;

var createPropietario = /*#__PURE__*/function () {
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
            return connection.query("INSERT INTO propietario (PRO_NOMBRE, PRO_CELULAR, PRO_CORREO, PRO_CONTRA, TIU_NUMCTRL) VALUES (?, ?, ?, ?, ?)", [req.body.PRO_NOMBRE, req.body.PRO_CELULAR, req.body.PRO_CORREO, req.body.PRO_CONTRA, 2]);

          case 6:
            _yield$connection$que9 = _context5.sent;
            _yield$connection$que10 = (0, _slicedToArray2["default"])(_yield$connection$que9, 1);
            rows = _yield$connection$que10[0];
            res.json(_objectSpread({
              id: rows.insertId
            }, req.body));
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

  return function createPropietario(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.createPropietario = createPropietario;

var createProveedor = /*#__PURE__*/function () {
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
            return connection.query("INSERT INTO proveedor (PRV_NOMBRE, PRV_PROPIETARIO, PRV_CELULAR, PRV_TELOFICINA, PRV_CORREO, PRV_CONTRA, TIU_NUMCTRL) VALUES (?, ?, ?, ?, ?, ?, ?)", [req.body.PRV_NOMBRE, req.body.PRV_PROPIETARIO, req.body.PRV_CELULAR, req.body.PRV_TELOFICINA, req.body.PRV_CORREO, req.body.PRV_CONTRA, 1]);

          case 6:
            _yield$connection$que11 = _context6.sent;
            _yield$connection$que12 = (0, _slicedToArray2["default"])(_yield$connection$que11, 1);
            rows = _yield$connection$que12[0];
            res.json(_objectSpread({
              id: rows.insertId
            }, req.body));
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

  return function createProveedor(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.createProveedor = createProveedor;

var deleteProveedor = /*#__PURE__*/function () {
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
            return connection.query('DELETE FROM proveedor WHERE PRV_NUMCTRL = ?', [req.params.id]);

          case 6:
            _yield$connection$que13 = _context7.sent;
            _yield$connection$que14 = (0, _slicedToArray2["default"])(_yield$connection$que13, 1);
            rows = _yield$connection$que14[0];
            res.sendStatus(204);
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

  return function deleteProveedor(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.deleteProveedor = deleteProveedor;

var deletePropietario = /*#__PURE__*/function () {
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
            return connection.query('DELETE FROM propietario WHERE PRO_NUMCTRL = ?', [req.params.id]);

          case 6:
            _yield$connection$que15 = _context8.sent;
            _yield$connection$que16 = (0, _slicedToArray2["default"])(_yield$connection$que15, 1);
            rows = _yield$connection$que16[0];
            res.sendStatus(204);
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

  return function deletePropietario(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.deletePropietario = deletePropietario;

var updateProveedor = /*#__PURE__*/function () {
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
            return connection.query('UPDATE usuario SET ? WHERE PRV_NUMCTRL = ?', [req.body, req.params.id]);

          case 6:
            _yield$connection$que17 = _context9.sent;
            _yield$connection$que18 = (0, _slicedToArray2["default"])(_yield$connection$que17, 1);
            rows = _yield$connection$que18[0];
            res.json(rows);
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

  return function updateProveedor(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

exports.updateProveedor = updateProveedor;

var updatePropietario = /*#__PURE__*/function () {
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
            return connection.query('UPDATE propietario SET ? WHERE PRO_NUMCTRL = ?', [req.body, req.params.id]);

          case 6:
            _yield$connection$que19 = _context10.sent;
            _yield$connection$que20 = (0, _slicedToArray2["default"])(_yield$connection$que19, 1);
            rows = _yield$connection$que20[0];
            res.json(rows);
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

  return function updatePropietario(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

exports.updatePropietario = updatePropietario;

var loginUsuario = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
    var connection, datos, _yield$connection$que21, _yield$connection$que22, rows, _yield$connection$que23, _yield$connection$que24;

    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _context11.next = 3;
            return (0, _database.connect)();

          case 3:
            connection = _context11.sent;
            datos = null;
            _context11.next = 7;
            return connection.query('SELECT * FROM proveedor WHERE PRV_CORREO = ? AND PRV_CONTRA = ?', [req.body.correo, req.body.password]);

          case 7:
            _yield$connection$que21 = _context11.sent;
            _yield$connection$que22 = (0, _slicedToArray2["default"])(_yield$connection$que21, 1);
            rows = _yield$connection$que22[0];

            if (!(rows[0] != null)) {
              _context11.next = 18;
              break;
            }

            datos = rows[0];
            _context11.next = 14;
            return connection.query('SELECT menu.MEN_NOMBRE, programa.PRG_NOMBRE FROM menu inner join proxmen on menu.MEN_NUMCTRL= proxmen.MEN_NUMCTRL INNER JOIN programa ON programa.PRG_NUMCTRL= proxmen.PRG_NUMCTRL INNER JOIN proxusu on proxusu.PRG_NUMCTRL=programa.PRG_NUMCTRL INNER JOIN tipousu on tipousu.TIU_NUMCTRL= proxusu.TIU_NUMCTRL inner JOIN proveedor on proveedor.TIU_NUMCTRL=tipousu.TIU_NUMCTRL WHERE proveedor.TIU_NUMCTRL = 1');

          case 14:
            rows = _context11.sent;
            datos = {
              datos: datos,
              rows: rows
            };
            _context11.next = 29;
            break;

          case 18:
            _context11.next = 20;
            return connection.query('SELECT * FROM propietario WHERE PRO_CORREO = ? AND PRO_CONTRA = ?', [req.body.correo, req.body.password]);

          case 20:
            _yield$connection$que23 = _context11.sent;
            _yield$connection$que24 = (0, _slicedToArray2["default"])(_yield$connection$que23, 1);
            rows = _yield$connection$que24[0];

            if (!(rows[0] != null)) {
              _context11.next = 29;
              break;
            }

            datos = rows[0];
            _context11.next = 27;
            return connection.query('SELECT menu.MEN_NOMBRE, programa.PRG_NOMBRE FROM menu inner join proxmen on menu.MEN_NUMCTRL= proxmen.MEN_NUMCTRL INNER JOIN programa ON programa.PRG_NUMCTRL= proxmen.PRG_NUMCTRL INNER JOIN proxusu on proxusu.PRG_NUMCTRL=programa.PRG_NUMCTRL INNER JOIN tipousu on tipousu.TIU_NUMCTRL= proxusu.TIU_NUMCTRL inner JOIN propietario on propietario.TIU_NUMCTRL=tipousu.TIU_NUMCTRL WHERE propietario.TIU_NUMCTRL = 2');

          case 27:
            rows = _context11.sent;
            datos = {
              datos: datos,
              rows: rows
            };

          case 29:
            if (datos != null) {
              res.json(datos);
            } else {
              res.sendStatus(400);
            }

            _context11.next = 35;
            break;

          case 32:
            _context11.prev = 32;
            _context11.t0 = _context11["catch"](0);
            res.sendStatus(400);

          case 35:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[0, 32]]);
  }));

  return function loginUsuario(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();

exports.loginUsuario = loginUsuario;