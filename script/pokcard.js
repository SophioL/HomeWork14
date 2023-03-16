const description = document.getElementById("discraption");
const IMG = ocalStorage.setItem("cardPoster");
const Name = localStorage.setItem("cardName");
description.innerHTML = ""

function showPokemonCard () {
    description.innerHTML = `
    <div  class="card-style" >
        <div class="card-deck">
            <div class="card">
                <img class="rounded-circle" class="card-img-top" src="" alt="">
                    <div class="card-body">
                        <h3 class="text-center" class="card-title">${Name}</h3>
                    </div>
            </div>
        </div>
    </div>    
    ` 
}
showPokemonCard ()

