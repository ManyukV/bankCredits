const modal = document.querySelector("#modal"),
  modalTriggres = document.querySelectorAll("[data-open]"),
  modalClose = document.querySelector("[data-close]"),
  form = document.querySelector("[data-form]");
let selectedCredit = {};

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

// функция открытия модального окна и получения данных о кредите

function openModal(event) {
  const row = event.target.closest("tr");
  selectedCredit = {
    title: row.querySelector("[data-title]").textContent,
    rate: row.querySelector("[data-rate]").textContent,
    term: row.querySelector("[data-term]").textContent,
  };
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


form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Данные о кредите:', selectedCredit);
    const formData = new FormData(form);

    fetch('index.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data.status === 'success') {
        form.reset();
        modal.classList.add('hide');
        modal.classList.remove('show');
      } else {
        alert('Ошибка отправки заявки');
      }
    })
    .catch(error => console.error('Ошибка:', error));
  });
