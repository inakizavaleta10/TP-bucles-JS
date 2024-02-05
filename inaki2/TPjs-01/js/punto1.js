const edad = parseInt(prompt("Ingrese su edad"));
//if(condicion logica){
//todo el codigo que quiero ejecutar si cumple la condicion
//

if (edad >= 18 && edad <= 72) {
  alert("Puede adquirir un permiso para conducir");
} else {
  if (edad < 18) {
    alert("Sos menor de edad no puedes tener un permiso para conducir");
  } else {
    alert("No puede manejar, ya es mayor");
  }
}
