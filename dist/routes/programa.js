"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _programa = require("../controllers/programa.js");

var router = (0, _express.Router)();
router.post('/programa', _programa.getProgramas);
router.get('/programa/count', _programa.countProgramas);
router.get('/programa/:id', _programa.getPrograma);
router.post('/programa/create', _programa.createPrograma);
router.put('/programa/:id', _programa.updatePrograma);
router["delete"]('/programa/:id', _programa.deletePrograma);
var _default = router;
exports["default"] = _default;