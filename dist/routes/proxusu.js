"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Proxusu = require("../controllers/Proxusu");

var router = (0, _express.Router)();
/**
 * @swagger
 * tags:
 *  name: Proxusus
 *  description: Proxusus endpoint
 */

/**
 * @swagger
 * /Proxusus:
 *  get:
 *      summary: Get all Proxusus
 *      tags: [Proxusus]
 */

router.get('/proxusu', _Proxusu.getProxusus);
/**
 * @swagger
 * /Proxusus/count:
 *  get:
 *      summary: Get total Proxusus count
 *      tags: [Proxusus]
 */

router.get('/proxusu/count', _Proxusu.countProxusus);
/**
 * @swagger
 * /Proxusus/id:
 *  get:
 *      summary: Get a Proxusus
 *      tags: [Proxusus]
 */

router.get('/proxusu/:id', _Proxusu.getProxusu);
/**
 * @swagger
 * /Proxusus:
 *  post:
 *      summary: Create a new Proxusu
 *      tags: [Proxusus]
 */

router.post('/proxusu', _Proxusu.createProxusu);
/**
 * @swagger
 * /Proxusus/id:
 *  put:
 *      summary: Update a Proxusu
 *      tags: [Proxusus]
 */

router.put('/proxusu/:id', _Proxusu.updateProxusu);
/**
 * @swagger
 * /Proxusus/id:
 *  delete:
 *      summary: Delete a Proxusu
 *      tags: [Proxusus]
 */

router["delete"]('/proxusu/:id', _Proxusu.deleteProxusu);
var _default = router;
exports["default"] = _default;