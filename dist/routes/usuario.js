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
 * /Usuarios:
 *  get:
 *      summary: Get all Usuarios
 *      tags: [Usuarios]
 */

router.get('/usuario', _Usuario.getUsuarios);
/**
 * @swagger
 * /Usuarios/count:
 *  get:
 *      summary: Get total Usuarios count
 *      tags: [Usuarios]
 */

router.get('/usuario/count', _Usuario.countUsuarios);
/**
 * @swagger
 * /Usuarios/id:
 *  get:
 *      summary: Get all Usuarios
 *      tags: [Usuarios]
 */

router.get('/usuario/:id', _Usuario.getUsuario);
/**
 * @swagger
 * /Usuarios:
 *  post:
 *      summary: Create a new Usuario
 *      tags: [Usuarios]
 */

router.post('/usuario', _Usuario.createUsuario);
/**
 * @swagger
 * /Usuarios/id:
 *  put:
 *      summary: Update a Usuario
 *      tags: [Usuarios]
 */

router.put('/usuario/:id', _Usuario.updateUsuario);
/**
 * @swagger
 * /Usuarios/id:
 *  delete:
 *      summary: Delete a Usuario
 *      tags: [Usuarios]
 */

router["delete"]('/usuario/:id', _Usuario.deleteUsuario);
var _default = router;
exports["default"] = _default;