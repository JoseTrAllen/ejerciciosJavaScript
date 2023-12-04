
/*En este ejercicio debes pedri dos números enteros y devolver el cociente de dividir el primero entre el segundo, pero si este es cero no debe hacer la división, sino lanzar un mensaje de error*/

let num1 = prompt("Dime un número");
let num2 = prompt("Dime otro número");
let resultado = num1 / num2;

if (num2 == 0) {
  alert("Error");
  
} else {
  alert(`${num1} dividido entre ${num2} es igual a ${resultado}`)
}

/*Se trata de escribir un script que diga si un número es par o es impar.
Recordemos que un número es par si al dividirlo por 2 da como resto 0. */

let numeroAzar = prompt("Dime un número y te diré si es par o impar");
let parOImpar = numeroAzar%2;

if (parOImpar === 0) {
  alert(`${numeroAzar} es par.`)
} else {
  alert(`${numeroAzar} es impar.`)
}


/*Un programa que pida un número y diga si es positivo o negativo. El cero se considera positivo */

let numero = prompt("Dime un número y te diré si es positivo o negativo");

if (numero >=0) {
  alert(`${numero} es positivo`);
} else {
  alert(`${numero} es negativo`);
}


/* Este script pide al usuario que teclee una letra entre A, B, C, D. Si pulsa la letra A en mayúsucla o en minúscula le dará el mensaje de que ha acertado, en caso contrario le dirá que se equivocó...
Si pulsa C le dará mensaj de error. */

let respuesta = prompt("Elige entre a, b, c, d");

if (respuesta === "a" || respuesta === "A") {
  alert("Correcto!")
} else if (respuesta === "b" || respuesta === "B" || respuesta === "d" || respuesta === "D") {
  alert("Te has equivocado");
} else if (respuesta === "c" || respuesta === "C") {
  alert("Error");
}


/*En este ejemplo el usuario entrará dos números. Debe devvolver la diferencia entre el mayor y el menor.
Si el usuario entra el 5 y el 8, el programa devolverá 3 (8 - 5) */

let minuendo = prompt("Dame un número");
let sustraendo = prompt("Dame otro número");
let resultado ;

if (minuendo >= sustraendo) {
  alert(resultado = minuendo - sustraendo);
} else if (sustraendo >= minuendo) {
  alert(resultado = sustraendo - minuendo)
}


/* Este ejercicio dirigirá a los clientes a la barra de bebidas o a la de comidas, para ello el cliente puede pedir vino, cerveza, refresco, agua. Si pide un cerveza o vino se le dirige a la barra y si no pues se le dirige a la tienda. */

let pedir = prompt("¿Qué va a beber?, cerveza, vino, refresco o agua");

if (pedir == "cerveza" || pedir == "vino") {
  alert("Vaya a la barra a recogerlo")
} else if (pedir == "refresco" || pedir == "agua") {
  alert("Vaya a la tienda");
}else {
  alert("No nos queda");
}


/*Este programa te ayuda a viajar. El programa pide al usuario si va a viajar con coche, tren, bicicleta o autobús. Si va en tren o autobus le recordará que lleve dinero para el billete.
El cliente pide ir en tren, aparecerá el mesnaje "lleva dinero para el ticket"
 */

let vehículo = prompt("¿Va a viajar en coche, tren, bicicleta o autobús?");

if (vehículo === "tren" || vehículo === "autobús") {
  alert("Recuerde llevar dinero para el billete");
} else {
  alert("Que tenga buen viaje");
}


/* En un tramo de un rally los conductores no deben ir ni demasiado rápido ni demasiado lentos. Este ejercicio debe tomar la longitud del tramo en kilometros y el tiempo empleado, si la velocidad está entre 40 y 60 km/h el conductor pasa la prueba en caso contrario es descalificado. */

let distancia = prompt("¿Cuántos kilómetros has recorrido?");
let tiempo = prompt("¿Y a qué velocidad?");
let velocidad = distancia / velocidad;

if (velocidad >= 40 && velocidad <= 60) {
  alert("Has superado la prueba");
} else {
  alert("Estás descalificado")
}


