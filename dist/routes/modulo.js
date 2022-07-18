"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _modulo = require("../controllers/modulo.js");

var router = (0, _express.Router)();
router.post('/modulo', _modulo.getModulos);
router.get('/modulo/count', _modulo.countModulos);
router.get('/modulo/:id', _modulo.getModulo);
router.post('/modulo/create', _modulo.createModulo);
router.put('/modulo/:id', _modulo.updateModulo);
router["delete"]('/modulo/:id', _modulo.deleteModulo);
var _default = router;
exports["default"] = _default;