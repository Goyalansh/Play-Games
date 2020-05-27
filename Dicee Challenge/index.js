
function myFunction(){
  var r = Math.random()*5;
  r = Math.round(r)+1;

  var k = Math.random()*5;
  k = Math.round(k)+1;


  document.querySelector(".img1").setAttribute("src","images/dice"+r+".png");
  document.querySelector(".img2").setAttribute("src","images/dice"+k+".png");


  if(r>k){
  document.querySelector("h1").textContent="🚩 Player 1 wins";
  }
  else if(k>r){
  document.querySelector("h1").textContent="Player 2 wins 🚩";
  }
  else{
    document.querySelector("h1").textContent="🎌 DRAW 🎌";
  }

  document.querySelector("button").innerText="Roll Again";
}
