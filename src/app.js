/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  // Seleccionamos el formulario y el botón de envío
  const form = document.querySelector(".needs-validation");
  const sendButton = document.querySelector(".btn-primary");

  // Agregamos un evento de escucha al botón de envío
  sendButton.addEventListener("click", e => {
    // Prevenimos el envío del formulario por defecto
    e.preventDefault();

    // Verificamos si el formulario es válido
    if (form.checkValidity()) {
      // Si el formulario es válido, podemos enviar los datos
      console.log("Formulario válido");
    } else {
      // Si el formulario no es válido, mostramos un mensaje de error
      console.log("Formulario no válido");
    }
  });

  // Seleccionamos el campo de la tarjeta de crédito
  const cardInput = document.querySelector("#validationCustom01");

  // Agregamos un evento de escucha al campo de la tarjeta de crédito
  cardInput.addEventListener("input", () => {
    // Verificamos si el campo tiene 16 dígitos
    if (cardInput.value.length === 16) {
      // Si el campo tiene 16 dígitos, lo marcamos como válido
      cardInput.classList.add("is-valid");
    } else {
      // Si el campo no tiene 16 dígitos, lo marcamos como inválido
      cardInput.classList.remove("is-valid");
    }
  });

  console.log("Hello Rigo from the console!");
};
