//var soundA = new Audio("/sounds/piano-mp3_A3.mp3");

//var soundA = new Audio("/storage/emulated/0/Tasks/4/sounds/piano-mp3_C3.mp3");

var sounds = document.getElementsByTagName("audio");

const soundA = sounds[0];

function playSound(squareSound){
  squareSound.currentTime = 0;
  squareSound.play();
  setTimeout(function(){squareSound.pause();}, 750);
}

const squares = document.getElementsByClassName(".tile");

document.addEventListener("scroll", function(e){
  alert(e.target);
})

// document.addEventListener("click", function(e){
//   if(e.target.tagName=="DIV"){
//     let curSquareNum = Array.from(squares).indexOf(e.target);
//     playSound(sounds[curSquareNum]);
//   }
// });
