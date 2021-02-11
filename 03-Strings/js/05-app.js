const producto = 'Monitor 20 pulgadas';

// .replace para reemplazar
console.log(producto.replace('pulgadas', '"'));
// .slice para obtener caracteres
console.log(producto.slice(0, 8));
// no hace nada
console.log(producto.slice(2, 1));

// alternativas para slice
console.log(producto.substring(2, 10));
console.log(producto.substring(2, 1));

// obtener caracter
console.log(producto.charAt(2));