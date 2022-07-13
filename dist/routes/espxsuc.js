"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _espxsuc = require("../controllers/espxsuc.js");

var router = (0, _express.Router)();
router.post('/Espxsuc', _espxsuc.getEspxsucs);
router.get('/Espxsuc/count', _espxsuc.countEspxsucs);
router.get('/Espxsuc/:id', _espxsuc.getEspxsuc);
router.post('/Espxsuc/create', _espxsuc.createEspxsuc);
router.put('/Espxsuc/:id', _espxsuc.updateEspxsuc);
router["delete"]('/Espxsuc/:id', _espxsuc.deleteEspxsuc);
var _default = router;
exports["default"] = _default;