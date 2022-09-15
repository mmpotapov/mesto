let accountEdit = document.querySelector(".profile__edit");
let popUp = document.querySelector(".popup");
let popUpClose = popUp.querySelector(".popup__close");
let profileName = document.querySelector(".profile__name");
let profileProfession = document.querySelector(".profile__profession");

function openPopUp() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
  popUp.classList.add("popup_opened");
}

function closePopUp() {
  popUp.classList.remove("popup_opened")
}


accountEdit.addEventListener("click", openPopUp);
popUpClose.addEventListener("click", closePopUp);


let formElement = popUp.querySelector(".popup__form");
let nameInput = formElement.querySelector(".popup__input_value_name");
let jobInput = formElement.querySelector(".popup__input_value_profession");

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
    closePopUp();
}

formElement.addEventListener('submit', formSubmitHandler);
