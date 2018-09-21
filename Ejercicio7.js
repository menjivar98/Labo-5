var anio = prompt("Ingrese año bisiesto: ")
bisiesto(anio);


function bisiesto(n){
    if ((((n%100)!=0)&&((n%4)==0))||((n%400)==0)){
        console.log("El año es bisiesto");
    }
    else{
        console.log("El año no es Bisiesto")
    }
}