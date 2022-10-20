// проверить, есть ли неверные поля в форме
const hasInvalidInput = function (inputList) {
  return inputList.some(function (inputElement) {
    return inputElement.checkValidity() === false;
  });
};

// отключать кнопку, если есть неверные поля
const toggleButtonState = function (buttonElement, inputList) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__save_disabled');
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove('popup__save_disabled');
    buttonElement.removeAttribute('disabled');
  }
}

// выводить ошибку для неверного поля
const checkInputValidity = function (inputElement, formElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  if (inputElement.checkValidity()) {
    inputElement.classList.remove('popup__input_type_incorrect');
    errorElement.textContent = '';
  }
  else {
    inputElement.classList.add('popup__input_type_incorrect')
    errorElement.textContent = inputElement.validationMessage;
  }
}

// проверка всей формы на валидность
const setEventListeners = function (formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__save');
  toggleButtonState(buttonElement, inputList)
  inputList.forEach(function (inputElement) {
    inputElement.addEventListener('input', function () {
      checkInputValidity(inputElement, formElement);
      toggleButtonState(buttonElement, inputList);
    })
  })
}

// проверка всех форм страницы на валидность
const enableValidation = function () {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach(function (formElement) {
    setEventListeners(formElement);
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    })
  })
}

enableValidation();
