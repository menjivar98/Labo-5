var radio = prompt("Ingrese el radio de la circunferencia: ");

area(radio);

function area(n){
    var pi = 3.1416;
    var rt;
    
    if( n <= 0){
        console.log("El radio tiene que ser mayor a 0");
    }
    else{
        rt =  pi*n**2;
        console.log("El radio del circulo es: " + rt);
    }
}