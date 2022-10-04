// элементы для редактирования профиля
let popUp = document.querySelector(".popup");
let profileName = document.querySelector(".profile__name");
let profileProfession = document.querySelector(".profile__profession");
let pencilEdit = document.querySelector(".profile__edit");
let popUpEditProfile = document.querySelector(".popup_type_profile");
let closePopUpEdit = popUpEditProfile.querySelector(".popup__close");
let formProfileEdit = popUpEditProfile.querySelector(".popup__form");
let nameInput = formProfileEdit.querySelector(".popup__input_value_name");
let jobInput = formProfileEdit.querySelector(".popup__input_value_profession");

// элементы для редактирования галереи
let buttonAddCard = document.querySelector(".profile__button-add");
let popUpAddCard = document.querySelector(".popup_type_card");
let closePopUpAddingCard = popUpAddCard.querySelector(".popup__close");


// общие функции открытия и закрытия попапов
function openPopUp(type) {
  type.classList.add("popup_opened");
}

function closePopUp(type) {
  type.classList.remove("popup_opened")
}

// нажатие на крестик для закрытия попапов
closePopUpEdit.addEventListener("click", function () {
  closePopUp(popUpEditProfile);
});

closePopUpAddingCard.addEventListener("click", function () {
  closePopUp(popUpAddCard);
});

// нажатие на карандаш для изменения профиля
pencilEdit.addEventListener("click", function () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
  openPopUp(popUpEditProfile);
});

// нажатие на + для добавления места
buttonAddCard.addEventListener("click", function () {
  openPopUp(popUpAddCard);
});

// отправка формы для изменения имени
function formChangingProfile(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopUp(popUpEditProfile);
}

formProfileEdit.addEventListener('submit', formChangingProfile);
