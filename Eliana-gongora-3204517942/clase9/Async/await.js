async function fectPokemones() {
    try{
        const answer= await fetch("https://pokeapi.co/api/v2/pokemon")
        const datos = await answer.json ();
     const pokemones = datos.results.map((pokemon)=> ({
      name: pokemon.name,
     url: pokemon.url,
 
     }));

for(let i =0; i < pokemones.length;i++){
    const detalleRespuesta = await fetch(pokemones[i].url)
    const detalleDatos = await detalleRespuesta.json();

    pokemones[i] ={
     name:pokemones[i].name,
     detalles:detalleDatos, 
     
    };
}

console.log(pokemones);
return pokemones;
} catch(error){
    console.log("error",error);

}
}
fectPokemones();
 

