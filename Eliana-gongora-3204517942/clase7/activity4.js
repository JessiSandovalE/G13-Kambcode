const viaje = (duracion,destino,callback )=>{
    console.log("Estoy en Bogota")

    setTimeout(() =>{
    const hora = duracion / 3600;
     console.log(`Vuelo Bogota - ${destino}, me demoré ${hora},horas`);
       callback();
    }, 3000 );
    
}; 

const nuevoViaje= ()=>{
    viaje(25200,"madrid",()=>{
        console.log(" Llegué a Madrid");
        viaje(7200, "frakfurt",()=>{
            console.log("Llegué a Frankfurt");
            viaje(36000,"saul",()=>{
                console.log("Llegué a  saul");
            })
        })
    })
}

nuevoViaje();

// Estoy en Bogota
  // Vuelo Bogota - Madrid, me demoré 7 horas
  // Llegué a Madrid
  // Vuelo Madrid - Frankfurt, me demoré 2 horas
  // Llegué a Frankfurt
  // Vuelo Frankfurt - Seul, me demoré 10 horas
  // Llegué a Seul















