const express = require("express");
const ejs = require("ejs");
// const bubbles = require("./assets/bubble_list.json")
const navData = require("./assets/nav-data.json")

const bubbles = navData.filter((item)=>item.name=="Pages")[0].dropdown

// console.log(bubbles);

const ejsLayout = require("express-ejs-layouts");

const app = express();
const port:number = 8369;

app.use('/assets', express.static("assets"));

app.use(ejsLayout);

app.set("view engine", "ejs");

app.get("/", (req, res)=>{
	res.render("home", {title:"Home", bubbles, cssLinkPath:null, navData});
})

app.get("/tasks/:taskPageName", (req, res)=>{
	const {taskPageName} = req.params;
	res.render("Tasks/" + taskPageName.toLowerCase(), 
	{title:taskPageName, cssLinkPath:"/assets/" + taskPageName + "/styling.css", navData});
});


app.listen(port, ()=>{
	console.log("Server is now running at port: " + port);
});
