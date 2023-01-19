var circles = document.querySelectorAll(".circle");
var btnPrev = document.querySelector("#prev");
var btnNext = document.querySelector("#next");
var progress = document.querySelector("#progress");

  let count = 1;

  btnNext.addEventListener('click', () => {
   count++;
   if(count > circles.length) {
    count = circles.length
   }
   update();
 });

 btnPrev.addEventListener('click', () => {
  count--;
  if(count < 1) {
    count = 1;
  }
  update();
});


function update() {
  circles.forEach((circle, inx) => {
    if(inx < count) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  })

  if(count <= circles.length) {
    progress.style.width = ((count - 1) / (circles.length - 1)) * 100 + '%';
  }

  if(count == 1) {
    btnPrev.setAttribute('disabled', 'disabled');
  } else if (count === circles.length) {
    btnNext.setAttribute('disabled', 'disabled');
  } else {
    btnNext.removeAttribute('disabled');
    btnPrev.removeAttribute('disabled');
  }
}



