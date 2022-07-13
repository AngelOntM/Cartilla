"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _proxmen = require("../controllers/proxmen.js");

var router = (0, _express.Router)();
router.post('/proxmen', _proxmen.getProxmens);
router.get('/proxmen/count', _proxmen.countProxmens);
router.get('/proxmen/:id', _proxmen.getProxmen);
router.post('/proxmen/create', _proxmen.createProxmen);
router.put('/proxmen/:id', _proxmen.updateProxmen);
router["delete"]('/proxmen/:id', _proxmen.deleteProxmen);
var _default = router;
exports["default"] = _default;