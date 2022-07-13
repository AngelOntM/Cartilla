"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _vacxmas = require("../controllers/vacxmas.js");

var router = (0, _express.Router)();
router.post('/Vacxmas', _vacxmas.getVacxmass);
router.get('/Vacxmas/count', _vacxmas.countVacxmass);
router.get('/Vacxmas/:id', _vacxmas.getVacxmas);
router.post('/Vacxmas/create', _vacxmas.createVacxmas);
router.put('/Vacxmas/:id', _vacxmas.updateVacxmas);
router["delete"]('/Vacxmas/:id', _vacxmas.deleteVacxmas);
var _default = router;
exports["default"] = _default;