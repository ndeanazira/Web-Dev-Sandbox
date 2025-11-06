const body = document.getElementsByTagName("body");
var squares = document.getElementsByTagName("div");

var sounds = document.getElementsByTagName("audio");


var autoGenSq = [];
var userGenSq = [];
var autoSqIndex = 0;

var maxTurns = 10;
var timerCount = 3;
const timerCountInnit = timerCount;
var isCorrect = true;
var isUrTurn = false;


function playSound(squareSound){
  squareSound.currentTime = 0;
  squareSound.play();
  setTimeout(function(){squareSound.pause();}, 750);
  // alert("Hi");
}

function timer(){
  if(timerCount){timerCount=timerCount-0.5;}
  else{
    isCorrect=false;
    alert("Too Slow, Game Over");
    clearInterval(timerInt);
  }
}

function rndmRange(min, max){
  max++;
  var numOut = Math.random()*max;
  if(numOut > max){return max;}
  else if(numOut < min){return min;}
  else{return Math.floor(numOut);}
}

function checkUrTurn(){
  if(userGenSq.length == autoGenSq.length){isUrTurn = false; maxTurns--;}
  else{isUrTurn = true;}
}

function runThrSqr(){
  if((autoSqIndex<autoGenSq.length) & (isUrTurn == false)){
    timerCount = timerCountInnit;
    squares[autoGenSq[autoSqIndex]].classList = "hilighted";
    setTimeout(function(){
      playSound(sounds[autoGenSq[autoSqIndex]]);
      squares[autoGenSq[autoSqIndex]].classList = "";
      autoSqIndex++;
    }, 500);
  }
  else{
    isUrTurn = true;
    clearInterval(runThrSqrInt);
  }
}

function checkLastInput(){
  var seqenceIndex = userGenSq.length-1;
  if((userGenSq[seqenceIndex] == autoGenSq[seqenceIndex]) & isCorrect){isCorrect=true;}
  else{isCorrect=false;}
}

document.addEventListener("click", function(e){
  if(e.target.tagName=="DIV"){
    timerCount = timerCountInnit;
    let curSquareIndex = Array.from(squares).indexOf(e.target);
    //alert(curSquareIndex);
    userGenSq.push(curSquareIndex);
    playSound(sounds[curSquareIndex]);
    checkLastInput();
    checkUrTurn();
    if(isUrTurn==false & maxTurns>0 & isCorrect){
      userGenSq = [];
      autoSqIndex = 0;
      setTimeout(function(){alert("Correct, my turn now.");}, 250);
      autoGenSq.push(rndmRange(0, 2));
      runThrSqrInt = setInterval(runThrSqr, 1000);
    }
  
    else if(isCorrect==false){alert("Game Over");}
    else if(isUrTurn==false & maxTurns==0 & isCorrect){alert("You Win");}
  }
});


setTimeout(function(){alert("Click Ok to start the game");}, 1);

autoGenSq.push(rndmRange(0, 2));
var timerInt = setInterval(timer, 500);

// squares.addEventListener("animationstart", function(){
//   //alert("Hi");
//playSound(sounds[autoGenSq[0]]);
// })
//}, 10);
var runThrSqrInt = setInterval(runThrSqr, 1000);