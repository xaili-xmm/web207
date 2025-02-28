function suma(n1, n2){
    return parseInt(n1)+parseInt(n2);
    
    }
    
    let numero1 = prompt ("Numero 1");
    
    let numero2 = prompt ("Numero 2");

    console.log(`La suma es: ${suma(numero1, numero2)}`);

    let opcion = parseInt( prompt(`)
    Operacion:
    1-. Suma  
    `));
switch(opcion){
    case 1:
            console.log(`La suma es: ${suma(numero1, numero2)}`);
        break;
    default:
            console.log("Error");
        break;

}