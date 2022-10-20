const configValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_incorrect',
  errorClass: 'popup__error_visible'
}

// проверить, есть ли неверные поля в форме
const hasInvalidInput = function (inputList) {
  return inputList.some(function (inputElement) {
    return inputElement.checkValidity() === false;
  });
};

// отключать кнопку, если есть неверные поля
const toggleButtonState = function (buttonElement, inputList, config) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
}

// выводить ошибку для неверного поля
const checkInputValidity = function (inputElement, formElement, config) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  if (inputElement.checkValidity()) {
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.textContent = '';
  }
  else {
    inputElement.classList.add(config.inputErrorClass)
    errorElement.textContent = inputElement.validationMessage;
  }
}

// проверка всей формы на валидность
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

// проверка всех форм страницы на валидность
const enableValidation = function (config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach(function (formElement) {
    setEventListeners(formElement, configValidation);
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    })
  })
}

enableValidation(configValidation);
