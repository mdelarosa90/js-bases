/**
 * Días de la semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9
 */

// Entra en un sitio web, para consultar si está abierto hoy...
const dia = 0; // 0: domingo, 1: Lunes...
const horaActual = 10;

let horaApertura;
let mensaje; // Está abierto, está cerrado, hoy abrimos a las XX

// if (dia === 0 || dia === 6) {
// if ([ 0, 6 ].includes(dia)) {
// 	horaApertura = 9;
// } else {
// 	horaApertura = 11;
// }

horaApertura = [ 0, 6 ].includes(dia) ? 9 : 11;

// if (horaActual >= horaApertura) {
// 	mensaje = 'Está abierto';
// } else {
// 	mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;
// }

mensaje = horaActual >= horaApertura ? 'Está abierto' : `Está cerrado, hoy abrimos a las ${horaApertura}`;

console.log({ horaApertura, mensaje });
