// function crearPersona(nombre, apellido) {
// 	return {
// 		nombre,
// 		apellido
// 	};
// }

const crearPersona = (nombre, apellido) => ({
	nombre,
	apellido
});

const persona = crearPersona('Fernando', 'Herrera');
console.log(persona);

function imprimeArgumentos() {
	console.log(arguments);
}

const imprimeArgumentos2 = (edad, ...args) => {
	//console.log({ edad, args });
	return args;
};

const [ casado, vivo, nombre, saludos ] = imprimeArgumentos2(10, true, false, 'Fernando', 'Hola');
console.log({ casado, vivo, nombre, saludos });

const { apellido: nuevoApellido } = crearPersona('Mike', 'Jay');
console.log({ nuevoApellido });

const tony = {
	nombre: 'Tony Stark',
	codeName: 'Ironman',
	vivo: false,
	edad: 40,
	trajes: [ 'Mark I', 'Mark V', 'Hulkbuster' ]
};

// const imprimePropiedades = (personaje) => {
// 	console.log('nombre', personaje.nombre);
// 	console.log('codeName', personaje.codeName);
// 	console.log('trajes', personaje.vivo);
// };

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
	console.log({ nombre });
	console.log({ codeName });
	console.log({ vivo });
	console.log({ edad });
	console.log({ trajes });
};

imprimePropiedades(tony);
