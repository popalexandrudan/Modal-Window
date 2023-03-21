"use strict";

const modalEl = document.querySelector(".modal");
const overlayEl = document.querySelector(".overlay");
const btnOpenEl = document.querySelectorAll(".show-modal");
const hiddenModalEl = document.querySelector(".modal.hidden");
const btnCloseEl = document.querySelector(".close-modal");

const openModal = () => {
  modalEl.classList.remove("hidden");
  overlayEl.classList.remove("hidden");
};

const closeModal = () => {
  modalEl.classList.add("hidden");
  overlayEl.classList.add("hidden");
};

for (let i = 0; i < btnOpenEl.length; i++) {
  btnOpenEl[i].addEventListener("click", openModal);
}

btnCloseEl.addEventListener("click", () => {
  closeModal();
});

overlayEl.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!modalEl.classList.contains("hidden")) {
      closeModal();
    }
  }
});
