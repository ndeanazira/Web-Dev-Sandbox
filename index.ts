require("dotenv").config();
const express = require("express");
const navData = require("./assets/nav-data.json")
const path = require("path");
const bubbles = navData.find((item)=>item.name=="Pages").dropdown
const ejsLayout = require("express-ejs-layouts");

const app = express();
const port:number = 8369;
// const baseUrlGlobal:string = process?.env?.URL??"";

//app.use("/assets", express.static("assets"));

app.use("/assets", express.static(path.join(__dirname, "assets")));


app.use(ejsLayout);

app.set("view engine", "ejs");

app.get("/", (req, res)=>{
	const { url } = req;
	res.render("home", {title:"Home", bubbles, cssLinkPath:null, navData, url});
})

app.get("/tasks/:taskPageName", (req, res)=>{
	const {taskPageName} = req.params;
	const { url } = req;
	res.render("Tasks/" + taskPageName.toLowerCase(), 
	{title:taskPageName, cssLinkPath:"/assets/" + taskPageName + "/styling.css", navData, url});
});

app.get("/about", (req, res)=>{
	const { url } = req;
	res.render("about", {title:"About", cssLinkPath:null, bubbles, navData, url});
})
app.get("/about-me", (req, res)=>{
	const { url } = req;
	res.render("about-me", {title:"About Me", cssLinkPath:null, bubbles, navData, url});
})

app.get("/about/me", (req, res)=>{
	const { url } = req;
	res.render("about-this-site", {title:"About Me", cssLinkPath:null, bubbles, navData, url});
})

app.listen(port, ()=>{
	console.log("Server is now running at port: " + port);
});
