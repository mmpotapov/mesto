/** Элементы страницы "*/
export const buttonEdit = document.querySelector(".profile__edit");
export const buttonAddCard = document.querySelector(".profile__button-add");
const popUpEditProfile = document.querySelector(".popup_type_profile");
const popUpAddCard = document.querySelector(".popup_type_card");
export const formProfileEdit = popUpEditProfile.querySelector(".popup__form");
export const formAddCard = popUpAddCard.querySelector(".popup__form");
export const nameInput = formProfileEdit.querySelector(".popup__input_value_name");
export const jobInput = formProfileEdit.querySelector(".popup__input_value_profession");
/** Селекторы */
export const cardsContainerSelector = '.elements__list';
export const popUpEditProfileSelector = '.popup_type_profile';
export const popUpAddCardSelector = '.popup_type_card';
export const popUpPhotoSelector = ".popup_type_photo";
export const profileNameSelector = ".profile__name";
export const profileProfessionSelector = ".profile__profession";

/** Конфиг с селекторами для валидации*/
export const configValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_incorrect',
  errorClass: 'popup__error_visible'
}

/** Данные для отображения карточек */
export const initialCards = [
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


