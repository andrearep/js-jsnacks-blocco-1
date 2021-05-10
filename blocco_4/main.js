var palla = {
    nome: "palla",
    peso: 10
}
var pesoUtente = 0;
do {
    var pesoUtente = prompt("inserire un numero");
} while (pesoUtente <= 0 || isNaN(pesoUtente))


palla.peso = pesoUtente;
console.log(palla.peso);