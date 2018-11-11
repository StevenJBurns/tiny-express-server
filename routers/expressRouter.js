const rootRouter = require("express").Router();

const loginRouter = require("./loginRouter");
const registerRouter = require("./registerRouter")


rootRouter.get("/", (req, res, next) => {
  res.end("Welcome Home");
});

rootRouter.get("/admin", (req, res, next) => {
  res.end("Welcome to Admin");
});

rootRouter.use(loginRouter);
rootRouter.use(registerRouter);

rootRouter.get("/randomizer", (req, res, next) => { });

module.exports = rootRouter;