// Frases de Macbeth (sin la frase inicial que se muestra una vez)
const quotes = [
  "Oh, mancha maldita de sangre",
  "Sangre traerá sangre",
  "La sangre de los inocentes mancha la tierra",
  "La vida y la muerte se mezclan con la sangre",
  "La sangre ya está sobre las manos del rey"
  // Añade más frases si es necesario, pero nunca incluir la frase inicial
];

const quoteElement = document.getElementById("quote");
const toggleSwitch = document.getElementById("toggleSwitch");
let interval;
let isChanging = false; // Comienza con el cambio de frases detenido

// Cambiar frase aleatoriamente
function changeQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
}

// Iniciar el cambio de frases en bucle infinito
function startChanging() {
  if (!isChanging) {
    isChanging = true;
    document.body.style.transition = "background-color 2s ease"; // Efecto de transición
    document.body.style.backgroundColor = "#000"; // Fondo negro
    interval = setInterval(changeQuote, 100); // Cambia la frase cada 100ms en un bucle infinito
  }
}

// Detener el cambio de frases
function stopChanging() {
  if (isChanging) {
    isChanging = false;
    clearInterval(interval);
    document.body.style.transition = "background-color 2s ease"; // Efecto de transición
    document.body.style.backgroundColor = "#b71c1c"; // Rojo sangre
  }
}

// Alternar entre iniciar y detener según el estado del interruptor
toggleSwitch.addEventListener("change", function() {
  if (this.checked) {
    startChanging();
  } else {
    stopChanging();
  }
});
