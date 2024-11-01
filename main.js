// script.js

// Content arrays for dynamic content generation
const facts = [
    "Honey never spoils. Archaeologists have found pots of honey in ancient tombs still edible after 3,000 years.",
    "Octopuses have three hearts.",
    "Bananas are berries, but strawberries aren’t.",
    "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion."
];

const quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "It always seems impossible until it’s done. - Nelson Mandela",
    "Don’t watch the clock; do what it does. Keep going. - Sam Levenson"
];

const motivations = [
    "Believe in yourself, even if no one else does.",
    "Every day is a fresh start. Don’t let yesterday’s failures ruin today’s hopes.",
    "You’re stronger than you think!",
    "Push through, no matter how hard it gets. Better days are coming."
];

// Function to display daily content
function displayDailyContent() {
  document.getElementById("fact").textContent = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("quote").textContent = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("motivation").textContent = motivations[Math.floor(Math.random() * motivations.length)];
}

// Event listeners for premium upgrade
const premiumBtn = document.getElementById("premium-btn");
const modal = document.getElementById("premium-modal");
const closeModal = document.getElementById("close-modal");
const paymentInstructions = document.getElementById("payment-instructions");

// Show modal on clicking "Go Premium"
premiumBtn.onclick = () => {
  modal.style.display = "block";
};

// Close modal
closeModal.onclick = () => {
  modal.style.display = "none";
};

// Close modal when clicking outside of it
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Payment button actions
document.getElementById("paypal-btn").onclick = () => {
  window.location.href = "https://www.paypal.com/paypalme/simonbaha351";
};

document.getElementById("remitly-btn").onclick = () => {
  paymentInstructions.style.display = "block";
  paymentInstructions.textContent = "For Remitly, send payment to +254742078826. Once payment is complete, please email us at simonbaha351@gmail.com with your receipt.";
};

document.getElementById("mpesa-btn").onclick = () => {
  paymentInstructions.style.display = "block";
  paymentInstructions.textContent = "For MPesa, send payment to +254742078826. Once payment is complete, please email us at simonbaha351@gmail.com with your receipt.";
};

// Load content on page load
document.addEventListener("DOMContentLoaded", displayDailyContent);
