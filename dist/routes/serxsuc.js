"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _serxsuc = require("../controllers/serxsuc.js");

var router = (0, _express.Router)();
router.post('/Serxsuc', _serxsuc.getSerxsucs);
router.get('/Serxsuc/count', _serxsuc.countSerxsucs);
router.get('/Serxsuc/:id', _serxsuc.getSerxsuc);
router.post('/Serxsuc/create', _serxsuc.createSerxsuc);
router.put('/Serxsuc/:id', _serxsuc.updateSerxsuc);
router["delete"]('/Serxsuc/:id', _serxsuc.deleteSerxsuc);
var _default = router;
exports["default"] = _default;