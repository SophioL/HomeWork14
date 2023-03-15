const PokemonAPI = "https://pokeapi.co/api/v2/pokemon/"

// Get pokemon Data
getPokemon(PokemonAPI)
async function getPokemon(url){
    const res = await fetch(url);
    //console.log(res);
    const data = await res.json()
    //console.log(data);
    const pokemon = data.results
   // console.log(pokemon)
    displayPok(pokemon)
}

const PokemonHTML = document.getElementById("pokcard");

// show pokemon

function displayPok(dis){
    PokemonHTML.innerHTML=``;

    dis.forEach((card) => {
        const pokemonEl = document.createElement('div');
        pokemonEl.classList.add("col-3");
        pokemonEl.innerHTML = `
        
            <div  class="card-style" >
                <div class="card-deck">
                    <div class="card">
                        <img class="rounded-circle" class="card-img-top" src="https://pokeres.bastionbot.org/images/pokemon/${card.id}.png" alt="Card image cap">
                        <div class="card-body">
                            <h3 class="text-center" class="card-title">${card.name}</h3>
                        </div>
                    </div>
                </div>
            </div>
        
        `
        PokemonHTML.appendChild(pokemonEl)
    });
}