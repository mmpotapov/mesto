// import './index.css'; // РАССКОММЕНТИРОВАТЬ

import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { Card } from '../components/Card.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithDeletion } from '../components/PopupWithDeletion.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';

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
  buttonAvatarEdit,
  popUpEditAvatarSelector,
  avatar,
  popUpDeletionSelector,
  formAvatarEdit,
  formProfileEditSubmitButton,
} from '../utils/elements.js';

import {
  // initialCards,
  configValidation,
} from '../utils/constants.js';


/** Создать попап с картинкой */
const popupZoom = new PopupWithImage(popUpPhotoSelector);


/** Создать валидаторы форм */
const formProfileEditValidator = new FormValidator(configValidation, formProfileEdit);
const formAddCardValidator = new FormValidator(configValidation, formAddCard);
const formEditingAvatarValidator = new FormValidator(configValidation, formAvatarEdit);


/** Создать пустую секцию */
const section = new Section(cardsContainerSelector);


/** Создать попап с формой для добавления пользовательских фото */
const popupCard = new PopupWithForm({
  handleFormSubmit: ({ place, link }) => {
    const card = createCard({
      name: place,
      link: link
    });
    section.addItem(card);
    formAddCardValidator.blockButton();
  }
}, popUpAddCardSelector);


/** Управление информацией о пользователе */
const userInfo = new UserInfo({ nameSelector: profileNameSelector, professionSelector: profileProfessionSelector });


/** Экземпляр попапа для редактирования профиля (с реакцией на самбит) */
const popupProfile = new PopupWithForm({
  handleFormSubmit: (data) => {
    formProfileEditSubmitButton.textContent = 'Сохранение...';
    api.editProfile(data.name, data.profession)
      .then(() => {
        userInfo.setUserInfo({
          username: data.name,
          userprofession: data.profession,
        })
        popupProfile.close()
        formProfileEditSubmitButton.textContent = 'Сохранить';});
  }
}, popUpEditProfileSelector);


/** Экземпляр попапа с изменением аватара  */
const popupAvatar = new PopupWithForm({
  handleFormSubmit: (data) => {
    avatar.src = data.avatar;
    formEditingAvatarValidator.blockButton();
  }
}, popUpEditAvatarSelector);


/** Экземпляр попапа для подтверждения удаления  */
const popupDeleteCard = new PopupWithDeletion({
  handleFormSubmit: (cardId, card) => {
    card.remove();
  }
}, popUpDeletionSelector);


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


/** Нажатие на аватар для изменения фото */
buttonAvatarEdit.addEventListener("click", function () {
  popupAvatar.open();
});


/** Генерация новой карточки */
function createCard(object) {
  return new Card(object,
    '#card',
    (name, link) => { popupZoom.open(name, link) },
    (cardId, card) => {
      popupDeleteCard.open(cardId, card);
    },
    false)
    .generateCard();
}


/** Загрузка исходной карточки */
// function downloadCard(object) {
//   return new Card(object,
//     '#card',
//     (name, link) => { popupZoom.open(name, link) },
//     () => { },
//     true)
//     .generateCard();
// }


/** Активировать слушатели у попапов*/
popupProfile.setEventListeners();
popupCard.setEventListeners();
popupZoom.setEventListeners();
popupAvatar.setEventListeners();
popupDeleteCard.setEventListeners();


/** Подключение проверки валидности форм */
formProfileEditValidator.enableValidation();
formAddCardValidator.enableValidation();
formEditingAvatarValidator.enableValidation();


/** Создание экземпляра API */
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-55',
  headers: {
    authorization: 'a4c51acb-46f0-4f52-b5e2-f7cb5110adaa',
    'Content-Type': 'application/json'
  }
});

/** Поочерёдно отобразить на странице все карточки из сервера */
api.getInitialCards()
  .then((cardList) => {
    cardList.forEach((data) => {
      const card = createCard({
        name: data.name,
        link: data.link,
      });
      section.addItem(card)
    })
  })
  .catch((error) => { console.log(error) })

/** Загрузить имя и описание из сервера */
api.getProfile()
  .then((res) => {
    userInfo.setUserInfo({ username: res.name, userprofession: res.about }
    )
  })
