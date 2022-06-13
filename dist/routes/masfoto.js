"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Masfoto = require("../controllers/Masfoto.js");

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

router.post('/masfoto', _Masfoto.getMasfotos);
/**
 * @swagger
 * /Masfoto/count:
 *  get:
 *      summary: Get total Masfoto count
 *      tags: [Masfoto]
 */

router.get('/masfoto/count', _Masfoto.countMasfotos);
/**
 * @swagger
 * /Masfoto/id:
 *  get:
 *      summary: Get a Masfoto
 *      tags: [Masfoto]
 */

router.get('/masfoto/:id', _Masfoto.getMasfoto);
/**
 * @swagger
 * /Masfoto:
 *  post:
 *      summary: Create a new Masfoto
 *      tags: [Masfoto]
 */

router.post('/masfoto/create', _Masfoto.createMasfoto);
/**
 * @swagger
 * /Masfoto/id:
 *  put:
 *      summary: Update a Masfoto
 *      tags: [Masfoto]
 */

router.put('/masfoto/:id', _Masfoto.updateMasfoto);
/**
 * @swagger
 * /Masfoto/id:
 *  delete:
 *      summary: Delete a Masfoto
 *      tags: [Masfoto]
 */

router["delete"]('/masfoto/:id', _Masfoto.deleteMasfoto);
var _default = router;
exports["default"] = _default;