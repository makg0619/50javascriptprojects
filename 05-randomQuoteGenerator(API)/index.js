const url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            quote.innerText = data.content;
            author.innerText = data.author;
        })
        .catch(() => {
            result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
        });
});