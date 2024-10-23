const inputNameEl = document.getElementById("name-input");
const inputKmEl = document.getElementById("Km-input");
const inputAgeEl = document.getElementById("age-input");
const btnTicketGeneratorEl = document.getElementById("btn-generator-ticket");
const ticketDeletedEl = document.getElementById("delete-ticket");
const ticketUserInfo = document.getElementById("info-ticket-user");

console.log(inputNameEl);
console.log(inputKmEl);
console.log(inputAgeEl);

btnTicketGeneratorEl.addEventListener("click", () => {
  const fullName = inputNameEl.value;

  if (fullName.length < 3) {
    console.log("Errore");
  }
});
