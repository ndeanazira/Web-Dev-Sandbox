const calcScreen = document.getElementById("calc-screen");


var equationStr = "";

var cleared = true;
//var isEqualled = false;

function changeClear(){
  if(calcScreen.value=="0" && cleared){
    calcScreen.value="";
    cleared=false;
    
  }
}

function clearScreen(){
  calcScreen.value = "0";
  cleared = true;
}

function equalsButton(){
  calcScreen.value = eval(calcScreen.value.replace("x","*"));
  //isEqualled = true;  
}

function delChar(){
  calcScreen.value = calcScreen.value.slice(0, -1);
  if(calcScreen.value == ""){clearScreen();}
}

document.addEventListener("click", (e)=>{
  let tClass = e.target.classList;
  if(tClass.contains("number-key") | tClass.contains("operator")){
    changeClear();
    calcScreen.value += e.target.innerHTML;
    //isEqualled=false;
  }
  switch(e.target.id){
    case "ac-button": clearScreen(); break;
    case "del-button": delChar(); break;
    case "equals-button": equalsButton(); break;
  }
})

window.addEventListener("keydown", (e)=>{
  calcScreen.focus();
  changeClear();
  switch(e.keyCode){
    case 13: equalsButton();
    case 8: delChar();
    case 27: clearScreen();
  }
})