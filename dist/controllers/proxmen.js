"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProxmen = exports.getProxmens = exports.getProxmen = exports.deleteProxmen = exports.createProxmen = exports.countProxmens = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database/database.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var getProxmens = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var val, sql, connection, _yield$connection$que, _yield$connection$que2, rows;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            val = ' WHERE';
            sql = 'SELECT proxmen.PXM_NUMCTRL, proxmen.PRG_NUMCTRL, programa.PRG_NOMBRE, proxmen.MEN_NUMCTRL, menu.MEN_NOMBRE, menu.MEN_CLAVE, programa.PRG_CLAVE, programa.PRG_DESC, proxmen.PXM_ORDEN, menu.MEN_ICON, menu.MEN_DESC FROM proxmen INNER JOIN programa ON programa.PRG_NUMCTRL = proxmen.PRG_NUMCTRL inner join menu ON menu.MEN_NUMCTRL = proxmen.MEN_NUMCTRL';

            if (req.body.MEN_NUMCTRL) {
              sql += val + ' proxmen.MEN_NUMCTRL = ' + req.body.MEN_NUMCTRL;
              val = ' AND';
            }

            if (req.body.MEN_CLAVE) {
              sql += val + ' menu.MEN_CLAVE = ' + req.body.MEN_CLAVE;
              val = ' AND';
            }

            if (req.body.PRG_NOMBRE) {
              sql += val + ' programa.PRG_NOMBRE LIKE "%' + req.body.PRG_NOMBRE + '%"';
              val = ' AND';
            }

            if (req.body.PRG_DESC) {
              sql += val + ' programa.PRG_DESC LIKE "%' + req.body.PRG_DESC + '%"';
              val = ' AND';
            }

            if (req.body.PRG_CLAVE) {
              sql += val + ' programa.PRG_CLAVE LIKE "%' + req.body.PRG_CLAVE + '%"';
              val = ' AND';
            }

            if (req.body.MEN_NOMBRE) {
              sql += val + ' menu.MEN_NOMBRE LIKE "%' + req.body.MEN_NOMBRE + '%"';
              val = ' AND';
            }

            if (req.body.PXM_ORDEN) {
              sql += val + ' proxmen.PXM_ORDEN LIKE "%' + req.body.PXM_ORDEN + '%"';
              val = ' AND';
            }

            if (req.body.ORDER) {
              sql += ' ORDER BY ' + req.body.ORDER + ' ';
            }

            if (req.body.BY) {
              sql += req.body.BY;
            }

            _context.next = 14;
            return (0, _database.connect)();

          case 14:
            connection = _context.sent;
            _context.next = 17;
            return connection.query(sql);

          case 17:
            _yield$connection$que = _context.sent;
            _yield$connection$que2 = (0, _slicedToArray2["default"])(_yield$connection$que, 1);
            rows = _yield$connection$que2[0];
            res.json(rows);
            _context.next = 26;
            break;

          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](0);
            res.sendStatus(400);

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 23]]);
  }));

  return function getProxmens(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getProxmens = getProxmens;

var getProxmen = /*#__PURE__*/function () {
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
            return connection.query('SELECT proxmen.PXM_NUMCTRL, proxmen.PRG_NUMCTRL, programa.PRG_NOMBRE, proxmen.MEN_NUMCTRL, menu.MEN_NOMBRE, proxmen.PXM_ORDEN FROM proxmen INNER JOIN programa ON programa.PRG_NUMCTRL = proxmen.PRG_NUMCTRL inner join menu ON menu.MEN_NUMCTRL = proxmen.MEN_NUMCTRL WHERE proxmen.MEN_NUMCTRL = ?', [req.params.id]);

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

  return function getProxmen(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getProxmen = getProxmen;

var countProxmens = /*#__PURE__*/function () {
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
            return connection.query('SELECT COUNT(*) FROM proxmen');

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

  return function countProxmens(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.countProxmens = countProxmens;

var createProxmen = /*#__PURE__*/function () {
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
            return connection.query('SELECT * FROM proxmen WHERE MEN_NUMCTRL = ? AND PXM_ORDEN = ?', [req.body.MEN_NUMCTRL, req.body.PXM_ORDEN]);

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
            return connection.query("INSERT INTO proxmen(PRG_NUMCTRL, MEN_NUMCTRL, proxmen.PXM_ORDEN) VALUES (?, ?, ?)", [req.body.PRG_NUMCTRL, req.body.MEN_NUMCTRL, req.body.PXM_ORDEN]);

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

  return function createProxmen(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createProxmen = createProxmen;

var deleteProxmen = /*#__PURE__*/function () {
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
            return connection.query('SELECT * FROM proxmen WHERE PXM_NUMCTRL = ?', [req.params.id]);

          case 6:
            _yield$connection$que11 = _context5.sent;
            _yield$connection$que12 = (0, _slicedToArray2["default"])(_yield$connection$que11, 1);
            orden = _yield$connection$que12[0];
            _context5.next = 11;
            return connection.query('DELETE FROM proxmen WHERE PXM_NUMCTRL = ?', [req.params.id]);

          case 11:
            _context5.next = 13;
            return connection.query('UPDATE proxmen SET PXM_ORDEN = PXM_ORDEN - 1 WHERE PXM_ORDEN > ? AND MEN_NUMCTRL = ?', [orden[0].PXM_ORDEN, orden[0].MEN_NUMCTRL]);

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

  return function deleteProxmen(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteProxmen = deleteProxmen;

var updateProxmen = /*#__PURE__*/function () {
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

            if (!req.body.PXM_ORDEN) {
              _context6.next = 18;
              break;
            }

            _context6.next = 7;
            return connection.query('SELECT * FROM proxmen WHERE PXM_NUMCTRL = ?', [req.params.id]);

          case 7:
            _yield$connection$que15 = _context6.sent;
            _yield$connection$que16 = (0, _slicedToArray2["default"])(_yield$connection$que15, 1);
            orden = _yield$connection$que16[0];

            if (!(orden[0].PXM_ORDEN < req.body.PXM_ORDEN)) {
              _context6.next = 15;
              break;
            }

            _context6.next = 13;
            return connection.query('UPDATE proxmen SET PXM_ORDEN = PXM_ORDEN - 1 WHERE MEN_NUMCTRL = ? AND PXM_ORDEN > ? AND PXM_ORDEN <= ?', [orden[0].MEN_NUMCTRL, orden[0].PXM_ORDEN, req.body.PXM_ORDEN]);

          case 13:
            _context6.next = 18;
            break;

          case 15:
            if (!(orden[0].PXM_ORDEN > req.body.PXM_ORDEN)) {
              _context6.next = 18;
              break;
            }

            _context6.next = 18;
            return connection.query('UPDATE proxmen SET PXM_ORDEN = PXM_ORDEN + 1 WHERE MEN_NUMCTRL = ? AND PXM_ORDEN < ? AND PXM_ORDEN >= ?', [orden[0].MEN_NUMCTRL, orden[0].PXM_ORDEN, req.body.PXM_ORDEN]);

          case 18:
            _context6.next = 20;
            return connection.query('UPDATE proxmen SET ? WHERE PXM_NUMCTRL = ?', [req.body, req.params.id]);

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

  return function updateProxmen(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateProxmen = updateProxmen;