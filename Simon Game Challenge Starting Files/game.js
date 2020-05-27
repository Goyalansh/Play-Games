var userClickedPattern= [];
var buttonColors = ["red","yellow","blue","green"];
var gamePattern=[];
count=1;
var i = 0;
var first = 1;


$(document).keypress(function(){
  $("h1").text("Level 1");
  if(first === 1){
  newSequence();
  first = 0;
}
});



function newSequence(){
var randomNumber = Math.floor(Math.random()*4) ;
gamePattern.push(buttonColors[randomNumber]);
$("#"+buttonColors[randomNumber]).fadeOut(100).fadeIn(100);
playSound(buttonColors[randomNumber]);
count++;
userClickedPattern.length=0;
}



$(".btn").click(function(event) {
  userClickedPattern.push(event.target.id);
  playSound(event.target.id);
  animatePress(event.target.id);
  if(userClickedPattern[i]===gamePattern[i]){
    console.log(userClickedPattern[i] + gamePattern[i]);
      i=i+1;
    if(userClickedPattern.length===gamePattern.length){
      i=0;
      $("h1").text("Level "+count);
      setTimeout(function(){(newSequence());},600);
    }
  }
  else{
      $("h1").text("Game Over, Press Any Key to Restart");
      gamePattern.length=0;
      first = 1;
      count = 1;
      var sound1 = new Audio("sounds/wrong.mp3");
      sound1.play();
      $("body").addClass("game-over");
      setTimeout(function(){$("body").removeClass("game-over");},200);
  }
});




function playSound(color){
switch (color) {
  case "red":
      var sound1 = new Audio("sounds/red.mp3");
      sound1.play();
      break;
  case "yellow":
      var sound1 = new Audio("sounds/yellow.mp3");
      sound1.play();
          break;
  case "blue":
      var sound1 = new Audio("sounds/blue.mp3");
      sound1.play();
      break;
  case "green":
      var sound1 = new Audio("sounds/green.mp3");
      sound1.play();
        break;
  default:
      alert("balle balle")
}
};


function animatePress(currentColor){
  $("."+currentColor).addClass("pressed");
  setTimeout(function(){
    $("."+currentColor).removeClass("pressed");
  },100);
}
