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

// dichiaro la variabile che mi servirà
// var number = parseInt(prompt('Inserisci un numero'));

// // validazione dato (se non è un numero me lo fa inserire di nuovo all'infinito finchè non lo è)
// while (isNaN(number)) {
//    var number = parseInt(prompt('Valore errato. Inserisci un numero'));
// }

// // controllo (tramite il modulo) se il numero inserito è pari o dispari e, di conseguenza, scelgo cosa stampare
// if (number % 2 === 0) {
//    console.log('Il tuo numero è pari:', number);
// } else {
//    // uso ++number per incrementare di uno il numero PRIMA che sia letto, in modo da stampare il numero successivo a quello inserito 
//    console.log('Il tuo numero è dispari, stampo il successivo:', ++number);
// }



// Snack 3
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

// creo i due array contenenti i nomi e i cognomi che userò
// var nomi = ['paolo', 'andrea', 'franco', 'giuseppe', 'gastani'];
// // console.log(nomi);
 
// var cognomi = ['duzioni', 'pizzi', 'calabro', 'scognamiglio', 'frinzi'];
// // console.log(cognomi);

// // creo l'array vuoto dove inserirò i nomi generati
// var nomiCognomi = [];

// // loop per generare il nome degli invitati
// while (nomiCognomi.length < 3) {
 
//    // gen index di nomi
//    var randomNomiIndex = Math.floor( Math.random() * nomi.length);
 
//    // gen index di cognomi
//    var randomCognomiIndex = Math.floor( Math.random() * cognomi.length);
 
//    // gen nome completo
//    var newFullName = nomi[randomNomiIndex] + ' ' + cognomi[randomCognomiIndex];
 
//    // aggiungo all'array vuoto il nome completo generato casualmente
//    nomiCognomi.push(newFullName);
// }

// // stampo l'array con i nomi generati
// console.log(nomiCognomi);


// Snack 4
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

// inizializzo l'array di numeri e assegno 0 al valore di somma
// var numbers = [12, 15, 34, 38, 94, 63, 122, 4, 117];
// var sum = 0;

// // stampo il valore di numbers per avere un riferimento visivo
// console.log(numbers);

// // creo il loop per sommare i numeri in posizione dispari nell'array
// for (var i = 0; i < numbers.length; i++) {
   
//    // condizione da rispettare affinchè il numero possa essere sommato (se i % 2 !== 0 allora vuole dire che il numero ha indice dispari nell'array) 
//    if (i % 2 !== 0) {

//     // se la condizione è verificata, aggiungo il numero alla somma
//        sum += numbers[i];
//    }
// }

// // stampo la somma dei numeri con indice dispari
// console.log('La somma dei numeri in posizione dispari è:', sum);


// Snack 5 - Bonus
// Crea due array di numeri che hanno un numero di elementi diversi.
// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

// inizializzo i due array di numeri di lunghezza dicersa
var firstArray = [12, 4, 65, 99, 135];
var secondArray = [33, 45];
console.log('Array iniziali:', firstArray, secondArray);

// inizializzo una variabile che genera numeri random da 1 a 100 da inserire nell'array più corto
var randomNumber = Math.floor( (Math.random() * 100) + 1);

// confronto tra le lunghezze dei due array
if (firstArray.length > secondArray.length) {
    do {
        secondArray.push(randomNumber);
    } while (firstArray.length > secondArray.length);

} else if (firstArray.length < secondArray.length) {
    do {
        firstArray.push(randomNumber);
    } while (firstArray.length < secondArray.length);
}

// funziona anche così, senza bisogno di if (se la prima condizione è vera, la seconda viene ignorata e viceversa)
// while (firstArray.length > secondArray.length) {
//     secondArray.push(randomNumber);
// }

// while (firstArray.length < secondArray.length) {
//     firstArray.push(randomNumber);
// }

// array finali (dopo il push in uno dei due)
console.log(firstArray, secondArray);
// stampa delle lunghezze finali
console.log('Ora i due array hanno la stessa lungezza, cioè:', firstArray.length, secondArray.length);