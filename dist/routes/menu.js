"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _menu = require("../controllers/menu.js");

var router = (0, _express.Router)();
router.post('/menu', _menu.getMenus);
router.get('/menu/count', _menu.countMenus);
router.get('/menu/:id', _menu.getMenu);
router.post('/menu/create', _menu.createMenu);
router.put('/menu/:id', _menu.updateMenu);
router["delete"]('/menu/:id', _menu.deleteMenu);
var _default = router;
exports["default"] = _default;