/* var palla = {
    nome: "palla",
    peso: 10
}
var pesoUtente = 0;
do {
    var pesoUtente = prompt("inserire un numero");
} while (pesoUtente <= 0 || isNaN(pesoUtente))


palla.peso = pesoUtente;
console.log(palla.peso); */

var triangolo = {
    h: 10,
    b: 15,
}
var c = Math.sqrt(triangolo.h ** 2 + triangolo.b ** 2)
var perimetro = triangolo.h + triangolo.b + c;
var area = (triangolo.b * triangolo.h) / 2;
console.log("l'area è : " + area + " il perimetro è: " + perimetro.toFixed(2));
