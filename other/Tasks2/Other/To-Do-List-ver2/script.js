//localStorage.removeItem("jsonStr");

retrieveData();

inputArea.addEventListener("submit", function(event){
  event.preventDefault();
  createListObject(listInput.value, false);
  listInput.focus();
  listInput.value = "";
  saveData();
});

formList.addEventListener("click", function(e){
  var eTargClass = e.target.classList;
  const list2Edit = e.target.parentElement;
  const spanEl = list2Edit.querySelector("span");
  var curListName = spanEl.innerHTML;
  const editInput = document.createElement("input");
  editInput.type = "text";
  if(eTargClass.contains("del")){
    tickList.removeChild(list2Edit);
    saveData();
  }
  
  else if(eTargClass.contains("edit")){
    eTargClass.remove("edit");
    eTargClass.add("edit-done");
    spanEl.textContent = "";
    editInput.value = curListName;
    spanEl.appendChild(editInput);
    editInput.focus();
  }
  
  else if(eTargClass.contains("edit-done")){
    eTargClass.remove("edit-done");
    const createdInput = list2Edit.querySelector("input[type=\"text\"]");
    spanEl.textContent = createdInput.value;
    saveData();
    eTargClass.add("edit");
    spanEl.removeChild(createdInput);
  }
  
  else if(e.target.type == "checkbox"){
    saveData();
  }

});

