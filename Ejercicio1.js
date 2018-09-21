/*Ejercicio 1*/
var texto = prompt("Ingrese palabra: ");
palindrome(texto);

function palindrome(texto) {
    var a = texto.split("").reverse().join("");


    if (a == texto) {
        console.log("La palabra es palindrome")
    }

    else {
        console.log("La palabra no es palindrome")
    }

}




























































