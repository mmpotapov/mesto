const configValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_incorrect',
  errorClass: 'popup__error_visible'
}

// /** Проверка на наличие неверных полей в форме */
// const hasInvalidInput = function (inputList) {
//   return inputList.some(function (inputElement) {
//     return inputElement.checkValidity() === false;
//   });
// };

// /** Блокировка кнопки */
// const blockButton = function (buttonElement, config) {
//   buttonElement.classList.add(config.inactiveButtonClass);
//   buttonElement.disabled = true;
// }

// /** Разблокировка кнопки */
// const unlockButton = function (buttonElement, config) {
//   buttonElement.classList.remove(config.inactiveButtonClass);
//   buttonElement.removeAttribute('disabled');
// }

// /** Реакция кнопки на неверные поля */
// const toggleButtonState = function (buttonElement, inputList, config) {
//   if (hasInvalidInput(inputList)) {
//     blockButton(buttonElement, config);
//   } else {
//     unlockButton(buttonElement, config);
//   }
// }

// /** Показать ошибку для неверного инпута */
// const showInputError = function (formElement, inputElement, config) {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(config.inputErrorClass)
//   errorElement.textContent = inputElement.validationMessage;
// };

// /** Без ошибки при переоткрытии */
// const hideInputError22 = function (formElement, config) {
//   const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
//   inputList.forEach(function (inputElement) {
//     inputElement.classList.remove(config.inputErrorClass);
//     formElement.querySelector(`.${inputElement.id}-error`).textContent = '';
//   })
// };

// /** Скрыть ошибку для верного инпута */
// const hideInputError = function (formElement, inputElement, config) {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove(config.inputErrorClass);
//   errorElement.textContent = '';
// };


// /** Валидация поля */
// const checkInputValidity = function (inputElement, formElement, config) {
//   if (inputElement.checkValidity()) {
//     hideInputError(formElement, inputElement, config);
//   }
//   else {
//     showInputError(formElement, inputElement, config);
//   }
// }

// /** Проверка всех инпутов формы на валидность */
// const setEventListeners = function (formElement, config) {
//   const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
//   const buttonElement = formElement.querySelector(config.submitButtonSelector);
//   toggleButtonState(buttonElement, inputList, configValidation)
//   inputList.forEach(function (inputElement) {
//     inputElement.addEventListener('input', function () {
//       checkInputValidity(inputElement, formElement, configValidation);
//       toggleButtonState(buttonElement, inputList, configValidation);
//     })
//   })
// }

// /** Проверка всех форм страницы на валидность */
// const enableValidation = function (config) {
//   const formList = Array.from(document.querySelectorAll(config.formSelector));
//   formList.forEach(function (formElement) {
//     setEventListeners(formElement, configValidation);
//   })
// }

// /** Подключение валидации */
// enableValidation(configValidation);



class FormValidator {
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

  /** Сбросить сообщения валидации */
  clearErrors() {
    this._inputList.forEach((inputElement) => {
      inputElement.classList.remove(this._inputErrorClass);
      this._formElement.querySelector(`.${inputElement.id}-error`).textContent = '';
     })
    }


  /** Валидация поля */
  _checkInputValidity(inputElement) {
    if (inputElement.checkValidity()) {
      this._hideInputError(inputElement);
    }
    else {
      this._showInputError(inputElement);
    }
  }

  /** Проверка всех инпутов формы на валидность */
  setEventListeners() {
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

/** Подключение проверки валидности форм */
const formProfileEditValidator = new FormValidator(configValidation, formProfileEdit);
formProfileEditValidator.setEventListeners();
const formAddCardValidator = new FormValidator(configValidation, formAddCard);
formAddCardValidator.setEventListeners();


/** Новая проверка всех форм страницы на валидность */
// Array.from(document.querySelectorAll(configValidation.formSelector)).forEach((item) => {
//   const validatedForm = new FormValidator(configValidation, item);
//   validatedForm.setEventListeners();
// })



