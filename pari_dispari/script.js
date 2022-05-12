/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/


//scelta pari o dispari
let scelta = prompt("scegli tra pari e dispari: ");
console.log(scelta)
//chiedo il numero all'utente
let numero_Human = parseInt(prompt("Inserisci un numero da 1 a 5: "));
console.log(numero_Human);

//creo una funzione per il numero random del pc
function pc_random(){
    let numero_pc=(Math.floor(Math.random() * 5)+1);
    console.log(numero_pc);

    return numero_pc;
}

//creo la variabile somma e gli assegno il risultato dell' addizione
let somma = numero_Human + pc_random();
console.log(somma);

//creo la function per il risultato e scoprire se è pari o dispari e se go vinto o perso
function risultato() {
    if(somma % 2 == 0 && scelta =="pari"){
        console.log("hai vinto!");
    }else if(somma % 2 !== 0 && scelta =="pari"){
        console.log("hai perso!")
    }else if(somma % 2 == 0 && scelta == "dispari"){
        console.log("hai perso!");
    }else if(somma % 2 !==0 && scelta == "dispari"){
        console.log("hai vinto!");
    }
    return somma;
}

risultato();

