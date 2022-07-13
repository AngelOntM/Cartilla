"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _usuario = require("../controllers/usuario.js");

var router = (0, _express.Router)();
router.get('/usuario/propietario', _usuario.getPropietarios);
router.get('/usuario/proveedor', _usuario.getProveedores);
router.get('/usuario/supervisor', _usuario.getSupervisores);
router.get('/usuario/proveedor/:id', _usuario.getProveedor);
router.get('/usuario/propietario/:id', _usuario.getPropietario);
router.get('/usuario/supervisor/:id', _usuario.getSupervisor);
router.post('/usuario/proveedor/register', _usuario.createProveedor);
router.post('/usuario/propietario/register', _usuario.createPropietario);
router.post('/usuario/supervisor/register', _usuario.createSupervisor);
router.post('/usuario/login', _usuario.loginUsuario);
router.put('/usuario/propietario/:id', _usuario.updatePropietario);
router.put('/usuario/proveedor/:id', _usuario.updateProveedor);
router.put('/usuario/supervisor/:id', _usuario.updateSupervisor);
router["delete"]('/usuario/proveedor/:id', _usuario.deleteProveedor);
router["delete"]('/usuario/propietario/:id', _usuario.deletePropietario);
router["delete"]('/usuario/supervisor/:id', _usuario.deleteSupervisor);
var _default = router;
exports["default"] = _default;