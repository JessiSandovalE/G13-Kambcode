const obtenerPokemons = async () => {
    try {
      
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
      const data = await response.json();
  
      
      let pokemon = data.results;
  
      console.log("Pokémon iniciales:", pokemon);
  
       const pokemonDetalles = await Promise.all(
        pokemon.map(async (pokemon) => {
          const detalleResponse = await fetch(pokemon.url);
          const detalleData = await detalleResponse.json();
          return { name: pokemon.name, ...detalleData };
        })
      );
      pokemon = pokemonDetalles;
  
      console.log("Pokémon detallados:", pokemon);
    } catch (error) {
      console.error("Error obteniendo Pokémon:", error);
    }
  };

  obtenerPokemon();
  