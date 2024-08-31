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
  const h1 = document.querySelector("h1"); // Seleccionamos el título

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
  const tarjetaInput = document.querySelector("#validationCustom01");
  tarjetaInput.addEventListener("input", () => {
    if (tarjetaInput.value.length === 16) {
      tarjetaInput.classList.add("is-valid");
    } else {
      tarjetaInput.classList.remove("is-valid");
    }
  });

  // Seleccionamos el campo del CVC
  const cvcInput = document.querySelector("#validationCustom02");
  cvcInput.addEventListener("input", () => {
    if (cvcInput.value.length === 4) {
      cvcInput.classList.add("is-valid");
    } else {
      cvcInput.classList.remove("is-valid");
    }
  });

  // Seleccionamos el campo de monto
  const montoInput = document.querySelector("#validationCustom03");
  montoInput.addEventListener("input", () => {
    if (montoInput.value.length > 0) {
      montoInput.classList.add("is-valid");
    } else {
      montoInput.classList.remove("is-valid");
    }
  });

  // Seleccionamos el campo del nombre
  const nombreInput = document.querySelector("#validationCustom04");
  nombreInput.addEventListener("input", () => {
    if (nombreInput.value.length > 2) {
      nombreInput.classList.add("is-valid");
    } else {
      nombreInput.classList.remove("is-valid");
    }
  });

  // Seleccionamos el campo del apellido
  const apellidoInput = document.querySelector("#validationCustom05");
  apellidoInput.addEventListener("input", () => {
    if (apellidoInput.value.length > 2) {
      apellidoInput.classList.add("is-valid");
    } else {
      apellidoInput.classList.remove("is-valid");
    }
  });

  // Seleccionamos el campo del ciudad
  const ciudadInput = document.querySelector("#validationCustom06");
  ciudadInput.addEventListener("input", () => {
    if (ciudadInput.value.length >= 2) {
      ciudadInput.classList.add("is-valid");
    } else {
      ciudadInput.classList.remove("is-valid");
    }
  });

  // Seleccionamos el campo del pais
  const paisInput = document.querySelector("#validationCustom07");
  paisInput.addEventListener("input", () => {
    if (paisInput.value.length > 3) {
      paisInput.classList.add("is-valid");
    } else {
      paisInput.classList.remove("is-valid");
    }
  });

  // Seleccionamos el campo del codPostal
  const codPostalInput = document.querySelector("#validationCustom02");
  codPostalInput.addEventListener("input", () => {
    if (codPostalInput.value.length === 5) {
      codPostalInput.classList.add("is-valid");
    } else {
      codPostalInput.classList.remove("is-valid");
    }
  });

  // Mostramos un mensaje de error debajo del título
  const errorMessage = document.createElement("p");
  errorMessage.textContent = "hay campos vacios";

  console.log("Hello Rigo from the console!");
};
