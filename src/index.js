//import validator from './validator.js'
//let cardNumber;
//let arrayNumeros = new Array (16);
//cardNumber = document.getElementById("card").value;

//function pagarBoton(){
  //cardNumber = document.getElementById("card").value;
   //alert("hola " + cardNumber);
//}
//document.getElementById("pagar").onclick = pagarBoton;

//let saveNumber = function(){
 //  let cardNumber = document.getElementsByClassName("card").value,
  // arrayGuardar = [];         
  // for (var i = 0; i < cardNumero.length; i++) {    
  // arrayGuardar[i] = cardNumero[i].value;
 //  console.log (cardNumero[i].value);     
 //  }       
//}

let cardNumber;
let arrayNumeros = new Array[16];


function getData(){

 let cardNumber = document.getElementById("card").value;
 //alert("hola" + cardnumber);

let x = 0;
for (let i = cardNumber.length -1; i >= 0; i--){
    arrayNumeros[x] = cardNumber[i];
    x=x+1;
}
console.log(arrayNumeros);
//for ( let i=0; i < cardNumber.length; i++){
//arrayNumeros[i] = cardNumber[i];
//}
//console.log(arrayNumeros);


}
  document.getElementById("pagar").onclick = getData;