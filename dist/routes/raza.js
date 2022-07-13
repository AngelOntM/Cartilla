"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _raza = require("../controllers/raza.js");

var router = (0, _express.Router)();
router.post('/raza', _raza.getRazas);
router.get('/raza/count', _raza.countRazas);
router.get('/raza/:id', _raza.getRaza);
router.post('/raza/create', _raza.createRaza);
router.put('/raza/:id', _raza.updateRaza);
router["delete"]('/raza/:id', _raza.deleteRaza);
var _default = router;
exports["default"] = _default;