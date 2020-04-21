const elMayor = (a, b) => (a > b) ? a : b

console.log(elMayor(10, 7));

const tieneMembresia = (miembro) => (miembro) ? '2 dolares' : '10 dolares'

console.log(tieneMembresia(false));

const amigo = true;
const amigosArr = [
    'Vegeta',
    'Krilin',
    'Roshi',
    amigo ? 'Goku' : 'Kakaroto'
]

console.log(amigosArr);

const nota = 85;

const grado = nota >= 95 ? 'a+' :
    nota >= 90 ? 'a' :
    nota >= 85 ? 'b+' :
    nota >= 80 ? 'b' :
    nota >= 70 ? 'c' : 'f'
console.log({ nota, grado });