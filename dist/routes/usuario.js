"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Usuario = require("../controllers/Usuario");

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

router.get('/usuario/propietario', _Usuario.getPropietarios);
/**
 * @swagger
 * /usuario/proveedor:
 *  get:
 *      summary: Get all Proveedores
 *      tags: [Usuarios]
 */

router.get('/usuario/proveedor', _Usuario.getProveedores);
/**
 * @swagger
 * /usuario/proveedor/id:
 *  get:
 *      summary: Get a Proveedor
 *      tags: [Usuarios]
 */

router.get('/usuario/proveedor/:id', _Usuario.getProveedor);
/**
 * @swagger
 * /usuario/propietario/id:
 *  get:
 *      summary: Get a Propietario
 *      tags: [Usuarios]
 */

router.get('/usuario/propietario/:id', _Usuario.getPropietario);
/**
 * @swagger
 * /usuario/proveedor/register:
 *  post:
 *      summary: Register a new Proveedor
 *      tags: [Usuarios]
 */

router.post('/usuario/proveedor/register', _Usuario.createProveedor);
/**
 * @swagger
 * /usuario/propietario/register:
 *  post:
 *      summary: Register a new Propietario
 *      tags: [Usuarios]
 */

router.post('/usuario/propietario/register', _Usuario.createPropietario);
/**
 * @swagger
 * /usuarios/login:
 *  post:
 *      summary: Login a Usuario
 *      tags: [Usuarios]
 */

router.post('/usuario/login', _Usuario.loginUsuario);
/**
 * @swagger
 * /usuario/propietario/id:
 *  put:
 *      summary: Update a Propietario
 *      tags: [Usuarios]
 */

router.put('/usuario/propietario/:id', _Usuario.updatePropietario);
/**
 * @swagger
 * /usuario/proveedor/id:
 *  put:
 *      summary: Update a Proveedor
 *      tags: [Usuarios]
 */

router.put('/usuario/proveedor/:id', _Usuario.updateProveedor);
/**
 * @swagger
 * /usuario/proveedor/id:
 *  delete:
 *      summary: Delete a Proveedor
 *      tags: [Usuarios]
 */

router["delete"]('/usuario/proveedor/:id', _Usuario.deleteProveedor);
/**
 * @swagger
 * /usuario/propietario/id:
 *  delete:
 *      summary: Delete a Propietario
 *      tags: [Usuarios]
 */

router["delete"]('/usuario/propietario/:id', _Usuario.deletePropietario);
var _default = router;
exports["default"] = _default;