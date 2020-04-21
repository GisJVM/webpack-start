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
console.log(personaje.trajes.length);

const x = 'vivo'

console.log('Vivo', personaje[x]);

delete personaje.edad;

console.log(personaje);

const entriesPares = Object.entries(personaje)
console.log(entriesPares);

Object.freeze(personaje);
personaje.dinero = 1000


personaje.coords.lat = -12
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const values = Object.values(personaje)
const otros = Object.keys(personaje)
console.log(otros);