const heroes = ['Goku', 'Vegeta', 'Gohan', 'Picolo']
console.log('For tradicional');

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

for (let i in heroes) {
    console.log(heroes[i]);
}

console.log("==========================");

for (let heroe of heroes) {
    console.log(heroe);
}