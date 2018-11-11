const chalk = require("chalk");

const rootRouter = require("express").Router();

const loginRouter = require("./loginRouter");
const registerRouter = require("./registerRouter");


rootRouter.all("*", (req, res, next) => {
  console.log(chalk.bgBlue.white(` Incoming ${req.method} request -- URL: ${req.url} `));
  next();
});

rootRouter.get("/", (req, res) => res.send("Welcome Home"));
rootRouter.get("/admin", (req, res, next) => res.send("Welcome to Admin"));
rootRouter.get("/randomizer", (req, res, next) => {
  
});

rootRouter.use("/login", loginRouter);
rootRouter.use("/register", registerRouter);

module.exports = rootRouter;