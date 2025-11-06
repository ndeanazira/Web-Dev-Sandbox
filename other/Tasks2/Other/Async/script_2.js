const request = new XMLHttpRequest();
const divTag = document.getElementsByTagName("div")[0];

//divTag.innerHTML += (request.readyState + " start:" + request.responseText + " //end<br><br>");

//const alertFunc = function(stringText){alert(stringText);

//const alertFunc = (stringText) => {console.log(this);}
const alertFunc = stringText => `This is ${stringText}`;

//const alertFunc2 = function(){console.log(this);}
//const alertFunc2 = function(){return this;}

//=alert(alertFunc()===alertFunc2());
alert(alertFunc("dhehwhsu"));