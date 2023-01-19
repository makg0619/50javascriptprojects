var joke = document.getElementById("joke");
var btn = document.getElementById("btn");
var url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

function getJoke() {
  joke.classList.remove("fade");
  fetch(url)
  .then(data => data.json())
  .then(data1 => {
    joke.innerText = `${data1.joke}`;
    joke.classList.add("fade");
  })
}

btn.addEventListener('click', getJoke);
getJoke();
