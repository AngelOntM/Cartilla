"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _especialidad = require("../controllers/especialidad.js");

var router = (0, _express.Router)();
router.post('/especialidad', _especialidad.getEspecialidades);
router.get('/especialidad/count', _especialidad.countEspecialidades);
router.get('/especialidad/:id', _especialidad.getEspecialidad);
router.post('/especialidad/create', _especialidad.createEspecialidad);
router.put('/especialidad/:id', _especialidad.updateEspecialidad);
router["delete"]('/especialidad/:id', _especialidad.deleteEspecialidad);
var _default = router;
exports["default"] = _default;