const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
  {
    pregunta: "1. HTML5 provee basicamente tres caracteristicas:",
    respuestas: {
      a: "precio, estilo y funcionalidad",
      b: "estructura,estilo y funcionalidad",
      c: "valor, precio y funcionalidad"
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "2. Una estructura de HTML  ",
    respuestas: {
      a: "Kuwait",
      b: "Dubai",
      c: "Bagdad",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "3. ¿Para que sirve el boolean?",
    respuestas: {
     a: "para declarar si es falso o verdadero",
     b: "para determinar un texto",
     c: "para escribir un numero"
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "4. Una estructura de HTML debe proveer:",
    respuestas: {
      a: "forma,organizacion  y flexibilidad ",
      b: "precio y color",
      c: "buen servicio",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "5.como se muestra un resultado en pantalla?",
    respuestas: {
      a: "con console.log",
      b:" var",
      c:"function "
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "6. para que sirve IIFE?",
    respuestas: {
      a: "Para crear una función y ejecutarla al mismo tiempo.",
      b: "para nada",
      c: "para mostrar algo en pantalla"
    },
    respuestaCorrecta: 'a',
  },
  {
    pregunta: "7. Cual de las dos es mas conocida por menor seguridad (== o ===)?",
    respuestas: {
      a: " ==",
      b: "===",
    },
    respuestaCorrecta: 'a',
  },
  {
    pregunta: "8. ¿Cuál de las dos es mas conocida por seguridad == y ===?",
    respuestas: {
      a: "==",
      b:"===",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "9. que es un vector?",
    respuestas: {
      a: "un arreglo de datos",
      b: "Kuwait",
      c: "Kabul",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "10. Cuál es la capital de Marruecos?",
    respuestas: {
      a: "Casablanca",
      b: "Rabat",
      c: "Kabul",
    },
    respuestaCorrecta: "b",
  },
];

function mostrarTest() {
  const preguntasYrespuestas = [];

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = [];

    for (letraRespuesta in preguntaActual.respuestas) {
      respuestas.push(
        `<label>
                  <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                  ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
              </label>`
      );
    }

    preguntasYrespuestas.push(
      `<div class="cuestion">${preguntaActual.pregunta}</div>
          <div class="respuestas"> ${respuestas.join("")} </div>
          `
    );
  });

  contenedor.innerHTML = preguntasYrespuestas.join("");
}

mostrarTest();

function mostrarResultado() {
  const respuestas = contenedor.querySelectorAll(".respuestas");
  let respuestasCorrectas = 0;

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const todasLasRespuestas = respuestas[numeroDePregunta];
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
    const respuestaElegida = (
      todasLasRespuestas.querySelector(checkboxRespuestas) || {}
    ).value;

    if (respuestaElegida === preguntaActual.respuestaCorrecta) {
      respuestasCorrectas++;

      respuestas[numeroDePregunta].style.color = "blue";
    } else {
      respuestas[numeroDePregunta].style.color = "red";
    }
  });

  resultadoTest.innerHTML =
    "Usted ha acertado " +
    respuestasCorrectas +
    " preguntas de un total de " +
    preguntas.length;
}

botonRes.addEventListener("click", mostrarResultado);
