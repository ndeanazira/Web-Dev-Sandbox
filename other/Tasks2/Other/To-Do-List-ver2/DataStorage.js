var formList = document.forms["list-box"];
const tickList = formList.querySelector("ul");
const inputArea = document.forms["input-area"];
const listInput = inputArea.querySelector("input[type=\"text\"]");

// var testData = JSON.parse(localStorage.getItem("jsonStr"));

function createListObject(listNameInput, isChecked){
    const listElement = document.createElement("li");
  const listName = document.createElement("span");
  const editButton = document.createElement("div");
  const deleteButton = document.createElement("div");
  editButton.className = "button edit";
  deleteButton.className = "button del";
  const checkboxEl = document.createElement("input");
  checkboxEl.type = "checkbox";
  checkboxEl.checked = isChecked
  tickList.appendChild(listElement);
  listElement.appendChild(checkboxEl)
  listElement.appendChild(listName);
  listName.textContent = listNameInput; //listInput.value;
  listElement.appendChild(editButton);
  listElement.appendChild(deleteButton);
}

var objArray = [];
var listObj;

function saveData(){
  objArray = [];
  Array.from(tickList.children).forEach(function(item){
    itemName = item.querySelector("span").textContent;
    var isChecked = item.querySelector("input[type=\"checkbox\"]").checked;
    listObj = 
              {
                "listItem": itemName,
                "isChecked": isChecked
              };
    objArray.push(listObj);
  });
  const jsonStr = JSON.stringify(objArray);
  // alert(jsonStr);
  localStorage.setItem("jsonStr", jsonStr);
}

function retrieveData(){
  if(localStorage["jsonStr"]){
    const data = JSON.parse(localStorage.getItem("jsonStr"));
    Array.from(data).forEach(function(item){
      createListObject(item["listItem"], item["isChecked"]);
    })
  }
}