//alert("HOLA CARINA");
let btnEnviar = document.getElementById("btnEnviar");
let dato = document.getElementById("dato");
btnEnviar?.addEventListener("click", () => {
  console.log("Hola", dato.value);
});
