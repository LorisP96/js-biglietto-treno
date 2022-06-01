// quanti chilometri?
let userKm = parseInt ( prompt ('quanti chilometri percorrerete?') );
// quanti anni?
let userAge = parseInt ( prompt ('quanti anni ha?') );
// costo biglietto fisso
let userPrice = userKm * 0.21;
// sconto
let userDiscPrice;

let userMessage;

if ( userAge > 65 ) {
    userDiscPrice = userPrice - (userPrice * 0.4);
    userMessage = "sconto applicato del 40%, il costo del suo biglietto è di" + ' ' + userDiscPrice + '€'; 
}   else if (userAge < 18 ) {
    userDiscPrice = userPrice - (userPrice * 0.2);
    userMessage = "sconto applicato del 20%, il costo del suo biglietto è di" + ' ' + userDiscPrice + '€'; 
} else {
    userDiscPrice === userPrice;
    userMessage = "nessuno sconto applicato, il costo del suo biglietto è di" + ' ' + userDiscPrice + '€'; 
}

console.log (userMessage);
console.log (userDiscPrice);