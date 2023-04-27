const showModalBtns = document.querySelectorAll(".show-modal")! as NodeList;
const modal = document.querySelector(".modal")! as HTMLDivElement;
const closeModalBtn = document.querySelector(
  ".close-modal"
)! as HTMLButtonElement;
const overlay = document.querySelector(".overlay") ! as HTMLDivElement;

const showModal = () => {
  modal.classList.remove("hidden")
  overlay.classList.remove("hidden")
}

for(let i = 0 ; i < showModalBtns.length ; i++) {
  showModalBtns[i].addEventListener("click" , showModal)
}

