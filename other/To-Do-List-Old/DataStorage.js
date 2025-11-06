function saveCheckbox(){
  for(checkItem of checkboxList){
    localStorage.setItem(checkItem.id, checkItem.checked);
    //alert(checkItem.checked);
  }
}

function retrieveCheckbox(){
  for(checkItem of checkboxList){
    var checkedStatus = localStorage.getItem(checkItem.id);
    
    if(checkedStatus == "true"){checkItem.checked = true;}
    else{checkItem.checked = false;}
  }
}

function saveContent(){
  localStorage.setItem("savedForm", form.innerHTML);
  
  localStorage.setItem("listCountId", listCountId);
}

function retrieveContent(){
   var content = localStorage.getItem("savedForm");
   if(content){form.innerHTML = content;}
  
    if(listCountId<0xFFFFFFFF){listCountId = localStorage.getItem("listCountId");}
}
