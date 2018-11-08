/* Node Dependencies */
const fs = require("fs");
const url = require("url");
const path = require("path");

/* External Dependencies */
const express = require("express");
const chalk = require("chalk");

/* Local Dependencies */
const handleListen = require("./handleListen.js");
const handleRequest = require("./handleRequest.js");

/* connect Node process.env to .env file */
require("dotenv").config();

/* create server similar to Node http */
let server = new express();

/* set up some basic routes */
server.set("appName", process.env.APPNAME);
// app.get("*", handleRequest);
server.get("/", handleRequest);
server.get("/admin", handleRequest);

/* attach listener to server */
server.listen(process.env.PORT_HTTP, handleListen(process.env.PORT_HTTP));