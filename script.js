// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.
// Prima di scrivere il codice impostate il ragionamento nei commenti!


// DATI

// Km da percorrere
// età del passeggero
//prezzo del biglietto = 0.21€/km
//sconto minorenni = 20%
//sconto over 65 = 40%

// LOGICA

//chiedo all'utente di inserire i km e la sua età.
//calcolo il prezzo totale senza sconti come = 0.21€ * km
//verifico che il passeggero sia minorenne: se lo è applico lo sconto del 20%, altrimenti
//verifico  se il passeggero è over 65: se lo è applico lo sconto del 40%, altrimenti
// verifico che non rientri nei casi non presi in esame (età=18 o 18<età>64) e stampo il prezzo totale normale.


//CREO IL PROMPT PER L'INSERIMENTO DEI KM E VERIFICO CHE FUNZIONI
 let nKmStr =prompt("Inserisci il numero di km che vuoi percorrere");
 let nKmNum = parseInt(nKmStr);
 console.log(nKmNum);

 //CREO IL PROMPT PER L'INSERIMENTO DELL'ETA'  E VERIFICO CHE FUNZIONI
 let ageStr =prompt("Inserisci la tua età");
 let ageNum = parseInt(ageStr);
 console.log(ageNum);


 //CREO LA VARIABILE PER IL PREZZO DEL BIGLIETTO E VERIFICO CHE SIA STAMPATO CORRETTAMENTE
 let ticketPrice = 0.21*nKmNum;
 console.log(ticketPrice);
//CREO LE VARIABILI SCONTO MINORENNI E OVER 65
 const scontoMinorenni = ticketPrice * 0.2;
 const scontoOver65 = ticketPrice * 0.4;
 //CREO LA VARIABILE PER DEFINIRE SE IL PASSEGGERO E' MINORENNE E VERIFICO SE LA STAMPA E' CORRETTA
 const minorenne = ageNum < 18;
 console.log(minorenne);

 //CREO LA VARIABILE PER DEFINIRE SE IL PASSEGGERO E' OVER 65 E VERIFICO SE LA STAMPA E' CORRETTA
 const over65 = ageNum > 65;
 console.log(over65);


 //CREO LA CONDIZIONE 

 if (minorenne){

    ticketPrice = ticketPrice - scontoMinorenni;
    console.log("Il prezzo del biglietto è di €" + ticketPrice.toFixed(2));
 } else if (over65) {
    ticketPrice = ticketPrice - scontoOver65;
    console.log("Il prezzo del biglietto è di €" + ticketPrice.toFixed(2));

 } else if (! (minorenne && over65)) {
    ticketPrice === ticketPrice;
    console.log("Il prezzo del biglietto è di €" + ticketPrice.toFixed(2));
 }







