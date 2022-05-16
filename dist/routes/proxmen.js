"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Proxmen = require("../controllers/Proxmen");

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
 *  get:
 *      summary: Get all Proxmens
 *      tags: [Proxmens]
 */

router.get('/proxmen', _Proxmen.getProxmens);
/**
 * @swagger
 * /Proxmens/count:
 *  get:
 *      summary: Get total Proxmens count
 *      tags: [Proxmens]
 */

router.get('/proxmen/count', _Proxmen.countProxmens);
/**
 * @swagger
 * /Proxmens/id:
 *  get:
 *      summary: Get a Proxmens
 *      tags: [Proxmens]
 */

router.get('/proxmen/:id', _Proxmen.getProxmen);
/**
 * @swagger
 * /Proxmens:
 *  post:
 *      summary: Create a new Proxmen
 *      tags: [Proxmens]
 */

router.post('/proxmen', _Proxmen.createProxmen);
/**
 * @swagger
 * /Proxmens/id:
 *  put:
 *      summary: Update a Proxmen
 *      tags: [Proxmens]
 */

router.put('/proxmen/:id', _Proxmen.updateProxmen);
/**
 * @swagger
 * /Proxmens/id:
 *  delete:
 *      summary: Delete a Proxmen
 *      tags: [Proxmens]
 */

router["delete"]('/proxmen/:id', _Proxmen.deleteProxmen);
var _default = router;
exports["default"] = _default;