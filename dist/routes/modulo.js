"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Modulo = require("../controllers/Modulo.js");

var router = (0, _express.Router)();
router.post('/modulo', _Modulo.getModulos);
router.get('/modulo/count', _Modulo.countModulos);
router.get('/modulo/:id', _Modulo.getModulo);
router.post('/modulo/create', _Modulo.createModulo);
router.put('/modulo/:id', _Modulo.updateModulo);
router["delete"]('/modulo/:id', _Modulo.deleteModulo);
var _default = router;
exports["default"] = _default;