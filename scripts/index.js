let accountEdit = document.querySelector(".account__edit");
let popUp = document.querySelector(".popup");
let popUpClose = popUp.querySelector(".popup__close");

function openPopUp() {
  popUp.classList.add("popup_opened");
}

function closePopUp() {
  popUp.classList.remove("popup_opened")
}


accountEdit.addEventListener("click", openPopUp);
popUpClose.addEventListener("click", closePopUp);


let formElement = popUp.querySelector(".popup__form");
let nameInput = formElement.querySelector(".popup__name");
let jobInput = formElement.querySelector(".popup__profession");

function formSubmitHandler (evt) {
    evt.preventDefault();
    let nameValue = nameInput.value;
    let profValue = jobInput.value;
    let name = document.querySelector(".account__name");
    let profession = document.querySelector(".account__profession");
    name.textContent = nameValue;
    profession.textContent = profValue;
    closePopUp();
}

formElement.addEventListener('submit', formSubmitHandler);
