/*Ejercicio 3*/

var numero = prompt("Ingrese el numero de terminos: ");
fibonacci(numero);

function fibonacci(numero) {
    var var1 = 0;
    var var2 = 1;
    var var3;

    console.log(var1 + "");
    console.log(var2 + "");

    for (var i = 3; i <= numero; i++) {
        var3 = var1 + var2;
        var1 = var2;
        var2 = var3;
        console.log(var3 + "");
    }
}