const chalk = require("chalk");

module.exports = handleRequest = (req, res, next) => {
  console.log(chalk.bgBlue.white(` Incoming ${req.method} request -- URL: ${req.url} `));
  
  next();
}