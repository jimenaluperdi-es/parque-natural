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

