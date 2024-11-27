
async function obtenerPokemons() {
  try {
 
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    if (!respuesta.ok) {
      throw new Error("Error al obtener la lista de pokemons");
    }
    const data = await respuesta.json();

  
    const pokemons = data.results; 

   
    const detallesPromises = pokemons.map(async (pokemon) => {
      const detalleRespuesta = await fetch(pokemon.url); 
      if (!detalleRespuesta.ok) {
        throw new Error(`Error al obtener detalles de ${pokemon.name}`);
      }
      const detalleData = await detalleRespuesta.json();
      return { ...pokemon, ...detalleData }; 
    });

    
    const pokemonsConDetalles = await Promise.all(detallesPromises);

    
    console.log("Pokemons con detalles:", pokemonsConDetalles);
  } catch (error) {
  
    console.error("Error:", error.message);
  }
}

obtenerPokemons();
