// Frases de Macbeth
const quotes = [
  "La sangre aquí está... interminable",
  "Oh, mancha maldita de sangre",
  "Sangre traerá sangre",
  "La sangre de los inocentes mancha la tierra",
  "La vida y la muerte se mezclan con la sangre",
  "La sangre ya está sobre las manos del rey"
  // Añade el resto de las frases aquí
];

// Elementos HTML
const quoteElement = document.getElementById("quote");
const toggleButton = document.getElementById("toggleButton");
const videoContainer = document.getElementById("videoContainer");
const bloodVideo = document.getElementById("bloodVideo");

// Cambiar frase aleatoriamente
function changeQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
}

// Variables para controlar el intervalo y el estado
let interval;
let isChanging = false; // Indica si está cambiando la frase

// Iniciar el cambio de frases cada 100ms
function startChanging() {
  if (isChanging) return; // Si ya está cambiando, no hace nada
  isChanging = true;
  interval = setInterval(changeQuote, 100); // Cambiar cada 100ms
}

// Detener el cambio de frases
function stopChanging() {
  clearInterval(interval);
  isChanging = false;
}

// Mostrar/ocultar video
function toggleVideo() {
  if (videoContainer.style.display === "none" || videoContainer.style.display === "") {
    videoContainer.style.display = "block"; // Muestra el video
    bloodVideo.currentTime = 0; // Reinicia el video
    bloodVideo.play(); // Asegura que el video se reproduzca
    stopChanging(); // Detiene el cambio de frases
  } else {
    videoContainer.style.display = "none"; // Oculta el video
    bloodVideo.pause(); // Pausa el video
    startChanging(); // Reanuda el cambio de frases
  }
}

// Iniciar el cambio de frases al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  changeQuote(); // Muestra una frase inicial
  startChanging(); // Comienza a cambiar frases
  videoContainer.style.display = "none"; // Asegura que el video esté oculto inicialmente
});

// Evento para el botón de activación del video
toggleButton.addEventListener("click", toggleVideo);
