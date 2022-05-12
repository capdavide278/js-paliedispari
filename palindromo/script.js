/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

//chiedo la parola all'utente
const parolaUtente = (prompt("inserisci una parola"));
console.log(parolaUtente);
//richiamo la funzione con l' argomento
let parolaInversa = invertiParola (parolaUtente);

//struttura if per stabilire se la parola è palindroma o no
if (parolaUtente == parolaInversa){
    console.log('la tua parola è palindroma');
  } else {
    console.log('la tua parola non è palindroma');
  }

// Creare una funzione per la parola palindroma
function invertiParola(parolaUtente){
    let parolaInversa = '';

    for( let i = parolaUtente.length - 1 ; i >= 0; i--){
        parolaInversa += parolaUtente[i];
    }

    return parolaInversa;
  }