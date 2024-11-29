
async function obtenerPokemons() {
  try {
    
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const data = await respuesta.json();

    
    let pokemons = data.results.map((pokemon) => ({ name: pokemon.name }));

    
    const promesas = pokemons.map(async (pokemon) => {
      const respuestaIndividual = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
      const datosPokemon = await respuestaIndividual.json();
      return { ...pokemon, ...datosPokemon };
    });

    
    pokemons = await Promise.all(promesas);

    
    console.log(pokemons);
  } catch (error) {
    console.error("Error al obtener los Pokémon:", error);
  }
}


obtenerPokemons();
