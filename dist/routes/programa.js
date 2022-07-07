"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _programa = require("../controllers/programa.js");

var router = (0, _express.Router)();
/**
 * @swagger
 * tags:
 *  name: Programas
 *  description: Programas endpoint
 */

/**
 * @swagger
 * /Programas:
 *  get:
 *      summary: Get all Programas
 *      tags: [Programas]
 */

router.post('/programa', _programa.getProgramas);
/**
 * @swagger
 * /Programas/count:
 *  get:
 *      summary: Get total Programas count
 *      tags: [Programas]
 */

router.get('/programa/count', _programa.countProgramas);
/**
 * @swagger
 * /Programas/id:
 *  post:
 *      summary: Get a Programas
 *      tags: [Programas]
 */

router.get('/programa/:id', _programa.getPrograma);
/**
 * @swagger
 * /Programas:
 *  post:
 *      summary: Create a new Programa
 *      tags: [Programas]
 */

router.post('/programa/create', _programa.createPrograma);
/**
 * @swagger
 * /Programas/id:
 *  put:
 *      summary: Update a Programa
 *      tags: [Programas]
 */

router.put('/programa/:id', _programa.updatePrograma);
/**
 * @swagger
 * /Programas/id:
 *  delete:
 *      summary: Delete a Programa
 *      tags: [Programas]
 */

router["delete"]('/programa/:id', _programa.deletePrograma);
var _default = router;
exports["default"] = _default;