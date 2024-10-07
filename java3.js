// 3-funciones.js

// 1. Tu primera función
// 1.1 Escribe una función llamada `despedir` que imprima "Adiós" en la consola.
    // Tu código aquí
function despedir() {
    console.log("Adios")
}
    
// 1.2 Crea una función llamada `multiplicarPorDos` que tome un número como parámetro y devuelva el doble de ese número.
    // Tu código aquí
function multiplicarPorDos(numero) {
    return numero*2
    const resultado = multiplicarPorDos();
    console.log(multiplicarPorDos(3)) // aqui tiene que devolver 6
}
// 1.3 Crea una función llamada `esMayorDeEdad` que tome un número como parámetro y devuelva `true` si es mayor de 18, o `false` en caso contrario.
    // Tu código aquí
function esMayorDeEdad(edad) {
    return edad>18;
    console.log(esdad)
}
// 2. Parámetros
// 2.1 Crea una función llamada `multiplicar` que reciba dos parámetros, los multiplique y devuelva el resultado.
    // Tu código aquí
function multiplicar(a, b) {
  return  a * b;
  const resltadomultiplicar = multiplicar(6, 8);
  console.log(resltadomultiplicar) //Aqui debe darnos el resultado 48
}
// 2.2 Escribe una función llamada `saludarPersonalizado` que reciba dos parámetros: `nombre` y `apellido`. La función debe devolver "Hola, [nombre] [apellido]".
    // Tu código aquí
function saludarPersonalizado(nombres) {
    return "Holis"+ nombres;
    const resultadonombres= nombres("Holis", nombres);
    console.log(resultadonombres)
}

// 2.3 Crea una función llamada `calcularPotencia` que reciba dos parámetros: base y exponente. La función debe devolver el resultado de elevar la base al exponente.
    // Tu código aquí
    // Tu código aquí
function calcularpotencia(a, b) {
    return  a ** b;
    const resultadocalcularpotencia = multiplique(2, 2);
    console.log(resultadocalcularpotencia) //Aqui debe darnos el resultado 4
  }

// 2.4 Escribe una función llamada `restar` que reciba dos parámetros y devuelva la diferencia entre ellos.
    // Tu código aquí
function restar(a, b) {
    return  a - b;
    const resltadorestar = restar(10, 2);
    console.log(resltadorestar) //Aqui debe darnos el resultado 8
  }
// 2.5 Crea una función llamada `dividir` que reciba dos parámetros y devuelva el resultado de la división del primer parámetro por el segundo.
    // Tu código aquí
// Tu código aquí
function dividir(a, b) {
    return  a/b;
    const resltadodividir = dividir(20, 4);
    console.log(resltadodividir) //Aqui debe darnos el resultado 5
  }
// 3. Function Expression
// 3.1 Crea una **function expression** que multiplique dos números y asígnala a la variable `multiplicarDOS`.
    // Tu código aquí
    const multiplicarDOS = function(a, b){
        return a*b;
    };
    console.log(multiplicarDOS(3, 4)); //esto debe dar el valor de 12

// 3.2 Escribe una **function expression** llamada `saludar` que acepte un parámetro `nombre` y devuelva "Hola, [nombre]".
    // Tu código aquí
    const saludar = function(Nombre){
        return "Hola, ${Nombre}";
    };
    console.log(saludar("Daihana"));

// 3.3 Crea una **function expression** llamada `esPar` que acepte un número como parámetro y devuelva `true` si el número es par, o `false` en caso contrario.
    // Tu código aquí
    const esPar = function(numero){
        return numero % 2 === 0;
    };
    console.log(esPar(2)); //aqui aparecera true
    console.llog(esPar(7)); // aqui aparecera false

// 4. Funciones Flecha
// 4.1 Convierte la siguiente función en una función flecha llamada multiplicarFlecha:
// function multiplicar(a, b) {
//     return a * b;
// }
    // Tu código aquí
    const multiplicarFlecha = (a, b)=> a*b;
    console.log(multiplicarFlecha(3, 3));

// 4.2 Crea una función flecha llamada `saludarFlecha` que reciba un parámetro `nombre` y devuelva "Hola [nombre]".
    // Tu código aquí
    const saludarFlecha = Nombre => "Hola, ${Nombre}"
    console.log(saludar("Dai"));

// 4.3 Escribe una función flecha llamada `calcularArea` que reciba el radio de un círculo y devuelva el área del círculo. Usa la fórmula A = π * r².
const calcularArea = radio => {
    // Tu código aquí
Math.PI * Math.pow(radio, 2);
};
console.log(calcularArea(5))

// 5. Recursividad
// 5.1 Escribe una función que calcule la suma de los primeros n números enteros de forma recursiva. Por ejemplo: `suma(3) -> 1 + 2 + 3 = 6`
function suma(n) {
    // Tu código aquí
    if (n <= 1) {
        return n;
    } else {
        return n + suma(n - 1);
    }
    console.log(suma(3));
    console.log(suma(2));
}

// 5.2 Escribe una función que calcule la sucesión de Fibonacci de forma recursiva. La sucesión de Fibonacci es una serie de números que empieza por 0 y 1 y cada número es la suma de los dos anteriores. Por ejemplo: `fibonacci(6) -> 8`
function fibonacci(n) {
    // Tu código aquí
    if (n < 2){
        return n;
    } else {
        return fibonacci (n - 1) + fibonacci(n - 2);
    }
    console.assertlog(fibonacci(3))
}

// 5.3 Crea una función recursiva llamada `factorial` que calcule el factorial de un número. El factorial de n (n!) es el producto de todos los números enteros positivos menores o iguales a n.
function factorial(n) {
    // Tu código aquí
    if (n === 0 || n ===1) {
        return 1;
    } else {
        return n*factorial(n-1);
    }
    console.log(factorial(2));
}

// 5.4 Escribe una función recursiva que calcule la potencia de un número dado el exponente. Por ejemplo: `potencia(2, 3) -> 8`
function potencia(base, exponente) {
    // Tu código aquí
    if (exponente===0) {
        return 1;
    } else {
        return base*potencia(base, exponente -1);
        console.log(potencia(2,2));S
    }
}

// Exportar las funciones para que puedan ser probadas
module.exports = {
    despedir,
    multiplicarPorDos,
    esMayorDeEdad,
    multiplicar,
    saludarPersonalizado,
    calcularPotencia,
    restar,
    dividir,
    multiplicarDOS,
    saludar,
    esPar,
    calcularArea,
    suma,
    fibonacci,
    factorial,
    potencia,
    saludarFlecha,
    multiplicarFlecha,
};