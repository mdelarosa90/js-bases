class Persona {
	static _conteo = 0;
	static get conteo() {
		return Persona._conteo + ' instancias';
	}

	static mensaje() {
		console.log('Hola a todos soy un método estático');
	}

	nombre = '';
	codigo = '';
	frase = '';
	comida = '';

	constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
		this.nombre = nombre;
		this.frase = frase;
		this.codigo = codigo;

		Persona._conteo++;
	}

	set setComidaFavorita(comida) {
		this.comida = comida.toUpperCase();
	}

	get getComidaFavorita() {
		return `La comida favorita de ${this.nombre} es ${this.comida}`;
	}

	quienSoy() {
		console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
	}
	miFrase() {
		this.quienSoy();
		console.log(`${this.codigo} dice: ${this.frase}`);
	}
}

const spiderMan = new Persona('Peter Parker', 'spiderman', 'Soy tu vecino');
const ironMan = new Persona('Tony stark', 'Iron man', 'soy rico');

//console.log(ironMan);
spiderMan.miFrase();
//ironMan.miFrase();

spiderMan.setComidaFavorita = 'Pastel';
// spiderMan.comida = 'Duende verde';
// console.log(spiderMan);
// Persona._conteo = 2;

console.log('Conteo estático', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = 'Hola mundo';
// console.log(Persona.propiedadExterna);
// console.log(Persona);
