window.addEventListener('keydown', function(e) {
   if(e.keyCode == 38) {
        dino = document.querySelector(".dino");
        dino.classList.add("animateDino");
        setTimeout(()=>{
            dino.classList.remove("animateDino");
        }, 500)
   }
   if(e.keyCode == 39) {
    dino = document.querySelector(".dino");
    dinoLeftValue = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dino.style.left = dinoLeftValue + 100 + "px";
    }

    if(e.keyCode == 37) {
        dino = document.querySelector(".dino");
        dinoLeftValue = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoLeftValue - 100 + "px";
    }
});

function collisionDetected(offsetX) {
    gameOver.style.visibility = 'visible';
    clearInterval(offsetInterval);
    obstacle = document.querySelector(".obstacle");
    console.log(offsetX);
    obstacle.style.left = offsetX + "px";
    obstacle.classList.remove('obstacleAni');
    
}

const offsetInterval = setInterval(()=> {
    dino = document.querySelector(".dino");
    obstacle = document.querySelector(".obstacle");
    gameOver = document.querySelector(".gameOver");

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    console.log(offsetX, offsetY);
    if(offsetX < 93 && offsetY < 50) {
        collisionDetected(offsetX);
    }

}, 100)
