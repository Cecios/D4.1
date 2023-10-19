//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

console.log("ESERCIZIO N° 1");
let a = 3
let b = 5
if (a>b) {
    console.log(a,"è maggiore di",b);
}
else {
    console.log(b,"è maggiore di",a);
}
console.log("\n");
/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

console.log("ESERCIZIO N° 2");
let num = 20
if (num < 5) {
    console.log("Tiny");
} else if ( num < 10) {
    console.log("Small");
} else if ( num < 15) {
    console.log("Medium");
} else if ( num < 20){
    console.log("Large");
} else if (num >= 20)
{
    console.log("Huge");
} else {
    console.log("Valore non dichiarato!");
}

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

console.log("ESERCIZIO N° 3");
for (let i = 0; i <= 10 ; i++) {
    if (i===3 || i === 8) {
        continue;
    }
    console.log(i);    
}
console.log("\n");
/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

console.log("ESERCIZIO N° 11");
for (let i = 0; i <= 15; i++) {
    if (i === 0){
        console.log("Il numero: ",i,"è nullo");
    } 
    else if (i%2 === 0) {
        console.log("Il numero: ",i,"è pari");
    }
    else{
        console.log("Il numero: ",i,"è dispari");
    }
}
console.log("\n");
//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

console.log("ESERCIZIO EXTRA 1");

let x = 8
let y = 0
let controllo = (x== 8 || y==8)
console.log("uno dei due numeri è 8?: ",controllo);
controllo = (x+y === 8 || Math.abs(x-y) === 8)
console.log("La somma/differenza fa 8?: ",controllo);

console.log("\n");
/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

console.log("ESERCIZIO EXTRA 2");
let totalShoppingCart = 80
let speseSpedizione = 10

if (totalShoppingCart > 50){
  console.log("Valore checkout a fronte di una spesa di ",totalShoppingCart, " è: ",totalShoppingCart);
}
else {
  console.log("Valore checkout a fronte di una spesa di ",totalShoppingCart, " è: ",totalShoppingCart+speseSpedizione);
}
console.log("\n");
/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

console.log("ESERCIZIO EXTRA 3");

let sconto = 0.2 * totalShoppingCart
if (totalShoppingCart - sconto > 50 ){
  console.log("*BLACK FRIDAY* Valore checkout a fronte di una spesa di ",totalShoppingCart," scontata = ",totalShoppingCart - sconto, " è: ",totalShoppingCart - sconto);
}
else {
  console.log("*BLACK FRIDAY* Valore checkout a fronte di una spesa di ",totalShoppingCart," scontata = ",totalShoppingCart - sconto, " è: ",totalShoppingCart - sconto + speseSpedizione);
}
console.log("\n");
/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

console.log("ESERCIZIO EXTRA 4");

let gender 
let isMale = true
isMale ? gender = '"male"' : gender = '"female"';  
console.log("Il gender è: ",isMale," quindi: ",gender);

console.log("\n");
/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/
console.log("ESERCIZIO EXTRA 5");

for (let i = 1; i <= 100; i++) {

  if ((i%3 === 0)&&(i%5 === 0 )){
    console.log("FizzBuzz");
  }
  else if (i%3 === 0){
    console.log("Buzz");
  }
  else if (i%5 === 0){
    console.log("Fizz");
  }
  else {
    console.log(i);
  }
}
