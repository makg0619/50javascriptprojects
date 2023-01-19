var url = "https://pokeapi.co/api/v2/pokemon/";
var btn = document.getElementById("btn");
var card = document.getElementById("card");



function getPokemonData() {
    let id = Math.floor(Math.random() * 20) + 1;
    let c1 = Math.floor(Math.random() * 255) + 1;
    let c2 = Math.floor(Math.random() * 200) + 1;
    let c3 = Math.floor(Math.random() * 150) + 1;
    fetch(`${url}${id}`)
    .then(data => data.json())
    .then(response => {
        let hp = response.stats[0].base_stat;
        let imgsrc = response.sprites.other.dream_world.front_default;
        let name = response.name;
        let attack = response.stats[1].base_stat;
        let defence = response.stats[2].base_stat;
        let speed = response.stats[5].base_stat;
        card.innerHTML = `<p class="hp">
                        <span>HP</span>
                        ${hp}
                        </p>
                <img src=${imgsrc} />
                <h2 class="poke-name">${name}</h2>
                <div class="types">
                
                </div>
                <div class="stats">
                    <div>
                        <h3>${attack}</h3>
                        <p>Attack</p>
                    </div>
                    <div>
                        <h3>${defence}</h3>
                        <p>Defense</p>
                    </div>
                    <div>
                        <h3>${speed}</h3>
                        <p>Speed</p>
                    </div>
                </div>`
        card.style.background = `radial-gradient(circle at 50% 0%, rgb(${c1} ${c2} ${c3}) 36%, #ffffff 36%)`
                console.log(response);
    })
}

btn.addEventListener('click', getPokemonData);
