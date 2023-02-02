window.addEventListener('keydown', function(e) {
 let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
 audio.currentTime = 0;
 audio.play();
 let keys = this.document.querySelector(`div[data-key="${e.keyCode}"]`);
 keys.classList.add('playing');
});

let keys = this.document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener('transitionend', function(e){
    this.classList.remove('playing');
  })
})
