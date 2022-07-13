"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _sucxprv = require("../controllers/sucxprv.js");

var router = (0, _express.Router)();
router.post('/sucxprv', _sucxprv.getSucxprvs);
router.get('/sucxprv/count', _sucxprv.countSucxprvs);
router.get('/sucxprv/:id', _sucxprv.getSucxprv);
router.post('/sucxprv/create', _sucxprv.createSucxprv);
router.put('/sucxprv/:id', _sucxprv.updateSucxprv);
router["delete"]('/sucxprv/:id', _sucxprv.deleteSucxprv);
var _default = router;
exports["default"] = _default;