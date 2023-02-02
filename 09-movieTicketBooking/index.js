let seats = document.querySelectorAll(".row .seat:not(.occupied)");
let count = document.getElementById("count");
let total = document.getElementById("total");
let movie = document.getElementById("movie");
let movieCount = +movie.value;

function updatValues() {
  let selectedSeats = document.querySelectorAll(".row .seat.selected");
  let seatCount = selectedSeats.length;
  count.innerHTML = seatCount;
  total.innerHTML = seatCount * movieCount;
}

seats.forEach(seat => {
  seat.addEventListener('click', function(){
    seat.classList.add('selected');
    updatValues();
  })
})

movie.addEventListener("change", function(){
  movieCount = +movie.value;
  updatValues();
});

