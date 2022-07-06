"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _espxsuc = require("../controllers/espxsuc.js");

var router = (0, _express.Router)();
/**
 * @swagger
 * tags:
 *  name: Espxsuc
 *  description: Espxsuc endpoint
 */

/**
 * @swagger
 * /Espxsuc:
 *  post:
 *      summary: Get all Espxsuc
 *      tags: [Espxsuc]
 */

router.post('/Espxsuc', _espxsuc.getEspxsucs);
/**
 * @swagger
 * /Espxsuc/count:
 *  get:
 *      summary: Get total Espxsuc count
 *      tags: [Espxsuc]
 */

router.get('/Espxsuc/count', _espxsuc.countEspxsucs);
/**
 * @swagger
 * /Espxsuc/id:
 *  get:
 *      summary: Get a Espxsuc
 *      tags: [Espxsuc]
 */

router.get('/Espxsuc/:id', _espxsuc.getEspxsuc);
/**
 * @swagger
 * /Espxsuc:
 *  post:
 *      summary: Create a new Espxsuc
 *      tags: [Espxsuc]
 */

router.post('/Espxsuc/create', _espxsuc.createEspxsuc);
/**
 * @swagger
 * /Espxsuc/id:
 *  put:
 *      summary: Update a Espxsuc
 *      tags: [Espxsuc]
 */

router.put('/Espxsuc/:id', _espxsuc.updateEspxsuc);
/**
 * @swagger
 * /Espxsuc/id:
 *  delete:
 *      summary: Delete a Espxsuc
 *      tags: [Espxsuc]
 */

router["delete"]('/Espxsuc/:id', _espxsuc.deleteEspxsuc);
var _default = router;
exports["default"] = _default;