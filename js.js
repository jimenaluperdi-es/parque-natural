// =====================
// HEADER + MENÚ
// =====================
fetch("./header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header-container").innerHTML = data;
  })
  .catch(err => console.error("Error header:", err));

fetch("./menu.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("menu-container").innerHTML = data;
  })
  .catch(err => console.error("Error menú:", err));


// =====================
// CAMBIO DE IMAGEN ANIMALES
// =====================
document.addEventListener("DOMContentLoaded", () => {
  const imagen = document.getElementById("imagen-ampliada");

  document.querySelectorAll(".animal").forEach(animal => {
    animal.addEventListener("click", () => {
      const img = animal.dataset.img;

      if (imagen && img) {
        imagen.src = "./imagenes/" + img;
      }
    });
  });
});


// =====================
// CARRUSEL (arreglado)
// =====================
const imagenes = [
  "./imagenes/aviso.jpg",
  "./imagenes/nutria.png",
  "./imagenes/buitre.jpg",
  "./imagenes/gineta.jpg",
  "./imagenes/patoso.png",
];

let indice = 0;

const texto = document.getElementById("texto-inicial");
const imgCarrusel = document.getElementById("imagen-ampliada");
const btnSiguiente = document.getElementById("btn-siguiente");

if (texto && imgCarrusel && btnSiguiente) {

  texto.addEventListener("click", () => {
    texto.style.display = "none";
    btnSiguiente.style.display = "inline-block";

    indice = 0;
    imgCarrusel.src = imagenes[indice];
    imgCarrusel.style.display = "block";
  });

  btnSiguiente.addEventListener("click", () => {
    indice = (indice + 1) % imagenes.length;
    imgCarrusel.src = imagenes[indice];
  });

}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn-tema");

  if (!btn) return;

  btn.addEventListener("click", () => {
    const html = document.documentElement;
    const temaActual = html.getAttribute("data-bs-theme");

    if (temaActual === "dark") {
      html.setAttribute("data-bs-theme", "light");
      btn.textContent = "🌙 Modo oscuro";
    } else {
      html.setAttribute("data-bs-theme", "dark");
      btn.textContent = "☀️ Modo claro";
    }
  });
});