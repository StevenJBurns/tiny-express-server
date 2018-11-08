const chalk = require("chalk");
const dotenv = require("dotenv");

module.exports = handleListen = (port) => {
    //console.clear();
    console.log(chalk.bgBlackBright.white(` Express Server started: ${process.env.APPNAME} `));
    console.log(chalk.bgBlackBright.white(` Listening on port ${port} `));
}
