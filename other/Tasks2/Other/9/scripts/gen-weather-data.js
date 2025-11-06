const genHourlyWht = (wthObjLcl, gmtOffsetLcl)=>{
  
  hourlyDivAll.innerHTML = "";
  
  timeIndexLcl = fetchTimeIndex(wthObjLcl);
  for(i=0;i<24;i++){
    var divChild = document.createElement("div");
    
    var hour = document.createElement("div");
    
    hour.innerHTML = wthObjLcl["hourly"]["time"][i+timeIndexLcl + gmtOffsetLcl].split("T")[1];
    
    var temp = document.createElement("div");
    temp.innerHTML = setWthUnitArray(wthObjLcl, "hourly", "temperature_2m", i + timeIndexLcl);
    divChild.appendChild(hour);
    divChild.appendChild(temp);
    hourlyDivAll.appendChild(divChild);
  }
}

const genDailyWth = wthObjLcl=>{
  var day = dayIndex();
  for(i=0;i<dailyDivs.length;i++){
    var curChildren = dailyDivs[i].getElementsByTagName("div");
    if(!i){curChildren[0].innerHTML = "Today";}
    else{curChildren[0].innerHTML = dayList[day-1];}
    curChildren[1].innerHTML = setWthUnitArray(wthObjLcl, "daily", "temperature_2m_max", i) + " / " + setWthUnitArray( wthObjLcl, "daily", "temperature_2m_min", i);
    if(day > 6){day=1;}
    else{day++;}
  }
}

const setWthVals = (wthObj, locNameLocal, gmtOffset) => {
  changeBg(wthObj);
  var timeIndex = fetchTimeIndex(wthObj);
  locSquare.innerHTML = locNameLocal;
  mainTemp.innerHTML = wthObj["current"]["temperature_2m"];
  
  statusTemp.innerHTML = getCloudCvr(wthObj);
  
  lastUpdated.innerHTML = "Last Updated: " + curTime();
  
  //console.log(otherTemps);
  
  //console.log(minMaxTemp);
  
  minMaxTemp.innerHTML = setWthUnitArray(wthObj, "daily", "temperature_2m_max", 0)  +"/"+ setWthUnitArray(wthObj, "daily", "temperature_2m_min", 0) + " feels like " + setWthUnit(wthObj, "current", "apparent_temperature");
  
  genHourlyWht(wthObj, gmtOffset);
  genDailyWth(wthObj);
  
  uvIndex.innerHTML = wthObj["daily"]["uv_index_max"][0];
  humidity.innerHTML = setWthUnit(wthObj, "current", "relative_humidity_2m");
  wind.innerHTML = setWthUnit(wthObj, "current", "wind_speed_10m");
  
  dewPoint.innerHTML = setWthUnitArray(wthObj, "hourly", "dew_point_2m", timeIndex);  
  
  visibility.innerHTML = setWthUnitArray(wthObj, "hourly", "visibility", timeIndex); 
  pressure.innerHTML = setWthUnit(wthObj, "current", "surface_pressure", "\n");
}