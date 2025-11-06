var listCountId = 0;

$(document).ready(function(){
  $("#add-button").click(function(event2){
    var listInput = $("#input-field");
    var listTemplate = $("#list-template")[0].outerHTML;//.split("list-input");
    
    var splitTemplate = listTemplate.split("list-input");
    $("#tick-list section").append(splitTemplate[0].replace("id=\"list-template\"", "").replace("type=\"checkbox\">", "type='checkbox' id=\"list-item-"+ listCountId + "\"" + "value=\"" + listInput[0].value + "\"/>") + listInput[0].value + splitTemplate[1]);
    listCountId++;
    listInput[0].value = "";
    saveContent();
    //alert(event);
    //alert(typeof(event2[0]));
    listInput.focus();
    //alert($("section")[0].innerHTML);
  })
})



$(document).on("click", ".edit", function(){
  var curItem = $(this).parents()[1];
  var listName = curItem.get("p");
  var editField = curItem.get(".edit-input");
  
  if(!$(this).hasClass("edit-done")){
    $(this)[0].innerHTML = "Done";
    $(this)[0].setAttribute("class", "button edit edit-done");
    curItem.setAttribute("class", "flex-list-item-done");
    editField.value = listName.innerHTML;
    editField.focus();
  }
  
  else{
    curItem.setAttribute("class", "flex-list-item");
    $(this)[0].innerHTML = "Edit";
    $(this)[0].setAttribute("class", "button edit");
    listName.innerHTML = editField.value;
    curItem.get("input").value = editField.value;
    saveContent();
  }
});

$(document).on("click", ".del", function(){
  var curItem = $(this).parents()[1];
  curItem.outerHTML = "";
  saveContent();
});

var form = document.querySelector("#tick-list");

retrieveContent();

var checkboxList = $("form .checkbox");

retrieveCheckbox()

$(document).on("click", "form .checkbox", saveCheckbox);

