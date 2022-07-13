"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _serxmas = require("../controllers/serxmas.js");

var router = (0, _express.Router)();
router.post('/serxmas', _serxmas.getSerxmass);
router.get('/serxmas/count', _serxmas.countSerxmass);
router.get('/serxmas/:id', _serxmas.getSerxmas);
router.post('/serxmas/create', _serxmas.createSerxmas);
router.put('/serxmas/:id', _serxmas.updateSerxmas);
router["delete"]('/serxmas/:id', _serxmas.deleteSerxmas);
var _default = router;
exports["default"] = _default;