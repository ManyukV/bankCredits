const modal = document.querySelector("#modal"),
  modalTriggres = document.querySelectorAll("[data-open]"),
  modalClose = document.querySelector("[data-close]");
let selectedCredit = {}

modalTriggres.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

modalClose.addEventListener("click", closeModal);

//закрытие модального окна при нажатии вне окна
modal.addEventListener("click", (e) => {
  if (e.target === modal || e.target.getAttribute("data-close") == "") {
    closeModal();
  }
});

// закрытие модального окна при нажатии клавиши "Escape"

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && modal.classList.contains("show")) {
    closeModal();
  }
});

// функция открытия модального окна

function openModal() {
  modal.classList.remove("hide");
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}

// функция закрытия модального окна

function closeModal() {
  modal.classList.remove("show");
  modal.classList.add("hide");
  document.body.style.overflow = "";
}
