// quanti chilometri?
let userKm = parseInt( prompt('quanti chilometri percorrerete?') );
// quanti anni?
let userAge = parseInt( prompt('quanti anni ha?') );
// costo biglietto fisso
let userPrice = userKm * 0.21;
// sconto
let userDiscPrice;

let userMessage;

if (userAge > 65) {
    userDiscPrice = userPrice - (userPrice * 0.4);
    userMessage = "sconto applicato del 40%, il costo del suo biglietto è di" + ' ' + userDiscPrice.toFixed(2) + '€'; 
}   else if (userAge < 18) {
    userDiscPrice = userPrice - (userPrice * 0.2);
    userMessage = "sconto applicato del 20%, il costo del suo biglietto è di" + ' ' + userDiscPrice.toFixed(2) + '€'; 
} else {
    userMessage = "nessuno sconto applicato, il costo del suo biglietto è di" + ' ' + userPrice.toFixed(2) + '€'; 
}

document.getElementById('result').innerHTML = userMessage;
