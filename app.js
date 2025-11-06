var express = require("express");
var ejs = require("ejs");
// const bubbles = require("./assets/bubble_list.json")
var navData = require("./assets/nav-data.json");
var bubbles = navData.filter(function (item) { return item.name == "Pages"; })[0].dropdown;
// console.log(bubbles);
var ejsLayout = require("express-ejs-layouts");
var app = express();
var port = 8369;
app.use('/assets', express.static("assets"));
app.use(ejsLayout);
app.set("view engine", "ejs");
app.get("/", function (req, res) {
    res.render("home", { title: "Home", bubbles: bubbles, cssLinkPath: null, navData: navData });
});
app.get("/tasks/:taskPageName", function (req, res) {
    var taskPageName = req.params.taskPageName;
    res.render("Tasks/" + taskPageName.toLowerCase(), { title: taskPageName, cssLinkPath: "/assets/" + taskPageName + "/styling.css", navData: navData });
});
app.listen(port, function () {
    console.log("Server is now running at port: " + port);
});
