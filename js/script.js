// Frases de Macbeth
const quotes = [
  "¿Quién es este hombre ensangrentado?",
  "¡Que se condense mi sangre, que se bloqueen todas las puertas al remordimiento!",
  "En estos casos es aquí donde se nos juzga, porque damos instrucciones sangrientas que, aprendidas, son un tormento para quien las da",
  "¿Cómo no creerán si marcamos con sangre a los que duermen junto a él, en su cámara, y usamos sus puñales, que ellos lo hicieron?",
  "Todavía te veo 🗡️; también las gotas, en el filo y en la empuñadura, de una sangre que antes no estaba",
  "Es mi sangrienta empresa que así crece ante mis ojos",
  "¿Por qué has traído esos puñales hasta aquí? Ve, devuélvelos; mancha con sangre a los dormidos centinelas",
  "¿Podrá lavar la sangre todo el océano de Neptuno?",
  "Aquí yacía Duncan, su plateada piel bordada con oro de su sangre",
  "Sus manos y sus rostros tenían manchas de sangre y sus dagas también",
  "Allí los asesinos, en el color inmersos de su oficio, con dagas torpemente cubiertas de coágulos de sangre",
  "Cuando hayamos encubierto nuestra desnuda fragilidad, podremos indagar estos hechos tan sangrientos para conocerlos mejor",
  "El más cercano en sangre es el más sanguinario",
  "Contempla cómo el cielo, turbado por los actos del hombre, amenaza su sangriento escenario",
  "¿Se sabe quién cometió este acto tan sanguinario?",
  "Hemos oído que nuestros sanguinarios familiares se refugian en Inglaterra y en Irlanda",
  "Y rival tan sangriento que cada instante de su vida está clavado en el centro mismo de la mía",
  "Con tu ensangrentada e invisible mano detén y rompe en mil pedazos esta atadura con la que palidezco",
  "¡Llevas sangre en tu rostro!",
  "Antes de ahora se derramó ya sangre en los tiempos antiguos",
  "¡Tus huesos están vacíos y tu sangre está fría!",
  "Será con sangre, dicen; la sangre llama a la sangre",
  "El cuervo, la urraca y el grajo han descubierto al más oculto de los asesinos sangrientos",
  "He ido muy lejos en el camino de la sangre",
  "Liberar nuestros festines y banquetes de cuchillos de sangre",
  "Que te enfríe la sangre del simio; que el hechizo así funcionará",
  "Echad la sangre de una cerda cebada con sus nueve lechones",
  "Sé decidido, sanguinario, valiente",
  "¡Desde su cabeza ensangrentada Banquo ahora me sonríe!",
  "Admito que es hombre sanguinario",
  "Con un tirano usurpador, de cetro ensangrentado",
  "Quién hubiera pensado que el viejo tuviese tanta sangre",
  "Aún queda olor a sangre",
  "Da todo el aliento a esos clamorosos mensajeros de la sangre y la muerte",
  "Apártate de mí que no soporto más sangre de los tuyos!",
  "¡Tú, más sangriento de lo que las palabras pueden expresar!",
  "(Truenos. Aparición segunda, un niño ensangrentado)"
];

const quoteElement = document.getElementById("quote");
const toggleSwitch = document.getElementById("toggleSwitch");
const indicatorImage = document.getElementById("indicatorImage");
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
    
    // Eliminar la imagen del DOM
    if (indicatorImage) {
      indicatorImage.remove();
    }
  }
}

// Detener el cambio de frases
function stopChanging() {
  if (isChanging) {
    isChanging = false;
    clearInterval(interval);
    document.body.style.backgroundColor = "#7b0c00";
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
