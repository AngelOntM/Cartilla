"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateVacuna = exports.getVacunas = exports.getVacuna = exports.deleteVacuna = exports.createVacuna = exports.countVacunas = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database/database.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var getVacunas = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var val, sql, connection, _yield$connection$que, _yield$connection$que2, rows;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            val = ' WHERE';
            sql = 'SELECT vacuna.VAC_NUMCTRL, vacuna.RAZ_NUMCTRL, vacuna.VAC_NOMBRE, vacuna.VAC_DESC, raza.RAZ_NOMBRE from vacuna inner join raza on raza.RAZ_NUMCTRL = vacuna.RAZ_NUMCTRL';

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

            _context.next = 11;
            return (0, _database.connect)();

          case 11:
            connection = _context.sent;
            _context.next = 14;
            return connection.query(sql);

          case 14:
            _yield$connection$que = _context.sent;
            _yield$connection$que2 = (0, _slicedToArray2["default"])(_yield$connection$que, 1);
            rows = _yield$connection$que2[0];
            res.json(rows);
            _context.next = 24;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);
            res.sendStatus(400);

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 20]]);
  }));

  return function getVacunas(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getVacunas = getVacunas;

var getVacuna = /*#__PURE__*/function () {
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
            return connection.query('SELECT vacuna.VAC_NUMCTRL, vacuna.RAZ_NUMCTRL, vacuna.VAC_NOMBRE, vacuna.VAC_DESC, raza.RAZ_NOMBRE from vacuna inner join raza on raza.RAZ_NUMCTRL = vacuna.RAZ_NUMCTRL WHERE VAC_NUMCTRL = ?', [req.params.id]);

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

  return function getVacuna(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getVacuna = getVacuna;

var countVacunas = /*#__PURE__*/function () {
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
            return connection.query('SELECT COUNT(*) FROM vacuna');

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

  return function countVacunas(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.countVacunas = countVacunas;

var createVacuna = /*#__PURE__*/function () {
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
            return connection.query("INSERT INTO vacuna(RAZ_NUMCTRL,VAC_NOMBRE,VAC_DESC) VALUES (?, ?, ?)", [req.body.RAZ_NUMCTRL, req.body.VAC_NOMBRE, req.body.VAC_DESC]);

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

  return function createVacuna(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createVacuna = createVacuna;

var deleteVacuna = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var connection;
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
            return connection.query('DELETE FROM vacuna WHERE VAC_NUMCTRL = ?', [req.params.id]);

          case 6:
            res.sendStatus(204);
            _context5.next = 12;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](0);
            res.sendStatus(400);

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 9]]);
  }));

  return function deleteVacuna(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteVacuna = deleteVacuna;

var updateVacuna = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var connection, _yield$connection$que9, _yield$connection$que10, rows;

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
            return connection.query('UPDATE vacuna SET ? WHERE VAC_NUMCTRL = ?', [req.body, req.params.id]);

          case 6:
            _yield$connection$que9 = _context6.sent;
            _yield$connection$que10 = (0, _slicedToArray2["default"])(_yield$connection$que9, 1);
            rows = _yield$connection$que10[0];
            res.json(rows);
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

  return function updateVacuna(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateVacuna = updateVacuna;