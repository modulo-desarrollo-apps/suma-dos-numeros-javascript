const prompts = require('prompts'); // Incluímos la librería.

(async () => {
  // Le preguntamos al usuario el número A.
  const A = await prompts({
    type: 'number',
    name: 'value',
    message: 'Ingresa el valor de A',
  });

  // Le preguntamos al usuario el número B.
  const B = await prompts({
    type: 'number',
    name: 'value',
    message: 'Ingresa el valor de B',
  });

  // Realizamos la suma.
  const C = A.value + B.value;

  // Mostramos el resultado de la suma de A y B.
  console.log(`La suma de ${A.value} + ${B.value} es ${C}`);
})();