class Persona {
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';
    constructor(nombre, codigo, frase) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    set setComidaFavorita(comida) {
        this.comida = comida
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

}

const goku = new Persona('Goku', 'Kakaroto', 'Hola soy Goku')
goku.quienSoy();
goku.setComidaFavorita = 'Tallarines Chinos'
console.log(goku);