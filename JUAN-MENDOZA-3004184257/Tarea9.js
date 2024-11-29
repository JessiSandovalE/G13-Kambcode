// Función principal asíncrona
async function obtenerPokemons() {
  try {
    // 1. Obtener la lista de los primeros 20 Pokémon
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const data = await respuesta.json();

    // 2. Guardar los nombres de los Pokémon en un array
    let pokemons = data.results.map((pokemon) => ({ name: pokemon.name }));

    // 3. Actualizar la información de cada Pokémon usando sus nombres
    const promesas = pokemons.map(async (pokemon) => {
      const respuestaIndividual = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
      const datosPokemon = await respuestaIndividual.json();
      return { ...pokemon, ...datosPokemon };
    });

    // 4. Esperar a que todas las promesas se resuelvan
    pokemons = await Promise.all(promesas);

    // Mostrar el resultado en la consola
    console.log(pokemons);
  } catch (error) {
    console.error("Error al obtener los Pokémon:", error);
  }
}

// Llamar a la función
obtenerPokemons();
