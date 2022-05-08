"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Tipo = require("../controllers/Tipo");

var router = (0, _express.Router)();
/**
 * @swagger
 * tags:
 *  name: Tipos
 *  description: Tipos endpoint
 */

/**
 * @swagger
 * /Tipos:
 *  get:
 *      summary: Get all Tipos
 *      tags: [Tipos]
 */

router.get('/tipo', _Tipo.getTipos);
/**
 * @swagger
 * /Tipos/count:
 *  get:
 *      summary: Get total Tipos count
 *      tags: [Tipos]
 */

router.get('/tipo/count', _Tipo.countTipos);
/**
 * @swagger
 * /Tipos/id:
 *  get:
 *      summary: Get all Tipos
 *      tags: [Tipos]
 */

router.get('/tipo/:id', _Tipo.getTipo);
/**
 * @swagger
 * /Tipos:
 *  post:
 *      summary: Create a new Tipo
 *      tags: [Tipos]
 */

router.post('/tipo', _Tipo.createTipo);
/**
 * @swagger
 * /Tipos/id:
 *  put:
 *      summary: Update a Tipo
 *      tags: [Tipos]
 */

router.put('/tipo/:id', _Tipo.updateTipo);
/**
 * @swagger
 * /Tipos/id:
 *  delete:
 *      summary: Delete a Tipo
 *      tags: [Tipos]
 */

router["delete"]('/tipo/:id', _Tipo.deleteTipo);
var _default = router;
exports["default"] = _default;