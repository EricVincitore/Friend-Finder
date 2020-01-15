var friendData = require("../data/friends");
var express = require("express");
var route = express.Router();

route.get("/api/friends", function (req, res) {
    res.json(friendData);
});

route.post("/api/friends", function (req, res) {
    friendData.push(req.body);
    res.json(true);
});

module.exports = route