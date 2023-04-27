"use strict";
const showModalBtns = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
// show modal
const showModal = () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};
// close Modal
const closeModal = () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};
// event listener for buttons
for (let i = 0; i < showModalBtns.length; i++) {
    showModalBtns[i].addEventListener("click", showModal);
}
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
