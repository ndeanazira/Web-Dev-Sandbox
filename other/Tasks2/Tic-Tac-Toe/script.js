var curType;

function changeType(curTypeLocal){
  if (curTypeLocal == "X"){return "O";}
  else{return "X";}
}

$(document).ready(function(){squareList.click(function(){
  if (($(this)[0].classList == "empty") && (curType != undefined)){
    $(this)[0].innerHTML = curType;
    curType = changeType(curType);
    $(this)[0].setAttribute("class", "full");
    
    if (checkWinner()[0]){
      $("#end-screen h")[0].innerHTML = "The Winner is " + checkWinner()[1];
      $("#end-screen").addClass("overlay-blocker");
      $("#end-screen h").addClass("end-game-properties winner");
      
    }
    else if($(".empty")[0]==undefined){
      $("#end-screen h")[0].innerHTML = "It's a Draw";
      $("#end-screen").addClass("overlay-blocker");
      $("#end-screen h").addClass("end-game-properties");
    }
    else{pass;}
  }
  else{pass;}
})
})

$(document).ready(function(){$("#buttons-container div").click(function(){
   curType = $(this)[0].innerHTML;
  $("#buttons-container *").addClass("hide-buttons");
  $("#buttons-container").addClass("hide-buttons");
})
})

$(document).ready(function(){$("button").click(function(){
    for(i=0;i<9;i++){
      squareList[i].innerHTML = "";
      squareList[i].setAttribute("class", "empty");
    }
   
    $("#end-screen").removeClass("overlay-blocker");
    $("#end-screen h").removeClass("end-game-properties");
    $("#end-screen h")[0].innerHTML = "";
    $("#buttons-container").removeClass("hide-buttons");
    $("#buttons-container *").removeClass("hide-buttons");
    $("#buttons-container").addClass("overlay-blocker");
})
})