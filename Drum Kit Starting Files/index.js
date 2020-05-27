var arr = document.querySelectorAll("button");

var i = arr.length;
for(var j=0;j<i;j++){
  document.querySelectorAll("button")[j].addEventListener("click",myfunction);

}

function myfunction(){
  var mouseClick=this.innerText;
  makeSound(mouseClick);
  makeAnimation(mouseClick);
}


document.addEventListener("keypress",function(event){
  var keyPress = event.key;
  makeSound(keyPress);
  makeAnimation(keyPress);
  });



function makeSound(mouseClick){
switch (mouseClick) {
  case 'w':
    var sound = new Audio("sounds/crash.mp3");
    sound.play();
    break;

    case 'a':
      var sound = new Audio("sounds/kick-bass.mp3");
      sound.play();
      break;

      case 's':
        var sound = new Audio("sounds/snare.mp3");
        sound.play();
        break;

        case 'd':
          var sound = new Audio("sounds/tom-1.mp3");
          sound.play();
          break;

          case 'j':
            var sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            break;

            case 'k':
              var sound = new Audio("sounds/tom-3.mp3");
              sound.play();
              break;

              case 'l':
                var sound = new Audio("sounds/tom-4.mp3");
                sound.play();
                break;


  default:
        alert("press the right key please");
        break;

                    }
                           }

function makeAnimation(word){
  document.querySelector("."+word).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+word).classList.remove("pressed");
  },100);

}
