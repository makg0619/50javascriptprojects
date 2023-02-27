const questions = [
  {
    "quest": "question 1",
    "a": "abc",
    "b": "def",
    "c": "ghi",
    "d": "jkl",
    "correct": "a"
  },
  {
    "quest": "question 2",
    "a": "mno",
    "b": "pqr",
    "c": "stw",
    "d": "yz",
    "correct": "b"
  },
  {
    "quest": "question 3",
    "a": "few",
    "b": "ferew",
    "c": "gerwe",
    "d": "twer",
    "correct": "c"
  },
  {
    "quest": "question 4",
    "a": "lkhui",
    "b": "llkj",
    "c": "lk",
    "d": "kgg",
    "correct": "d"
  }
]

let questionBox = document.querySelector("#questionBox");
let submit = document.querySelector("#submit");
let options = document.querySelectorAll(".box input");
let index = 0;
let count = 0;
let total = questions.length;

function showQuestion() {
  if(total == index) {
    quizEnd();
  }
  questionBox.innerHTML = questions[index].quest;
  options[0].nextElementSibling.innerHTML = questions[index].a;
  options[1].nextElementSibling.innerHTML = questions[index].b;
  options[2].nextElementSibling.innerHTML = questions[index].c;
  options[3].nextElementSibling.innerHTML = questions[index].d;
}

showQuestion();

submit.addEventListener('click', function() {
  options.forEach((option) => {
    if(option.checked) {
      if(option.value === questions[index].correct) {
        count++;
        console.log(count);
      }
    }
  })
  index++;
  showQuestion();
})

function quizEnd() {
  document.querySelector(".container").innerHTML =
  `<h3 class="w-100"> Hii, you've scored ${count} / ${total} </h3>`
}