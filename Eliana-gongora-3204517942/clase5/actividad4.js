let titleEl=[];
let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },

  ];
  for(let i = 0; i< libros.length;i++){
    if(libros[i].titulo.startsWith('El')){
        titleEl.push(libros[i]);
    }
  } console.log(titleEl)

  