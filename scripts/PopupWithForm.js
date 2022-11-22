import { Popup } from './Popup.js';

/** Конструктор попапа для изменения информации о пользователе */
export class PopupWithForm extends Popup {
  constructor({ handleFormSubmit }, popupSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._popupElement.querySelectorAll('.popup__input');
  }

  /** Создать объект из введённых данных */
  _getInputValues() {
    this._inputs = {};
    this._inputList.forEach((input) => {
      this._inputs[input.name] = [input.value];
    });
    return this._inputs;
  };

  /** Закрыть попап со сброс полей */
  close() {
    super.close();
    this._inputList.forEach((input) => {
      input.value = '';
    })
  }

  /** Закрытие попапа + Реакция на сабмит: сброс стандартного события, использование данных формы и закрытие */
  setEventListeners() {
    super.setEventListeners();
    this._popupElement.querySelector(".popup__form").addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }
}
