// Frases de Macbeth
const quotes = [
  "Oh, mancha maldita de sangre",
  "Sangre traerá sangre",
  "La sangre de los inocentes mancha la tierra",
  "La vida y la muerte se mezclan con la sangre",
  "La sangre ya está sobre las manos del rey"
];

const quoteElement = document.getElementById("quote");
const toggleSwitch = document.getElementById("toggleSwitch");
let interval;
let isChanging = false;

// Cambiar frase aleatoriamente
function changeQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
}

// Iniciar el cambio de frases
function startChanging() {
  if (!isChanging) {
    isChanging = true;
    document.body.style.backgroundColor = "#000";
    interval = setInterval(changeQuote, 100);
  }
}

// Detener el cambio de frases
function stopChanging() {
  if (isChanging) {
    isChanging = false;
    clearInterval(interval);
    document.body.style.backgroundColor = "#b71c1c";
  }
}

// Evento del switch
toggleSwitch.addEventListener("change", function () {
  if (this.checked) {
    startChanging();
  } else {
    stopChanging();
  }
});
