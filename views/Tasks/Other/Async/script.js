//const request = new XMLHttpRequest();
const divTag = document.getElementsByTagName("div")[0];

//divTag.innerHTML += (request.readyState + " start:" + request.responseText + " //end<br><br>");

var urlBase = "https://jsonplaceholder.typicode.com/todos/";

//var url2 = "https://jsonplaceholder.typicode.com/todos/2";


const asyncFetch = async ()=>{
  var objList = [];
  for(i=199;i<202;i++){
    const response = await fetch(urlBase + i);
    if(response.status==404){
      throw new Error("page not found");
    }
    //alert("djdjk");
    const data = await response.json();
    await objList.push(data);
  }
  return objList;
}

asyncFetch()
   .then(data=>console.log(data))
   .catch(error=>console.log("Error"));