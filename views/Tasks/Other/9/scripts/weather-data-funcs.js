const locSquare = document.getElementById("location");
const mainTemp = document.getElementById("temp");

const otherTemps = document.querySelectorAll("#main-temp-data div");

const statusTemp = otherTemps[4];

const minMaxTemp = otherTemps[5];

const lastUpdated = otherTemps[6];

const uvIndex = document.getElementById("uv");

const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const dewPoint = document.getElementById("dew-point");
const pressure = document.getElementById("pressure");
const visibility = document.getElementById("visibility");

const hourlyDivAll =document.getElementById("hourly")

var dailyDivs = document.getElementsByClassName("day");

const fetchTimeIndex = wthObj=>{
  var curTime = wthObj["current"]["time"].split(":")[0] + ":00";

  return Array.from(wthObj["hourly"]["time"]).indexOf(curTime);
}

const dayList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const fmtSnglDgt = num=>{
  if(num<10){return "0"+num;}
  else{return num;}
}

const dayIndex = ()=> new Date().getDay();
var curTime = ()=> new Date().getHours() + ":" + fmtSnglDgt(new Date().getMinutes());

const changeBg = wthObj=>{
  var isDay = wthObj["current"]["is_day"];
  if(isDay){body.classList = "";}
  else{body.classList = "night";}
  // "linear-gradient(180deg, hsl(240deg 100% 20%) 0%, hsl(256deg 97% 35%) 48%,hsl(264deg 100% 50%) 100%);";
}

const setWthUnit = (wthObjLcl, index1, index2, breakLine="")=>wthObjLcl[index1][index2] + breakLine + wthObjLcl[index1+"_units"][index2]

const setWthUnitArray = (wthObjLcl, index1, index2, arrayIndex, breakLine="")=>wthObjLcl[index1][index2][arrayIndex] + breakLine + wthObjLcl[index1+"_units"][index2]

const getCloudCvr = wthObjLcl=>{
  var cloudCvr = wthObjLcl["current"]["cloud_cover"]/100;
  
  if(cloudCvr < 1/8){return "Sunny";}
  else if(cloudCvr<3/8){return "Mostly Sunny";}
  else if(cloudCvr<5/8){return "Partly Cloudy";}
  else if(cloudCvr<1){return "Mostly Cloudy";}
  else{return "Full Clouds";}
}