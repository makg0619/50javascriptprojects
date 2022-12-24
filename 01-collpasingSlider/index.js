let progress = document.querySelector('.progress')
let nextbtn = document.querySelector('#next');
let circle = document.querySelectorAll('.circle');

nextbtn.addEventListener('click', handleprogressbar);

clickcount = 1;

function handleprogressbar() {
  clickcount++;
  if(clickcount >circle.length )
    progress.style.width = 33 * i + '%';
}
