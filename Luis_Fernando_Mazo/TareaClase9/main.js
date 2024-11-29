async function obtenerPokemons() {
    try {
      
      const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
      const datos = await respuesta.json();        
      const pokemons = datos.results;
  
      for (const pokemon of pokemons) {
        const respuestaPokemon = await fetch(pokemon.url);
        const datosPokemon = await respuestaPokemon.json();
  
        pokemon.id = datosPokemon.id;
        pokemon.types = datosPokemon.types;
        pokemon.abilities = datosPokemon.abilities;        
      }
  
      console.log(pokemons);
    } catch (error) {
      console.error(error);
    }
  }
  
  obtenerPokemons();