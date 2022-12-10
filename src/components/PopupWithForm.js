import { Popup } from './Popup.js';

/** Конструктор попапа для изменения информации о пользователе */
export class PopupWithForm extends Popup {
  constructor({ handleFormSubmit }, popupSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._popupElement.querySelectorAll('.popup__input');
    this._popupElementForm = this._popupElement.querySelector(".popup__form");
    this._submitButton = this._popupElementForm.querySelector(".popup__save");
    this._submitButtonText = this._submitButton.textContent;
  }

  /** Создать объект из введённых данных */
  _getInputValues() {
    const inputs = {};
    this._inputList.forEach((input) => {
      inputs[input.name] = input.value;
    });
    return inputs;
  };

  /** Менять текст кнопки сабмита при загрузке */
  renderLoading(isLoading, loadingText = 'Сохранение...') {
    if (isLoading) {
      this._submitButton.textContent = loadingText;
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }

  /** Назначить value для инпутов, из объекта */
  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    })
  }

  /** Закрыть попап со сбросом полей */
  close() {
    super.close();
    this._popupElementForm.reset();
  }

  /** Закрытие попапа + Реакция на сабмит: сброс стандартного события, использование данных формы и закрытие */
  setEventListeners() {
    super.setEventListeners();
    this._popupElementForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.renderLoading(true);
      this._handleFormSubmit(this._getInputValues())
      .then(() => this.close())
      .finally(() => {
        this.renderLoading(false);
      });
    });
  }
}
