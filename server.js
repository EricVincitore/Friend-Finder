var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//required routing
// require("./routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);
require("./app/routes/apiRoutes")(app);


//listener for local host port
app.listen(PORT, function () {
    console.log("App listening on localhost:" + PORT);
});