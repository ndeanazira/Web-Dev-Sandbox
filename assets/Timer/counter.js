   var clock = document.getElementById("clock");
   
   var setButton = document.getElementById("set");
   var pausePlay = document.getElementById("pause-play");
   var reset = document.getElementById("reset");
   
   var pausePlayIcon = document.querySelector("#pause-play > i");
   
   var timerForm = document.getElementById("timer-form");
   
   var hourDiv;
   var minuteDiv;
   var secDiv;
   
   var intervalId = null;
  
    var timeClass = new Date();
    var time = 0; //seconds
    var timeScaling = 1;
    
    
    
    function countDown(){
      if (time >= 0){
        timeClass.setTime(time*1000);
        
        //day = Math.floor(time/(24*3600));
   
        hour = doubleDigits(timeClass.getHours() - 1);
        minute = doubleDigits(timeClass.getMinutes());
        second = doubleDigits(timeClass.getSeconds());
        
        console.log(second);
        console.log(timeClass.getTime());
        console.log(time);
        
        hourDiv.innerText = hour
        minuteDiv.innerText = minute
        secDiv.innerText = second
        
        // clock.innerHTML = hour + ":  " + minute + ":  " + second;
        time --;
      }
      else{
        clock.setAttribute("class", "finished");
        clearInterval(intervalId);
      }
    }
    
    timerForm.addEventListener("submit", function(e){
    	e.preventDefault();
    	clock.tagName = 
    	Array.from(clock.children).forEach(function(element, i){
    			if(element.tagName == "DIV"){
    				var newElement = document.createElement("input");
    				newElement.value = element.innerText;
    				newElement.className = element.className;
    				newElement.type = "number";
    				newElement.max = "59";
    				newElement.min = "0";
    				newElement.required = true;
    				newElement.id = element.id;
    				element.replaceWith(newElement);
    			}
    			else if(element.tagName == "INPUT"){
    				var newElement = document.createElement("div");
    				newElement.innerText = doubleDigits(element.value);
    				newElement.className = element.className;
    				newElement.id = element.id;
    				element.replaceWith(newElement);
    			}
    
    	})
    	
    })
    
  pausePlay.addEventListener("click", function(e){
  	hourDiv = document.getElementById("hour");
   minuteDiv = document.getElementById("minute");
   secDiv = document.getElementById("second");
  	if(hourDiv.tagName == "DIV"){
  		
  		
  		timeClass = new Date(parseInt(hourDiv.innerText*3600) + parseInt(minuteDiv.innerText*60) + parseInt(secDiv.innerText));
  		
  		time = timeClass.getTime();
  		console.log(time);
  		
  		if(!intervalId){
  			intervalId = setInterval(countDown, 1000);
  			pausePlayIcon.className = "bi bi-pause-fill";
  			pausePlay.style.background = "orange";
  		}
  		else{
  			clearInterval(intervalId);
  			pausePlayIcon.className = "bi bi-play-fill";
  			pausePlay.style.background = "green";
  			intervalId = null;
  		}
  	}
  })
  
  reset.addEventListener("click", function(e){
  		time = 0;
  		clearInterval(intervalId);
  		hourDiv.innerText = "00";
  		minuteDiv.innerText = "00";
  		secDiv.innerText = "00";
  		clock.setAttribute("class", "");
  		pausePlayIcon.className = "bi bi-play-fill";
  		pausePlay.style.background = "green";
  })
    
    
    function doubleDigits(num){
      num = num.toString();
      if (num.length == 1){return "0" + num;}
      else{return num;}
    }
    

    //var intervalId = setInterval(countDown, 1000*timeScaling);
   