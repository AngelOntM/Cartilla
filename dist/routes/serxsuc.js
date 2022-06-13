"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Serxsuc = require("../controllers/Serxsuc.js");

var router = (0, _express.Router)();
/**
 * @swagger
 * tags:
 *  name: Serxsuc
 *  description: Serxsuc endpoint
 */

/**
 * @swagger
 * /Serxsuc:
 *  post:
 *      summary: Get all Serxsuc
 *      tags: [Serxsuc]
 */

router.post('/Serxsuc', _Serxsuc.getSerxsucs);
/**
 * @swagger
 * /Serxsuc/count:
 *  get:
 *      summary: Get total Serxsuc count
 *      tags: [Serxsuc]
 */

router.get('/Serxsuc/count', _Serxsuc.countSerxsucs);
/**
 * @swagger
 * /Serxsuc/id:
 *  get:
 *      summary: Get a Serxsuc
 *      tags: [Serxsuc]
 */

router.get('/Serxsuc/:id', _Serxsuc.getSerxsuc);
/**
 * @swagger
 * /Serxsuc:
 *  post:
 *      summary: Create a new Serxsuc
 *      tags: [Serxsuc]
 */

router.post('/Serxsuc/create', _Serxsuc.createSerxsuc);
/**
 * @swagger
 * /Serxsuc/id:
 *  put:
 *      summary: Update a Serxsuc
 *      tags: [Serxsuc]
 */

router.put('/Serxsuc/:id', _Serxsuc.updateSerxsuc);
/**
 * @swagger
 * /Serxsuc/id:
 *  delete:
 *      summary: Delete a Serxsuc
 *      tags: [Serxsuc]
 */

router["delete"]('/Serxsuc/:id', _Serxsuc.deleteSerxsuc);
var _default = router;
exports["default"] = _default;