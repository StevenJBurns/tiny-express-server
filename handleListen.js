const chalk = require("chalk");

module.exports = handleListen = (port) => {
    console.clear();
    console.log(chalk.bgBlackBright.white(` Express Server started.  Listening on port ${port} `));
}
