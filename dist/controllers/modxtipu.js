"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateModxtipu = exports.getModxtipus = exports.getModxtipu = exports.deleteModxtipu = exports.createModxtipu = exports.countModxtipus = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database/database.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var getModxtipus = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var val, sql, connection, _yield$connection$que, _yield$connection$que2, rows;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            val = ' WHERE';
            sql = 'SELECT modxtipu.MXT_NUMCTRL, modxtipu.MXT_ORDEN, modxtipu.MOD_NUMCTRL, modulo.MOD_NOMBRE, modulo.MOD_CLAVE, modxtipu.TIU_NUMCTRL, tipousu.TIU_NOMBRE FROM modxtipu INNER JOIN modulo ON modulo.MOD_NUMCTRL = modxtipu.MOD_NUMCTRL inner join tipousu ON tipousu.TIU_NUMCTRL = modxtipu.TIU_NUMCTRL';

            if (req.body.MXT_ORDEN) {
              sql += val + ' modxtipu.MXT_ORDEN = ' + req.body.MXT_ORDEN;
              val = ' AND';
            }

            if (req.body.MOD_NUMCTRL) {
              sql += val + ' modxtipu.MOD_NUMCTRL = ' + req.body.MOD_NUMCTRL;
              val = ' AND';
            }

            if (req.body.MOD_NOMBRE) {
              sql += val + ' modulo.MOD_NOMBRE LIKE "%' + req.body.MOD_NOMBRE + '%"';
              val = ' AND';
            }

            if (req.body.MOD_CLAVE) {
              sql += val + ' modulo.MOD_CLAVE LIKE "%' + req.body.MOD_CLAVE + '%"';
              val = ' AND';
            }

            if (req.body.TIU_NUMCTRL) {
              sql += val + ' modxtipu.TIU_NUMCTRL LIKE "%' + req.body.TIU_NUMCTRL + '%"';
              val = ' AND';
            }

            if (req.body.TIU_NOMBRE) {
              sql += val + ' tipousu.TIU_NOMBRE LIKE "%' + req.body.TIU_NOMBRE + '%"';
              val = ' AND';
            }

            if (req.body.ORDER) {
              sql += ' ORDER BY ' + req.body.ORDER + ' ';
            }

            if (req.body.BY) {
              sql += req.body.BY;
            }

            _context.next = 13;
            return (0, _database.connect)();

          case 13:
            connection = _context.sent;
            _context.next = 16;
            return connection.query(sql);

          case 16:
            _yield$connection$que = _context.sent;
            _yield$connection$que2 = (0, _slicedToArray2["default"])(_yield$connection$que, 1);
            rows = _yield$connection$que2[0];
            res.json(rows);
            _context.next = 25;
            break;

          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](0);
            res.sendStatus(400);

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 22]]);
  }));

  return function getModxtipus(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getModxtipus = getModxtipus;

var getModxtipu = /*#__PURE__*/function () {
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
            return connection.query('SELECT modxtipu.MXT_NUMCTRL, modxtipu.MXT_ORDEN, modxtipu.MOD_NUMCTRL, modulo.MOD_NOMBRE, modulo.MOD_CLAVE, modxtipu.TIU_NUMCTRL, tipousu.TIU_NOMBRE FROM modxtipu INNER JOIN modulo ON modulo.MOD_NUMCTRL = modxtipu.MOD_NUMCTRL inner join tipousu ON tipousu.TIU_NUMCTRL = modxtipu.TIU_NUMCTRL WHERE modxtipu.MXT_NUMCTRL = ?', [req.params.id]);

          case 6:
            _yield$connection$que3 = _context2.sent;
            _yield$connection$que4 = (0, _slicedToArray2["default"])(_yield$connection$que3, 1);
            rows = _yield$connection$que4[0];
            res.json(rows);
            _context2.next = 16;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.sendStatus(400);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 12]]);
  }));

  return function getModxtipu(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getModxtipu = getModxtipu;

var countModxtipus = /*#__PURE__*/function () {
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
            return connection.query('SELECT COUNT(*) FROM modxtipu');

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

  return function countModxtipus(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.countModxtipus = countModxtipus;

var createModxtipu = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var connection, _yield$connection$que7, _yield$connection$que8, orden, _yield$connection$que9, _yield$connection$que10, rows;

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
            return connection.query('SELECT * FROM modxtipu WHERE MXT_NUMCTRL = ? AND MXT_ORDEN = ?', [req.body.MEN_NUMCTRL, req.body.PXM_ORDEN]);

          case 6:
            _yield$connection$que7 = _context4.sent;
            _yield$connection$que8 = (0, _slicedToArray2["default"])(_yield$connection$que7, 1);
            orden = _yield$connection$que8[0];

            if (!(orden[0] != undefined)) {
              _context4.next = 11;
              break;
            }

            return _context4.abrupt("return", res.sendStatus(400));

          case 11:
            _context4.next = 13;
            return connection.query("INSERT INTO modxtipu(MXT_ORDEN, MOD_NUMCTRL, TIU_NUMCTRL) VALUES (?, ?, ?)", [req.body.MXT_ORDEN, req.body.MOD_NUMCTRL, req.body.TIU_NUMCTRL]);

          case 13:
            _yield$connection$que9 = _context4.sent;
            _yield$connection$que10 = (0, _slicedToArray2["default"])(_yield$connection$que9, 1);
            rows = _yield$connection$que10[0];
            res.json(_objectSpread({
              id: rows.insertId
            }, req.body));
            _context4.next = 22;
            break;

          case 19:
            _context4.prev = 19;
            _context4.t0 = _context4["catch"](0);
            res.sendStatus(400);

          case 22:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 19]]);
  }));

  return function createModxtipu(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createModxtipu = createModxtipu;

var deleteModxtipu = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var connection, _yield$connection$que11, _yield$connection$que12, orden, _yield$connection$que13, _yield$connection$que14, up;

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
            return connection.query('SELECT * FROM modxtipu WHERE MXT_NUMCTRL = ?', [req.params.id]);

          case 6:
            _yield$connection$que11 = _context5.sent;
            _yield$connection$que12 = (0, _slicedToArray2["default"])(_yield$connection$que11, 1);
            orden = _yield$connection$que12[0];
            _context5.next = 11;
            return connection.query('DELETE FROM modxtipu WHERE MXT_NUMCTRL = ?', [req.params.id]);

          case 11:
            _context5.next = 13;
            return connection.query('UPDATE modxtipu SET MXT_ORDEN = MXT_ORDEN - 1 WHERE MXT_ORDEN > ? AND MOD_NUMCTRL = ?', [orden[0].MXT_ORDEN, orden[0].MOD_NUMCTRL]);

          case 13:
            _yield$connection$que13 = _context5.sent;
            _yield$connection$que14 = (0, _slicedToArray2["default"])(_yield$connection$que13, 1);
            up = _yield$connection$que14[0];
            res.sendStatus(204);
            _context5.next = 22;
            break;

          case 19:
            _context5.prev = 19;
            _context5.t0 = _context5["catch"](0);
            res.sendStatus(400);

          case 22:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 19]]);
  }));

  return function deleteModxtipu(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteModxtipu = deleteModxtipu;

var updateModxtipu = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var connection, _yield$connection$que15, _yield$connection$que16, orden, _yield$connection$que17, _yield$connection$que18, rows;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return (0, _database.connect)();

          case 3:
            connection = _context6.sent;

            if (!req.body.MXT_ORDEN) {
              _context6.next = 18;
              break;
            }

            _context6.next = 7;
            return connection.query('SELECT * FROM modxtipu WHERE MXT_NUMCTRL = ?', [req.params.id]);

          case 7:
            _yield$connection$que15 = _context6.sent;
            _yield$connection$que16 = (0, _slicedToArray2["default"])(_yield$connection$que15, 1);
            orden = _yield$connection$que16[0];

            if (!(orden[0].MXT_ORDEN < req.body.MXT_ORDEN)) {
              _context6.next = 15;
              break;
            }

            _context6.next = 13;
            return connection.query('UPDATE modxtipu SET MXT_ORDEN = MXT_ORDEN - 1 WHERE MOD_NUMCTRL = ? AND MXT_ORDEN > ? AND MXT_ORDEN <= ?', [orden[0].MOD_NUMCTRL, orden[0].MXT_ORDEN, req.body.MXT_ORDEN]);

          case 13:
            _context6.next = 18;
            break;

          case 15:
            if (!(orden[0].MXT_ORDEN > req.body.MXT_ORDEN)) {
              _context6.next = 18;
              break;
            }

            _context6.next = 18;
            return connection.query('UPDATE modxtipu SET MXT_ORDEN = MXT_ORDEN + 1 WHERE MOD_NUMCTRL = ? AND MXT_ORDEN < ? AND MXT_ORDEN >= ?', [orden[0].MOD_NUMCTRL, orden[0].MXT_ORDEN, req.body.MXT_ORDEN]);

          case 18:
            _context6.next = 20;
            return connection.query('UPDATE modxtipu SET ? WHERE MXT_NUMCTRL = ?', [req.body, req.params.id]);

          case 20:
            _yield$connection$que17 = _context6.sent;
            _yield$connection$que18 = (0, _slicedToArray2["default"])(_yield$connection$que17, 1);
            rows = _yield$connection$que18[0];
            res.json(rows);
            _context6.next = 29;
            break;

          case 26:
            _context6.prev = 26;
            _context6.t0 = _context6["catch"](0);
            res.sendStatus(400);

          case 29:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 26]]);
  }));

  return function updateModxtipu(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateModxtipu = updateModxtipu;