var path = require("path");

module.exports = function (route) {

    route.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    route.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
};