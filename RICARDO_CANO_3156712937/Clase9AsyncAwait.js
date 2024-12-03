async function obtenerPokemons() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        const data = await response.json();

        const pokemons = data.results;

        const pokemonsConDetalles = await Promise.all(pokemons.map(async (pokemon) => {
            const detalleResponse = await fetch(pokemon.url);
            const detalleData = await detalleResponse.json();

            return {
                name: pokemon.name,
                height: detalleData.height,
                weight: detalleData.weight,
                abilities: detalleData.abilities.map(ability => ability.ability.name)
            };
        }));

        console.log(pokemonsConDetalles);
    } catch (error) {
        console.error("Error al obtener los Pokémon:", error);
    }
}

obtenerPokemons();