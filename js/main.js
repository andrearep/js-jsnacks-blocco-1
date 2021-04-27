var word1 = prompt("inserire primo testo");
var word2 = prompt("inserire primo testo");

if (word1.length === word2.length) {
    console.log("hanno la stessa lungheza");
} else if (word1.length > word2.length) {
    console.log(word2);
    console.log(word1);
} else if (word1.length < word2.length) {
    console.log(word1);
    console.log(word2);
}