/* Node Dependencies */
const fs = require("fs");
const url = require("url");
const path = require("path");

/* External Dependencies */
const chalk = require("chalk");
const express = require("express");

/* Local Dependencies */
const handleListen = require("./handleListen.js");

/* connect Node process.env to .env file */
require("dotenv").config();

/* create server similar to Node http */
let app = new express();

/* set up some basic routes */
app.get("*", (req, res, next) => {
   console.log(chalk.bgBlue.white(` Incoming GET request -- URL: ${req.url} `));
   next();
});

app.get("/", (req, res) => res.end("Welcome Home"));
app.get("/admin", (req, res) => res.end("Welcome to Admin"));

/* attach listener to server */
app.listen(process.env.PORT_HTTP, handleListen(process.env.PORT_HTTP));