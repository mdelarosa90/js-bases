const regresaTrue = () => {
	console.log('Regresa True');
	return true;
};

const regresaFalse = () => {
	console.log('Regresa False');
	return false;
};

console.warn('Not a negación');
console.log(true); // true
console.log(!false); // false
console.log(!regresaFalse()); // true

console.warn('And'); // true si todos los valores son verdaderos
console.log(true && true);
console.log(true && true);

console.log('========');
console.log(regresaFalse() && regresaTrue()); // false
console.log(regresaTrue() && regresaFalse()); // false

console.log('====== && =====');
regresaFalse() && regresaTrue();
console.log('4 condiciones', true && true && true && false); // false

console.warn('OR'); //true
console.log(true || false);
console.log(false || false);
console.log(regresaTrue() || regresaFalse());
console.log('4 condiciones', true || true || true || false);

console.warn('Asignaciones');
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'Hola Mundo' && 150; //
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;
const a6 = soyFalso ?? 'Hola'; // Para condiciones verdaderas o falsas;

console.log({ a1, a2, a3, a4, a5, a6 });

if(regresaFalse() && regresaTrue() && (true || false)) {
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa')
}
