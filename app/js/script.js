const navMenu = document.querySelector(".nav__menu");
const btnMenu = document.querySelector(".btn--menu");
const btnBack = document.querySelector(".btn--back");
const btnCloseModal = document.querySelector(".btn--modal-close");
const menuIcon = document.querySelector(".menu__icon");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const btnBookMark = document.querySelector(".btn--bookmark");
const radios = document.querySelectorAll(".pledge-radio-input");
const formBorder = document.querySelectorAll(".form__pledge");
const show = document.querySelector(".show");
const modalTrigger = document.querySelectorAll("[data-toggle=modal-trigger]");
const btnSuccess = document.querySelector('[data-toggle="modal-success"]');
const modalSuccess = document.querySelector(".modal__success");
const btnContinue = document.querySelectorAll('[data-toggle="modal-continue"]');

document
  .querySelector("form")
  .addEventListener("submit", (event) => event.preventDefault());

document.addEventListener("keydown", function (event) {
  // When the user click the espace keyboard
  console.log(event.key);
  if (event.key === "Escape") {
    if (modal.classList.contains("show")) {
      modal.classList.remove("show");
      document.querySelector("body").classList.remove("no-scroll");
    }
  }
});

btnMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  if (navMenu.classList.contains("active")) {
    menuIcon.src = "./images/icon-close-menu.svg";
    btnMenu.setAttribute("aria-expanded", true);

    overlay.classList.add("overlay-open");
    document.querySelector("body").classList.add("no-scroll");
  } else {
    menuIcon.src = "./images/icon-hamburger.svg";
    btnMenu.setAttribute("aria-expanded", false);

    overlay.classList.remove("overlay-open");
    document.querySelector("body").classList.remove("no-scroll");
  }
});

btnBookMark.addEventListener("click", () => {
  btnBookMark.classList.toggle("active");

  if (btnBookMark.classList.contains("active")) {
    btnBookMark.setAttribute("aria-pressed", true);
    setTimeout(() => {
      document.querySelector(".btn--bookmark__text").textContent = "Bookmarked";
      document.querySelector(".btn--bookmark__text").style.color =
        "hsl(176, 72%, 28%)";
    }, 300);
  } else {
    btnBookMark.setAttribute("aria-pressed", false);
    setTimeout(() => {
      document.querySelector(".btn--bookmark__text").textContent = "Bookmark";
      document.querySelector(".btn--bookmark__text").style.color =
        "hsl(0, 0%, 48%)";
    }, 300);
  }
});
btnCloseModal.addEventListener("click", modalShow);
btnBack.addEventListener("click", modalShow);

modalTrigger.forEach((trigger) => {
  trigger.addEventListener("click", modalShow);
});
function modalShow() {
  if (modal.classList.contains("show")) {
    modal.classList.toggle("show");
    document.querySelector("body").classList.remove("no-scroll");
  } else {
    modal.classList.toggle("show");
    document.querySelector("body").classList.add("no-scroll");
  }
}

function styleChanged() {
  radios.forEach((radio) => {
    if (radio.checked) {
      radio.closest(".form__pledge").classList.add("selected");
    } else if (!radio.checked) {
      radio.closest(".form__pledge").classList.remove("selected");
    }
  });
}

radios.forEach((radio) => {
  radio.addEventListener("change", styleChanged);
});

btnSuccess.addEventListener("click", () => {
  overlay.classList.remove("overlay");
  modalSuccess.classList.remove("success");
});

btnContinue.forEach((continues) => {
  continues.addEventListener("click", () => {
    modalSuccess.classList.toggle("success");
    modal.classList.remove("show");
    document.querySelector("body").classList.remove("no-scroll");
  });
});
