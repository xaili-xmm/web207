function suma(n1, n2){
    return parseInt(n1)+parseInt(n2);  
    }

    function resta(n1, n2){
        return parseInt(n1)-parseInt(n2);
        
        }

        function multiplica(n1, n2){
            return parseInt(n1) * parseInt(n2);
            
            }

            function divide(n1, n2){
                return parseInt(n1) / parseInt(n2);
                
                }
        
        let numero1 = prompt ("Numero 1");
    
        let numero2 = prompt ("Numero 2");

                console.log(`La suma es: ${suma(numero1, numero2)}`);
                console.log(`La resta es: ${resta(numero1, numero2)}`);
                console.log(`La multiplicacion es: ${multiplica(numero1, numero2)}`);
                console.log(`La division es: ${divide(numero1, numero2)}`);

 let opcion = parseInt( prompt(`)
        Operacion:
        1-. Suma
        2-. Resta
        3-. Multiplicacion
        4-. Division
            `));
 switch(opcion){
                    case 1:
                            console.log(`La Suma es: ${suma(numero1, numero2)}`);
                        break;
                    case 2:
                            console.log(`La Resta es: ${resta(numero1, numero2)}`);
                        break;
                    case 3:
                            console.log(`La Multilicacion es: ${multiplica(numero1, numero2)}`);
                        break;
                    case 4:
                            console.log(`La Division es: ${divide(numero1, numero2)}`);
                        break;
                    default:
                            console.log("Error");
                        break;
                
                }