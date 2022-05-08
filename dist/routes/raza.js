"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _raza = require("../controllers/raza");

var router = (0, _express.Router)();
/**
 * @swagger
 * tags:
 *  name: Razas
 *  description: Razas endpoint
 */

/**
 * @swagger
 * /Razas:
 *  get:
 *      summary: Get all Razas
 *      tags: [Razas]
 */

router.get('/raza', _raza.getRazas);
/**
 * @swagger
 * /Razas/count:
 *  get:
 *      summary: Get total Razas count
 *      tags: [Razas]
 */

router.get('/raza/count', _raza.countRazas);
/**
 * @swagger
 * /Razas/id:
 *  get:
 *      summary: Get a Razas
 *      tags: [Razas]
 */

router.get('/raza/:id', _raza.getRaza);
/**
 * @swagger
 * /Razas:
 *  post:
 *      summary: Create a new Raza
 *      tags: [Razas]
 */

router.post('/raza', _raza.createRaza);
/**
 * @swagger
 * /Razas/id:
 *  put:
 *      summary: Update a Raza
 *      tags: [Razas]
 */

router.put('/raza/:id', _raza.updateRaza);
/**
 * @swagger
 * /Razas/id:
 *  delete:
 *      summary: Delete a Raza
 *      tags: [Razas]
 */

router["delete"]('/raza/:id', _raza.deleteRaza);
var _default = router;
exports["default"] = _default;