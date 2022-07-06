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

var _usuario = _interopRequireDefault(require("./routes/usuario.js"));

var _menu = _interopRequireDefault(require("./routes/menu.js"));

var _programa = _interopRequireDefault(require("./routes/programa.js"));

var _raza = _interopRequireDefault(require("./routes/raza.js"));

var _tipousu = _interopRequireDefault(require("./routes/tipousu.js"));

var _proxmen = _interopRequireDefault(require("./routes/proxmen.js"));

var _proxusu = _interopRequireDefault(require("./routes/proxusu.js"));

var _submenu = _interopRequireDefault(require("./routes/submenu.js"));

var _especialidad = _interopRequireDefault(require("./routes/especialidad.js"));

var _mascota = _interopRequireDefault(require("./routes/mascota.js"));

var _vacuna = _interopRequireDefault(require("./routes/vacuna.js"));

var _sucxprv = _interopRequireDefault(require("./routes/sucxprv.js"));

var _serxmas = _interopRequireDefault(require("./routes/serxmas.js"));

var _masfoto = _interopRequireDefault(require("./routes/masfoto.js"));

var _vacxmas = _interopRequireDefault(require("./routes/vacxmas.js"));

var _serxsuc = _interopRequireDefault(require("./routes/serxsuc.js"));

var _espxsuc = _interopRequireDefault(require("./routes/espxsuc.js"));

var _swaggerOptions = require("./swaggerOptions");

var specs = (0, _swaggerJsdoc["default"])(_swaggerOptions.options);
var app = (0, _express["default"])();
app.set("port", 4444);
/**
 * Dependencies
 */

app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
/**
 * Routes
 */

app.use(_especialidad["default"]);
app.use(_espxsuc["default"]);
app.use(_mascota["default"]);
app.use(_masfoto["default"]);
app.use(_menu["default"]);
app.use(_programa["default"]);
app.use(_proxmen["default"]);
app.use(_proxusu["default"]);
app.use(_raza["default"]);
app.use(_serxmas["default"]);
app.use(_serxsuc["default"]);
app.use(_submenu["default"]);
app.use(_sucxprv["default"]);
app.use(_tipousu["default"]);
app.use(_usuario["default"]);
app.use(_vacuna["default"]);
app.use(_vacxmas["default"]);
/**
 * Create Documentation
 */

app.use('/docs', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(specs));
var _default = app;
exports["default"] = _default;