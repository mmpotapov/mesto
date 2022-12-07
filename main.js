/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": () => (/* binding */ Card)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Card = /*#__PURE__*/function () {
  function Card(cardData, templateSelector, handleCardClick) {
    _classCallCheck(this, Card);
    this._name = cardData.name;
    this._link = cardData.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  /** Получить темплейт */
  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardElement = document.querySelector(this._templateSelector).content.querySelector(".elements__card").cloneNode(true);
      return cardElement;
    }

    /** Изменить цвет лайка */
  }, {
    key: "_handleLikeClick",
    value: function _handleLikeClick(evt) {
      evt.target.classList.toggle("element__like_active");
    }
  }, {
    key: "_handleDeleteCard",
    value: function _handleDeleteCard() {
      this._element.remove();
    }

    /** Слушатели */
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;
      this._element.querySelector('.element__like').addEventListener('click', this._handleLikeClick);
      this._element.querySelector('.element__delete').addEventListener("click", function () {
        _this._handleDeleteCard();
      });
      this._elementPhoto.addEventListener('click', function () {
        _this._handleCardClick(_this._name, _this._link);
      });
    }
  }, {
    key: "generateCard",
    value: /** Сгенерировать карту */
    function generateCard() {
      this._element = this._getTemplate();
      this._elementPhoto = this._element.querySelector('.element__photo');
      this._setEventListeners();
      this._elementPhoto.src = this._link;
      this._elementPhoto.alt = this._name;
      this._element.querySelector('.element__name').textContent = this._name;
      return this._element;
    }
  }]);
  return Card;
}();

/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormValidator": () => (/* binding */ FormValidator)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var FormValidator = /*#__PURE__*/function () {
  function FormValidator(config, formElement) {
    _classCallCheck(this, FormValidator);
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
  _createClass(FormValidator, [{
    key: "_hasInvalidInput",
    value: function _hasInvalidInput() {
      return this._inputList.some(function (inputElement) {
        return inputElement.checkValidity() === false;
      });
    }
  }, {
    key: "blockButton",
    value: /** Блокировка кнопки */
    function blockButton() {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = true;
    }

    /** Разблокировка кнопки */
  }, {
    key: "_unlockButton",
    value: function _unlockButton() {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }

    /** Реакция кнопки на неверные поля */
  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState() {
      if (this._hasInvalidInput()) {
        this.blockButton();
      } else {
        this._unlockButton();
      }
    }

    /** Показать ошибку для неверного инпута */
  }, {
    key: "_showInputError",
    value: function _showInputError(inputElement) {
      var errorElement = this._formElement.querySelector(".".concat(inputElement.id, "-error"));
      inputElement.classList.add(this._inputErrorClass);
      errorElement.textContent = inputElement.validationMessage;
    }
  }, {
    key: "_hideInputError",
    value: /** Скрыть ошибку для верного инпута */
    function _hideInputError(inputElement) {
      var errorElement = this._formElement.querySelector(".".concat(inputElement.id, "-error"));
      inputElement.classList.remove(this._inputErrorClass);
      errorElement.textContent = '';
    }
  }, {
    key: "_checkInputValidity",
    value: /** Валидация поля */
    function _checkInputValidity(inputElement) {
      if (inputElement.checkValidity()) {
        this._hideInputError(inputElement);
      } else {
        this._showInputError(inputElement);
      }
    }

    /** Сбросить сообщения валидации */
  }, {
    key: "clearErrors",
    value: function clearErrors() {
      var _this = this;
      this._inputList.forEach(function (inputElement) {
        _this._hideInputError(inputElement);
      });
    }

    /** Проверка всех инпутов формы на валидность */
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      var _this2 = this;
      this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
      this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
      this._toggleButtonState();
      this._inputList.forEach(function (inputElement) {
        inputElement.addEventListener('input', function () {
          _this2._checkInputValidity(inputElement);
          _this2._toggleButtonState();
        });
      });
    }
  }]);
  return FormValidator;
}();

/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Popup": () => (/* binding */ Popup)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/** Конструктор общего попапа */
var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  /** Закрытие при нажатии на ESC */
  _createClass(Popup, [{
    key: "_handleEscClose",
    value: function _handleEscClose(evt) {
      if (evt.key == 'Escape') {
        this.close();
      }
    }

    /** Открытие */
  }, {
    key: "open",
    value: function open() {
      this._popupElement.classList.add('popup_opened');
      document.addEventListener('keydown', this._handleEscClose);
    }

    /** Закрытие */
  }, {
    key: "close",
    value: function close() {
      this._popupElement.classList.remove('popup_opened');
      document.removeEventListener('keydown', this._handleEscClose);
    }

    /** Слушатель крестика и нажатия на оверлей, с реакцией закрытия */
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;
      this._popupElement.addEventListener('click', function (evt) {
        if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')) {
          _this.close();
        }
      });
    }
  }]);
  return Popup;
}();

/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupWithForm": () => (/* binding */ PopupWithForm)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/** Конструктор попапа для изменения информации о пользователе */
var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);
  var _super = _createSuper(PopupWithForm);
  function PopupWithForm(_ref, popupSelector) {
    var _this;
    var handleFormSubmit = _ref.handleFormSubmit;
    _classCallCheck(this, PopupWithForm);
    _this = _super.call(this, popupSelector);
    _this._handleFormSubmit = handleFormSubmit;
    _this._inputList = _this._popupElement.querySelectorAll('.popup__input');
    _this._popupElementForm = _this._popupElement.querySelector(".popup__form");
    return _this;
  }

  /** Создать объект из введённых данных */
  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var inputs = {};
      this._inputList.forEach(function (input) {
        inputs[input.name] = [input.value];
      });
      return inputs;
    }
  }, {
    key: "close",
    value: /** Закрыть попап со сброс полей */
    function close() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);
      this._popupElementForm.reset();
    }

    /** Закрытие попапа + Реакция на сабмит: сброс стандартного события, использование данных формы и закрытие */
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;
      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
      this._popupElementForm.addEventListener('submit', function (evt) {
        evt.preventDefault();
        _this2._handleFormSubmit(_this2._getInputValues());
        _this2.close();
      });
    }
  }]);
  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.Popup);

/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupWithImage": () => (/* binding */ PopupWithImage)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/** Конструктор попапа с увеличенным фото */
var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);
  var _super = _createSuper(PopupWithImage);
  function PopupWithImage(popupSelector) {
    var _this;
    _classCallCheck(this, PopupWithImage);
    _this = _super.call(this, popupSelector);
    _this._photoImage = _this._popupElement.querySelector('.popup__photo');
    _this._photoCaption = _this._popupElement.querySelector('.popup__caption');
    return _this;
  }
  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(name, link) {
      this._photoImage.src = link;
      this._photoImage.alt = name;
      this._photoCaption.textContent = name;
      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
    }
  }]);
  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.Popup);

/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section": () => (/* binding */ Section)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var items = _ref.items,
      renderer = _ref.renderer;
    _classCallCheck(this, Section);
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  /** Очистить контейнер */
  _createClass(Section, [{
    key: "clear",
    value: function clear() {
      this._container.innerHTML = '';
    }

    /** Добавить элемент в контейнер */
  }, {
    key: "addItem",
    value: function addItem(element) {
      this._container.prepend(element);
    }

    /** Для каждого элемента из базы поочерёдно вызвать колбэк this._renderer */
  }, {
    key: "renderItems",
    value: function renderItems() {
      this.clear();
      this._renderedItems.forEach(this._renderer);
    }
  }]);
  return Section;
}();

/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserInfo": () => (/* binding */ UserInfo)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var nameSelector = _ref.nameSelector,
      professionSelector = _ref.professionSelector;
    _classCallCheck(this, UserInfo);
    this._profileName = document.querySelector(nameSelector);
    this._profileProfession = document.querySelector(professionSelector);
  }
  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        name: this._profileName.textContent,
        profession: this._profileProfession.textContent
      };
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref2) {
      var username = _ref2.username,
        userprofession = _ref2.userprofession;
      this._profileName.textContent = username;
      this._profileProfession.textContent = userprofession;
    }
  }]);
  return UserInfo;
}();

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configValidation": () => (/* binding */ configValidation),
/* harmony export */   "initialCards": () => (/* binding */ initialCards)
/* harmony export */ });
/** Конфиг с селекторами для валидации*/
var configValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_incorrect',
  errorClass: 'popup__error_visible'
};

/** Данные для отображения карточек */
var initialCards = [{
  name: 'Рускеала',
  link: 'https://images.unsplash.com/photo-1573156667506-115190c68737?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80'
}, {
  name: 'Эльбрус',
  link: 'https://images.unsplash.com/photo-1599425162155-63c31bbb9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
}, {
  name: 'Лаго-Наки',
  link: 'https://images.unsplash.com/photo-1538649528991-427afdbe7884?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
}, {
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
}, {
  name: 'Руза',
  link: 'https://images.unsplash.com/photo-1591569135425-a5f4b34e52d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
}, {
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}];

/***/ }),

/***/ "./src/utils/elements.js":
/*!*******************************!*\
  !*** ./src/utils/elements.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonAddCard": () => (/* binding */ buttonAddCard),
/* harmony export */   "buttonEdit": () => (/* binding */ buttonEdit),
/* harmony export */   "cardsContainerSelector": () => (/* binding */ cardsContainerSelector),
/* harmony export */   "formAddCard": () => (/* binding */ formAddCard),
/* harmony export */   "formProfileEdit": () => (/* binding */ formProfileEdit),
/* harmony export */   "jobInput": () => (/* binding */ jobInput),
/* harmony export */   "nameInput": () => (/* binding */ nameInput),
/* harmony export */   "popUpAddCardSelector": () => (/* binding */ popUpAddCardSelector),
/* harmony export */   "popUpEditProfileSelector": () => (/* binding */ popUpEditProfileSelector),
/* harmony export */   "popUpPhotoSelector": () => (/* binding */ popUpPhotoSelector),
/* harmony export */   "profileNameSelector": () => (/* binding */ profileNameSelector),
/* harmony export */   "profileProfessionSelector": () => (/* binding */ profileProfessionSelector)
/* harmony export */ });
/** Элементы страницы "*/
var buttonEdit = document.querySelector(".profile__edit");
var buttonAddCard = document.querySelector(".profile__button-add");
var popUpEditProfile = document.querySelector(".popup_type_profile");
var popUpAddCard = document.querySelector(".popup_type_card");
var formProfileEdit = popUpEditProfile.querySelector(".popup__form");
var formAddCard = popUpAddCard.querySelector(".popup__form");
var nameInput = formProfileEdit.querySelector(".popup__input_value_name");
var jobInput = formProfileEdit.querySelector(".popup__input_value_profession");

/** Селекторы */
var cardsContainerSelector = '.elements__list';
var popUpEditProfileSelector = '.popup_type_profile';
var popUpAddCardSelector = '.popup_type_card';
var popUpPhotoSelector = ".popup_type_photo";
var profileNameSelector = ".profile__name";
var profileProfessionSelector = ".profile__profession";

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _utils_elements_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/elements.js */ "./src/utils/elements.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");










/** Создать попап с картинкой */
var popupZoom = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__.PopupWithImage(_utils_elements_js__WEBPACK_IMPORTED_MODULE_7__.popUpPhotoSelector);

/** Создать валидаторы форм */
var formProfileEditValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__.FormValidator(_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.configValidation, _utils_elements_js__WEBPACK_IMPORTED_MODULE_7__.formProfileEdit);
var formAddCardValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__.FormValidator(_utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.configValidation, _utils_elements_js__WEBPACK_IMPORTED_MODULE_7__.formAddCard);

/** Генерация карточки */
function createCard(object) {
  return new _components_Card_js__WEBPACK_IMPORTED_MODULE_3__.Card(object, '#card', function (name, link) {
    popupZoom.open(name, link);
  }).generateCard();
}

/** Создать и добавить в главный контейнер 6 исходных карт */
var cardsContainerRender = new _components_Section_js__WEBPACK_IMPORTED_MODULE_2__.Section({
  items: _utils_constants_js__WEBPACK_IMPORTED_MODULE_8__.initialCards,
  renderer: function renderer(item) {
    var card = createCard(item);
    cardsContainerRender.addItem(card);
  }
}, _utils_elements_js__WEBPACK_IMPORTED_MODULE_7__.cardsContainerSelector);

/** Создать попап с формой для добавления пользовательских фото */
var popupCard = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__.PopupWithForm({
  handleFormSubmit: function handleFormSubmit(_ref) {
    var place = _ref.place,
      link = _ref.link;
    var card = createCard({
      name: place,
      link: link
    });
    cardsContainerRender.addItem(card);
    formAddCardValidator.blockButton();
  }
}, _utils_elements_js__WEBPACK_IMPORTED_MODULE_7__.popUpAddCardSelector);

/** Управление информацией о пользователе */
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__.UserInfo({
  nameSelector: _utils_elements_js__WEBPACK_IMPORTED_MODULE_7__.profileNameSelector,
  professionSelector: _utils_elements_js__WEBPACK_IMPORTED_MODULE_7__.profileProfessionSelector
});

/** Создать попап с формой для редактирования профиля */
var popupProfile = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__.PopupWithForm({
  handleFormSubmit: function handleFormSubmit(data) {
    userInfo.setUserInfo({
      username: data.name,
      userprofession: data.profession
    });
  }
}, _utils_elements_js__WEBPACK_IMPORTED_MODULE_7__.popUpEditProfileSelector);

/** Нажатие на карандаш для изменения профиля */
_utils_elements_js__WEBPACK_IMPORTED_MODULE_7__.buttonEdit.addEventListener("click", function () {
  formProfileEditValidator.clearErrors();
  var userInfoData = userInfo.getUserInfo();
  _utils_elements_js__WEBPACK_IMPORTED_MODULE_7__.nameInput.value = userInfoData.name;
  _utils_elements_js__WEBPACK_IMPORTED_MODULE_7__.jobInput.value = userInfoData.profession;
  popupProfile.open();
});

/** Нажатие на [+] для добавления карточки */
_utils_elements_js__WEBPACK_IMPORTED_MODULE_7__.buttonAddCard.addEventListener("click", function () {
  formAddCardValidator.clearErrors();
  popupCard.open();
});

/** Отрисовать контейнер с содержимым */
cardsContainerRender.renderItems();

/** Активировать слушатели у попапов*/
popupProfile.setEventListeners();
popupCard.setEventListeners();
popupZoom.setEventListeners();

/** Подключение проверки валидности форм */
formProfileEditValidator.enableValidation();
formAddCardValidator.enableValidation();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUVBQXlCQTtBQUFDLENBQUMsQ0FBQzs7QUFHbkg7QUFDQSxJQUFNZSxZQUFZLEdBQUcsSUFBSTlELHVFQUFhLENBQUM7RUFDckNDLGdCQUFnQixFQUFFLDBCQUFDOEQsSUFBSSxFQUFLO0lBQzFCRixRQUFRLENBQUNHLFdBQVcsQ0FBQztNQUNuQmxDLFFBQVEsRUFBRWlDLElBQUksQ0FBQ3pJLElBQUk7TUFDbkJ5RyxjQUFjLEVBQUVnQyxJQUFJLENBQUNsQztJQUN2QixDQUFDLENBQUM7RUFDSjtBQUNGLENBQUMsRUFBRWMsd0VBQXdCLENBQUM7O0FBRzVCO0FBQ0FULDJFQUEyQixDQUFDLE9BQU8sRUFBRSxZQUFZO0VBQy9DZSx3QkFBd0IsQ0FBQ2dCLFdBQVcsRUFBRTtFQUN0QyxJQUFNQyxZQUFZLEdBQUdMLFFBQVEsQ0FBQ00sV0FBVyxFQUFFO0VBQzNDM0IsK0RBQWUsR0FBRzBCLFlBQVksQ0FBQzVJLElBQUk7RUFDbkNtSCw4REFBYyxHQUFHeUIsWUFBWSxDQUFDckMsVUFBVTtFQUN4Q2lDLFlBQVksQ0FBQ1QsSUFBSSxFQUFFO0FBQ3JCLENBQUMsQ0FBQzs7QUFHRjtBQUNBbEIsOEVBQThCLENBQUMsT0FBTyxFQUFFLFlBQVk7RUFDbERlLG9CQUFvQixDQUFDZSxXQUFXLEVBQUU7RUFDbENOLFNBQVMsQ0FBQ04sSUFBSSxFQUFFO0FBQ2xCLENBQUMsQ0FBQzs7QUFHRjtBQUNBRSxvQkFBb0IsQ0FBQ2EsV0FBVyxFQUFFOztBQUdsQztBQUNBTixZQUFZLENBQUNPLGlCQUFpQixFQUFFO0FBQ2hDVixTQUFTLENBQUNVLGlCQUFpQixFQUFFO0FBQzdCckIsU0FBUyxDQUFDcUIsaUJBQWlCLEVBQUU7O0FBRzdCO0FBQ0FwQix3QkFBd0IsQ0FBQ3FCLGdCQUFnQixFQUFFO0FBQzNDcEIsb0JBQW9CLENBQUNvQixnQkFBZ0IsRUFBRSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy91dGlscy9lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2FyZCB7XG4gIGNvbnN0cnVjdG9yKGNhcmREYXRhLCB0ZW1wbGF0ZVNlbGVjdG9yLCBoYW5kbGVDYXJkQ2xpY2spIHtcbiAgICB0aGlzLl9uYW1lID0gY2FyZERhdGEubmFtZTtcbiAgICB0aGlzLl9saW5rID0gY2FyZERhdGEubGluaztcbiAgICB0aGlzLl90ZW1wbGF0ZVNlbGVjdG9yID0gdGVtcGxhdGVTZWxlY3RvcjtcbiAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sgPSBoYW5kbGVDYXJkQ2xpY2s7XG4gIH1cblxuICAvKiog0J/QvtC70YPRh9C40YLRjCDRgtC10LzQv9C70LXQudGCICovXG4gIF9nZXRUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fdGVtcGxhdGVTZWxlY3RvcikuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRzX19jYXJkXCIpLmNsb25lTm9kZSh0cnVlKTtcbiAgICByZXR1cm4gY2FyZEVsZW1lbnQ7XG4gIH1cblxuICAvKiog0JjQt9C80LXQvdC40YLRjCDRhtCy0LXRgiDQu9Cw0LnQutCwICovXG4gIF9oYW5kbGVMaWtlQ2xpY2soZXZ0KSB7XG4gICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwiZWxlbWVudF9fbGlrZV9hY3RpdmVcIik7XG4gIH1cblxuICBfaGFuZGxlRGVsZXRlQ2FyZCgpIHtcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpO1xuICB9XG5cbiAgLyoqINCh0LvRg9GI0LDRgtC10LvQuCAqL1xuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudF9fbGlrZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlTGlrZUNsaWNrKVxuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX2RlbGV0ZScpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLl9oYW5kbGVEZWxldGVDYXJkKCk7XG4gICAgfSlcbiAgICB0aGlzLl9lbGVtZW50UGhvdG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sodGhpcy5fbmFtZSwgdGhpcy5fbGluayk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqINCh0LPQtdC90LXRgNC40YDQvtCy0LDRgtGMINC60LDRgNGC0YMgKi9cbiAgZ2VuZXJhdGVDYXJkKCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xuICAgIHRoaXMuX2VsZW1lbnRQaG90byA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX3Bob3RvJyk7XG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLl9lbGVtZW50UGhvdG8uc3JjID0gdGhpcy5fbGluaztcbiAgICB0aGlzLl9lbGVtZW50UGhvdG8uYWx0ID0gdGhpcy5fbmFtZTtcbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19uYW1lJykudGV4dENvbnRlbnQgPSB0aGlzLl9uYW1lO1xuXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IoY29uZmlnLCBmb3JtRWxlbWVudCkge1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLl9mb3JtU2VsZWN0b3IgPSBjb25maWcuZm9ybVNlbGVjdG9yO1xuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBjb25maWcuaW5wdXRTZWxlY3RvcjtcbiAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IGNvbmZpZy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcbiAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gY29uZmlnLmluYWN0aXZlQnV0dG9uQ2xhc3M7XG4gICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gY29uZmlnLmlucHV0RXJyb3JDbGFzcztcbiAgICB0aGlzLl9lcnJvckNsYXNzID0gY29uZmlnLmVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZm9ybUVsZW1lbnQgPSBmb3JtRWxlbWVudDtcbiAgfVxuXG4gIC8qKiDQn9GA0L7QstC10YDQutCwINC90LAg0L3QsNC70LjRh9C40LUg0L3QtdCy0LXRgNC90YvRhSDQv9C+0LvQtdC5INCyINGE0L7RgNC80LUgKi9cbiAgX2hhc0ludmFsaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRMaXN0LnNvbWUoZnVuY3Rpb24gKGlucHV0RWxlbWVudCkge1xuICAgICAgcmV0dXJuIGlucHV0RWxlbWVudC5jaGVja1ZhbGlkaXR5KCkgPT09IGZhbHNlO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKiDQkdC70L7QutC40YDQvtCy0LrQsCDQutC90L7Qv9C60LggKi9cbiAgYmxvY2tCdXR0b24oKSB7XG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqINCg0LDQt9Cx0LvQvtC60LjRgNC+0LLQutCwINC60L3QvtC/0LrQuCAqL1xuICBfdW5sb2NrQnV0dG9uKCkge1xuICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICB0aGlzLl9idXR0b25FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgfVxuXG4gIC8qKiDQoNC10LDQutGG0LjRjyDQutC90L7Qv9C60Lgg0L3QsCDQvdC10LLQtdGA0L3Ri9C1INC/0L7Qu9GPICovXG4gIF90b2dnbGVCdXR0b25TdGF0ZSgpIHtcbiAgICBpZiAodGhpcy5faGFzSW52YWxpZElucHV0KCkpIHtcbiAgICAgIHRoaXMuYmxvY2tCdXR0b24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdW5sb2NrQnV0dG9uKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqINCf0L7QutCw0LfQsNGC0Ywg0L7RiNC40LHQutGDINC00LvRjyDQvdC10LLQtdGA0L3QvtCz0L4g0LjQvdC/0YPRgtCwICovXG4gIF9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYCk7XG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKVxuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZTtcbiAgfTtcblxuICAvKiog0KHQutGA0YvRgtGMINC+0YjQuNCx0LrRgyDQtNC70Y8g0LLQtdGA0L3QvtCz0L4g0LjQvdC/0YPRgtCwICovXG4gIF9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYCk7XG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcbiAgfTtcblxuICAvKiog0JLQsNC70LjQtNCw0YbQuNGPINC/0L7Qu9GPICovXG4gIF9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KSB7XG4gICAgaWYgKGlucHV0RWxlbWVudC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICAvKiog0KHQsdGA0L7RgdC40YLRjCDRgdC+0L7QsdGJ0LXQvdC40Y8g0LLQsNC70LjQtNCw0YbQuNC4ICovXG4gIGNsZWFyRXJyb3JzKCkge1xuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XG4gICAgIH0pXG4gICAgfVxuXG4gIC8qKiDQn9GA0L7QstC10YDQutCwINCy0YHQtdGFINC40L3Qv9GD0YLQvtCyINGE0L7RgNC80Ysg0L3QsCDQstCw0LvQuNC00L3QvtGB0YLRjCAqL1xuICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20odGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKSk7XG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xuICAgICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KTtcbiAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuIiwiLyoqINCa0L7QvdGB0YLRgNGD0LrRgtC+0YAg0L7QsdGJ0LXQs9C+INC/0L7Qv9Cw0L/QsCAqL1xuZXhwb3J0IGNsYXNzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5faGFuZGxlRXNjQ2xvc2UgPSB0aGlzLl9oYW5kbGVFc2NDbG9zZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqINCX0LDQutGA0YvRgtC40LUg0L/RgNC4INC90LDQttCw0YLQuNC4INC90LAgRVNDICovXG4gIF9oYW5kbGVFc2NDbG9zZShldnQpIHtcbiAgICBpZiAoZXZ0LmtleSA9PSAnRXNjYXBlJykge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiDQntGC0LrRgNGL0YLQuNC1ICovXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3BvcHVwX29wZW5lZCcpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cblxuICAvKiog0JfQsNC60YDRi9GC0LjQtSAqL1xuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXBfb3BlbmVkJyk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcbiAgfVxuXG4gIC8qKiDQodC70YPRiNCw0YLQtdC70Ywg0LrRgNC10YHRgtC40LrQsCDQuCDQvdCw0LbQsNGC0LjRjyDQvdCwINC+0LLQtdGA0LvQtdC5LCDRgSDRgNC10LDQutGG0LjQtdC5INC30LDQutGA0YvRgtC40Y8gKi9cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xuICAgICAgaWYgKGV2dC50YXJnZXQgPT09IGV2dC5jdXJyZW50VGFyZ2V0IHx8IGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3B1cF9fY2xvc2UnKSkge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgUG9wdXAgfSBmcm9tICcuL1BvcHVwLmpzJztcblxuLyoqINCa0L7QvdGB0YLRgNGD0LrRgtC+0YAg0L/QvtC/0LDQv9CwINC00LvRjyDQuNC30LzQtdC90LXQvdC40Y8g0LjQvdGE0L7RgNC80LDRhtC40Lgg0L4g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C1ICovXG5leHBvcnQgY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IoeyBoYW5kbGVGb3JtU3VibWl0IH0sIHBvcHVwU2VsZWN0b3IpIHtcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcbiAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0ID0gaGFuZGxlRm9ybVN1Ym1pdDtcbiAgICB0aGlzLl9pbnB1dExpc3QgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwX19pbnB1dCcpO1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudEZvcm0gPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybVwiKTtcbiAgfVxuXG4gIC8qKiDQodC+0LfQtNCw0YLRjCDQvtCx0YrQtdC60YIg0LjQtyDQstCy0LXQtNGR0L3QvdGL0YUg0LTQsNC90L3Ri9GFICovXG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcbiAgICBjb25zdCBpbnB1dHMgPSB7fTtcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGlucHV0c1tpbnB1dC5uYW1lXSA9IFtpbnB1dC52YWx1ZV07XG4gICAgfSk7XG4gICAgcmV0dXJuIGlucHV0cztcbiAgfTtcblxuICAvKiog0JfQsNC60YDRi9GC0Ywg0L/QvtC/0LDQvyDRgdC+INGB0LHRgNC+0YEg0L/QvtC70LXQuSAqL1xuICBjbG9zZSgpIHtcbiAgICBzdXBlci5jbG9zZSgpO1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudEZvcm0ucmVzZXQoKTtcbiAgfVxuXG4gIC8qKiDQl9Cw0LrRgNGL0YLQuNC1INC/0L7Qv9Cw0L/QsCArINCg0LXQsNC60YbQuNGPINC90LAg0YHQsNCx0LzQuNGCOiDRgdCx0YDQvtGBINGB0YLQsNC90LTQsNGA0YLQvdC+0LPQviDRgdC+0LHRi9GC0LjRjywg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LUg0LTQsNC90L3Ri9GFINGE0L7RgNC80Ysg0Lgg0LfQsNC60YDRi9GC0LjQtSAqL1xuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2dCkgPT4ge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0KHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQb3B1cCB9IGZyb20gJy4vUG9wdXAuanMnO1xuXG4vKiog0JrQvtC90YHRgtGA0YPQutGC0L7RgCDQv9C+0L/QsNC/0LAg0YEg0YPQstC10LvQuNGH0LXQvdC90YvQvCDRhNC+0YLQviAqL1xuZXhwb3J0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5fcGhvdG9JbWFnZSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3Bob3RvJyk7XG4gICAgdGhpcy5fcGhvdG9DYXB0aW9uID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY2FwdGlvbicpO1xuICB9XG5cbiAgb3BlbihuYW1lLCBsaW5rKSB7XG4gICAgdGhpcy5fcGhvdG9JbWFnZS5zcmMgPSBsaW5rO1xuICAgIHRoaXMuX3Bob3RvSW1hZ2UuYWx0ID0gbmFtZTtcbiAgICB0aGlzLl9waG90b0NhcHRpb24udGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIHN1cGVyLm9wZW4oKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcih7IGl0ZW1zLCByZW5kZXJlciB9LCBjb250YWluZXJTZWxlY3Rvcikge1xuICAgIHRoaXMuX3JlbmRlcmVkSXRlbXMgPSBpdGVtcztcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xuICB9XG5cbiAgLyoqINCe0YfQuNGB0YLQuNGC0Ywg0LrQvtC90YLQtdC50L3QtdGAICovXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuX2NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIC8qKiDQlNC+0LHQsNCy0LjRgtGMINGN0LvQtdC80LXQvdGCINCyINC60L7QvdGC0LXQudC90LXRgCAqL1xuICBhZGRJdGVtKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcbiAgfVxuXG4gIC8qKiDQlNC70Y8g0LrQsNC20LTQvtCz0L4g0Y3Qu9C10LzQtdC90YLQsCDQuNC3INCx0LDQt9GLINC/0L7QvtGH0LXRgNGR0LTQvdC+INCy0YvQt9Cy0LDRgtGMINC60L7Qu9Cx0Y3QuiB0aGlzLl9yZW5kZXJlciAqL1xuICByZW5kZXJJdGVtcygpIHtcbiAgICB0aGlzLmNsZWFyKCk7XG4gICAgdGhpcy5fcmVuZGVyZWRJdGVtcy5mb3JFYWNoKHRoaXMuX3JlbmRlcmVyKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFVzZXJJbmZvIHtcbiAgY29uc3RydWN0b3IoeyBuYW1lU2VsZWN0b3IsIHByb2Zlc3Npb25TZWxlY3RvciB9KSB7XG4gICAgdGhpcy5fcHJvZmlsZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hbWVTZWxlY3Rvcik7XG4gICAgdGhpcy5fcHJvZmlsZVByb2Zlc3Npb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb2Zlc3Npb25TZWxlY3Rvcik7XG4gIH1cblxuICBnZXRVc2VySW5mbygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5fcHJvZmlsZU5hbWUudGV4dENvbnRlbnQsXG4gICAgICBwcm9mZXNzaW9uOiB0aGlzLl9wcm9maWxlUHJvZmVzc2lvbi50ZXh0Q29udGVudCxcbiAgICB9XG4gIH1cblxuXG4gIHNldFVzZXJJbmZvKHsgdXNlcm5hbWUsIHVzZXJwcm9mZXNzaW9uIH0pIHtcbiAgICB0aGlzLl9wcm9maWxlTmFtZS50ZXh0Q29udGVudCA9IHVzZXJuYW1lO1xuICAgIHRoaXMuX3Byb2ZpbGVQcm9mZXNzaW9uLnRleHRDb250ZW50ID0gdXNlcnByb2Zlc3Npb247XG4gIH1cbn1cbiIsIi8qKiDQmtC+0L3RhNC40LMg0YEg0YHQtdC70LXQutGC0L7RgNCw0LzQuCDQtNC70Y8g0LLQsNC70LjQtNCw0YbQuNC4Ki9cbmV4cG9ydCBjb25zdCBjb25maWdWYWxpZGF0aW9uID0ge1xuICBmb3JtU2VsZWN0b3I6ICcucG9wdXBfX2Zvcm0nLFxuICBpbnB1dFNlbGVjdG9yOiAnLnBvcHVwX19pbnB1dCcsXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiAnLnBvcHVwX19zYXZlJyxcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogJ3BvcHVwX19zYXZlX2Rpc2FibGVkJyxcbiAgaW5wdXRFcnJvckNsYXNzOiAncG9wdXBfX2lucHV0X3R5cGVfaW5jb3JyZWN0JyxcbiAgZXJyb3JDbGFzczogJ3BvcHVwX19lcnJvcl92aXNpYmxlJ1xufVxuXG4vKiog0JTQsNC90L3Ri9C1INC00LvRjyDQvtGC0L7QsdGA0LDQttC10L3QuNGPINC60LDRgNGC0L7Rh9C10LogKi9cbmV4cG9ydCBjb25zdCBpbml0aWFsQ2FyZHMgPSBbXG4gIHtcbiAgICBuYW1lOiAn0KDRg9GB0LrQtdCw0LvQsCcsXG4gICAgbGluazogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTczMTU2NjY3NTA2LTExNTE5MGM2ODczNz9peGxpYj1yYi0xLjIuMSZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTkzNSZxPTgwJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ9Ct0LvRjNCx0YDRg9GBJyxcbiAgICBsaW5rOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1OTk0MjUxNjIxNTUtNjNjMzFiYmI5ZGM2P2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMzMyJnE9ODAnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAn0JvQsNCz0L4t0J3QsNC60LgnLFxuICAgIGxpbms6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUzODY0OTUyODk5MS00MjdhZmRiZTc4ODQ/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTIwNzAmcT04MCdcbiAgfSxcbiAge1xuICAgIG5hbWU6ICfQmtCw0LzRh9Cw0YLQutCwJyxcbiAgICBsaW5rOiAnaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2thbWNoYXRrYS5qcGcnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAn0KDRg9C30LAnLFxuICAgIGxpbms6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU5MTU2OTEzNTQyNS1hNWY0YjM0ZTUyZDY/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTEzMzImcT04MCdcbiAgfSxcbiAge1xuICAgIG5hbWU6ICfQkdCw0LnQutCw0LsnLFxuICAgIGxpbms6ICdodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQvYmFpa2FsLmpwZydcbiAgfVxuXTtcblxuXG4iLCIvKiog0K3Qu9C10LzQtdC90YLRiyDRgdGC0YDQsNC90LjRhtGLIFwiKi9cbmV4cG9ydCBjb25zdCBidXR0b25FZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19lZGl0XCIpO1xuZXhwb3J0IGNvbnN0IGJ1dHRvbkFkZENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2J1dHRvbi1hZGRcIik7XG5jb25zdCBwb3BVcEVkaXRQcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF90eXBlX3Byb2ZpbGVcIik7XG5jb25zdCBwb3BVcEFkZENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX3R5cGVfY2FyZFwiKTtcbmV4cG9ydCBjb25zdCBmb3JtUHJvZmlsZUVkaXQgPSBwb3BVcEVkaXRQcm9maWxlLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm1cIik7XG5leHBvcnQgY29uc3QgZm9ybUFkZENhcmQgPSBwb3BVcEFkZENhcmQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybVwiKTtcbmV4cG9ydCBjb25zdCBuYW1lSW5wdXQgPSBmb3JtUHJvZmlsZUVkaXQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW5wdXRfdmFsdWVfbmFtZVwiKTtcbmV4cG9ydCBjb25zdCBqb2JJbnB1dCA9IGZvcm1Qcm9maWxlRWRpdC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbnB1dF92YWx1ZV9wcm9mZXNzaW9uXCIpO1xuXG4vKiog0KHQtdC70LXQutGC0L7RgNGLICovXG5leHBvcnQgY29uc3QgY2FyZHNDb250YWluZXJTZWxlY3RvciA9ICcuZWxlbWVudHNfX2xpc3QnO1xuZXhwb3J0IGNvbnN0IHBvcFVwRWRpdFByb2ZpbGVTZWxlY3RvciA9ICcucG9wdXBfdHlwZV9wcm9maWxlJztcbmV4cG9ydCBjb25zdCBwb3BVcEFkZENhcmRTZWxlY3RvciA9ICcucG9wdXBfdHlwZV9jYXJkJztcbmV4cG9ydCBjb25zdCBwb3BVcFBob3RvU2VsZWN0b3IgPSBcIi5wb3B1cF90eXBlX3Bob3RvXCI7XG5leHBvcnQgY29uc3QgcHJvZmlsZU5hbWVTZWxlY3RvciA9IFwiLnByb2ZpbGVfX25hbWVcIjtcbmV4cG9ydCBjb25zdCBwcm9maWxlUHJvZmVzc2lvblNlbGVjdG9yID0gXCIucHJvZmlsZV9fcHJvZmVzc2lvblwiO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcblxuaW1wb3J0IHsgRm9ybVZhbGlkYXRvciB9IGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyc7XG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi9jb21wb25lbnRzL0NhcmQuanMnO1xuaW1wb3J0IHsgUG9wdXBXaXRoRm9ybSB9IGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyc7XG5pbXBvcnQgeyBQb3B1cFdpdGhJbWFnZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMnO1xuaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzJztcbmltcG9ydCB7XG4gIGJ1dHRvbkVkaXQsXG4gIGJ1dHRvbkFkZENhcmQsXG4gIG5hbWVJbnB1dCxcbiAgam9iSW5wdXQsXG4gIGNhcmRzQ29udGFpbmVyU2VsZWN0b3IsXG4gIHBvcFVwRWRpdFByb2ZpbGVTZWxlY3RvcixcbiAgcG9wVXBBZGRDYXJkU2VsZWN0b3IsXG4gIHBvcFVwUGhvdG9TZWxlY3RvcixcbiAgcHJvZmlsZU5hbWVTZWxlY3RvcixcbiAgcHJvZmlsZVByb2Zlc3Npb25TZWxlY3RvcixcbiAgZm9ybUFkZENhcmQsXG4gIGZvcm1Qcm9maWxlRWRpdCxcbn0gZnJvbSAnLi4vdXRpbHMvZWxlbWVudHMuanMnO1xuXG5pbXBvcnQge1xuICBpbml0aWFsQ2FyZHMsXG4gIGNvbmZpZ1ZhbGlkYXRpb24sXG59IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cy5qcyc7XG5cblxuLyoqINCh0L7Qt9C00LDRgtGMINC/0L7Qv9Cw0L8g0YEg0LrQsNGA0YLQuNC90LrQvtC5ICovXG5jb25zdCBwb3B1cFpvb20gPSBuZXcgUG9wdXBXaXRoSW1hZ2UocG9wVXBQaG90b1NlbGVjdG9yKTtcblxuXG4vKiog0KHQvtC30LTQsNGC0Ywg0LLQsNC70LjQtNCw0YLQvtGA0Ysg0YTQvtGA0LwgKi9cbmNvbnN0IGZvcm1Qcm9maWxlRWRpdFZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKGNvbmZpZ1ZhbGlkYXRpb24sIGZvcm1Qcm9maWxlRWRpdCk7XG5jb25zdCBmb3JtQWRkQ2FyZFZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKGNvbmZpZ1ZhbGlkYXRpb24sIGZvcm1BZGRDYXJkKTtcblxuXG4vKiog0JPQtdC90LXRgNCw0YbQuNGPINC60LDRgNGC0L7Rh9C60LggKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhcmQob2JqZWN0KSB7XG4gIHJldHVybiBuZXcgQ2FyZChvYmplY3QsICcjY2FyZCcsIChuYW1lLCBsaW5rKSA9PiB7IHBvcHVwWm9vbS5vcGVuKG5hbWUsIGxpbmspIH0pLmdlbmVyYXRlQ2FyZCgpO1xufVxuXG5cbi8qKiDQodC+0LfQtNCw0YLRjCDQuCDQtNC+0LHQsNCy0LjRgtGMINCyINCz0LvQsNCy0L3Ri9C5INC60L7QvdGC0LXQudC90LXRgCA2INC40YHRhdC+0LTQvdGL0YUg0LrQsNGA0YIgKi9cbmNvbnN0IGNhcmRzQ29udGFpbmVyUmVuZGVyID0gbmV3IFNlY3Rpb24oe1xuICBpdGVtczogaW5pdGlhbENhcmRzLFxuICByZW5kZXJlcjogKGl0ZW0pID0+IHtcbiAgICBjb25zdCBjYXJkID0gY3JlYXRlQ2FyZChpdGVtKTtcbiAgICBjYXJkc0NvbnRhaW5lclJlbmRlci5hZGRJdGVtKGNhcmQpO1xuICB9XG59LCBjYXJkc0NvbnRhaW5lclNlbGVjdG9yKTtcblxuXG4vKiog0KHQvtC30LTQsNGC0Ywg0L/QvtC/0LDQvyDRgSDRhNC+0YDQvNC+0Lkg0LTQu9GPINC00L7QsdCw0LLQu9C10L3QuNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjNGB0LrQuNGFINGE0L7RgtC+ICovXG5jb25zdCBwb3B1cENhcmQgPSBuZXcgUG9wdXBXaXRoRm9ybSh7XG4gIGhhbmRsZUZvcm1TdWJtaXQ6ICh7IHBsYWNlLCBsaW5rIH0pID0+IHtcbiAgICBjb25zdCBjYXJkID0gY3JlYXRlQ2FyZCh7XG4gICAgICBuYW1lOiBwbGFjZSxcbiAgICAgIGxpbms6IGxpbmtcbiAgICB9KTtcbiAgICBjYXJkc0NvbnRhaW5lclJlbmRlci5hZGRJdGVtKGNhcmQpO1xuICAgIGZvcm1BZGRDYXJkVmFsaWRhdG9yLmJsb2NrQnV0dG9uKCk7XG4gIH1cbn0sIHBvcFVwQWRkQ2FyZFNlbGVjdG9yKTtcblxuXG4vKiog0KPQv9GA0LDQstC70LXQvdC40LUg0LjQvdGE0L7RgNC80LDRhtC40LXQuSDQviDQv9C+0LvRjNC30L7QstCw0YLQtdC70LUgKi9cbmNvbnN0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKHsgbmFtZVNlbGVjdG9yOiBwcm9maWxlTmFtZVNlbGVjdG9yLCBwcm9mZXNzaW9uU2VsZWN0b3I6IHByb2ZpbGVQcm9mZXNzaW9uU2VsZWN0b3IgfSk7XG5cblxuLyoqINCh0L7Qt9C00LDRgtGMINC/0L7Qv9Cw0L8g0YEg0YTQvtGA0LzQvtC5INC00LvRjyDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPINC/0YDQvtGE0LjQu9GPICovXG5jb25zdCBwb3B1cFByb2ZpbGUgPSBuZXcgUG9wdXBXaXRoRm9ybSh7XG4gIGhhbmRsZUZvcm1TdWJtaXQ6IChkYXRhKSA9PiB7XG4gICAgdXNlckluZm8uc2V0VXNlckluZm8oe1xuICAgICAgdXNlcm5hbWU6IGRhdGEubmFtZSxcbiAgICAgIHVzZXJwcm9mZXNzaW9uOiBkYXRhLnByb2Zlc3Npb24sXG4gICAgfSlcbiAgfVxufSwgcG9wVXBFZGl0UHJvZmlsZVNlbGVjdG9yKTtcblxuXG4vKiog0J3QsNC20LDRgtC40LUg0L3QsCDQutCw0YDQsNC90LTQsNGIINC00LvRjyDQuNC30LzQtdC90LXQvdC40Y8g0L/RgNC+0YTQuNC70Y8gKi9cbmJ1dHRvbkVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgZm9ybVByb2ZpbGVFZGl0VmFsaWRhdG9yLmNsZWFyRXJyb3JzKCk7XG4gIGNvbnN0IHVzZXJJbmZvRGF0YSA9IHVzZXJJbmZvLmdldFVzZXJJbmZvKCk7XG4gIG5hbWVJbnB1dC52YWx1ZSA9IHVzZXJJbmZvRGF0YS5uYW1lO1xuICBqb2JJbnB1dC52YWx1ZSA9IHVzZXJJbmZvRGF0YS5wcm9mZXNzaW9uO1xuICBwb3B1cFByb2ZpbGUub3BlbigpO1xufSk7XG5cblxuLyoqINCd0LDQttCw0YLQuNC1INC90LAgWytdINC00LvRjyDQtNC+0LHQsNCy0LvQtdC90LjRjyDQutCw0YDRgtC+0YfQutC4ICovXG5idXR0b25BZGRDYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGZvcm1BZGRDYXJkVmFsaWRhdG9yLmNsZWFyRXJyb3JzKCk7XG4gIHBvcHVwQ2FyZC5vcGVuKCk7XG59KTtcblxuXG4vKiog0J7RgtGA0LjRgdC+0LLQsNGC0Ywg0LrQvtC90YLQtdC50L3QtdGAINGBINGB0L7QtNC10YDQttC40LzRi9C8ICovXG5jYXJkc0NvbnRhaW5lclJlbmRlci5yZW5kZXJJdGVtcygpO1xuXG5cbi8qKiDQkNC60YLQuNCy0LjRgNC+0LLQsNGC0Ywg0YHQu9GD0YjQsNGC0LXQu9C4INGDINC/0L7Qv9Cw0L/QvtCyKi9cbnBvcHVwUHJvZmlsZS5zZXRFdmVudExpc3RlbmVycygpO1xucG9wdXBDYXJkLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5wb3B1cFpvb20uc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuXG4vKiog0J/QvtC00LrQu9GO0YfQtdC90LjQtSDQv9GA0L7QstC10YDQutC4INCy0LDQu9C40LTQvdC+0YHRgtC4INGE0L7RgNC8ICovXG5mb3JtUHJvZmlsZUVkaXRWYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuZm9ybUFkZENhcmRWYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuIl0sIm5hbWVzIjpbIkNhcmQiLCJjYXJkRGF0YSIsInRlbXBsYXRlU2VsZWN0b3IiLCJoYW5kbGVDYXJkQ2xpY2siLCJfbmFtZSIsIm5hbWUiLCJfbGluayIsImxpbmsiLCJfdGVtcGxhdGVTZWxlY3RvciIsIl9oYW5kbGVDYXJkQ2xpY2siLCJjYXJkRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJldnQiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJfZWxlbWVudCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaGFuZGxlTGlrZUNsaWNrIiwiX2hhbmRsZURlbGV0ZUNhcmQiLCJfZWxlbWVudFBob3RvIiwiX2dldFRlbXBsYXRlIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwic3JjIiwiYWx0IiwidGV4dENvbnRlbnQiLCJGb3JtVmFsaWRhdG9yIiwiY29uZmlnIiwiZm9ybUVsZW1lbnQiLCJfY29uZmlnIiwiX2Zvcm1TZWxlY3RvciIsImZvcm1TZWxlY3RvciIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9mb3JtRWxlbWVudCIsIl9pbnB1dExpc3QiLCJzb21lIiwiaW5wdXRFbGVtZW50IiwiY2hlY2tWYWxpZGl0eSIsIl9idXR0b25FbGVtZW50IiwiYWRkIiwiZGlzYWJsZWQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJfaGFzSW52YWxpZElucHV0IiwiYmxvY2tCdXR0b24iLCJfdW5sb2NrQnV0dG9uIiwiZXJyb3JFbGVtZW50IiwiaWQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl9oaWRlSW5wdXRFcnJvciIsIl9zaG93SW5wdXRFcnJvciIsImZvckVhY2giLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiX3RvZ2dsZUJ1dHRvblN0YXRlIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsIlBvcHVwIiwicG9wdXBTZWxlY3RvciIsIl9wb3B1cEVsZW1lbnQiLCJfaGFuZGxlRXNjQ2xvc2UiLCJiaW5kIiwia2V5IiwiY2xvc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3VycmVudFRhcmdldCIsImNvbnRhaW5zIiwiUG9wdXBXaXRoRm9ybSIsImhhbmRsZUZvcm1TdWJtaXQiLCJfaGFuZGxlRm9ybVN1Ym1pdCIsIl9wb3B1cEVsZW1lbnRGb3JtIiwiaW5wdXRzIiwiaW5wdXQiLCJ2YWx1ZSIsInJlc2V0IiwicHJldmVudERlZmF1bHQiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJQb3B1cFdpdGhJbWFnZSIsIl9waG90b0ltYWdlIiwiX3Bob3RvQ2FwdGlvbiIsIlNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RvciIsIml0ZW1zIiwicmVuZGVyZXIiLCJfcmVuZGVyZWRJdGVtcyIsIl9yZW5kZXJlciIsIl9jb250YWluZXIiLCJpbm5lckhUTUwiLCJlbGVtZW50IiwicHJlcGVuZCIsImNsZWFyIiwiVXNlckluZm8iLCJuYW1lU2VsZWN0b3IiLCJwcm9mZXNzaW9uU2VsZWN0b3IiLCJfcHJvZmlsZU5hbWUiLCJfcHJvZmlsZVByb2Zlc3Npb24iLCJwcm9mZXNzaW9uIiwidXNlcm5hbWUiLCJ1c2VycHJvZmVzc2lvbiIsImNvbmZpZ1ZhbGlkYXRpb24iLCJpbml0aWFsQ2FyZHMiLCJidXR0b25FZGl0IiwiYnV0dG9uQWRkQ2FyZCIsInBvcFVwRWRpdFByb2ZpbGUiLCJwb3BVcEFkZENhcmQiLCJmb3JtUHJvZmlsZUVkaXQiLCJmb3JtQWRkQ2FyZCIsIm5hbWVJbnB1dCIsImpvYklucHV0IiwiY2FyZHNDb250YWluZXJTZWxlY3RvciIsInBvcFVwRWRpdFByb2ZpbGVTZWxlY3RvciIsInBvcFVwQWRkQ2FyZFNlbGVjdG9yIiwicG9wVXBQaG90b1NlbGVjdG9yIiwicHJvZmlsZU5hbWVTZWxlY3RvciIsInByb2ZpbGVQcm9mZXNzaW9uU2VsZWN0b3IiLCJwb3B1cFpvb20iLCJmb3JtUHJvZmlsZUVkaXRWYWxpZGF0b3IiLCJmb3JtQWRkQ2FyZFZhbGlkYXRvciIsImNyZWF0ZUNhcmQiLCJvYmplY3QiLCJvcGVuIiwiZ2VuZXJhdGVDYXJkIiwiY2FyZHNDb250YWluZXJSZW5kZXIiLCJpdGVtIiwiY2FyZCIsImFkZEl0ZW0iLCJwb3B1cENhcmQiLCJwbGFjZSIsInVzZXJJbmZvIiwicG9wdXBQcm9maWxlIiwiZGF0YSIsInNldFVzZXJJbmZvIiwiY2xlYXJFcnJvcnMiLCJ1c2VySW5mb0RhdGEiLCJnZXRVc2VySW5mbyIsInJlbmRlckl0ZW1zIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJlbmFibGVWYWxpZGF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==