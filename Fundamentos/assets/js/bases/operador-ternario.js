const dia = 3;
const horaActual = 10;



let horaApertura;
let mensaje;

// if (hoy === 0 || hoy === 6) {
//     console.log('Fin de semana');
//     horaApertura = 9
// } else {
//     console.log('Dia de semana');
//     horaApertura = 11
// }

// if (horaActual >= horaApertura) {
//     mensaje = 'Esta abierto'
// } else {
//     mensaje = 'Esta cerrado, hoy abrimos a las ' + horaApertura
// }
// console.log(horaApertura, mensaje);

horaApertura = ([0, 6].includes(dia)) ? 9 : 11;
console.log(horaApertura);

mensaje = (horaActual >= horaApertura) ? mensaje = 'Esta abierto' :
    `Hoy abrimos a las ${horaApertura}`

console.log({ horaApertura, mensaje });