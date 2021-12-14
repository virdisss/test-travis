const express = require("express");
const router = express.Router();
const calculateController = require("../controllers/caculate");

router.get("/ping", (req, res, next) => {
  res.send({ success: true });
});

router.post("/", calculateController.calculate);

module.exports = router;
