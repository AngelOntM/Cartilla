"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _modxtipu = require("../controllers/modxtipu.js");

var router = (0, _express.Router)();
router.post('/modxtipu', _modxtipu.getModxtipus);
router.get('/modxtipu/count', _modxtipu.countModxtipus);
router.get('/modxtipu/:id', _modxtipu.getModxtipu);
router.post('/modxtipu/create', _modxtipu.createModxtipu);
router.put('/modxtipu/:id', _modxtipu.updateModxtipu);
router["delete"]('/modxtipu/:id', _modxtipu.deleteModxtipu);
var _default = router;
exports["default"] = _default;