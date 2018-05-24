/* dependencies */

const fs = require("fs");
const url = require("url");
const path = require("path");

const chalk = require("chalk");
const express = require("express");

require("dotenv").config();

let app = new express();



app.listen(process.env.PORT, () => {
  console.clear();
  console.log(chalk.green(`Express Server start.  Listening on port ${process.env.PORT}`));
});
