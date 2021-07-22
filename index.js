const prompt = require('prompt-sync') // Incluímos la librería.

// Le preguntamos al usuario el número A.
var A = prompt('Ingresa el valor de A')

// Le preguntamos al usuario el número B.
var B = prompt('Ingresa el valor de B')

// Realizamos la suma.
var C = A + B

// Mostramos el valor de la variable C (que contiene la suma de A y B).
console.log(`La suma de ${A} + ${B} es ${C}`)