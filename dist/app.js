"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _usuario = _interopRequireDefault(require("./routes/usuario"));

var _menu = _interopRequireDefault(require("./routes/menu"));

var _programa = _interopRequireDefault(require("./routes/programa"));

var _raza = _interopRequireDefault(require("./routes/raza"));

var _swaggerOptions = require("./swaggerOptions");

var specs = (0, _swaggerJsdoc["default"])(_swaggerOptions.options);
var app = (0, _express["default"])();
/**
 * Dependencies
 */

app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
/**
 * Routes
 */

app.use(_usuario["default"]);
app.use(_menu["default"]);
app.use(_programa["default"]);
app.use(_raza["default"]);
/**
 * Create Documentation
 */

app.use('/docs', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(specs));
var _default = app;
exports["default"] = _default;