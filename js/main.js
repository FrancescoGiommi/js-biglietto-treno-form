const inputNameEl = document.getElementById("name-input");
const inputKmEl = document.getElementById("Km-input");
const inputAgeEl = document.getElementById("age-input");
const btnTicketGeneratorEl = document.getElementById("btn-generator-ticket");
const ticketDeletedEl = document.getElementById("delete-ticket");
const ticketUserInfo = document.getElementById("info-ticket-user");

console.log(inputNameEl);
console.log(inputKmEl);
console.log(inputAgeEl);

const kmCost = 0.21;
let NumKm = inputKmEl;
const priceTicket = NumKm * kmCost;
