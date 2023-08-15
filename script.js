const poemaContainer = document.querySelector('.poema');
const siguienteBtn = document.querySelector('#siguienteBtn');
const heLeidoBtn = document.querySelector('#heLeidoBtn');

const poemas = [
        [
          "En el jardín de nuestros sueños,",
          "florece el amor en mil colores.",
          "Como el sol que alumbra el día,",
          "iluminas mi vida, eres mi alegría."
        ],
        [
          "Tú y yo, unidos por un lazo,",
          "en cada abrazo, en cada abrazo.",
          "En tu mirada encuentro el cielo,",
          "en tu sonrisa, mi anhelo."
        ],
        [
          "En cada palabra que compartimos,",
          "se entrelazan nuestros destinos.",
          "Eres el faro que guía mi camino,",
          "mi amor por ti es puro y genuino."
        ],
        [
          "Bajo el manto de estrellas brillantes,",
          "nuestros corazones laten vibrantes.",
          "Cada noche es un sueño cumplido,",
          "en tus brazos encuentro mi abrigo."
        ],
        [
          "Eres el verso que en mi alma resuena,",
          "la melodía suave que el corazón ordena.",
          "En tus ojos encuentro mi paz,",
          "contigo, mi amor, todo es capaz."
        ],
        [
          "Tus besos son dulces como la miel,",
          "cada caricia enciende lo que siento por ti.",
          "En cada risa, en cada mirada cómplice,",
          "veo el futuro que juntos construimos."
        ],
        [
          "En el silencio de la noche,",
          "nuestro amor brilla con fuerza.",
          "Eres mi refugio, mi confidente,",
          "mi amor por ti es eternamente."
        ],
        [
          "Caminando juntos, mano a mano,",
          "nuestros sueños se vuelven realidad.",
          "Eres mi compañera en cada paso,",
          "te amo con una pasión sin igual."
        ],
        [
          "En cada estación, en cada clima,",
          "nuestro amor se mantiene firme y cálido.",
          "Tú eres mi sol en los días nublados,",
          "contigo a mi lado, soy intrépidamente valiente."
        ],
        [
          "Eres mi razón de ser, mi inspiración,",
          "cada día contigo es una celebración.",
          "Cada detalle tuyo es un regalo,",
          "te amo más de lo que las palabras pueden relatar."
        ],
        [
          "Bajo el cielo estrellado nos encontramos,",
          "tus ojos brillan como las luces en la noche.",
          "Nuestro amor es eterno, como el infinito,",
          "contigo, cada día es un precioso broche."
        ],
        // Agrega más poemas aquí
      ];
      

let poemaIndex = 0;

siguienteBtn.addEventListener('click', mostrarSiguientePoema);
heLeidoBtn.addEventListener('click', realizarSorpresa);

function mostrarSiguientePoema() {
  poemaIndex++;
  if (poemaIndex < poemas.length) {
    mostrarPoema();
  } else {
    siguienteBtn.style.display = 'none';
    heLeidoBtn.style.display = 'block';
  }
}

function realizarSorpresa() {
  poemaContainer.style.animation = 'shake 0.5s';
  setTimeout(() => {
    document.body.style.animation = 'fadeout 1s';
    setTimeout(() => {
      window.close();
    }, 1000);
  }, 500);
}

function mostrarPoema() {
  const poemaActual = poemas[poemaIndex];
  const poemaHTML = poemaActual.map(verso => `<p>${verso}</p>`).join('');
  poemaContainer.innerHTML = poemaHTML;
}

mostrarPoema();
