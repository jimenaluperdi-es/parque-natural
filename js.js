// Cargar Header
fetch("header.html")
  .then((response) => response.text())
  .then(
    (data) => (document.getElementById("header-container").innerHTML = data),
  )
  .catch((error) => console.error("Error al cargar el header:", error));

// Cargar Menú
fetch("menu.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("menu-container").innerHTML = data))
  .catch((error) => console.error("Error al cargar el menú:", error));

// Funcionalidad del modal de imagen
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal-imagen");
  const imagenAmpliada = document.getElementById("imagen-ampliada");
  const modalCerrar = document.querySelector(".modal-cerrar");

  // Abrir modal al hacer clic en una imagen
  document.querySelectorAll(".gallery img").forEach((img) => {
    img.addEventListener("click", () => {
      imagenAmpliada.src = img.src;
      modal.style.display = "block";
    });
  });

  // Cerrar modal
  modalCerrar.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Cerrar al hacer clic fuera de la imagen
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

document.querySelectorAll(".animal").forEach((animal) => {
  animal.addEventListener("click", function () {
    const imgSrc = this.getAttribute("data-img");
    const imgElement = document.getElementById("imagen-ampliada");

    imgElement.src = `./imagenes/${imgSrc}`;
    imgElement.style.display = "block";
  });
});

///////////////////////////////////////////////////////////////////////
// para las imagenes del carrusel
const imagenes = [
  "./imagenes/aviso.jpg",
  "./imagenes/nutria.png",
  "./imagenes/buitre.jpg",
  "./imagenes/gineta.jpg",
  "./imagenes/patoso.png",
];

let indice = 0;

const texto = document.getElementById("texto-inicial");
const img = document.getElementById("imagen-ampliada");
const btn = document.getElementById("btn-siguiente");

texto.addEventListener("click", () => {
  // 🔥 ocultar texto
  texto.style.display = "none";

  // mostrar imagen y botón
  img.style.display = "block";
  btn.style.display = "inline-block";

  // primera imagen
  indice = 0;
  img.src = imagenes[indice];
});

btn.addEventListener("click", () => {
  indice++;

  if (indice >= imagenes.length) {
    indice = 0;
  }

  img.src = imagenes[indice];
});

const btnMenu = document.querySelector(".btn-menu");
const currentTheme = localStorage.getItem("theme");
function cambiarColor() {
  const body = document.body;
  body.style.backgroundColor = "darkseagreen";
  const menuLateral = document.querySelector(".menu-lateral");
  menuLateral.style.backgroundColor = "darkseagreen";
  const contenido = document.querySelector(".contenido");
  contenido.style.fontFamily = "cursive";
  contenido.style.color = "blue";
  contenido.style.backgroundColor = "lightyellow";
}

function pinta() {
  const body = document.querySelector("body");
  const menuLateral = document.querySelector(".menu-lateral");
  menuLateral.style.backgroundColor = "darkseagreen";
  const contenido = document.querySelector(".contenido");
  contenido.style.fontFamily = "gotic";
  contenido.style.color = "blue";
  contenido.style.backgroundColor = "lightyellow"; 


}

