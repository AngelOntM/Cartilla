"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _serxmas = require("../controllers/serxmas.js");

var router = (0, _express.Router)();
/**
 * @swagger
 * tags:
 *  name: Serxmas
 *  description: Serxmas endpoint
 */

/**
 * @swagger
 * /Serxmas:
 *  post:
 *      summary: Get all Serxmas
 *      tags: [Serxmas]
 */

router.post('/serxmas', _serxmas.getSerxmass);
/**
 * @swagger
 * /Serxmas/count:
 *  get:
 *      summary: Get total Serxmas count
 *      tags: [Serxmas]
 */

router.get('/serxmas/count', _serxmas.countSerxmass);
/**
 * @swagger
 * /Serxmas/id:
 *  get:
 *      summary: Get a Serxmas
 *      tags: [Serxmas]
 */

router.get('/serxmas/:id', _serxmas.getSerxmas);
/**
 * @swagger
 * /Serxmas:
 *  post:
 *      summary: Create a new Serxmas
 *      tags: [Serxmas]
 */

router.post('/serxmas/create', _serxmas.createSerxmas);
/**
 * @swagger
 * /Serxmas/id:
 *  put:
 *      summary: Update a Serxmas
 *      tags: [Serxmas]
 */

router.put('/serxmas/:id', _serxmas.updateSerxmas);
/**
 * @swagger
 * /Serxmas/id:
 *  delete:
 *      summary: Delete a Serxmas
 *      tags: [Serxmas]
 */

router["delete"]('/serxmas/:id', _serxmas.deleteSerxmas);
var _default = router;
exports["default"] = _default;