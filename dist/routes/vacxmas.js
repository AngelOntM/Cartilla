"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _vacxmas = require("../controllers/vacxmas.js");

var router = (0, _express.Router)();
/**
 * @swagger
 * tags:
 *  name: Vacxmas
 *  description: Vacxmas endpoint
 */

/**
 * @swagger
 * /Vacxmas:
 *  post:
 *      summary: Get all Vacxmas
 *      tags: [Vacxmas]
 */

router.post('/Vacxmas', _vacxmas.getVacxmass);
/**
 * @swagger
 * /Vacxmas/count:
 *  get:
 *      summary: Get total Vacxmas count
 *      tags: [Vacxmas]
 */

router.get('/Vacxmas/count', _vacxmas.countVacxmass);
/**
 * @swagger
 * /Vacxmas/id:
 *  get:
 *      summary: Get a Vacxmas
 *      tags: [Vacxmas]
 */

router.get('/Vacxmas/:id', _vacxmas.getVacxmas);
/**
 * @swagger
 * /Vacxmas:
 *  post:
 *      summary: Create a new Vacxmas
 *      tags: [Vacxmas]
 */

router.post('/Vacxmas/create', _vacxmas.createVacxmas);
/**
 * @swagger
 * /Vacxmas/id:
 *  put:
 *      summary: Update a Vacxmas
 *      tags: [Vacxmas]
 */

router.put('/Vacxmas/:id', _vacxmas.updateVacxmas);
/**
 * @swagger
 * /Vacxmas/id:
 *  delete:
 *      summary: Delete a Vacxmas
 *      tags: [Vacxmas]
 */

router["delete"]('/Vacxmas/:id', _vacxmas.deleteVacxmas);
var _default = router;
exports["default"] = _default;