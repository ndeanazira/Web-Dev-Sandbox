   var clock = document.getElementsByTagName("div")[0];
  
    var timeClass = new Date();
    var time = 3600*6; //seconds
    
    function changeLocation(){
      window.location.href = "https://www.google.co.uk";
    } //setTimeout(changeLocation, 3000);
    
    function doubleDigits(num){
      num = num.toString();
      if (num.length == 1){return "0" + num;}
      else{return num;}
    }
    
    function countDown(){
      if (time >= 0){
        timeClass.setTime(time*1000);
        
        //day = Math.floor(time/(24*3600));
        
        
        hour = doubleDigits(timeClass.getHours() - 1);
        minute = doubleDigits(timeClass.getMinutes());
        second = doubleDigits(timeClass.getSeconds());
        
        clock.innerHTML = day + " days  "  +  hour + ":  " + minute + ":  " + second;
        time --;
      }
      else{
        clock.setAttribute("class", "finished");
        clearInterval(intervalId);
      }
    }
    
    var timeScaling = 1;
    //var intervalId = setInterval(countDown, 1000*timeScaling);
    setInterval(countDown, 1000*timeScaling);