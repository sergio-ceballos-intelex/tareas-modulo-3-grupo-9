const isLogged = false;

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

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function obtenerSelecciones() {
  return new Promise((resolve, reject) => {
    delay(2000).then(() => {
      if (isLogged) {
        resolve(selecciones);
      } else {
        reject("No estás logueado dentro de la app.");
      }
    });
  });
}

function JugadoresPorSeleccion(codigoPais) {
  return new Promise((resolve) => {
    delay(5000).then(() => {
      const jugadoresFiltrados = jugadores.filter(jugador => jugador.codigoPais === codigoPais);
      resolve(jugadoresFiltrados);
    });
  });
}

// Lógica para obtener las selecciones y luego los jugadores si está logueado
obtenerSelecciones()
  .then(selecciones => {
    console.log("Selecciones obtenidas:", selecciones);
    const promesasJugadores = selecciones.map(seleccion => JugadoresPorSeleccion(seleccion.codigoPais));
    return Promise.all(promesasJugadores);
  })
  .then(jugadoresPorSeleccion => {
    jugadoresPorSeleccion.forEach((jugadores, index) => {
      console.log(`Jugadores de ${selecciones[index].nombre}:`, jugadores);
    });
  })
  .catch(error => {
    console.error("Error:", error);
  });
