const filterField = document.getElementById("filter-box");

filterField.addEventListener("keyup", function(){
  Array.from(tickList.children).forEach(function(item){
    var itemName = item.querySelector("span").textContent;
    if(itemName.includes(filterField.value)){item.style.display = "";}
    else{item.style.display = "none";}
  });
});