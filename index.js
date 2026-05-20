require("dotenv").config();
var express = require("express");
var navData = require("./assets/nav-data.json");
var path = require("path");
var bubbles = navData.find(function (item) { return item.name == "Pages"; }).dropdown;
var ejsLayout = require("express-ejs-layouts");
var app = express();
var port = 8369;
// const baseUrlGlobal:string = process?.env?.URL??"";
//app.use("/assets", express.static("assets"));
app.use("/assets", express.static(path.join(__dirname, "assets")));
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
<<<<<<< HEAD
app.get("/about/me", (req, res) => {
    const { url } = req;
    res.render("about-this-site", { title: "About Me", cssLinkPath: null, bubbles, navData, url });
});
app.listen(port, () => {
=======
app.get("/about-me", function (req, res) {
    var url = req.url;
    res.render("about-me", { title: "About Me", cssLinkPath: null, bubbles: bubbles, navData: navData, url: url });
});
app.listen(port, function () {
>>>>>>> 88935f65aedd5f679e9253d09d2b3e7a93369416
    console.log("Server is now running at port: " + port);
});
