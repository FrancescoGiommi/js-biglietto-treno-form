const inputNameEl = document.getElementById("name-input");
const inputKmEl = document.getElementById("Km-input");
const inputAgeEl = document.getElementById("age-input");
const btnTicketEl = document.getElementById("btn-ticket");
const ticketDeletedEl = document.getElementById("delete-ticket");
const ticketUserInfo = document.getElementById("info-ticket-user");
const outputCardEl = document.getElementById("output-card");
const priceCostEl = document.getElementById("price-cost");
const typeTicketEl = document.getElementById("type-ticket");
const passengerNameEl = document.getElementById("passenger-name");

console.log(inputNameEl);
console.log(inputKmEl);
console.log(inputAgeEl);

const kmCost = 0.21;

const discountForUnder18 = 20;
const discountForOver65 = 40;

ticketUserInfo.addEventListener("Submit", (event) => {
  event.preventDefault();

  const fullName = inputNameEl.value;
  const AgeInput = inputAgeEl.value;
  const priceTicket = kmCost * inputKmEl;
});
