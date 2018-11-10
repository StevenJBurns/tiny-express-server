const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.end("Welcome Home");
});

router.get("/admin", (req, res, next) => {
  res.end("Welcome to Admin");
});

router.get("/login", (req, res, next) => {

});

router.post("/login", (req, res, next) =>{

});

router.get("/register", (req, res, next) =>{

});

router.post("/register", (req, res, next) =>{

});

router.get("/randomquestion", (req, res, next) => {

});

module.exports = router;