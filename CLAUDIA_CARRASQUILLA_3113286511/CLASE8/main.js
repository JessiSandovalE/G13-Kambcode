const isLogged = true;

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
        // ...aqui tu codigo
        setTimeout(() => {
            if (isLogged) {
                resolve(selecciones)
            } else {
                reject("No estás logueado dentro de la app")
            }
        }, 2000)
    });
}

function obtenerJugadoresPorSeleccion(codigoPais) {
    return new Promise((resolve) => {
        // ...aqui tu codigo
        setTimeout(() => {
            const jugadoresPorPais = jugadores.filter((jugadores) => jugadores.codigoPais === codigoPais)
            resolve(jugadoresPorPais)
        }, 5000)
    });
}

Promise.all([obtenerSelecciones(), obtenerJugadoresPorSeleccion('COL')])
    .then((resultado) => console.log( resultado ))
    .catch((error) => console.log("Error: ", error))