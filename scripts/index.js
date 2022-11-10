import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';

/** Данные для отображения карточек */
const initialCards = [
  {
    name: 'Рускеала',
    link: 'https://images.unsplash.com/photo-1573156667506-115190c68737?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80'
  },
  {
    name: 'Эльбрус',
    link: 'https://images.unsplash.com/photo-1599425162155-63c31bbb9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
  },
  {
    name: 'Лаго-Наки',
    link: 'https://images.unsplash.com/photo-1538649528991-427afdbe7884?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Руза',
    link: 'https://images.unsplash.com/photo-1591569135425-a5f4b34e52d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

/** Конфиг с селекторами */
const configValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_incorrect',
  errorClass: 'popup__error_visible'
}

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

/** Элементы для раскрытия изображения на весь экран */
const popUpPhoto = document.querySelector(".popup_type_photo");
const photoImage = popUpPhoto.querySelector('.popup__photo');
const photoCaption = popUpPhoto.querySelector('.popup__caption');

/** Общая функция открытия попапа */
const openPopUp = function (type) {
  type.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscToClose);
}

/** Общая функция закрытия попапа */
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

/** Увеличить фото при нажатии на карточку */
const zoomPhoto = function (name, link) {
  photoImage.src = link;
  photoImage.alt = name;
  photoCaption.textContent = name;
  openPopUp(popUpPhoto);
}

/** Нажатие на карандаш для изменения профиля */
buttonEdit.addEventListener("click", function () {
  formProfileEditValidator.clearErrors();
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

/** Добавление карточки с помощью + */
const handleAddCard = function (evt) {
  evt.preventDefault();
  const pair = {
    name: placeInput.value,
    link: linkInput.value
  }
  const card = new Card(pair, '#card', zoomPhoto);
  cardsContainer.prepend(card.generateCard());
  closePopUp(popUpAddCard);
  evt.target.reset();
  formAddCardValidator.blockButton();
}

/** 6 исходных карточек */
initialCards.forEach((item) => {
  const card = new Card(item, '#card', zoomPhoto);
  const cardElement = card.generateCard();
  cardsContainer.append(cardElement);
})

/** Подключение проверки валидности форм */
const formProfileEditValidator = new FormValidator(configValidation, formProfileEdit);
formProfileEditValidator.enableValidation();
const formAddCardValidator = new FormValidator(configValidation, formAddCard);
formAddCardValidator.enableValidation();

/** Слушатели submit для форм*/
formProfileEdit.addEventListener('submit', handleChangingProfile);
formAddCard.addEventListener('submit', handleAddCard);
