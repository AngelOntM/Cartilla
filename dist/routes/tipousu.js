"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tipousu = require("../controllers/tipousu.js");

var router = (0, _express.Router)();
router.post('/tipousu', _tipousu.getTipousus);
router.get('/tipousu/count', _tipousu.countTipousus);
router.get('/tipousu/:id', _tipousu.getTipousu);
router.post('/tipousu/create', _tipousu.createTipousu);
router.put('/tipousu/:id', _tipousu.updateTipousu);
router["delete"]('/tipousu/:id', _tipousu.deleteTipousu);
var _default = router;
exports["default"] = _default;