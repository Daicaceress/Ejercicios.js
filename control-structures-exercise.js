// estructurasDeControl.js

// Ejercicio 1: Condicionales if-else
// Instrucción: Escribe una función que reciba un número y verifique si es par o impar.
// Imprime "El número es par" o "El número es impar" según corresponda.
function verificarParidad(numero) {
    // Tu código aquí
    if (numero % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");

    }
}

// Ejercicio 2: Condicionales anidados
// Instrucción: Escribe una función que reciba una edad y determine si la persona es:
// "Menor de edad" (menor a 18), "Adulto" (entre 18 y 65), o "Adulto mayor" (mayor a 65).
function clasificarEdad(edad) {
    // Tu código aquí
    if (edad>65) {
    console.log("Adulto mayor");
    } else if (edad >18 && edad < 65) {
        console.log("Adulto");
    } else {
        console.log("Menor de edad")
    }
    } 

// Ejercicio 3: Bucles while
// Instrucción: Crea una función que reciba un número entero positivo y utilice un bucle `while` para imprimir todos los números desde ese número hasta 0.
function cuentaRegresiva(numero) {
    // Tu código aquí
   numero = "" ;
   while (numero > 0){
    console.log(numero);
    numero = numero - 1;
   }
   console.log(0)
}

// Ejercicio 4: Bucles do-while
// Instrucción: Escribe una función que imprima "Estoy aprendiendo JavaScript" 5 veces utilizando un bucle `do-while`.
function repetirMensaje(ejercicio) {
    // Tu código aquí
    let ejercicio4;
    do {
        ejercicio4 = "Estoy aprendiendo JavaScrip";
    } while (ejercicio4*4);
    console.log(ejercicio4)
}

// Ejercicio 5: Bucle for
// Instrucción: Escribe una función que reciba un número entero positivo y utilice un bucle `for` para imprimir todos los números pares entre 0 y ese número.
function imprimirPares(numero) {
    // Tu código aquí
   for (i=0; i<=12;i++) {
    if (i%2===0) {
        console.log(i);
    }
   }
}

// Ejercicio 6: Uso de break
// Instrucción: Escribe una función que recorra los números del 1 al 10, pero detén el bucle cuando el número sea igual a 6.
function detenerEnSeis(numpar) {
    // Tu código aquí
    for (i=0; i<=10; i++) {
        const numpar = i %2 ===0;
        if (numpar) {
            continue;
        }
        console.log(i);
        if(i===6) { //indicamos que pare al llegar al numero 6
            break;
        }
    }
}

// Ejercicio 7: Uso de continue
// Instrucción: Crea una función que recorra los números del 1 al 10, pero que se salte el número 5 usando `continue`.
function saltarCinco(i) {
    for (i=0; i<=10; i++){
        if(i===5) { //indicamos que debe saltar el numero 5 
            continue;
        }
        console.log(i);
        
    }

    // Tu código aquí
}

// Ejercicio 8: Switch básico
// Instrucción: Escribe una función que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente (1 es "Lunes", 2 es "Martes", ..., 7 es "Domingo"). Usa la estructura `switch`.
function obtenerDiaSemana(dia) {
    // Tu código aquí
    let diasem;
    switch (dia) {
        case 1:
            diasem= "Lunes";
            break;
        case 2:
            diasem= "Martes";
            break;
        case 3:
            diasem= "Miercoles";
            break;
        case 4:
            diasem= "Jueves";
            break;
        case 5:
            diasem= "Viernes";
            break;
        case 6:
            diasem= "Sabado";
            break;
        case 7:
            diasem= "Domngo";
            break;
        default:
            diasem= "Numero Invalido";
            break;
    }
    return diasem;
}

// Ejercicio 9: Switch con múltiples casos
// Instrucción: Escribe una función que reciba un carácter y devuelva si es una vocal. Utiliza un `switch` y agrupa los casos para las vocales (a, e, i, o, u).
function esVocal(letra) {
    // Tu código aquí
    let esvocal=false;
    switch (letra.toLowerCasea()){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            esvocal=true;
            break;
        default:
            esvocal=false;
    }
    return esvocal;
}

// Ejercicio 10: Condicionales complejos con operadores lógicos
// Instrucción: Escribe una función que reciba tres números y determine si todos son positivos, al menos uno es negativo, o todos son negativos. Usa operadores lógicos (`&&`, `||`).
function evaluarNumeros(a, b, c) {
    // Tu código aquí
    if (a>0 && b> 0 && c>0){
        return "Todos son positivos";
    } else if (a <0 || b <0|| c <0) {
        return "Al menos uno es negativo";
    } else if (a<0&& b < 0 && c < 0) {
        return"todos son negativos";
    } else {
        return "HAy una mezcla de positivos y negativos";
    }
}

// Exportar todas las funciones
export {
    verificarParidad,
    clasificarEdad,
    cuentaRegresiva,
    repetirMensaje,
    imprimirPares,
    detenerEnSeis,
    saltarCinco,
    obtenerDiaSemana,
    esVocal,
    evaluarNumeros,
};