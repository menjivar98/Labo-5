var decimal = prompt("Ingrese el numero decimal");
convertir(decimal);

function convertir(n){
    var contador;
    var operacion;

    while(n >= 0){
       operacion = n/2;
       contador = operacion%2 + contador;     
    }

    console.log(contador);

}