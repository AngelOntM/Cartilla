"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _usuario = require("../controllers/usuario.js");

var router = (0, _express.Router)();
/**
 * @swagger
 * tags:
 *  name: Usuarios
 *  description: Usuarios endpoint
 */

/**
 * @swagger
 * /usuario/propietario:
 *  get:
 *      summary: Get all Propietarios
 *      tags: [Usuarios]
 */

router.get('/usuario/propietario', _usuario.getPropietarios);
/**
 * @swagger
 * /usuario/proveedor:
 *  get:
 *      summary: Get all Proveedores
 *      tags: [Usuarios]
 */

router.get('/usuario/proveedor', _usuario.getProveedores);
/**
 * @swagger
 * /usuario/supervisor:
 *  get:
 *      summary: Get all Supervisores
 *      tags: [Usuarios]
 */

router.get('/usuario/supervisor', _usuario.getSupervisores);
/**
 * @swagger
 * /usuario/proveedor/id:
 *  get:
 *      summary: Get a Proveedor
 *      tags: [Usuarios]
 */

router.get('/usuario/proveedor/:id', _usuario.getProveedor);
/**
 * @swagger
 * /usuario/propietario/id:
 *  get:
 *      summary: Get a Propietario
 *      tags: [Usuarios]
 */

router.get('/usuario/propietario/:id', _usuario.getPropietario);
/**
 * @swagger
 * /usuario/supervisor/id:
 *  get:
 *      summary: Get a Supervisor
 *      tags: [Usuarios]
 */

router.get('/usuario/supervisor/:id', _usuario.getSupervisor);
/**
 * @swagger
 * /usuario/proveedor/register:
 *  post:
 *      summary: Register a new Proveedor
 *      tags: [Usuarios]
 */

router.post('/usuario/proveedor/register', _usuario.createProveedor);
/**
 * @swagger
 * /usuario/propietario/register:
 *  post:
 *      summary: Register a new Propietario
 *      tags: [Usuarios]
 */

router.post('/usuario/propietario/register', _usuario.createPropietario);
/**
 * @swagger
 * /usuario/supervisor/register:
 *  post:
 *      summary: Register a new Supervisor
 *      tags: [Usuarios]
 */

router.post('/usuario/supervisor/register', _usuario.createSupervisor);
/**
 * @swagger
 * /usuarios/login:
 *  post:
 *      summary: Login a Usuario
 *      tags: [Usuarios]
 */

router.post('/usuario/login', _usuario.loginUsuario);
/**
 * @swagger
 * /usuario/propietario/id:
 *  put:
 *      summary: Update a Propietario
 *      tags: [Usuarios]
 */

router.put('/usuario/propietario/:id', _usuario.updatePropietario);
/**
 * @swagger
 * /usuario/proveedor/id:
 *  put:
 *      summary: Update a Proveedor
 *      tags: [Usuarios]
 */

router.put('/usuario/proveedor/:id', _usuario.updateProveedor);
/**
 * @swagger
 * /usuario/supervisor/id:
 *  put:
 *      summary: Update a Proveedor
 *      tags: [Usuarios]
 */

router.put('/usuario/supervisor/:id', _usuario.updateSupervisor);
/**
 * @swagger
 * /usuario/proveedor/id:
 *  delete:
 *      summary: Delete a Proveedor
 *      tags: [Usuarios]
 */

router["delete"]('/usuario/proveedor/:id', _usuario.deleteProveedor);
/**
 * @swagger
 * /usuario/propietario/id:
 *  delete:
 *      summary: Delete a Propietario
 *      tags: [Usuarios]
 */

router["delete"]('/usuario/propietario/:id', _usuario.deletePropietario);
/**
 * @swagger
 * /usuario/propietario/id:
 *  delete:
 *      summary: Delete a Propietario
 *      tags: [Usuarios]
 */

router["delete"]('/usuario/supervisor/:id', _usuario.deleteSupervisor);
var _default = router;
exports["default"] = _default;