
const API = "https://pokeapi.co/api/v2/pokemon"
const age = 10
let pokemon
async function getPokemons() {
    try {
        const response = await fetch(API);
        const pokemons = await response.json()
        let pokemon = pokemons.results
        //ciclo para completar la información de cada pokemón
        for (let i = 0; i < pokemon.length; i++){
                const response2 = await fetch(`${API}/${pokemon[i].name}`)
                const pokemonA = await response2.json()
                pokemon[i] = pokemonA
           }
         console.log(pokemon[2])
    } catch (error) {
        console.log(error)
    }            
}
getPokemons()
