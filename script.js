const openButton = document.getElementById("openButton");
const modalContainer = document.getElementById("modalContainer");
const closeButton = document.getElementById("closeButton");

function openModal() {
  modalContainer.style.display = "block";
}

function closeModal() {
  modalContainer.style.display = "none";
}

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
