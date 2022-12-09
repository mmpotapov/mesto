/** Кнопки */
export const buttonEdit = document.querySelector(".profile__edit");
export const buttonAddCard = document.querySelector(".profile__button-add");
export const buttonAvatarEdit = document.querySelector(".profile__avatar-edit");

/** Попапы */
const popUpEditProfile = document.querySelector(".popup_type_profile");
const popUpAddCard = document.querySelector(".popup_type_card");
const popUpEditAvatar = document.querySelector(".popup_type_avatar");
const popUpDeletion = document.querySelector(".popup_type_delete");

/** Формы */
export const formProfileEdit = popUpEditProfile.querySelector(".popup__form");
export const formAvatarEdit = popUpEditAvatar.querySelector(".popup__form");
export const formAddCard = popUpAddCard.querySelector(".popup__form");

/** Кнопки сабмитов форм */
export const formProfileEditSubmitButton = popUpEditProfile.querySelector(".popup__save");
export const formAddCardSubmitButton = popUpAddCard.querySelector(".popup__save");
export const formEditAvatarSubmitButton = popUpEditAvatar.querySelector(".popup__save");
export const formConfirmDeletionSubmitButton = popUpDeletion.querySelector(".popup__save");

/** Инпуты */
export const nameInput = formProfileEdit.querySelector(".popup__input_value_name");
export const jobInput = formProfileEdit.querySelector(".popup__input_value_profession");

/** Изображение аватара */
export const avatar = document.querySelector(".profile__avatar");


/** Селекторы */
export const popUpAddCardSelector = '.popup_type_card';
export const popUpPhotoSelector = ".popup_type_photo";
export const popUpEditAvatarSelector = '.popup_type_avatar';
export const popUpDeletionSelector = '.popup_type_delete';
export const popUpEditProfileSelector = '.popup_type_profile';
export const profileNameSelector = ".profile__name";
export const profileProfessionSelector = ".profile__profession";
export const profileAvatarSelector = ".profile__avatar";
export const cardsContainerSelector = '.elements__list';

/** Конфиг с селекторами для валидации*/
export const configValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input_type_incorrect',
    errorClass: 'popup__error_visible'
  }





