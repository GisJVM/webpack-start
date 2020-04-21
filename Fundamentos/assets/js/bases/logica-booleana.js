const regresaTrue = () => {
    console.log('regresa true');
    return true;
};
const regresaFalse = () => {
    console.log('regresa false');
    return false;
}

console.warn('Not o la negacion');
console.log(!true);
console.log(!false);

console.log(!regresaFalse());