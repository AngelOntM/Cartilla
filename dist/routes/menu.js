"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _menu = require("../controllers/menu.js");

var router = (0, _express.Router)();
/**
 * @swagger
 * tags:
 *  name: Menu
 *  description: Menu endpoint
 */

/**
 * @swagger
 * /menu:
 *  post:
 *      summary: Get all menu
 *      tags: [Menu]
 */

router.post('/menu', _menu.getMenus);
/**
 * @swagger
 * /menu/count:
 *  get:
 *      summary: Get total menu count
 *      tags: [Menu]
 */

router.get('/menu/count', _menu.countMenus);
/**
 * @swagger
 * /menu/id:
 *  get:
 *      summary: Get a menu
 *      tags: [Menu]
 */

router.get('/menu/:id', _menu.getMenu);
/**
 * @swagger
 * /menu:
 *  post:
 *      summary: Create a new menu
 *      tags: [Menu]
 */

router.post('/menu/create', _menu.createMenu);
/**
 * @swagger
 * /menu/id:
 *  put:
 *      summary: Update a menu
 *      tags: [Menu]
 */

router.put('/menu/:id', _menu.updateMenu);
/**
 * @swagger
 * /menu/id:
 *  delete:
 *      summary: Delete a menu
 *      tags: [Menu]
 */

router["delete"]('/menu/:id', _menu.deleteMenu);
var _default = router;
exports["default"] = _default;