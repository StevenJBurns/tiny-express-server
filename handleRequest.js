const chalk = require("chalk");

module.exports = handleRequest = (req, res, next) => {
  console.log(chalk.bgBlue.white(` Incoming GET request -- URL: ${req.url} `));

  // (req, res) => res.end("Welcome Home")
  // (req, res) => res.end("Welcome to Admin")

  next();
}