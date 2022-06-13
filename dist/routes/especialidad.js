"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _especialidad = require("../controllers/especialidad.js");

var router = (0, _express.Router)();
/**
 * @swagger
 * tags:
 *  name: Especialidad
 *  description: Especialidad endpoint
 */

/**
 * @swagger
 * /Especialidad:
 *  post:
 *      summary: Get all Especialidad
 *      tags: [Especialidad]
 */

router.post('/especialidad', _especialidad.getEspecialidades);
/**
 * @swagger
 * /Especialidad/count:
 *  get:
 *      summary: Get total Especialidad count
 *      tags: [Especialidad]
 */

router.get('/especialidad/count', _especialidad.countEspecialidades);
/**
 * @swagger
 * /Especialidad/id:
 *  get:
 *      summary: Get a Especialidad
 *      tags: [Especialidad]
 */

router.get('/especialidad/:id', _especialidad.getEspecialidad);
/**
 * @swagger
 * /Especialidad:
 *  post:
 *      summary: Create a new Especialidad
 *      tags: [Especialidad]
 */

router.post('/especialidad/create', _especialidad.createEspecialidad);
/**
 * @swagger
 * /Especialidad/id:
 *  put:
 *      summary: Update a Especialidad
 *      tags: [Especialidad]
 */

router.put('/especialidad/:id', _especialidad.updateEspecialidad);
/**
 * @swagger
 * /Especialidad/id:
 *  delete:
 *      summary: Delete a Especialidad
 *      tags: [Especialidad]
 */

router["delete"]('/especialidad/:id', _especialidad.deleteEspecialidad);
var _default = router;
exports["default"] = _default;