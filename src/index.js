 import validator from './validator.js'
 //consola. log(validador);

function getData(){
 console.log("estamos entrando a get data")
 const cardNumber = document.getElementById("card").value;

 
 validator.isValid(cardNumber);
 validator.maskify(cardNumber);

}

document.getElementById("pagar").onclick = getData;