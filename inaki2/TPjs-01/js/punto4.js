let sumaTotal = 0;
while (true) {
  let entrada = prompt("Ingresa un número:");
  if (entrada === null) {
    break; // Salir si se pulsa cancelar
  }
  let numero = parseFloat(entrada);
  if (isNaN(numero)) {
    alert("Por favor, ingresa un número válido.");
  } else {
    sumaTotal += numero;
  }
}
alert("La suma total de los números introducidos es: " + sumaTotal);
