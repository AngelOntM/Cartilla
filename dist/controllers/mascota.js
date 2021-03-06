"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMascota = exports.getMascotas = exports.getMascota = exports.deleteMascota = exports.createMascota = exports.countMascotas = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database/database.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var getMascotas = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var val, sql, connection, _yield$connection$que, _yield$connection$que2, rows;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            val = ' WHERE';
            sql = 'SELECT mascota.MAS_NUMCTRL, mascota.PRO_NUMCTRL, propietario.PRO_NOMBRE, mascota.MAS_NOMBRE, mascota.MAS_FECHANAC, mascota.MAS_RAZA, mascota.RAZ_NUMCTRL, raza.RAZ_NOMBRE, mascota.MAS_SEXO, mascota.MAS_SENPAR from mascota inner join propietario on propietario.PRO_NUMCTRL = mascota.PRO_NUMCTRL inner join raza on raza.RAZ_NUMCTRL = mascota.RAZ_NUMCTRL';

            if (req.body.PRO_NUMCTRL) {
              sql += val + ' mascota.PRO_NUMCTRL LIKE "%' + req.body.PRO_NUMCTRL + '%"';
              val = ' AND';
            }

            if (req.body.PRO_NOMBRE) {
              sql += val + ' propietario.PRO_NOMBRE LIKE "%' + req.body.PRO_NOMBRE + '%"';
              val = ' AND';
            }

            if (req.body.MAS_NOMBRE) {
              sql += val + ' mascota.MAS_NOMBRE LIKE "%' + req.body.MAS_NOMBRE + '%"';
              val = ' AND';
            }

            if (req.body.MAS_FECHANAC) {
              sql += val + ' mascota.MAS_FECHANAC LIKE "%' + req.body.MAS_FECHANAC + '%"';
              val = ' AND';
            }

            if (req.body.MAS_RAZA) {
              sql += val + ' mascota.MAS_RAZA LIKE "%' + req.body.MAS_RAZA + '%"';
              val = ' AND';
            }

            if (req.body.RAZ_NUMCTRL) {
              sql += val + ' mascota.RAZ_NUMCTRL LIKE "%' + req.body.RAZ_NUMCTRL + '%"';
              val = ' AND';
            }

            if (req.body.RAZ_NOMBRE) {
              sql += val + ' raza.RAZ_NOMBRE LIKE "%' + req.body.RAZ_NOMBRE + '%"';
              val = ' AND';
            }

            if (req.body.MAS_SEXO) {
              sql += val + ' mascota.MAS_SEXO LIKE "%' + req.body.MAS_SEXO + '%"';
              val = ' AND';
            }

            if (req.body.MAS_SENPAR) {
              sql += val + ' mascota.MAS_SENPAR LIKE "%' + req.body.MAS_SENPAR + '%"';
              val = ' AND';
            }

            if (req.body.ORDER) {
              sql += ' ORDER BY ' + req.body.ORDER + ' ';
            }

            if (req.body.BY) {
              sql += req.body.BY;
            }

            _context.next = 16;
            return (0, _database.connect)();

          case 16:
            connection = _context.sent;
            _context.next = 19;
            return connection.query(sql);

          case 19:
            _yield$connection$que = _context.sent;
            _yield$connection$que2 = (0, _slicedToArray2["default"])(_yield$connection$que, 1);
            rows = _yield$connection$que2[0];
            res.json(rows);
            _context.next = 28;
            break;

          case 25:
            _context.prev = 25;
            _context.t0 = _context["catch"](0);
            res.sendStatus(400);

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 25]]);
  }));

  return function getMascotas(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getMascotas = getMascotas;

var getMascota = /*#__PURE__*/function () {
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
            return connection.query('SELECT mascota.MAS_NUMCTRL, mascota.PRO_NUMCTRL, propietario.PRO_NOMBRE, mascota.MAS_NOMBRE, mascota.MAS_FECHANAC, mascota.MAS_RAZA, mascota.RAZ_NUMCTRL, raza.RAZ_NOMBRE, mascota.MAS_SEXO, mascota.MAS_SENPAR from mascota inner join propietario on propietario.PRO_NUMCTRL = mascota.PRO_NUMCTRL inner join raza on raza.RAZ_NUMCTRL = mascota.RAZ_NUMCTRL WHERE MAS_NUMCTRL = ?', [req.params.id]);

          case 6:
            _yield$connection$que3 = _context2.sent;
            _yield$connection$que4 = (0, _slicedToArray2["default"])(_yield$connection$que3, 1);
            rows = _yield$connection$que4[0];
            res.json(rows[0]);
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

  return function getMascota(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getMascota = getMascota;

var countMascotas = /*#__PURE__*/function () {
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
            return connection.query('SELECT COUNT(*) FROM mascota');

          case 6:
            _yield$connection$que5 = _context3.sent;
            _yield$connection$que6 = (0, _slicedToArray2["default"])(_yield$connection$que5, 1);
            rows = _yield$connection$que6[0];
            res.json(rows[0]['COUNT(*)']);
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

  return function countMascotas(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.countMascotas = countMascotas;

var createMascota = /*#__PURE__*/function () {
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
            return connection.query("INSERT INTO mascota(PRO_NUMCTRL, MAS_NOMBRE, MAS_FECHANAC, MAS_RAZA, RAZ_NUMCTRL, MAS_SEXO, MAS_SENPAR) VALUES (?, ?, ?, ?, ?, ?, ?)", [req.body.PRO_NUMCTRL, req.body.MAS_NOMBRE, req.body.MAS_FECHANAC, req.body.MAS_RAZA, req.body.RAZ_NUMCTRL, req.body.MAS_SEXO, req.body.MAS_SENPAR]);

          case 6:
            _yield$connection$que7 = _context4.sent;
            _yield$connection$que8 = (0, _slicedToArray2["default"])(_yield$connection$que7, 1);
            rows = _yield$connection$que8[0];
            res.json(_objectSpread({
              id: rows.insertId
            }, req.body));
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

  return function createMascota(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createMascota = createMascota;

var deleteMascota = /*#__PURE__*/function () {
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
            return connection.query('DELETE FROM mascota WHERE MAS_NUMCTRL = ?', [req.params.id]);

          case 6:
            _yield$connection$que9 = _context5.sent;
            _yield$connection$que10 = (0, _slicedToArray2["default"])(_yield$connection$que9, 1);
            rows = _yield$connection$que10[0];
            res.sendStatus(204);
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

  return function deleteMascota(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteMascota = deleteMascota;

var updateMascota = /*#__PURE__*/function () {
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
            return connection.query('UPDATE mascota SET ? WHERE MAS_NUMCTRL = ?', [req.body, req.params.id]);

          case 6:
            _yield$connection$que11 = _context6.sent;
            _yield$connection$que12 = (0, _slicedToArray2["default"])(_yield$connection$que11, 1);
            rows = _yield$connection$que12[0];
            res.json(rows);
            _context6.next = 16;
            break;

          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](0);
            console.error(_context6.t0.message);
            res.sendStatus(400);

          case 16:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 12]]);
  }));

  return function updateMascota(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateMascota = updateMascota;