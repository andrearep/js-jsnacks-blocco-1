/*var word1 = prompt("inserire primo testo");
var word2 = prompt("inserire primo testo");

if (word1.length === word2.length) {
    console.log("hanno la stessa lungheza");
} else if (word1.length > word2.length) {
    console.log(word2);
    console.log(word1);
} else if (word1.length < word2.length) {
    console.log(word1);
    console.log(word2);
}*/

/*var somma = 0;
for (var i = 0; i < 10; i++) {
    var numero = parseInt(prompt("inserire numero"));
    somma += numero;
}
console.log(somma)*/;

/*var lista = ["giorgio", "Francesca", "pippo"]
var nome = prompt("scrivi il tuo nome ")

//variabile di controllo
var verifica = false;

for (var i = 0; i < lista.length && !verifica; i++) {
    if (lista[i] == nome) {
        console.log("il tuo nome è sulla lista");
        verifica = true;
    }
}
if (!verifica) {
    console.log("il tuo nome non è sulla lista");
}*/
/*var array = [];
for (var i = 0; i < 6; i++) {
    var numero = prompt("inserire un numero");
    if ((numero % 2) != 0) {
        array.push(numero);
    }
}*/

/*var numero = prompt("inserire numero");

for (var i = 0; i < numero; i++) {
    console.log(Math.pow((i + 1), 3));
}*/

var numero = prompt("inserire numero di 4 cifre:");
var controllo = true;
var array = [];
array.push(Math.floor(numero / 1000));
console.log(array[0]);
array.push(Math.floor((numero - (array[0] * 1000)) / 100));
console.log(array[1]);
array.push(Math.floor((numero - (array[0] * 1000 + array[1] * 100)) / 10));
console.log(array[2]);
array.push(Math.floor((numero - (array[0] * 1000 + array[1] * 100 + array[2] * 10))));
console.log(array[3]);

console.log(array[0] + array[1] + array[2] + array[3]);