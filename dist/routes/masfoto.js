"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _masfoto = require("../controllers/masfoto.js");

var router = (0, _express.Router)();
router.post('/masfoto', _masfoto.getMasfotos);
router.get('/masfoto/count', _masfoto.countMasfotos);
router.get('/masfoto/:id', _masfoto.getMasfoto);
router.post('/masfoto/create', _masfoto.createMasfoto);
router.put('/masfoto/:id', _masfoto.updateMasfoto);
router["delete"]('/masfoto/:id', _masfoto.deleteMasfoto);
var _default = router;
exports["default"] = _default;