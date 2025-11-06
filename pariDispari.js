
// genero un numero casuale tra 1 e 5
function randomNumber(){
    return Math.floor(Math.random() * 5) + 1;
}

// controllo se è pari o dispari
function pariOdispari(num){
    if (num % 2 === 0){
        return "pari";
    } else{
        return "dispari";
    }
}


// alert di benvenuto al gioco
function gioca(){
    alert("Pronto a giocare?")
}

// chiedo al player di scegliere un numero
let choice = prompt('scegli: scrivi "pari" o "dispari" ').trim().toLowerCase();

// imposto un if nel caso il player digitasse sbagliato il numero
if (choice !== "pari" && choice !== "dispari"){
    alert("hai scritto sbagliato, riprova");
}



// imposto la scelta del player
let numberPlayer = parseInt(prompt("scegli un numero tra 1 e 5"));

if (isNaN(numberPlayer) || numberPlayer < 1 || numberPlayer > 5) {
    alert("scrivi un numero intero tra 1 e 5");
}

// imposto la scelta del computer
let numberComputer = randomNumber();

// sommo i due numeri
let somma = numberPlayer + numberComputer;

// verifico se la somma sia pari o dispari
let risultato = pariOdispari(somma);

// imposto il vincitore
alert(`hai scelto ${choice}.
    hai giocato il numero ${numberPlayer}.
    il computer ha giocato il numero ${numberComputer}.
    la somma è ${somma}, quindi il risultato è ${risultato}.`);

    if (choice === risultato){
        alert("hai vinto!");
    } else {
        alert("ha vinto il computer!");
    }



