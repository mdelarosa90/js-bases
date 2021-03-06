class Persona {
	static porObjeto({ nombre, apellido, pais }) {
		return new Persona(nombre, apellido, pais);
	}

	constructor(nombre, apellido, pais) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.pais = pais;
	}

	getInfo() {
		console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
	}
}

const nombre1 = 'Melissa',
	apellido = 'Flores',
	pais = 'Honduras';

const fer = {
	nombre: 'Fernando',
	apellido: 'Herrera',
	pais: 'Costa Rica'
};

const persona1 = new Persona(nombre1, apellido, pais);
const persona2 = Persona.porObjeto(fer);

persona1.getInfo();

console.log({ persona2 });
