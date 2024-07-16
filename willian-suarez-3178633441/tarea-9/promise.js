// Hacer un programa que simule una peticion a un servidor, con delay de 2000 ms, donde se 
// obtenga una informacion de selecciones de la Copa América. Si el usuario general de la 
// aplicación esta logueado (isLogged) la promesa se resuelve con las selecciones (selecciones), 
// si no, se rechaza con un mensaje diciendo "No estas logueado dentro de la app". 
// Dentro de cada selección hay una propiedad código de país (code) que servirá para 
// obtener la informacion de los jugadores de esa selección, simulando otra peticion tambien 
// con delay de 5000 ms que se resolvera con todos los jugadores dentro de la lista jugadores.
// 
// Notas:
// 
// Usar Promise.all para la segunda peticion fake, es decir la que obtiene los jugadores, 
// una vez se resuelva la primera (dentro del then).
// La promesa de obtener jugadores debe recibir como parametro un código de país.
// 

// Función que simula la petición al servidor para obtener las selecciones

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
  });
}

function obtenerJugadoresPorSeleccion(codigoPais) {
  return new Promise((resolve) => {
    // ...aqui tu codigo
  });
}


function obtenerSelecciones(isLogged) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isLogged) {
                const selecciones = [
                    { code: 'ARG', name: 'Argentina' },
                    { code: 'BRA', name: 'Brasil' },
                    { code: 'CHI', name: 'Chile' },
                    // Más selecciones pueden añadirse aquí
                ];
                resolve(selecciones);
            } else {
                reject('No estas logueado dentro de la app');
            }
        }, 2000);
    });
}

// Función que simula la petición al servidor para obtener los jugadores de una selección
function obtenerJugadores(code) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const jugadores = {
                'ARG': ['Messi', 'Aguero', 'Dybala'],
                'BRA': ['Neymar', 'Firmino', 'Alisson'],
                'CHI': ['Vidal', 'Sanchez', 'Bravo'],
                // Más jugadores pueden añadirse aquí para cada selección
            };
            resolve(jugadores[code]);
        }, 5000);
    });
}

// Función principal que ejecuta las promesas
function ejecutarSimulacion(isLogged) {
    obtenerSelecciones(isLogged)
        .then(selecciones => {
            console.log('Selecciones obtenidas:', selecciones);

            // Crear una lista de promesas para obtener los jugadores de cada selección
            const promesasJugadores = selecciones.map(seleccion => obtenerJugadores(seleccion.codepais));

            // Usar Promise.all para esperar a que todas las promesas se resuelvan
            return Promise.all(promesasJugadores);
        })
        .then(resultadosJugadores => {
            console.log('Jugadores obtenidos:');
            resultadosJugadores.forEach((jugadores, index) => {
                console.log(`Selección ${index + 1}:`, jugadores);
            });
        })
        .catch(error => {
            console.error(error);
        });
}

// Ejecutar la simulación con el usuario logueado
ejecutarSimulacion(true);

// Ejecutar la simulación con el usuario no logueado
// ejecutarSimulacion(false);


//RESULTADOS

// Selecciones obtenidas: [
    // { code: 'ARG', name: 'Argentina' },
    // { code: 'BRA', name: 'Brasil' },
    // { code: 'CHI', name: 'Chile' }

// ]
// Jugadores obtenidos:
// Selección 1: undefined
// Selección 2: undefined
// Selección 3: undefined

//false,No estas logueado dentro de la app