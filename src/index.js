 import validator from './validator.js'
 //consola. log(validador);
//función que toma los valores, valida el formulario, guarda el valor del número de la tarjeta , llama las funciones de validator 
function getData(){
 //console.log("estamos entrando a get data")

 //validar formulario
 const name = document.getElementById("name").value;
 //const date = document.getElementById("date").value;
 const cvv = document.getElementById("cvv").value;
 const cuotas = document.getElementById("cuotas").selectedIndex;

 //validar que solo puedan poner 3 digitos
 if(cvv.length > 3){
    alert("ERROR. Debe colocar solamente tres dígitos");
 }
 if (cvv.length <= 2){
     alert("ERROR. Debe colocar  tres dígitos");
 }
//Validar que escriban un nombre
  if(name.length == ""){
    alert("ERROR. Debe colocar su nombre y apellido.");
 }
 if( isNaN(name) ) {
    //console.log("no es numero");
    //analizar
  }
  else{
      alert("ERROR. No puede colocar números en el campo de Nombre.");
  }

  if( name == null || name.length == 0 || /^\s+$/.test(name) ){  
    alert("ERROR. Debe colocar su nombre y apellido. ");
    }
//validar que obligadamente seleccionen una opción
 if( cuotas == null || cuotas == 0 ) {
    alert("ERROR.Debe seleccionar una opción.");
    
  }
  //declaracion de variable con el valor del número ingresado
 let cardNumber = document.getElementById("card").value;

 //Validar que solo se puedan colocar números y no espacios en blanco
 if( isNaN(cardNumber) ) {
    alert("ERROR. Puede colocar solamente números.")
  }
  if( cardNumber == null || cardNumber.length == 0 || /^\s+$/.test(cardNumber) ){  
  alert("No se pueden colocar espacios en blanco. Solo caracteres numéricos ");
  }
 //llamando a is valid para que se efecute en el Dom e indique si es valida o no la tarjeta
let validation = validator.isValid(cardNumber);
 
if( validation === true){
 document.getElementById("demo").innerHTML = "La tarjeta es valida";
 }
else{
 document.getElementById("demo").innerHTML = "La tarjeta es invalida";
 }
//llamando a maskify para que se coloque el número de la tarjeta mostrando solo los últimos 4 en el input de card
 let number = validator.maskify(cardNumber);
 document.getElementById("card").value = number;
}
//Llamado de la función al dar click
document.getElementById("pagar").onclick = getData;