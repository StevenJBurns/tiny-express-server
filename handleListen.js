const chalk = require("chalk");

module.exports = handleListen = (port) => {
    console.log(chalk.bgBlackBright.white(` Express Server started: ${process.env.APPNAME} `));
    console.log(chalk.bgBlackBright.white(` Listening on port ${port} `));
}
