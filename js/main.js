const inputNameEl = document.getElementById("name-input");
const inputKmEl = document.getElementById("Km-input");
const inputAgeEl = document.getElementById("age-input");
const ticketGeneratorEl = document.getElementById("generator-ticket");
const ticketDeletedEl = document.getElementById("delete-ticket");

console.log(inputNameEl);
console.log(inputKmEl);
console.log(inputAgeEl);

const kmCost = 0.21;

ticketGeneratorEl.addEventListener("click", () => {
  console.log(inputAgeEl.value);
});
