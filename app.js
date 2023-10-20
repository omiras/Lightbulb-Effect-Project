// Buena suerte ! Espero que se te encienda la "bombilla"!

// Variable de estado que gobierna si la bombilla está encendida o apagada
let bulbOn = false;

/**
 * 1. Declarar tu variable de estado con su valor inicial.
 * 2. Cada vez que interactua el usario (hace click en la bombilla).
 *   2.1 Verificar el estado actual
 *   2.2. Actualizar el estado al nuevo estado
 *   2.3  Reflejar los cambios que implica el nuevo estado en el DOM
 */

let bulb = document.querySelector("#bulb");
bulb.addEventListener("click", function () {
  if (bulbOn) {
    // si la bombilla está encedida, la tengo que apagar
    bulbOn = false;
    bulb.classList.remove("bulb-on");
  } else {
    // tengo que encender la bombilla, porque esta apagada
    bulbOn = true;
    bulb.classList.add("bulb-on");
  }
});
