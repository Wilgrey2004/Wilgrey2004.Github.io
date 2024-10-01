const Arraypalabras = [];

const list = document.getElementById("list");
const form = document.getElementById("formulario");

const limpiarLista = () => {
  list.innerHTML = "";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nuevoElemento = document.getElementById("Textos").value;
  if (nuevoElemento) {
    Arraypalabras.push(nuevoElemento);
  }
  limpiarLista();
  Arraypalabras.forEach((array) => {
    const ol = document.createElement("ol");
    ol.textContent = array;
    ol.classList.add("m-5");
    list.appendChild(ol);
  });
});
