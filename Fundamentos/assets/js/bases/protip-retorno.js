// function crearPersona(nombre, apellido) {
//     return {
//         nombre,
//         apellido,
//     }
// }

// const persona = crearPersona('Jaime', 'Vasquez')
// console.log(persona);

// const crearPersona = (nombre, apellido) => {
//         return { nombre, apellido }
//     }
//     // console.log(crearPersona('Jaime', 'Vasquez'))

// // const crearPersona = (nombre, apellido) => ({ nombre, apellido })

// // console.log(crearPersona('Jaime', 'Vasquez'))
// function imprimeArgumentos() {
//     console.log(arguments);
// }
// imprimeArgumentos('hola', 1, true);

// const print = (a, ...args) => {
//     //console.log({ a, args });
//     return args
// }

// const { nombre: nuevoNombre, apellido } = crearPersona('Jaime', 'Vasquez');
// console.log(nuevoNombre)

let personaje = {
    nombre: 'Goku',
    codeName: 'Kakaroto',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.74,
        lng: -118.70
    },
    trajes: ['Sayayin 1', 'Sayayin 2', 'Sayayin 3']


}

const imprimePropiedades = ({ nombre, codName, vivo, edad, coords }) => {
    nombre,
    codName,
    vivo,
    edad,
    coords
}

imprimePropiedades(personaje);