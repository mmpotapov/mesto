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