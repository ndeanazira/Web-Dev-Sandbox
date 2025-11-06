const body = document.getElementsByTagName("body")[0];

const locSearchForm = document.getElementsByTagName("form")[0];

const locSearch = document.getElementById("enter-loc");

const optButton = document.getElementById("opt-button");

const optArea = document.getElementById("options");

const optChildren = Array.from(document.querySelectorAll("#options *")).slice(1, -1);

var locList = document.getElementById("loc-list");

var propAll = {};

const parseLocData = locObj=>{
  propAll = locObj["features"];
  locList.innerHTML="";
  for(i=0; i<propAll.length;i++){
    var prop = propAll[i]["properties"];
    const listItem = document.createElement("li");
    listItem.innerHTML = `${prop["city"]}, ${prop["county"]}, ${prop["state"].replace("undefined", "")}, ${prop["country"]}`;
    locList.appendChild(listItem);
  }
};

const tmOffstFtm = tmOffset =>{
  var tmSplit = tmOffset.replace("+", "").split(":");
  var hourFrac = parseFloat(tmSplit[1])/60;
  return parseFloat(tmSplit[0]) + hourFrac;
}

locSearchForm.addEventListener("submit", e=>e.preventDefault());
  
locSearchForm.addEventListener("keyup", e=>{
    e.preventDefault();
    var location = locSearch.value.replace(" ", "%20").replace(",", "%2C")
    
    var urlLoc = "https://api.geoapify.com/v1/geocode/search?text=" + location + "&apiKey=857323f0d24546969dffa33088da7824"
    fetchDataPromise(urlLoc)
    .then(dataVar=>{console.log(dataVar); parseLocData(dataVar);});
});


document.addEventListener("click", e=>{
  if(e.target.id == "opt-button" & optArea.classList=="hidden"){
    body.style.overflow = "hidden";
    optArea.classList="open";
  }
  else if(e.target.id == "close-opt" & optArea.classList=="open"){
    body.style.overflow = "initial";
    optArea.classList = "hidden";
  }
  setTimeout(()=>locSearch.focus(), 750);
});

document.addEventListener("click", e=>{
  if(e.target.tagName == "LI"){
    var locArray = Array.from(document.getElementsByTagName("li"));
    var locIndex = locArray.indexOf(e.target);
    var chosenLocObj = propAll[locIndex]["properties"];

    var lon = chosenLocObj["lon"];
    var lat = chosenLocObj["lat"];
    var gmtOffset = tmOffstFtm(chosenLocObj["timezone"]["offset_DST"]);
    
    var locName = `${chosenLocObj["city"]}, ${chosenLocObj["state_code"]}, ${chosenLocObj["country_code"].toUpperCase()}`
    
    var urlWeather = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m&hourly=temperature_2m,dew_point_2m,rain,showers,snowfall,cloud_cover,visibility&daily=temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_hours,precipitation_probability_max,";
    
    fetchDataPromise(urlWeather)
      .then(wthObj=>{
        console.log(wthObj);
        setWthVals(wthObj, locName, gmtOffset);
      });
      
    setTimeout(()=>{body.style.overflow = "initial";
      optArea.classList = "hidden";}, 250);
  }
});