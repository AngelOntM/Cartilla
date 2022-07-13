"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _vacuna = require("../controllers/vacuna.js");

var router = (0, _express.Router)();
router.post('/vacuna', _vacuna.getVacunas);
router.get('/vacuna/count', _vacuna.countVacunas);
router.get('/vacuna/:id', _vacuna.getVacuna);
router.post('/vacuna/create', _vacuna.createVacuna);
router.put('/vacuna/:id', _vacuna.updateVacuna);
router["delete"]('/vacuna/:id', _vacuna.deleteVacuna);
var _default = router;
exports["default"] = _default;