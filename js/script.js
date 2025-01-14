// Frases de Macbeth
const quotes = [
  "La sangre aquí está... interminable",
  "Oh, mancha maldita de sangre",
  "Sangre traerá sangre",
  "La sangre de los inocentes mancha la tierra",
  "La vida y la muerte se mezclan con la sangre",
  "La sangre ya está sobre las manos del rey"
  // Añade más frases si es necesario
];

const quoteElement = document.getElementById("quote");
const toggleButton = document.getElementById("toggleButton");
let interval;
let isChanging = true; // Estado inicial: las frases cambian automáticamente

// Cambiar frase aleatoriamente
function changeQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
}

// Iniciar el cambio de frases
function startChanging() {
  if (!isChanging) {
    isChanging = true;
    toggleButton.textContent = "Detener";
    document.body.style.backgroundColor = "#000"; // Fondo negro
    clearInterval(interval);
    interval = setInterval(changeQuote, 100);
  }
}

// Detener el cambio de frases
function stopChanging() {
  if (isChanging) {
    isChanging = false;
    toggleButton.textContent = "Reanudar";
    clearInterval(interval);
    document.body.style.backgroundColor = "#b71c1c"; // Rojo sangre
  }
}

// Alternar entre iniciar y detener
function toggleChange() {
  if (isChanging) {
    stopChanging();
  } else {
    startChanging();
  }
}

// Iniciar el cambio de frases al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  changeQuote(); // Mostrar una frase inicial
  startChanging();
});

// Agregar evento al botón
toggleButton.addEventListener("click", toggleChange);
