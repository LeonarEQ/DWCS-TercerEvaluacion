"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const boton = document
    .getElementById("boton")
    .addEventListener("click", () => {
      const form = document.getElementById("form");
      const textoIntroducido = document.getElementById("texto");

      if (parseInt(textoIntroducido.value)) {
        textoIntroducido.value = "";
        alert("es un numero");
        textoIntroducido.focus();
      } else crearVineta();

      function crearVineta() {
        const lista = document.getElementById("lista");

        const nuevaVineta = document.createElement("li");
        nuevaVineta.textContent = `${textoIntroducido.value}`;
        nuevaVineta.style.backgroundColor = `${colorRandom()}`;
        nuevaVineta.style.fontWeight = "bold";
        nuevaVineta.style.fontSize = "24px";
        console.log(colorRandom());
        lista.appendChild(nuevaVineta);
      }

      function colorRandom() {
        let R = parseInt(Math.random(255) * 1000);
        let G = parseInt(Math.random(255) * 1000);
        let B = parseInt(Math.random(255) * 1000);

        return `rgb(${R},${G},${B})`;
      }

      lista.addEventListener("contextmenu", (e) => {
        if (e.target.nodeName === "LI") {
          const elementoCambiarStilo = e.target;
          elementoCambiarStilo.style.textDecoration = "line-through";
        }
      });

      lista.addEventListener("click", (e) => {
        if (e.target.nodeName === "LI") {
          const elementoEliminar = e.target;
          elementoEliminar.remove();
        }
      });
    });
});
