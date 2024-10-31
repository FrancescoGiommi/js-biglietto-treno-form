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
const under18El = document.getElementById("under-18");
const over65El = document.getElementById("over-65");
const adultEl = document.getElementById("adult");
const ticketBtnEl = document.getElementById("btn-ticket");

const ticketFormEl = document.getElementById("ticket-user-form");
const deleteTicketEl = document.getElementById("delete-ticket");

/* dichiaro i dati del biglitto  */
const namePassengerEl = document.getElementById("passenger-name");
const ticketRateEl = document.getElementById("rate-ticket");
const carriageEl = document.getElementById("carriage");
const cpCodeEl = document.getElementById("cp-code");
const ticketPriceEl = document.getElementById("ticket-price");
const outputTicketEl = document.getElementById("output-ticket");

ticketFormEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const userName = inputNameEl.value;
  const distanceKm = inputKmEl.value;
  const ageUser = inputAgeEl.value;
  const under18 = under18El.value;
  const adult = adultEl.value;
  const over65 = over65El.value;
  console.log(userName, distanceKm + " Km", ageUser + " anni");

  const kmPrice = 0.21;
  const priceTicket = (distanceKm * kmPrice).toFixed(2);
  let discountEur;
  let discountPerc;
  let rateTicket = "Biglietto Standard";
  discountEur = (priceTicket - discountPerc) % 100;
  const finalPrice = priceTicket - discountEur;
  if (ageUser == under18) {
    discountPerc = 20;
    rateTicket = "Biglietto Under 18";
  } else if (ageUser == over65) {
    discountPerc = 40;
    rateTicket = "Biglietto Over65";
  }

  let outputTicket = "";

  const generateTicket = `
<div class="col-12 ">
            <h3>DETTAGLIO PASSEGGERI</h3>
          </div>
          <div class="col-4">
            <h3>NOME PASSEGGERO</h3>
            <div class="card">
              <div class="card-body ">
                <span id="passenger-name">${userName}</span>
              </div>
            </div>
          </div>
          <div class="col-2">
            <h4>Offerta</h4>
            <div class="card">
              <div class="card-body">
                <span id="rate-ticket">${rateTicket}</span>
              </div>
            </div>
          </div>
          <div class="col-2">
            <h4>Carrozza</h4>
            <div class="card">
              <div class="card-body">
                <span id="carriage"></span>
              </div>
            </div>
          </div>
          <div class="col-2">
            <h4>Codice CP</h4>
            <div class="card">
              <div class="card-body">
                <span id="cp-code"></span>
              </div>
            </div>
          </div>
          <div class="col-2">
            <h4>Costo biglietto</h4>
            <div class="card">
              <div class="card-body">
                <span id="ticket-price">€ ${finalPrice}</span>
              </div>
            </div>
          </div>
`;
  outputTicket += generateTicket;
  outputTicketEl.innerHTML = outputTicket;
});
