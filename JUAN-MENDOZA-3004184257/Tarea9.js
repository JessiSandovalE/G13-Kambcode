
async function getPokemons() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=20";
  try {
    const response = await fetch(url);
    const data = await response.json();


    const pokemons = data.results.map(pokemon => ({ name: pokemon.name }));
    return pokemons;
  } catch (error) {
    console.error("Error al obtener la lista de Pokémon:", error);
  }
}


async function getPokemonDetails(pokemon) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return { ...pokemon, ...data }; 
  } catch (error) {
    console.error(`Error al obtener detalles de ${pokemon.name}:`, error);
  }
}

async function fetchPokemonData() {
  const pokemons = await getPokemons();
  const detailedPokemons = await Promise.all(
    pokemons.map(pokemon => getPokemonDetails(pokemon))
  );

  console.log(detailedPokemons);
  return detailedPokemons;
}

fetchPokemonData();
