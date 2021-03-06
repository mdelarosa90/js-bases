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

class Heroe extends Persona {
	clan = '';

	constructor(nombre, codigo, frase, clan) {
		super(nombre, codigo, frase);
		this.clan = clan;
	}

	quienSoy() {
		console.log(`Soy ${this.nombre}, ${this.clan}`);
		super.quienSoy();
	}
}

//const spiderMan = new Persona('Peter Parker', 'spiderman', 'Soy tu vecino');
const spiderMan = new Heroe('Peter Parker', 'spiderman', 'Soy tu vecino', 'Avengers');

console.log(spiderMan);
spiderMan.quienSoy();
