//Paso 1 : Declaracion de variable

let num1, num2;
let operacion;

//Paso 2: Funcion para realizar operaciones

function realizarOperacion(num1, num2, operacion) { //Iniciacion de variables y funciones
    if(operacion === "suma"){ //Condicionar para la suma
        return num1 + num2 ; //Operacion para sumar

    } else if (operacion === "resta") { //Condicional para la resta
        return num1 - num2;

    } else if(operacion === "multiplicacion"){ //Condicional para multiplicacion
        return num1 * num2;
    } else if (operacion === "division") { //Condicional para division
        if (num2 === 0){
            return "error de division por cero no permitida";
        }
        return num1 / num2;
    } else { //Cualquier otra operacion no permitida
        return "operacion no valida";
   
    }

}

//Paso 3: Bucle para realizar multiples operaciones

while (true){
    //Solicitar al usuario que ingrese el primer numero
    num1 = parseFloat(prompt("Ingrese el primer numero (o escriba Salir para terminar)"));

    //Si la entrada no es un numero se termina el bucle
    if(isNaN(num1)){
        console.log("Adios.");
        break;

    }

    //Solicitar al usuario que ingrese el segundo numero
    num2 = parseFloat(prompt("Ingrese el segundo numero"));

    //Si el segundo numero no es valido
    if(isNaN(num2)){
        console.log("Por favor ingrese un numero valido");
        continue; //Regresa al incio del bucle
    }

    //Solcita al usuario que ingrese la operacion deseada

operacion = prompt ("Ingrese la operacion (suma, resta, multiplicacion, division");

//Si el usuario ingresa "Salir" terminar bucle
if(operacion === "salir"){
    console.log("Adios.");
    break;
}
    //Llama la funcion operaciones con los datos proporcionados
    const resultado = realizarOperacion(num1, num2, operacion.toLowerCase());

    console.log(`resultado: ${resultado}`);

}