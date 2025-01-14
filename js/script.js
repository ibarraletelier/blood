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

// Selecciona los elementos
const quoteElement = document.getElementById("quote");
const bloodVideo = document.getElementById("bloodVideo");
const videoContainer = document.getElementById("videoContainer");
const toggleButton = document.getElementById("toggleButton");

// Cambiar frase aleatoriamente
function changeQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
}

// Variables de control
let interval;
let isChanging = false;
let isVideoVisible = false;

// Iniciar el cambio de frases cada 100ms
function startChanging() {
  if (isChanging) return;
  isChanging = true;
  interval = setInterval(changeQuote, 100);
}

// Detener el cambio de frases
function stopChanging() {
  clearInterval(interval);
  isChanging = false;
}

// Mostrar u ocultar el video
function toggleVideo() {
  if (isVideoVisible) {
    hideBloodVideo();
    stopChanging();
    toggleButton.textContent = "Activar";
  } else {
    showBloodVideo();
    startChanging();
    toggleButton.textContent = "Desactivar";
  }
  isVideoVisible = !isVideoVisible;
}

// Mostrar video con un fade-in
function showBloodVideo() {
  videoContainer.style.opacity = 1;
  bloodVideo.currentTime = 0; // Reinicia el video
  bloodVideo.play();
}

// Ocultar video con un fade-out
function hideBloodVideo() {
  videoContainer.style.opacity = 0;
  bloodVideo.pause();
}

// Configuración inicial
document.addEventListener("DOMContentLoaded", () => {
  changeQuote(); // Muestra una frase inicial
  toggleButton.addEventListener("click", toggleVideo); // Vincula el botón con la función
});
