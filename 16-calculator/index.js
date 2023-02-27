let string = ""

let buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener('click', function(e) {
    if(e.target.innerHTML == "C") {
      document.querySelector('input').value = "";
    } else if(e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector('input').value = string;
    } else {
      string = string + e.target.innerHTML
      document.querySelector('input').value = string;
    }
  })
})