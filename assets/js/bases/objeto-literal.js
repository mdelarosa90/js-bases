const personaje = {
	nombre: 'Tony Stark',
	codeName: 'Ironman',
	vivo: false,
	edad: 40,
	coords: {
		lat: 34.034,
		lng: -118.7
	},
	trajes: [ 'Mark I', 'Mark V', 'Hulkbuster' ],
	direccion: {
		zip: '10880, 90265',
		ubicacion: 'Malibu, California'
	},
	'ultima-pelicula': 'Infinitive War'
};

console.log({ personaje });
console.log('Nombre:', personaje.nombre);
console.log('Edad:', personaje['edad']);
console.log('Coords:', personaje.coords);
console.log('Lat:', personaje.coords.lat);
console.log('No. Trajes', personaje.trajes.length);
console.log('Ultimo traje:', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);
console.log('Última Película:', personaje['ultima-pelicula']);

// Mas Detalles
delete personaje.edad;
console.log(personaje);

personaje.cansado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

Object.freeze(personaje); // Congelar Objeto

personaje.dinero = 100000000;
personaje.cansado = false;
personaje.direccion.ubicacion = 'Costa Rica';
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({ propiedades });
console.log({ valores });
