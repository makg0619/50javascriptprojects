const author = document.getElementById("author");
const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", () => {
    let countryName = document.getElementById("country-inp").value;
    const url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
                <img src=${data[0].flags.png} class="flag-img">
                <h2></h2>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Capital:${data[0].capital}</h4>
                        <span></span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Continent: ${data[0].continents}</h4>
                        <span></span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Population: ${data[0].population}</h4>
                        <span></span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Currency: ${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</h4>
                        <span></span>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h4>Common Languages: ${Object.values(data[0].languages)}</h4>
                        <span></span>
                    </div>
                </div>
            `;
        });
});