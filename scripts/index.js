/** Элементы для редактирования профиля */
const popUps = document.querySelectorAll('.popup');
const closeButtons = document.querySelectorAll('.popup__close');
const profileName = document.querySelector(".profile__name");
const profileProfession = document.querySelector(".profile__profession");
const buttonEdit = document.querySelector(".profile__edit");
const popUpEditProfile = document.querySelector(".popup_type_profile");
const formProfileEdit = popUpEditProfile.querySelector(".popup__form");
const nameInput = formProfileEdit.querySelector(".popup__input_value_name");
const jobInput = formProfileEdit.querySelector(".popup__input_value_profession");

/** Элементы для редактирования галереи */
const buttonAddCard = document.querySelector(".profile__button-add");
const popUpAddCard = document.querySelector(".popup_type_card");
const cardsContainer = document.querySelector('.elements__list');
const formAddCard = popUpAddCard.querySelector(".popup__form");
const placeInput = formAddCard.querySelector(".popup__input_value_place");
const linkInput = formAddCard.querySelector(".popup__input_value_link");
const formAddCardButton = formAddCard.querySelector('.popup__save');
const cardTemplateBlock = document.querySelector('#card');

/** Элементы для раскрытия изображения на весь экран */
const popUpPhoto = document.querySelector(".popup_type_photo");
const photoImage = popUpPhoto.querySelector('.popup__photo');
const photoCaption = popUpPhoto.querySelector('.popup__caption');

/** Общие функции открытия и закрытия попапов */
const openPopUp = function (type) {
  type.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscToClose);
}

const closePopUp = function (type) {
  type.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscToClose);
}

/** Закрытие любого попапа на крестик */
closeButtons.forEach(function (button) {
  const popup = button.closest('.popup');
  button.addEventListener('click', function () {
    closePopUp(popup)
  });
});

/** Закрытие попапа при нажатии на оверлей */
popUps.forEach(function (popUpElement) {
  popUpElement.addEventListener('click', function (evt) {
    if (evt.target === evt.currentTarget) {
      closePopUp(popUpElement);
    }
  });
});

/** Закрытие попапа при нажатии на Esc */
const handleEscToClose = function (evt) {
  if (evt.key == 'Escape') {
    const popUpOpened = document.querySelector(".popup_opened")
    closePopUp(popUpOpened);
  }
}

/** Нажатие на карандаш для изменения профиля */
buttonEdit.addEventListener("click", function () {
  const inputsFormProfileEditList = Array.from(formProfileEdit.querySelectorAll('.popup__input'));
  inputsFormProfileEditList.forEach(function (inputElement) {
    hideInputError(formProfileEdit, inputElement, configValidation);
  })
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
  openPopUp(popUpEditProfile);
});

/** Нажатие на + для добавления места */
buttonAddCard.addEventListener("click", function () {
  openPopUp(popUpAddCard);
});

/** Отправка формы для изменения имени */
const handleChangingProfile = function (event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopUp(popUpEditProfile);
}

/** Переключить лайк */
const handleLikeClick = function (evt) {
  evt.target.classList.toggle("element__like_active");
}

/** Удалить карточку */
const handleDeleteCard = function (evt) {
  evt.target.closest('.elements__card').remove();
}

/** Создание карточки */
const createCard = function (cardData) {
  const cardTemplate = cardTemplateBlock.content.cloneNode(true);
  const photo = cardTemplate.querySelector('.element__photo');
  cardTemplate.querySelector('.element__name').textContent = cardData.name;
  photo.src = cardData.link;
  photo.alt = cardData.name;
  /** Лайк */
  const like = cardTemplate.querySelector('.element__like');
  like.addEventListener('click', handleLikeClick);
  /** Корзинка */
  const trash = cardTemplate.querySelector('.element__delete');
  trash.addEventListener('click', handleDeleteCard);
  /** Открыть изображение на полный экран */
  photo.addEventListener('click', function () {
    photoImage.src = cardData.link;
    photoImage.alt = cardData.name;
    photoCaption.textContent = cardData.name;
    openPopUp(popUpPhoto);
  });
  return cardTemplate;
}

/** 6 исходных карточек */
initialCards.forEach(function (element) {
  cardsContainer.append(createCard(element));
})

/** Добавление карточки с помощью + */
const handleAddCard = function (evt) {
  evt.preventDefault();
  const pair = {
    name: placeInput.value,
    link: linkInput.value
  }
  cardsContainer.prepend(createCard(pair));
  closePopUp(popUpAddCard);
  evt.target.reset();
  blockButton(formAddCardButton, configValidation);
}

formProfileEdit.addEventListener('submit', handleChangingProfile);
formAddCard.addEventListener('submit', handleAddCard);
