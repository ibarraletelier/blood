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

// Selecciona el contenedor de las frases y el video
const quoteElement = document.getElementById("quote");
const bloodVideo = document.getElementById("bloodVideo");
const videoContainer = document.getElementById("videoContainer");

// Cambiar frase aleatoriamente
function changeQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
}

// Variables para controlar el intervalo y el estado
let interval;
let isChanging = false; // Estado que indica si está cambiando la frase o no

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

// Mostrar video con un fade-in
function showBloodVideo() {
  videoContainer.style.opacity = 1;
}

// Ocultar video con un fade-out
function hideBloodVideo() {
  videoContainer.style.opacity = 0;
}

// Evento de inicio de presión (mousedown/touchstart)
function startPress() {
  if (isChanging) {
    // Si está cambiando, detener el cambio de frases y mostrar el video
    stopChanging();  // Detiene el cambio de frases cuando se hace clic o se toca
    showBloodVideo(); // Muestra el video con fade-in
    bloodVideo.currentTime = 0; // Reinicia el video para que comience desde el inicio
    bloodVideo.play(); // Asegura que el video se esté reproduciendo desde el inicio
  } else {
    // Si no está cambiando, reanudar el cambio de frases y ocultar el video
    startChanging();  // Reanuda el cambio de frases cuando se hace clic o se toca nuevamente
    hideBloodVideo(); // Oculta el video con fade-out
  }
}

// Iniciar el cambio de frases al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  changeQuote();  // Muestra una frase inicial
  startChanging();  // Comienza a cambiar frases
});

// Agregar los eventos de clic o toque
document.body.addEventListener("mousedown", startPress);
document.body.addEventListener("touchstart", startPress);