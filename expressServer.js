/* Node Dependencies */
const fs = require("fs");
const url = require("url");
const path = require("path");

/* External Dependencies */
const express = require("express");
const favicon = require("serve-favicon");
const chalk = require("chalk");

/* Local Dependencies */
const handleListen = require("./handleListen.js");
const handleRequest = require("./handleRequest.js");
const handleFavicon = require("./handleFavicon.js");
const rootRouter = require("./routers/expressRouter.js");

/* connect Node process.env to .env file */
require("dotenv").config();

/* Clear the console and create an express server */
console.clear();
let server = new express();

/* Set up some middleware */
server.set("appName", process.env.APPNAME);
server.set("view engine", "ejs");
server.disable("x-powered-by");
server.use(favicon(path.join(__dirname, "public", "assets", "favicon.png")));
server.use(rootRouter);

/* Set up routes as middleware to be used by Express Router */
server.get("*", handleRequest);

/* Attach listener and start the server */
server.listen(process.env.PORT_HTTP, handleListen(process.env.PORT_HTTP));