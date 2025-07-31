const express = require("express");
const router = express.Router();

const { createService } = require("../controllers/serviceController");
const verifyToken = require("../middleware/verifyToken");

router.post("/create", verifyToken, createService);

module.exports = router;
