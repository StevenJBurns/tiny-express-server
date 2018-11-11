const loginRouter = require("express").Router();

loginRouter.get("/", (req, res) => {
  res.send('GET handler for /login route.');
});

loginRouter.post("/", (req, res) => {
  res.send('POST handler for /login route.');
});

module.exports = loginRouter;
