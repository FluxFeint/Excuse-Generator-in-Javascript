/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.getElementById("excuse").innerHTML = generateExcuse();
};

function generateExcuse() {
  let who = [
    "Oscar",
    "Chucho",
    "Nico",
    "Ainhoa",
    "Borja",
    "Christian",
    "Christina",
    "Ehiber",
    "Jonathan",
    "Jose",
    "Juan",
    "Miguel",
    "Monique",
    "Sandra"
  ];
  let action = [
    "robó",
    "se comió",
    "bailó",
    "cantó",
    "saltó",
    "nadó",
    "escribió",
    "se leyó",
    "tocó",
    "habló",
    "observó",
    "aprendió",
    "enseñó",
    "viajó",
    "trabajó",
    "soñó",
    "creó",
    "dibujó",
    "pintó"
  ];
  let what = [
    "a mi teléfono",
    "a mi monopatín",
    "a mi bicicleta",
    "a mi libro favorito",
    "mis llaves",
    "a mi computadora portátil",
    "a mi reloj",
    "a mi cartera",
    "a mi cámara",
    "a mi paraguas",
    "a mis zapatos nuevos",
    "a mi botella de agua",
    "a mi mochila",
    "a mis auriculares",
    "a mi billetera",
    "a mis gafas de sol",
    "mi paquete de chicles",
    "mi llavero",
    "mi guitarra",
    "a mi perro"
  ];
  let when = [
    "durante la reunión",
    "en la tienda",
    "en la calle",
    "en la oficina"
  ];
  let emojis = ["🤔", "🤷‍♀️", "🙄", "🤦‍♂️", "😅", "🤫", "🤥", "🤐", "😬", "😕"];

  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];
  let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

  let excuse =
    randomWho +
    " " +
    randomAction +
    " " +
    randomWhat +
    " " +
    randomWhen +
    " " +
    randomEmoji;

  return excuse;
}

const generateExcuseBtn = document.getElementById("generate-excuse-btn");
generateExcuseBtn.addEventListener("click", function() {
  const excuse = generateExcuse();
  document.getElementById("excuse").textContent = excuse;
});
