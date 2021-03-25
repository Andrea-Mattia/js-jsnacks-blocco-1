// Snack 1
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while

// dichiaro le variabili che mi serviranno
// var somma = 0;
// var size = 5;

// Metodo 1: for

// for (var i = 1; i <= size; i++) {
//     var userNum = parseInt( prompt('Inserisci il numero ' + i + ' di ' + size) );
    
//     // validazione dato (se non è un numero me lo fa inserire di nuovo all'infinito finchè non lo è)
//     while (isNaN(userNum)) {
//         var userNum = parseInt( prompt('Dato inserito non valido. Inserisci il numero ' + i + ' di ' + size))
//     }
//     // aggiunta dell'userNum a somma
//     somma += userNum;
// }

// Metodo 2: while

// inizializzo il counter a 1
// var counter = 1;

// while (counter <= size) {
//    var userNum = parseInt( prompt('Inserisci il numero ' + counter + ' di ' + size) );

//    // validazione dato (se non è un numero me lo fa inserire di nuovo all'infinito finchè non lo è)
//    while (isNaN(userNum)) {
//        var userNum = parseInt( prompt('Dato inserito non valido. Inserisci il numero ' + counter + ' di ' + size))
//    }

//    // aggiunta dell' userNum a somma
//    somma += userNum;

//    // incremento del counter
//    counter++;
// }

// // stampa del totale
// console.log('Il totale è:', somma);



// Snack 2
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

dichiaro la variabile che mi servirà
var number = parseInt(prompt('Inserisci un numero'));

// validazione dato (se non è un numero me lo fa inserire di nuovo all'infinito finchè non lo è)
while (isNaN(number)) {
   var number = parseInt(prompt('Valore errato. Inserisci un numero'));
}

// controllo (tramite il modulo) se il numero inserito è pari o dispari e, di conseguenza, scelgo cosa stampare
if (number % 2 === 0) {
   console.log('Il tuo numero è pari:', number);
} else {
   // uso ++number per incrementare di uno il numero PRIMA che sia letto, in modo da stampare il numero successivo a quello inserito 
   console.log('Il tuo numero è dispari, stampo il successivo:', ++number);
}



// Snack 3
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.




// Snack 4
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari


// Snack 5 - Bonus
// Crea due array di numeri che hanno un numero di elementi diversi.
// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.