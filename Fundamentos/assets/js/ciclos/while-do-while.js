const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];
let i = 0

while (i < carros.length) {
    if (i === 1) {
        i++;
        continue;

    }
    console.log(carros[i]);
    i++;
}


console.warn('DO while')
let j = 0
do {
    console.log(carros[j]);
    j++;

} while (carros[j]);