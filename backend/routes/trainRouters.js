const express = require("express");
const {
  trainSearch,
  trainAutoSuggestions,
} = require("../Controllers/trainSerachController");
const router = express.Router();

router.post("/search", trainSearch);
router.get("/api/stationSuggestions/:input", trainAutoSuggestions);

module.exports = router;
