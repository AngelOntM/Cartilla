"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _vacuna = require("../controllers/vacuna");

var router = (0, _express.Router)();
/**
 * @swagger
 * tags:
 *  name: Vacunas
 *  description: Vacunas endpoint
 */

/**
 * @swagger
 * /Vacunas:
 *  get:
 *      summary: Get all Vacunas
 *      tags: [Vacunas]
 */

router.get('/vacuna', _vacuna.getVacunas);
/**
 * @swagger
 * /Vacunas/count:
 *  get:
 *      summary: Get total Vacunas count
 *      tags: [Vacunas]
 */

router.get('/vacuna/count', _vacuna.countVacunas);
/**
 * @swagger
 * /Vacunas/id:
 *  get:
 *      summary: Get all Vacunas
 *      tags: [Vacunas]
 */

router.get('/vacuna/:id', _vacuna.getVacuna);
/**
 * @swagger
 * /Vacunas:
 *  post:
 *      summary: Create a new Vacuna
 *      tags: [Vacunas]
 */

router.post('/vacuna', _vacuna.createVacuna);
/**
 * @swagger
 * /Vacunas/id:
 *  put:
 *      summary: Update a Vacuna
 *      tags: [Vacunas]
 */

router.put('/vacuna/:id', _vacuna.updateVacuna);
/**
 * @swagger
 * /Vacunas/id:
 *  delete:
 *      summary: Delete a Vacuna
 *      tags: [Vacunas]
 */

router["delete"]('/vacuna/:id', _vacuna.deleteVacuna);
var _default = router;
exports["default"] = _default;