//tarea 8 Promises, then y catch


const isLogged = true;
const codigoPB = "COL"

const selecciones = [
  {
    id: 1,
    nombre: 'Colombia',
    codigoPais: 'COL'
  },
  {
    id: 2,
    nombre: 'Argentina',
    codigoPais: 'ARG'
  },
  {
    id: 3,
    nombre: 'Uruguay',
    codigoPais: 'URU'
  },
  {
    id: 4,
    nombre: 'Brasil',
    codigoPais: 'BRA'
  },
];

const jugadores = [
  {
    id: 10,
    nombre: 'James',
    apellido: 'Rodriguez',
    codigoPais: 'COL'
  },
  {
    id: 11,
    nombre: 'Luis',
    apellido: 'Díaz',
    codigoPais: 'COL'
  },
  {
    id: 12,
    nombre: 'Richard',
    apellido: 'Ríos',
    codigoPais: 'COL'
  },
  {
    id: 13,
    nombre: 'Lionel',
    apellido: 'Messi',
    codigoPais: 'ARG'
  },
  {
    id: 14,
    nombre: 'Lautaro',
    apellido: 'Martínez',
    codigoPais: 'ARG'
  },
  {
    id: 15,
    nombre: 'Federico',
    apellido: 'Valverde',
    codigoPais: 'URU'
  },
  {
    id: 16,
    nombre: 'Darwin',
    apellido: 'Nuñez',
    codigoPais: 'URU'
  },
  {
    id: 17,
    nombre: 'Vinicius',
    apellido: 'Jr',
    codigoPais: 'BRA'
  },
  {
    id: 18,
    nombre: 'Rodrygo',
    apellido: 'Goes',
    codigoPais: 'BRA'
  },
];

function obtenerSelecciones() {
  return new Promise((resolve, reject) => {
    if(isLogged){
      setTimeout(()=>{
        obtainedSelection = selecciones.map((item)=>item)
        resolve(obtainedSelection)
     }, 2000)
    } else {
      reject("no estás logeado dentro de la APP")
    }    
  });
}

function obtenerJugadoresPorSeleccion(codigoPais) {
  return new Promise((resolve, reject) => {
    if(codigoPais){
      setTimeout(()=>{
        jugadoresObtenidos = jugadores.filter((item)=>item.codigoPais===codigoPais)
        resolve(jugadoresObtenidos)
      }, 5000)
    } else {
      reject("no estás logeado dentro de la APP")
    }
  });
}

obtenerSelecciones()
  .then((obtainedSelection) => console.log('Selecciones', obtainedSelection))
  .catch((err) => console.error("Error", err))
obtenerJugadoresPorSeleccion(codigoPB)
  .then((jugadoresObtenidos)=> console.log('Jugadores Obtenidos', jugadoresObtenidos))
  .catch((err)=> console.error("Error: ", err))
