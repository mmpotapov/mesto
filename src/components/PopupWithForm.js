import { Popup } from './Popup.js';

/** Конструктор попапа для изменения информации о пользователе */
export class PopupWithForm extends Popup {
  constructor({ handleFormSubmit }, popupSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._popupElement.querySelectorAll('.popup__input');
    this._popupElementForm = this._popupElement.querySelector(".popup__form");
  }

  /** Создать объект из введённых данных */
  _getInputValues() {
    const inputs = {};
    this._inputList.forEach((input) => {
      inputs[input.name] = input.value;
    });
    return inputs;
  };

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
      this._handleFormSubmit(this._getInputValues());
    });
  }
}
