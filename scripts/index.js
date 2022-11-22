import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';
import { Section } from './Section.js';


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

// /** Общая функция открытия попапа */
// const openPopUp = function (type) {
//   type.classList.add("popup_opened");
//   document.addEventListener("keydown", handleEscToClose);
// }

// /** Общая функция закрытия попапа */
// const closePopUp = function (type) {
//   type.classList.remove("popup_opened");
//   document.removeEventListener("keydown", handleEscToClose);
// }

// /** Закрытие любого попапа на крестик */
// closeButtons.forEach(function (button) {
//   const popup = button.closest('.popup');
//   button.addEventListener('click', function () {
//     closePopUp(popup)
//   });
// });

// /** Закрытие попапа при нажатии на оверлей */
// popUps.forEach(function (popUpElement) {
//   popUpElement.addEventListener('click', function (evt) {
//     if (evt.target === evt.currentTarget) {
//       closePopUp(popUpElement);
//     }
//   });
// });

// /** Закрытие попапа при нажатии на Esc */
// const handleEscToClose = function (evt) {
//   if (evt.key == 'Escape') {
//     const popUpOpened = document.querySelector(".popup_opened")
//     closePopUp(popUpOpened);
//   }
// }

// /** Отправка формы для изменения имени */
// const handleChangingProfile = function (event) {
//   event.preventDefault();
//   profileName.textContent = nameInput.value;
//   profileProfession.textContent = jobInput.value;
//   closePopUp(popUpEditProfile);
// }


// /** Добавление карточки с помощью + */
// const handleAddCard = function (evt) {
//   evt.preventDefault();
//   const pair = {
//     name: placeInput.value,
//     link: linkInput.value
//   }
//   const card = createCard(pair);
//   cardsContainer.prepend(card);
//   closePopUp(popUpAddCard);
//   evt.target.reset();
//   formAddCardValidator.blockButton();
// }

/** Заполнение контейнера 6 исходными карточками */
// const renderElements = function () {
//   initialCards.forEach((item) => {
//     const card = createCard(item);
//     cardsContainer.append(card);
//   })
// }

/** Вызов: заполнение контейнера 6 исходными карточками */
// renderElements();

// /** Увеличить фото при нажатии на карточку */
// const zoomPhoto = function (name, link) {
//   photoImage.src = link;
//   photoImage.alt = name;
//   photoCaption.textContent = name;
//   openPopUp(popUpPhoto);
// }

/** Нажатие на карандаш для изменения профиля */
buttonEdit.addEventListener("click", function () {
  formProfileEditValidator.clearErrors();
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
  popupProfile.open();
});

/** Нажатие на + для добавления места */
buttonAddCard.addEventListener("click", function () {
  popupCard.open();
});



/** Подключение проверки валидности форм */
const formProfileEditValidator = new FormValidator(configValidation, formProfileEdit);
formProfileEditValidator.enableValidation();
const formAddCardValidator = new FormValidator(configValidation, formAddCard);
formAddCardValidator.enableValidation();

/** Слушатели submit для форм*/
// formProfileEdit.addEventListener('submit', handleChangingProfile);
// formAddCard.addEventListener('submit', handleAddCard);





/** Константа — селектор главного контейнера */
const cardsContainerSelector = '.elements__list';

/** Создать и добавить в главный контейнер 6 исходных карт */
const cardsContainerRender = new Section({
  items: initialCards, renderer: (item) => {
    const card = createCard(item);
    cardsContainerRender.addItem(card);
  }
}, cardsContainerSelector);

/** Отрисовать контейнер и 6 полученными картами */
cardsContainerRender.renderItems();





/** Конструктор общего попапа */
class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  /** Закрытие при нажатии на ESC */
  _handleEscClose(evt) {
    if (evt.key == 'Escape') {
      this.close();
    }
  }

  /** Открытие */
  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  /** Закрытие */
  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  /** Слушатель крестика и нажатия на оверлей, с реакцией закрытия */
  setEventListeners() {
    this._popupElement.querySelector('.popup__close').addEventListener('click', () => {
      this.close();
    });

    this._popupElement.addEventListener('click', (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      }
    })
  }
}

/** Конструктор попапа для изменения информации о пользователе */
class PopupWithForm extends Popup {
  constructor({ handleFormSubmit }, popupSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._popupElement.querySelectorAll('.popup__input');
  }

  /** Создать объект из введённых данных */
  _getInputValues() {
    this._inputs = {};
    this._inputList.forEach((input) => {
      this._inputs[input.name] = [input.value];
    });
    return this._inputs;
  };

  /** Закрыть попап со сброс полей */
  close() {
    super.close();
    this._inputList.forEach((input) => {
      input.value = '';
    })
  }

  /** Закрытие попапа + Реакция на сабмит: сброс стандартного события, использование данных формы и закрытие */
  setEventListeners() {
    super.setEventListeners();
    this._popupElement.querySelector(".popup__form").addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }
}

/** Селектор попапа для редактирования профиля */
const popUpEditProfileSelector = '.popup_type_profile';

/** Создать попап с формой для редактирования профиля */
const popupProfile = new PopupWithForm({
  handleFormSubmit: (data) => {
    profileName.textContent = data.name;
    profileProfession.textContent = data.profession;
  }
}, popUpEditProfileSelector);

/** Уши для попапа профиля */
popupProfile.setEventListeners();



/** Селектор попапа для добавления фото */
const popUpAddCardSelector = '.popup_type_card';

/** Создать попап с формой для добавления пользовательских фото */
const popupCard = new PopupWithForm({
  handleFormSubmit: (data) => {
    const pair = {
      name: data.place,
      link: data.link
    }
    const card = createCard(pair);
    cardsContainerRender.addItem(card);
    formAddCardValidator.blockButton();
  }
}, popUpAddCardSelector);

/** Уши для попапа добавления фото */
popupCard.setEventListeners();




/** Конструктор попапа с увеличенным фото */
class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._photoImage = this._popupElement.querySelector('.popup__photo');
    this._photoCaption = this._popupElement.querySelector('.popup__caption');
  }

  open(name, link) {
    this._photoImage.src = link;
    this._photoImage.alt = name;
    this._photoCaption.textContent = name;
    super.open();
  }
}

/** Селектор попапа для большого фото */
const popUpPhotoSelector = ".popup_type_photo";

/** Создать попап с картинкой */
const popupZoom = new PopupWithImage(popUpPhotoSelector);

/** Генерация карточки */
function createCard(object) {
  return new Card(object, '#card', (name, link) => { popupZoom.open(name, link) }).generateCard();
}

/** Уши для попапа с картинкой на весь экран*/
popupZoom.setEventListeners();
