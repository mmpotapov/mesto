import './index.css';

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
  buttonAvatarEdit,
  formAvatarEdit,
  formAddCard,
  formProfileEdit,
  formProfileEditSubmitButton,
  formAddCardSubmitButton,
  formEditAvatarSubmitButton,
  formConfirmDeletionSubmitButton,
  nameInput,
  jobInput,
  avatar,
  cardsContainerSelector,
  popUpEditProfileSelector,
  popUpAddCardSelector,
  popUpPhotoSelector,
  popUpEditAvatarSelector,
  profileNameSelector,
  profileProfessionSelector,
  profileAvatarSelector,
  popUpDeletionSelector,
  configValidation,
} from '../utils/elements.js';


/** Создание экземпляра API */
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-55',
  headers: {
    authorization: 'a4c51acb-46f0-4f52-b5e2-f7cb5110adaa',
    'Content-Type': 'application/json'
  }
});


/** Создать попап с картинкой */
const popupZoom = new PopupWithImage(popUpPhotoSelector);


/** Создать валидаторы форм */
const formProfileEditValidator = new FormValidator(configValidation, formProfileEdit);
const formAddCardValidator = new FormValidator(configValidation, formAddCard);
const formEditingAvatarValidator = new FormValidator(configValidation, formAvatarEdit);


/** Создать пустую секцию */
const section = new Section(cardsContainerSelector);


/** Функция генерации новой карточки */
function createCard(object) {
  const card = new Card(object,
    '#card',
    /** Функция-реакция нажатия на фото */
    (name, link) => { popupZoom.open(name, link) },
    /** Функция-реакция нажатия на корзину */
    (id, card) => {
      popupDeleteCard.open(id, card);
    },
    /** Функция-реакция нажатия на лайк */
    (id) => {
      if (card.isLiked()) {
        api.deleteLike(id)
          .then((res) => {
            card.setLikes(res.likes)
          })
          .catch((err) => {
            console.log(err);
          });;
      } else {
        api.addLike(id)
          .then((res) => {
            card.setLikes(res.likes)
          })
          .catch((err) => {
            console.log(err);
          });;
      }
    })
  return card.generateCard();
}


/** Экземпляр попапа для добавления нового фото (с реакцией на самбит) */
const popupCard = new PopupWithForm({
  handleFormSubmit: ({ place, link }) => {
    formAddCardSubmitButton.textContent = 'Сохранение...';
    api.addCard(place, link).then((res) => {
      /** Создание карточки из полученных данных с сервера */
      const card = createCard({
        name: res.name,
        link: res.link,
        likes: res.likes,
        id: res._id,
        userId: userId,
        ownerId: res.owner._id,
      });
      section.addItem(card);
      popupCard.close();
      formAddCardSubmitButton.textContent = 'Сохранить';
      formAddCardValidator.blockButton();
    })
      .catch((err) => {
        console.log(err);
      });
  }
}, popUpAddCardSelector);


/** Экземпляр отображаемого аккаунта */
const userInfo = new UserInfo(
  {
    nameSelector: profileNameSelector,
    professionSelector: profileProfessionSelector,
    avatarSelector: profileAvatarSelector
  });


/** Экземпляр попапа для редактирования имени и описания (с реакцией на самбит) */
const popupProfile = new PopupWithForm({
  handleFormSubmit: (data) => {
    formProfileEditSubmitButton.textContent = 'Сохранение...';
    api.editProfile(data.name, data.profession)
      .then((res) => {
        userInfo.setUserInfo({
          username: res.name,
          userprofession: res.about,
        })
        avatar.src = res.avatar;
        popupProfile.close();
        formProfileEditSubmitButton.textContent = 'Сохранить';
      })
      .catch((err) => {
        console.log(err);
      });;
  }
}, popUpEditProfileSelector);


/** Экземпляр попапа с изменением аватара  */
const popupAvatar = new PopupWithForm({
  handleFormSubmit: (data) => {
    formEditAvatarSubmitButton.textContent = 'Сохранение...';
    api.editAvatar(data.avatar)
      .then((res) => {
        avatar.src = res.avatar
        popupAvatar.close();
        formEditAvatarSubmitButton.textContent = 'Сохранить';
        formEditingAvatarValidator.blockButton();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}, popUpEditAvatarSelector);


/** Экземпляр попапа для подтверждения удаления  */
const popupDeleteCard = new PopupWithDeletion({
  handleFormSubmit: (cardId, card) => {
    formConfirmDeletionSubmitButton.textContent = "Удаление...";
    api.deleteCard(cardId).then(() => {
      card.remove();
      formConfirmDeletionSubmitButton.textContent = "Да";
    })
      .catch((err) => {
        console.log(err);
      });
  }
}, popUpDeletionSelector);


let userId = '';

/** Выгрузить имя, описание и аватар из сервера */
api.getProfile()
  .then((res) => {
    userInfo.setUserInfo({ username: res.name, userprofession: res.about, useravatar: res.avatar });
    userId = res._id;
  })
  .catch((err) => {
    console.log(err);
  });


/** Поочерёдно отобразить на странице все карточки из сервера */
Promise.all([api.getProfile(), api.getInitialCards()])
  .then(([profileInfo, cardList]) => {
    cardList.forEach((res) => {
      const card = createCard({
        name: res.name,
        link: res.link,
        likes: res.likes,
        id: res._id,
        userId: profileInfo._id,
        ownerId: res.owner._id,
      });
      section.addInitialItem(card)
    })
  })
  .catch((err) => {
    console.log(err);
  });

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
  formEditingAvatarValidator.clearErrors();
  popupAvatar.open();
});


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

