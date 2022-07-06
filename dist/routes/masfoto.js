"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _masfoto = require("../controllers/masfoto.js");

var router = (0, _express.Router)();
/**
 * @swagger
 * tags:
 *  name: Masfoto
 *  description: Masfoto endpoint
 */

/**
 * @swagger
 * /Masfoto:
 *  post:
 *      summary: Get all Masfoto
 *      tags: [Masfoto]
 */

router.post('/masfoto', _masfoto.getMasfotos);
/**
 * @swagger
 * /Masfoto/count:
 *  get:
 *      summary: Get total Masfoto count
 *      tags: [Masfoto]
 */

router.get('/masfoto/count', _masfoto.countMasfotos);
/**
 * @swagger
 * /Masfoto/id:
 *  get:
 *      summary: Get a Masfoto
 *      tags: [Masfoto]
 */

router.get('/masfoto/:id', _masfoto.getMasfoto);
/**
 * @swagger
 * /Masfoto:
 *  post:
 *      summary: Create a new Masfoto
 *      tags: [Masfoto]
 */

router.post('/masfoto/create', _masfoto.createMasfoto);
/**
 * @swagger
 * /Masfoto/id:
 *  put:
 *      summary: Update a Masfoto
 *      tags: [Masfoto]
 */

router.put('/masfoto/:id', _masfoto.updateMasfoto);
/**
 * @swagger
 * /Masfoto/id:
 *  delete:
 *      summary: Delete a Masfoto
 *      tags: [Masfoto]
 */

router["delete"]('/masfoto/:id', _masfoto.deleteMasfoto);
var _default = router;
exports["default"] = _default;