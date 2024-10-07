// Operadores de comparación
// 1. Comprueba si 10 es mayor o igual que 9 e imprime el resultado en consola.
function compareTenAndNine(ejercicio1) {  
    // Tu código aquí...
    let ejercicio1 = 10 >=9;
    console.log(ejercicio1);
    compareTenAndNine(jercicio1);
}

// 2. Comprueba si 0 es igual a 0 e imprime el resultado en consola.
function compareZeroAndZero() {
    // Tu código aquí...
    let cero1 = 0;
    let cero2 = 0;
    console.log(0==0);
    compareZeroAndZero();
}

// 3. Comprueba si 7 es mayor que 8 y menor que 10, e imprime el resultado en consola.
function compareSeven() {
    // Tu código aquí...
    let ejercicio3 = (7 > 8) && (7 < 10);
    console.log(ejercicio3);
    compareSeven();
}

// Operadores lógicos
// 4. Verifica si puedes comprar un producto de 1500 con un descuento del 25% teniendo 1150€ e imprime si puedes o no.
function canBuyProduct() {
    // Tu código aquí...
    let precio1 = 1500;
    let descuento = 0.25;
    let precio2 = precio1*(1-descuento); //precio con descuento
    let dinerodisponible = 1150;
    let compra = dinerodisponible>=precio2;
    console.log(compra ? "Puedes comprar el producto." : "No puedes comprar el producto.");
    canBuyProduct();
}    

// Variables
// 5. Crea una variable llamada `mensaje` y asígnale el valor "Hola JavaScript", luego imprime la variable en consola.
function createMessageVariable() {
    // Tu código aquí...
    var mensaje = "Hola JavaScript";
    console.log(mensaje);
    createMessageVariable();
}

// 6. Crea una variable llamada `resultado` y asígnale la suma de 2 y 3, luego imprime la variable en consola.
function createMessageVariable(resultado) {
    // Tu código aquí...
    var resultado = 2+3;
    console.log(resultado);
    createMessageVariable(resultado);
}

// 7. Crea una constante llamada `IS_DISABLED` y asígnale el valor booleano `true`, luego imprime la constante en consola.
function createDisabledConstant() {
    // Tu código aquí...
    const IS_DISABLED = true;
    console.log(IS_DISABLED);
    createDisabledConstant();
}

// Null y Undefined
// 8. Crea una variable con `let` llamada `capacidad` y asígnale un valor `null`, luego imprime la variable en consola.
function createNullVariable() {
    // Tu código aquí...
    let capacidad = null;
    console.log(capacidad);
    createNullVariable();
}

// 9. Crea una variable con `let` llamada `dinero` y asígnale un valor `undefined`, luego imprime la variable en consola.
function createUndefinedVariable() {
    // Tu código aquí...
let dinero = undefined;
console.log(dinero);
}

// typeof
// 10. Escribe un código para ver el tipo de una variable llamada `userName` e imprime el tipo de dato en consola.
function checkUserNameType() {
    // Tu código aquí...
let userName = "Dai";
console.log(typeof userName);
}

// 11. Asegúrate de que `dogId` es una cadena de texto y luego imprime el tipo de dato en consola.
function checkDogIdIsString() {
    // Tu código aquí...
let dogId = "Cadena de texto";
dogId = String(dogId); //convertir en cadena de texto
console.log(typeof dogId);
}

// console.log()
// 12. Imprime un mensaje en la consola utilizando `console.log()`.
function logMessage() {
    // Tu código aquí...
    console.log("Hola mundo");
}

// 13. Utiliza `console.log()` para imprimir el valor de la variable `edad` que tiene el valor 30.
function logAge() {
    // Tu código aquí...
    let edad = 30;
    console.log(edad);  
}

// 14. Muestra el mensaje 'La versión de JavaScript es' seguido de la variable `version` con el valor 2024 usando `console.log()`.
function logVersion() {
    // Tu código aquí...
    let version = 2024;
    console.log("la version de JavaScript es"+version)
}

// Exportar todas las funciones para poder usarlas en las pruebas
module.exports = {
    compareTenAndNine,
    compareZeroAndZero,
    compareSeven,
    canBuyProduct,
    createMessageVariable,
    createSumVariable,
    createDisabledConstant,
    createNullVariable,
    createUndefinedVariable,
    checkUserNameType,
    checkDogIdIsString,
    logMessage,
    logAge,
    logVersion,
};