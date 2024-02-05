let cadenaConcatenada = "";
while (true) {
  let entrada = prompt(
    "Ingresa una cadena de texto (o escribe 'cancelar' para salir):"
  );
  if (entrada.toLowerCase() === "cancelar") {
    break;
  }
  cadenaConcatenada += entrada + "-";
}let continuar = confirm("¿Deseas mostrar las cadenas concatenadas?");
if(continuar){
    console.log("Cadenas concatenadas: " + cadenaConcatenada.slice(0, -1));
}else{
    console.log ("Operacion cancelada por el usuario");
}
 

