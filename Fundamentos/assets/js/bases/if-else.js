const hoy = new Date;
console.log(hoy);

let dia = hoy.getDay();
console.log({ dia });

// if (dia === 3) {
//     console.log('Miercoles');
// }
// console.log({ dia });

dia = 10

let semana = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
}

console.log(semana[dia] || 'dia no definido');