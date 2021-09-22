const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Mother fucker");
});
router.get("/join", (req, res) => {
  res.send("Hello Mother fucker!! you are in join");
});
module.exports = router;
