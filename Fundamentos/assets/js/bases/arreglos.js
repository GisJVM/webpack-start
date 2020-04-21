let juegos = ['Catan', 'Chess', 'MarioBross']

console.log("Largo", juegos.length);

let ultimo = juegos[juegos.length - 1]
console.log(ultimo);

juegos.forEach((elemento, indice, arr) => {
    console.log(({ elemento, indice, arr }));
})

let nuevaLongitud = juegos.push('Damas')

console.log(nuevaLongitud);

let jBorrado = juegos.pop()
console.log(jBorrado);