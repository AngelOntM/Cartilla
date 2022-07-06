"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _submenu = require("../controllers/submenu.js");

var router = (0, _express.Router)();
/**
 * @swagger
 * tags:
 *  name: Submenu
 *  description: Submenu endpoint
 */

/**
 * @swagger
 * /Submenu:
 *  post:
 *      summary: Get all Submenu
 *      tags: [Submenu]
 */

router.post('/submenu', _submenu.getSubmenus);
/**
 * @swagger
 * /Submenu/count:
 *  get:
 *      summary: Get total Submenu count
 *      tags: [Submenu]
 */

router.get('/submenu/count', _submenu.countSubmenus);
/**
 * @swagger
 * /Submenu/id:
 *  get:
 *      summary: Get a Submenu
 *      tags: [Submenu]
 */

router.get('/submenu/:id', _submenu.getSubmenu);
/**
 * @swagger
 * /Submenu:
 *  post:
 *      summary: Create a new Submenu
 *      tags: [Submenu]
 */

router.post('/submenu/create', _submenu.createSubmenu);
/**
 * @swagger
 * /Submenu/id:
 *  put:
 *      summary: Update a Submenu
 *      tags: [Submenu]
 */

router.put('/submenu/:id', _submenu.updateSubmenu);
/**
 * @swagger
 * /Submenu/id:
 *  delete:
 *      summary: Delete a Submenu
 *      tags: [Submenu]
 */

router["delete"]('/submenu/:id', _submenu.deleteSubmenu);
var _default = router;
exports["default"] = _default;