function simularVuelo() {
    console.log("Estoy en Bogotá");
  

    setTimeout(() => {
      console.log("Vuelo Bogotá - Madrid, me demoré 7 horas");
      console.log("Llegué a Madrid");
  
     setTimeout(() => {
        console.log("Vuelo Madrid - Frankfurt, me demoré 2 horas");
        console.log("Llegué a Frankfurt");

        setTimeout(() => {
          console.log("Vuelo Frankfurt - Seúl, me demoré 10 horas");
          console.log("Llegué a Seúl");
        }, 10000); 
  
      }, 2000); 
  
    }, 7000); 
  }
  
  simularVuelo();
  