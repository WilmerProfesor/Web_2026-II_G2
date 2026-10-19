const boton = document.getElementById("boton");


boton.addEventListener("click", () => {
  const texto = prompt("¡Hola! Has hecho clic en el botón. Ingresa un dato:");
  document.getElementById("inputText").value = texto;
});