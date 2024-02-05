let numero = parseInt(prompt("Ingrese un numero del 0 al 10"));

if (numero <= 2) {
  alert("Su nota es muy deficiente");
} else {
  if (numero <= 4) {
    alert("Su nota es insuficiente");
  } else if (numero <= 6) {
    alert("Su nota es suficiente")
  }else if(numero <= 7){
    alert("Su nota es bien")
  }else if (numero <= 9){
    alert("Su nota es notable")
  }else if (numero === 10){
    alert("Su nota es sobresaliente")
  }else if (numero > 10){
    alert("Numero erroneo")
  }
}
