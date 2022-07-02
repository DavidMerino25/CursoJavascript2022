// Conversion de datos
/***
 * 1. a String => String(), toString()
 * 2. a Number => Number(), parseInt(), o si es en Decimal parseFloat()
 * 3. a Boolean => Boolean(), parseBoolean()
 * 4. a Array => Array(), parseArray()
 * 5. a Object => Object(), parseObject()
 * 6. a Function => Function(), parseFunction()
 * 7. a Date => Date(), parseDate()
 * 8. a RegExp => RegExp(), parseRegExp()
 * 9. a Error => Error(), parseError()
 * 10. a Null => Null(), parseNull()
 * 11. a Undefined => Undefined(), parseUndefined()
 * 12. a Symbol => Symbol(), parseSymbol()
 */

// De entero a string
let dato = 10
dato= dato.toString();
console.log(typeof(dato));

let dato2 = '45.5'
dato2= parseInt(dato2);
console.log(typeof(dato2));

