var squareList = $("#grid-container div");
  
function checkWinnerBase(index0, index1, index2, grad){
  for(ofst=0;ofst<=(grad*2);ofst=ofst+grad){
    if ((squareList[index0+ofst].innerHTML == squareList[index1+ofst].innerHTML) && (squareList[index0+ofst].innerHTML == squareList[index2+ofst].innerHTML) && (squareList[index0+ofst].classList == "full")){
      return [true, squareList[index0+ofst].innerHTML];
    }
  }
  return [false, ""];
}

function checkWinnerHorizontal(){
  return checkWinnerBase(0,1,2,3);
}

function checkWinnerVertical(){
  return checkWinnerBase(0,3,6,1);
}

function checkWinnerDiag(){
  if ((squareList[0].innerHTML == squareList[4].innerHTML) && (squareList[0].innerHTML == squareList[8].innerHTML) && (squareList[0].classList == "full")){
    return [true, squareList[0].innerHTML];
  }
  
  else if ((squareList[2].innerHTML == squareList[4].innerHTML) && (squareList[2].innerHTML == squareList[6].innerHTML) && (squareList[2].classList == "full")){
    return [true, squareList[2].innerHTML];
  }
  else{
    return [false, ""];
  }
}

function checkWinner(){
  var funcList = [checkWinnerHorizontal(), checkWinnerVertical(),checkWinnerDiag()];
  
  for(i=0;i<3;i++){if(funcList[i][0]){return funcList[i];}}

  return false;

}


