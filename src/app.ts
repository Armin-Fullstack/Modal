const showModalBtns = document.querySelectorAll(".show-modal")! as NodeList;
const modal = document.querySelector(".modal")! as HTMLDivElement;
const closeModalBtn = document.querySelector(
  ".close-modal"
)! as HTMLButtonElement;
const overlay = document.querySelector(".overlay") ! as HTMLDivElement;

// show modal
const showModal = () : void => {
  modal.classList.remove("hidden")
  overlay.classList.remove("hidden")
}
// close Modal
const closeModal = () : void => {
  modal.classList.add("hidden")
  overlay.classList.add("hidden")
}

// event listener for buttons
for(let i = 0 ; i < showModalBtns.length ; i++) {
  showModalBtns[i].addEventListener("click" , showModal)
}
closeModalBtn.addEventListener("click" , closeModal)
overlay.addEventListener("click" , closeModal)

