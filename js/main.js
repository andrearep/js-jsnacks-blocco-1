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

var lista = ["giorgio", "Francesca", "pippo"]
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
}