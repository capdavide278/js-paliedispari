/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

let parola=[];
let j;
stringa=prompt("inserisci una stringa");
console.log(stringa);

function palindroma(){
	let palindrome=true;

	for(let i = 0, j = parola.length - 1; i < parola.length / 2; i++, j--){
		if(parola[i]!=parola[j]){ 	
			palindrome=0;              
			break;                     
		}
	}
	if (palindrome){
        console.log("La stringa è palindroma");   
    }else{
        console.log("La stringa non è palindroma");
    }

}

palindroma();