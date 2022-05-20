"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Tipousu = require("../controllers/Tipousu");

var router = (0, _express.Router)();
/**
 * @swagger
 * tags:
 *  name: Tipousus
 *  description: Tipousus endpoint
 */

/**
 * @swagger
 * /Tipousus:
 *  get:
 *      summary: Get all Tipousus
 *      tags: [Tipousus]
 */

router.get('/tipousu', _Tipousu.getTipousus);
/**
 * @swagger
 * /Tipousus/count:
 *  get:
 *      summary: Get total Tipousus count
 *      tags: [Tipousus]
 */

router.get('/tipousu/count', _Tipousu.countTipousus);
/**
 * @swagger
 * /Tipousus/id:
 *  get:
 *      summary: Get a Tipousus
 *      tags: [Tipousus]
 */

router.get('/tipousu/:id', _Tipousu.getTipousu);
/**
 * @swagger
 * /Tipousus:
 *  post:
 *      summary: Create a new Tipousu
 *      tags: [Tipousus]
 */

router.post('/tipousu', _Tipousu.createTipousu);
/**
 * @swagger
 * /Tipousus/id:
 *  put:
 *      summary: Update a Tipousu
 *      tags: [Tipousus]
 */

router.put('/tipousu/:id', _Tipousu.updateTipousu);
/**
 * @swagger
 * /Tipousus/id:
 *  delete:
 *      summary: Delete a Tipousu
 *      tags: [Tipousus]
 */

router["delete"]('/tipousu/:id', _Tipousu.deleteTipousu);
var _default = router;
exports["default"] = _default;