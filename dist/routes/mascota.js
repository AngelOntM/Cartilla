"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _mascota = require("../controllers/mascota.js");

var router = (0, _express.Router)();
router.post('/mascota', _mascota.getMascotas);
router.get('/mascota/count', _mascota.countMascotas);
router.get('/mascota/:id', _mascota.getMascota);
router.post('/mascota/create', _mascota.createMascota);
router.put('/mascota/:id', _mascota.updateMascota);
router["delete"]('/mascota/:id', _mascota.deleteMascota);
var _default = router;
exports["default"] = _default;