"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _proxmen = require("../controllers/proxmen.js");

var router = (0, _express.Router)();
/**
 * @swagger
 * tags:
 *  name: Proxmens
 *  description: Proxmens endpoint
 */

/**
 * @swagger
 * /Proxmens:
 *  post:
 *      summary: Get all Proxmens
 *      tags: [Proxmens]
 */

router.post('/proxmen', _proxmen.getProxmens);
/**
 * @swagger
 * /Proxmens/count:
 *  get:
 *      summary: Get total Proxmens count
 *      tags: [Proxmens]
 */

router.get('/proxmen/count', _proxmen.countProxmens);
/**
 * @swagger
 * /Proxmens/id:
 *  get:
 *      summary: Get a Proxmens
 *      tags: [Proxmens]
 */

router.get('/proxmen/:id', _proxmen.getProxmen);
/**
 * @swagger
 * /Proxmens:
 *  post:
 *      summary: Create a new Proxmen
 *      tags: [Proxmens]
 */

router.post('/proxmen/create', _proxmen.createProxmen);
/**
 * @swagger
 * /Proxmens/id:
 *  put:
 *      summary: Update a Proxmen
 *      tags: [Proxmens]
 */

router.put('/proxmen/:id', _proxmen.updateProxmen);
/**
 * @swagger
 * /Proxmens/id:
 *  delete:
 *      summary: Delete a Proxmen
 *      tags: [Proxmens]
 */

router["delete"]('/proxmen/:id', _proxmen.deleteProxmen);
var _default = router;
exports["default"] = _default;