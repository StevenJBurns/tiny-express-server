const registerRouter = require("express").Router();

registerRouter.get("/", (req, res) => {
    res.send('GET handler for /register route.');
  });
  
  registerRouter.post("/", (req, res) => {
    res.send('POST handler for /register route.');
  });

module.exports = registerRouter;
