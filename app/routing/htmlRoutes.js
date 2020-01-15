var path = require("path");
var express = require("express");
var route = express.Router();

route.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/home.html"));
});

route.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/survey.html"));
});

module.exports = route;