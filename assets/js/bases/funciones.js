function saludar(nombre) {
	//console.log(arguments);
	//console.log(`Hola ${nombre}`);
	return [ 1, 2 ];

	// Esto nunca se va a ejecutar
	console.log('Código después del return');
}

const saludar2 = function(nombre) {
	console.log('Hola ' + nombre);
};

const saludarFlecha = () => {
	console.log('Hola Flecha');
};
const saludarFlecha2 = (nombre) => {
	console.log('Hola ' + nombre);
};

const retornoDeSaludar = saludar('Juan', 40, true, 'Costa Rica');
//saludar2('Michel');
//saludarFlecha();
//saludarFlecha2('Mike');

function sumar(a, b) {
	return a + b;
}

// const sumar2 = (a, b) => {
// 	return a + b;
// };

const sumar2 = (a, b) => a + b;

function getAleatorio() {
	return Math.random();
}

const getAleatorio2 = () => Math.random();

//console.log(sumar(1, 2));
//console.log(sumar2(1, 3));
console.log(getAleatorio2());
