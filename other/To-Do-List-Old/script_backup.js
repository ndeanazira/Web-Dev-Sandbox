var listCountId = 0;


$(document).ready(function(){
  $("#add-button").click(function(){
    var listInput = $("#input-field");
    var listTemplate = $("#list-template")[0].outerHTML;//.split("list-input");
    
    var splitTemplate = listTemplate.split("list-input");
  
    $("#tick-list section").append(splitTemplate[0].replace("id=\"list-template\"", "").replace("type=\"checkbox\">", "type='checkbox' id=\"list-item-"+ listCountId + "\"" + "value=\"" + listInput[0].value + "\"/>") + listInput[0].value + splitTemplate[1]);
    listCountId++;
    listInput[0].value = "";
    saveContent();
    listInput.focus();
    //alert($("section")[0].innerHTML);
  })
})


$(document).on("click", ".edit", function(){
  var curItem = $(this).parents()[1];
  alert($(this).hasClass("edit-done"));
  var listName = curItem.get("p");
  var editField = curItem.get(".edit-input");
  listName.setAttribute("style", "display: none;");
  editField.setAttribute("style", "display: inline;");
  $(this)[0].innerHTML = "Done";
  $(this)[0].setAttribute("class", "button edit-done");
  editField.value = listName.innerHTML;
  editField.focus();
});

$(document).on("click", ".edit-done", function(){
  var curItem = $(this).parents()[1];
  var listName = curItem.get("p");
  var editField = curItem.get(".edit-input");
  listName.setAttribute("style", "display: inline-block;");
  editField.setAttribute("style", "display: none;");
  $(this)[0].innerHTML = "Edit";
  $(this)[0].setAttribute("class", "button edit");
  listName.innerHTML = editField.value;
  curItem.get("input").value = editField.value;
  saveContent();
});

$(document).on("click", ".del", function(){
  var curItem = $(this).parents()[1];
  curItem.outerHTML = "";
  saveContent();
});

var form = document.querySelector("#tick-list");



// for (item of checkboxList){
//   alert(item.outerHTML);
// }

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
   
   if(content){
      form.innerHTML = content;
   }
   else{
     pass;
   }
   
    if(listCountId<0xFFFFFFFF){
      listCountId = localStorage.getItem("listCountId");
    }
    else{
      pass;
    }
}

//document.form.addEventListener("click", saveContent)

retrieveContent();

var checkboxList = $("form .checkbox");

retrieveCheckbox()
//alert(checkboxList.length)




$(document).on("click", "form .checkbox", saveCheckbox);


form.addEventListener("submit", (e) => {
  e.preventDefault();
  saveContent();
  alert("Your Data has been saved")
})
