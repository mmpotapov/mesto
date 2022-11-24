import './index.css';

import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { Card } from '../components/Card.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';
import {
  buttonEdit,
  buttonAddCard,
  nameInput,
  jobInput,
  cardsContainerSelector,
  popUpEditProfileSelector,
  popUpAddCardSelector,
  popUpPhotoSelector,
  profileNameSelector,
  profileProfessionSelector,
  formAddCard,
  formProfileEdit,
} from '../utils/elements.js';

import {
  initialCards,
  configValidation,
} from '../utils/constants.js';


/** Создать попап с картинкой */
const popupZoom = new PopupWithImage(popUpPhotoSelector);


/** Создать валидаторы форм */
const formProfileEditValidator = new FormValidator(configValidation, formProfileEdit);
const formAddCardValidator = new FormValidator(configValidation, formAddCard);


/** Генерация карточки */
function createCard(object) {
  return new Card(object, '#card', (name, link) => { popupZoom.open(name, link) }).generateCard();
}


/** Создать и добавить в главный контейнер 6 исходных карт */
const cardsContainerRender = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = createCard(item);
    cardsContainerRender.addItem(card);
  }
}, cardsContainerSelector);


/** Создать попап с формой для добавления пользовательских фото */
const popupCard = new PopupWithForm({
  handleFormSubmit: ({ place, link }) => {
    const card = createCard({
      name: place,
      link: link
    });
    cardsContainerRender.addItem(card);
    formAddCardValidator.blockButton();
  }
}, popUpAddCardSelector);


/** Управление информацией о пользователе */
const userInfo = new UserInfo({ nameSelector: profileNameSelector, professionSelector: profileProfessionSelector });


/** Создать попап с формой для редактирования профиля */
const popupProfile = new PopupWithForm({
  handleFormSubmit: (data) => {
    userInfo.setUserInfo({
      username: data.name,
      userprofession: data.profession,
    })
  }
}, popUpEditProfileSelector);


/** Нажатие на карандаш для изменения профиля */
buttonEdit.addEventListener("click", function () {
  formProfileEditValidator.clearErrors();
  const userInfoData = userInfo.getUserInfo();
  nameInput.value = userInfoData.name;
  jobInput.value = userInfoData.profession;
  popupProfile.open();
});


/** Нажатие на [+] для добавления карточки */
buttonAddCard.addEventListener("click", function () {
  formAddCardValidator.clearErrors();
  popupCard.open();
});


/** Отрисовать контейнер с содержимым */
cardsContainerRender.renderItems();


/** Активировать слушатели у попапов*/
popupProfile.setEventListeners();
popupCard.setEventListeners();
popupZoom.setEventListeners();


/** Подключение проверки валидности форм */
formProfileEditValidator.enableValidation();
formAddCardValidator.enableValidation();
