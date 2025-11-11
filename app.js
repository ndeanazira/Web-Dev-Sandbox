var express = require("express");
var ejs = require("ejs");
// const bubbles = require("./assets/bubble_list.json")
var navData = require("./assets/nav-data.json");
var bubbles = navData.find(function (item) { return item.name == "Pages"; }).dropdown;
// console.log(bubbles);
var ejsLayout = require("express-ejs-layouts");
var app = express();
var port = 8369;
app.use('/assets', express.static("assets"));
app.use(ejsLayout);
app.set("view engine", "ejs");
app.get("/", function (req, res) {
    var url = req.url;
    res.render("home", { title: "Home", bubbles: bubbles, cssLinkPath: null, navData: navData, url: url });
});
app.get("/tasks/:taskPageName", function (req, res) {
    var taskPageName = req.params.taskPageName;
    var url = req.url;
    res.render("Tasks/" + taskPageName.toLowerCase(), { title: taskPageName, cssLinkPath: "/assets/" + taskPageName + "/styling.css", navData: navData, url: url });
});
app.get("/about", function (req, res) {
    var url = req.url;
    res.render("about", { title: "About", cssLinkPath: null, bubbles: bubbles, navData: navData, url: url });
});
app.listen(port, function () {
    console.log("Server is now running at port: " + port);
});
