export class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = formElement;
  }

  /** Проверка на наличие неверных полей в форме */
  _hasInvalidInput() {
    return this._inputList.some(function (inputElement) {
      return inputElement.checkValidity() === false;
    });
  };

  /** Блокировка кнопки */
  blockButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.disabled = true;
  }

  /** Разблокировка кнопки */
  _unlockButton() {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.removeAttribute('disabled');
  }

  /** Реакция кнопки на неверные поля */
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.blockButton();
    } else {
      this._unlockButton();
    }
  }

  /** Показать ошибку для неверного инпута */
  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass)
    errorElement.textContent = inputElement.validationMessage;
  };

  /** Скрыть ошибку для верного инпута */
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
  };

  /** Валидация поля */
  _checkInputValidity(inputElement) {
    if (inputElement.checkValidity()) {
      this._hideInputError(inputElement);
    }
    else {
      this._showInputError(inputElement);
    }
  }

  /** Сбросить сообщения валидации */
  clearErrors() {
    this._inputList.forEach((inputElement) => {
      inputElement.classList.remove(this._inputErrorClass);
      this._formElement.querySelector(`.${inputElement.id}-error`).textContent = '';
     })
    }

  /** Проверка всех инпутов формы на валидность */
  enableValidation() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      })
    })
  }
}
