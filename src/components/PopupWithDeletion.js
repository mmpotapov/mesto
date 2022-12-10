import { Popup } from './Popup.js';

/** Конструктор попапа подтверждения удаления */
export class PopupWithDeletion extends Popup {
  constructor({ handleFormSubmit }, popupSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupElementForm = this._popupElement.querySelector(".popup__form");
    this._submitButton = this._popupElementForm.querySelector(".popup__save");
    this._submitButtonText = this._submitButton.textContent;
  }

  /** Открыть попап, принимая информацию о карточке */
  open(cardId, card) {
    super.open();
    this._cardId = cardId;
    this._card = card;
  }

    /** Менять текст кнопки сабмита при прогрузке удаления */
    renderLoading(isLoading, loadingText = 'Удаление...') {
      if (isLoading) {
        this._submitButton.textContent = loadingText;
      } else {
        this._submitButton.textContent = this._submitButtonText;
      }
    }

  /** Закрытие попапа + Реакция на сабмит */
  setEventListeners() {
    super.setEventListeners();
    this._popupElementForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.renderLoading(true);
      this._handleFormSubmit(this._cardId, this._card)
      .then(() => this.close())
      .finally(() => {
        this.renderLoading(false);
      });
    })
  }
}
