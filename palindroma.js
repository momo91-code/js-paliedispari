// imposto funzione per controllare parole palindrome o no
function isPalindroma(parola) {
// pulisco la parola da eventuali caratteri speciali   
    let clean = parola.replace(/\s+/g,"").toLowerCase();
// inverto la parola
    let inverted = clean.split("").reverse().join("");
// riporto true se la parola è uguale
    return clean === inverted;
}

// imposto una funzione per leggere e controllare la parola inserita
function playPalindroma(){
    alert("troviamo parole palindrome");
// imposto la richiesta di inserimento parola
    let parola = prompt ("inserisci la parola che vuoi analizzare");
    
    if (!parola){
        alert("non hai inserito nulla");
        return;
    }

    if (isPalindroma(parola)){
        alert(`la parola "${parola}" è palindroma!`);
    } else {
        alert(`la parola "${parola}" non è palindroma!`);
    }
}