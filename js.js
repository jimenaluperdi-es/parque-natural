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
