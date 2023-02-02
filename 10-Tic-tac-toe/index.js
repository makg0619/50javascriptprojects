let excitedImg = document.querySelector("#imgExicted");
let reset = document.querySelector("#reset");
let info = document.querySelector(".info");
let line = document.querySelector(".line");
let gameOverSound = new Audio('gameover.mp3');
let musicSound = new Audio('music.mp3');
let tingSound = new Audio('ting.mp3');
let turn = "X";

const wins = [
  [0, 1, 2, 5, 5, 0],
  [3, 4, 5, 5, 15, 0],
  [6, 7, 8, 5, 25, 0],
  [0, 3, 6, -5, 15, 90],
  [1, 4, 7, 5, 15, 90],
  [2, 5, 8, 15, 15, 90],
  [0, 4, 8, 5, 15, 45],
  [2, 4, 6, 5, 15, 135]
]

function changeTurn() {
  if(turn == "X") {
    turn = "0";
  } else {
    turn = "X";
  }
}

function checkWin() {
  let boxtext = document.getElementsByClassName('boxtext');
  wins.forEach(e => {
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
      excitedImg.style.width = "200px";
      line.style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      line.style.width = '20vw';
    }
  })
}

reset.addEventListener('click', function(){
  let boxInnerText = document.querySelectorAll(".boxtext");
  boxInnerText.forEach(box => {
    box.innerHTML = "";
    line.style.display = 'none';
  })
})

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  boxtext.addEventListener('click', function() {
      boxtext.innerText = turn;
      changeTurn();
      checkWin();
      info.innerHTML = `Turn for ${turn}`;
  });
});