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
  initialCards,
  configValidation,
  formAddCard,
  formProfileEdit
} from '../utils/constants.js';


/** Создать попап с картинкой */
const popupZoom = new PopupWithImage(popUpPhotoSelector);


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


/** Управление информацией о пользователе */
const userInfo = new UserInfo({ nameSelector: profileNameSelector, professionSelector: profileProfessionSelector });


/** Создать попап с формой для редактирования профиля */
const popupProfile = new PopupWithForm({
  handleFormSubmit: (data) => { userInfo.setUserInfo(data) }
}, popUpEditProfileSelector);


/** Нажатие на карандаш для изменения профиля */
buttonEdit.addEventListener("click", function () {
  formProfileEditValidator.clearErrors();
  nameInput.value = userInfo.getUserInfo().name;
  jobInput.value = userInfo.getUserInfo().profession;
  popupProfile.open();
});


/** Нажатие на [+] для добавления карточки */
buttonAddCard.addEventListener("click", function () {
  popupCard.open();
});


/** Отрисовать контейнер с содержимым */
cardsContainerRender.renderItems();


/** Активировать слушатели у попапов*/
popupProfile.setEventListeners();
popupCard.setEventListeners();
popupZoom.setEventListeners();


/** Подключение проверки валидности форм */
const formProfileEditValidator = new FormValidator(configValidation, formProfileEdit);
formProfileEditValidator.enableValidation();
const formAddCardValidator = new FormValidator(configValidation, formAddCard);
formAddCardValidator.enableValidation();
