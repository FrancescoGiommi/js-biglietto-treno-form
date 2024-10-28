/* Scrivere un programma che chieda all'utente:  
- Il numero di chilometri da percorrere
  - Età del passeggero
  Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, 
  secondo le seguenti regole:
  - il prezzo del biglietto è definito in base ai km (0.21 € al km)
  - va applicato uno sconto del 20% per i minorenni
  - va applicato uno sconto del 40% per gli over 65.
  
  MILESTONE 1:
  
  Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone 
  (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale 
  (o output) sarà anch'essa da scrivere in console.
  
  MILESTONE 2:
  
  Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina 
  in cui l'utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
  Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina 
  (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). 
  Questo richiederà un minimo di ricerca.Nota:
  Se non vi sentite particolarmente creativi, questa potrebbe essere un'implementazione da seguire 
  per il secondo milestone. 
  Potete scegliere di implementare una soluzione completamente diversa oppure simile, 
  ma in ogni caso cercate di farla vostra */

/* dichiaro gli input del form */
const inputNameEl = document.getElementById("name-input");
const inputKmEl = document.getElementById("km-input");
const inputAgeEl = document.getElementById("age-input");
const ticketBtnEl = document.getElementById("btn-ticket");
const outputTicketEl = document.getElementById("output-ticket");
const ticketFormEl = document.getElementById("ticket-user-form");

/* dichiaro i dati del biglitto  */
const namePassengerEl = document.getElementById("passenger-name");
const ticketRateEl = document.getElementById("rate-ticket");
const carriageEl = document.getElementById("carriage");
const cpCodeEl = document.getElementById("cp-code");
const ticketCostEl = document.getElementById("ticket-cost");

console.log(inputNameEl, inputKmEl, inputAgeEl);

ticketFormEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const kmPrice = 0.21;
  const fullprice = kmPrice * inputKmEl;
  let discountPerc = 0;
  let discountEur = 0;
  const fullName = inputNameEl.Value;
  const distanceKm = inputKmEl.Value;
  const ageUser = inputAgeEl.Value;

  discountEur = (fullprice * discountPerc) % 100;
  finalPrice = fullprice - discountEur;

  if (inputAgeEl === "under-18") {
    discountPerc = 20;
  } else if (inputAgeEl === "over-65") {
    discountPerc = 40;
  }

  console.log(fullprice);
  console.log(discountEur);
  console.log(finalPrice);
});
