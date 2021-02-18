let a = 5;

if (a >= 10) {
	// undefined, null, una asignación
	console.log('A es mayor ó igual a 10');
} else {
	console.log('A es menor a 10');
}

//console.log('Fin del programa');

const hoy = new Date();

let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, ...

console.log({ dia });

/**
 * = Asignacion de variable
 * == Condicion no tiene cuenta el tipado
 * === Tiene cuenta el tipado
 */

if (dia === 0) {
	console.log('Domingo');
} else if (dia === 1) {
	console.log('Lunes');
	// if (dia === 1) {
	// 	console.log('Lunes');
	// } else {
	// 	console.log('No es lunes ni domingo');
	// }
} else if (dia === 2) {
	console.log('Martes');
} else {
	console.log('No es lunes, ni martes, ni domingo');
}

const diasLetras = {
	0: 'domingo',
	1: 'lunes',
	2: 'martes',
	3: 'miércoles',
	4: 'jueves',
	5: 'viernes',
	6: 'sábado'
};
const diasLetras2 = [ 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo' ];

// Sin usar if Else, o Switch, únicamente objetos
dia = 6;

//console.log(diasLetras[dia] || 'Día no es válido');
console.log(diasLetras2[dia] ?? 'Día no válido');
