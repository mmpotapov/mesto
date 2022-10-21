const configValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_incorrect',
  errorClass: 'popup__error_visible'
}

/** Проверка на наличие неверных полей в форме */
const hasInvalidInput = function (inputList) {
  return inputList.some(function (inputElement) {
    return inputElement.checkValidity() === false;
  });
};

/** Блокировка кнопки */
const blockButton = function (buttonElement, config) {
  buttonElement.classList.add(config.inactiveButtonClass);
  buttonElement.disabled = true;
}

/** Разблокировка кнопки */
const unlockButton = function (buttonElement, config) {
  buttonElement.classList.remove(config.inactiveButtonClass);
  buttonElement.removeAttribute('disabled');
}

/** Реакция кнопки на неверные поля */
const toggleButtonState = function (buttonElement, inputList, config) {
  if (hasInvalidInput(inputList)) {
    blockButton(buttonElement, config);
  } else {
    unlockButton(buttonElement, config);
  }
}

/** Показать ошибку для неверного инпута */
const showInputError = function (formElement, inputElement, config) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass)
  errorElement.textContent = inputElement.validationMessage;
};

/** Скрыть ошибку для верного инпута */
const hideInputError = function (formElement, inputElement, config) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = '';
};


/** Валидация поля */
const checkInputValidity = function (inputElement, formElement, config) {
  if (inputElement.checkValidity()) {
    hideInputError(formElement, inputElement, config);
  }
  else {
    showInputError(formElement, inputElement, config);
  }
}

/** Проверка всех инпутов формы на валидность */
const setEventListeners = function (formElement, config) {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(buttonElement, inputList, configValidation)
  inputList.forEach(function (inputElement) {
    inputElement.addEventListener('input', function () {
      checkInputValidity(inputElement, formElement, configValidation);
      toggleButtonState(buttonElement, inputList, configValidation);
    })
  })
}

/** Проверка всех форм страницы на валидность */
const enableValidation = function (config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach(function (formElement) {
    setEventListeners(formElement, configValidation);
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
      setEventListeners(formElement, configValidation);
    })
  })
}

enableValidation(configValidation);
