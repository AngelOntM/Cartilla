"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _mascota = require("../controllers/mascota.js");

var router = (0, _express.Router)();
/**
 * @swagger
 * tags:
 *  name: Mascota
 *  description: Mascota endpoint
 */

/**
 * @swagger
 * /Mascota:
 *  post:
 *      summary: Get all Mascota
 *      tags: [Mascota]
 */

router.post('/mascota', _mascota.getMascotas);
/**
 * @swagger
 * /Mascota/count:
 *  get:
 *      summary: Get total Mascota count
 *      tags: [Mascota]
 */

router.get('/mascota/count', _mascota.countMascotas);
/**
 * @swagger
 * /Mascota/id:
 *  get:
 *      summary: Get a Mascota
 *      tags: [Mascota]
 */

router.get('/mascota/:id', _mascota.getMascota);
/**
 * @swagger
 * /Mascota:
 *  post:
 *      summary: Create a new Mascota
 *      tags: [Mascota]
 */

router.post('/mascota/create', _mascota.createMascota);
/**
 * @swagger
 * /Mascota/id:
 *  put:
 *      summary: Update a Mascota
 *      tags: [Mascota]
 */

router.put('/mascota/:id', _mascota.updateMascota);
/**
 * @swagger
 * /Mascota/id:
 *  delete:
 *      summary: Delete a Mascota
 *      tags: [Mascota]
 */

router["delete"]('/mascota/:id', _mascota.deleteMascota);
var _default = router;
exports["default"] = _default;