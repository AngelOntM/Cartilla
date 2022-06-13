"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _sucxprv = require("../controllers/sucxprv.js");

var router = (0, _express.Router)();
/**
 * @swagger
 * tags:
 *  name: Sucxprv
 *  description: Sucxprv endpoint
 */

/**
 * @swagger
 * /Sucxprv:
 *  post:
 *      summary: Get all Sucxprv
 *      tags: [Sucxprv]
 */

router.post('/sucxprv', _sucxprv.getSucxprvs);
/**
 * @swagger
 * /Sucxprv/count:
 *  get:
 *      summary: Get total Sucxprv count
 *      tags: [Sucxprv]
 */

router.get('/sucxprv/count', _sucxprv.countSucxprvs);
/**
 * @swagger
 * /Sucxprv/id:
 *  get:
 *      summary: Get a Sucxprv
 *      tags: [Sucxprv]
 */

router.get('/sucxprv/:id', _sucxprv.getSucxprv);
/**
 * @swagger
 * /Sucxprv:
 *  post:
 *      summary: Create a new Sucxprv
 *      tags: [Sucxprv]
 */

router.post('/sucxprv/create', _sucxprv.createSucxprv);
/**
 * @swagger
 * /Sucxprv/id:
 *  put:
 *      summary: Update a Sucxprv
 *      tags: [Sucxprv]
 */

router.put('/sucxprv/:id', _sucxprv.updateSucxprv);
/**
 * @swagger
 * /Sucxprv/id:
 *  delete:
 *      summary: Delete a Sucxprv
 *      tags: [Sucxprv]
 */

router["delete"]('/sucxprv/:id', _sucxprv.deleteSucxprv);
var _default = router;
exports["default"] = _default;