/*
let numeroUsuario= prompt("Ingresa un numero");
console.log(numeroUsuario+"Es: "+typeof numeroUsuario);

if(numeroUsuario <=10){
    //sentencia True
    console.log("Genial");
}else{
    //sentencia false
    console.log("Muy mal");
}
*/
/*
let numero = prompt("Ingresa un numero");
if(numero == 10){
   console.log("Numero correcto y de tipo:"+typeof numero)
}
*/
/*
let dato = prompt("Ingresa un dato");
if(dato == 10){
    console.log("Numero correcto y de tipo:"+typeof dato)
}else{
    console.log("error porque el tipo de datos es:"+typeof dato)
}
*/

var dato1 = parseFloat(prompt("Ingresa Numero 1 : "));
var dato2 = parseFloat(prompt("Ingresa Numero 2 : "));
var dato3 = parseFloat(prompt("Ingresa Numero 3 : "));

if(dato1>dato2 && dato1>dato3){
    console.log("El numero 1 es mayor y es: "+dato1);
}else if(dato2>dato1 && dato2>dato3){
    console.log("El numero 2 es mayor y es: "+dato2);
}else if(dato3>dato1 && dato3>dato2){
    console.log("El numero 3 es mayor y es: "+dato3);
}else {
    console.log("Al menos dos numeros son iguales")
}