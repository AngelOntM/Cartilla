"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _vacuna = require("../controllers/vacuna.js");

var router = (0, _express.Router)();
/**
 * @swagger
 * tags:
 *  name: Vacuna
 *  description: Vacuna endpoint
 */

/**
 * @swagger
 * /Vacuna:
 *  post:
 *      summary: Get all Vacuna
 *      tags: [Vacuna]
 */

router.post('/vacuna', _vacuna.getVacunas);
/**
 * @swagger
 * /Vacuna/count:
 *  get:
 *      summary: Get total Vacuna count
 *      tags: [Vacuna]
 */

router.get('/vacuna/count', _vacuna.countVacunas);
/**
 * @swagger
 * /Vacuna/id:
 *  get:
 *      summary: Get a Vacuna
 *      tags: [Vacuna]
 */

router.get('/vacuna/:id', _vacuna.getVacuna);
/**
 * @swagger
 * /Vacuna:
 *  post:
 *      summary: Create a new Vacuna
 *      tags: [Vacuna]
 */

router.post('/vacuna/create', _vacuna.createVacuna);
/**
 * @swagger
 * /Vacuna/id:
 *  put:
 *      summary: Update a Vacuna
 *      tags: [Vacuna]
 */

router.put('/vacuna/:id', _vacuna.updateVacuna);
/**
 * @swagger
 * /Vacuna/id:
 *  delete:
 *      summary: Delete a Vacuna
 *      tags: [Vacuna]
 */

router["delete"]('/vacuna/:id', _vacuna.deleteVacuna);
var _default = router;
exports["default"] = _default;