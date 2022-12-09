import { Popup } from './Popup.js';

/** Конструктор попапа подтверждения удаления */
export class PopupWithDeletion extends Popup {
  constructor({ handleFormSubmit }, popupSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupElementForm = this._popupElement.querySelector(".popup__form");
  }

  /** Открыть попап, принимая информацию о карточке */
  open(cardId, card) {
    super.open();
    this._cardId = cardId;
    this._card = card;
  }

  /** Закрытие попапа + Реакция на сабмит */
  setEventListeners() {
    super.setEventListeners();
    this._popupElementForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._cardId, this._card);
      this.close();
    })
  }
}
