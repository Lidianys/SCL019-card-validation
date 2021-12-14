//objeto validador
const validator ={
  //declaracion del primero par de propiedades del objeto validador. Esta será igual a una función que realiza la validacion de la tarjeta mediante el algoritmo de Luhn
  isValid: function validar (cardNumber) {
   let arrayNumeros = new Array ();
   let x = 0;
   let total= 0;
   let sumatoria = 0;
   //Para invertir el array
   for (let i = cardNumber.length -1; i >= 0; i--){
    arrayNumeros[x] = cardNumber[i];
    x=x+1;
    
   }
   //console.log("entrando a funcion de invertir" + arrayNumeros);
   //Multiplicando por dos los números en posiciones pares, y si el resultado es mayor a 9, sumar los dígitos
   for (let i = 1; i < arrayNumeros.length; i = i + 2) {
    arrayNumeros[i] = arrayNumeros[i]*2;
    if( arrayNumeros[i] > 9 ){
      let newNumber;
      let position = 0;
      newNumber = String(arrayNumeros[i]);
      arrayNumeros[i] = parseInt(newNumber[position]) + parseInt(newNumber[position + 1]);
      //console.log("entrando a numeros multiplicados" + arrayNumeros);
    }
    //console.log(arrayNumeros);
   }
   //sumatoria de todos los números
   for( let i = 0; i < arrayNumeros.length; i = i + 1){
   sumatoria = sumatoria + parseInt(arrayNumeros[i]);
   //console.log("la suma es " + sumatoria);
   }
   //dividir el resultado entre 10 y analizar el excedente, si es 0, es valida, si no, es invalida
   total = sumatoria%10;
   //console.log("sumatoria total es" + total);
   if(total === 0){
   //console.log("es valida");
   //alert("Es valida");
   //document.getElementById("demo").innerHTML = " valida";
   return true;
   }
   else{
    //console.log("es invalida");
    //alert("es invalida");
    //document.getElementById("demo").innerHTML = " invalida";
    return false;
  }
 },
 //segunda propiedad de validator. Esta es igual a una funcion que va a convertir los numeros menos los utimos 4 en simbolo de número
 maskify: function marcar(cardNumber) { 
  let numerosEnteros = new Array(16);
  let x = 0;
  
  for (let i = cardNumber.length -1; i >= 0; i--){
    let cardnumberinicial = 0 ;
    let cardNumberfinal = 0;
    numerosEnteros[x] = cardNumber[i];
    cardNumberfinal=  cardNumber.slice(-4);
    cardnumberinicial = cardNumber.slice(0, -4);
    cardnumberinicial = cardnumberinicial.replace(/1/gi, "#");
    cardnumberinicial = cardnumberinicial.replace(/2/gi, "#");
    cardnumberinicial = cardnumberinicial.replace(/3/gi, "#");
    cardnumberinicial = cardnumberinicial.replace(/4/gi, "#");
    cardnumberinicial = cardnumberinicial.replace(/5/gi, "#");
    cardnumberinicial = cardnumberinicial.replace(/6/gi, "#");
    cardnumberinicial = cardnumberinicial.replace(/7/gi, "#");
    cardnumberinicial = cardnumberinicial.replace(/8/gi, "#");
    cardnumberinicial = cardnumberinicial.replace(/9/gi, "#");
    cardnumberinicial = cardnumberinicial.replace(/0/gi, "#");
    //cardnumberinicial = cardNumber.replace("1","2", "3","4", "5", "6", "7", "8","9", "0", "#");
    cardNumber= cardnumberinicial.concat(cardNumberfinal);
    return cardNumber;
  //console.log("muestra 4 finales " + cardNumberfinal + "muestra de los restantes"+ cardnumberinicial);
  //console.log("el numero es " + cardNumber);
  //document.getElementById("card").value = cardNumber;
  //document.getElementById("cardNumber1").innerHTML = cardNumber;
 }
 }
}
export default validator;
