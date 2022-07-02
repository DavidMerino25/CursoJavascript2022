// Hallar el IVA de un producto y mostrar el precio final.
let precioProducto = parseFloat(prompt("Ingrese el precio del producto"));
let IVA
let precioFinal

//Calculo del IVA
IVA = precioProducto * 0.16;
//Calculo del precio final
precioFinal = precioProducto + IVA;


document.write("El precio del producto es: " + precioProducto + "<br>");
document.write("El IVA es: " + IVA + "<br>");
document.write("El precio final es: " + precioFinal + "<br>")
console.log(`El precio del producto es: ${precioProducto}`);