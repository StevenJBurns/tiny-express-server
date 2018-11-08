const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.end("Welcome Home");
})

router.get("/admin", (req, res, next) => {
  res.end("Welcome to Admin");
});

module.exports = router;