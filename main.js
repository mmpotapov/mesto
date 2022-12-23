/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Api": () => (/* binding */ Api)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/** Конструктор API */
var Api = /*#__PURE__*/function () {
  function Api(_ref) {
    var baseUrl = _ref.baseUrl,
      headers = _ref.headers;
    _classCallCheck(this, Api);
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  /** Проверка ответа с сервера */
  _createClass(Api, [{
    key: "_checkResponse",
    value: function _checkResponse(res) {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status));
      }
    }

    /** Запросить данные о своём профиле */
  }, {
    key: "getProfile",
    value: function getProfile() {
      return fetch("".concat(this._baseUrl, "/users/me"), {
        headers: this._headers
      }).then(this._checkResponse);
    }

    /** Запросить все карточки с сервера */
  }, {
    key: "getInitialCards",
    value: function getInitialCards() {
      return fetch("".concat(this._baseUrl, "/cards"), {
        headers: this._headers
      }).then(this._checkResponse);
    }

    /** Отправить изменения информации о себе */
  }, {
    key: "editProfile",
    value: function editProfile(name, profession) {
      return fetch("".concat(this._baseUrl, "/users/me"), {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          about: profession
        })
      }).then(this._checkResponse);
    }

    /** Добавить свою карточку на сервер */
  }, {
    key: "addCard",
    value: function addCard(name, link) {
      return fetch("".concat(this._baseUrl, "/cards"), {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          link: link
        })
      }).then(this._checkResponse);
    }

    /** Удалить карточку с сервера */
  }, {
    key: "deleteCard",
    value: function deleteCard(cardId) {
      return fetch("".concat(this._baseUrl, "/cards/").concat(cardId), {
        method: 'DELETE',
        headers: this._headers
      }).then(this._checkResponse);
    }

    /** Удалить свой лайк */
  }, {
    key: "deleteLike",
    value: function deleteLike(cardId) {
      return fetch("".concat(this._baseUrl, "/cards/").concat(cardId, "/likes"), {
        method: 'DELETE',
        headers: this._headers
      }).then(this._checkResponse);
    }

    /** Добавить свой лайк */
  }, {
    key: "addLike",
    value: function addLike(cardId) {
      return fetch("".concat(this._baseUrl, "/cards/").concat(cardId, "/likes"), {
        method: 'PUT',
        headers: this._headers
      }).then(this._checkResponse);
    }

    /** Отправить свой аватар */
  }, {
    key: "editAvatar",
    value: function editAvatar(avatar) {
      return fetch("".concat(this._baseUrl, "/users/me/avatar"), {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          avatar: avatar
        })
      }).then(this._checkResponse);
    }

    // refactor: создать метод _request(), универсальный метод запроса с проверкой ответа
  }]);
  return Api;
}();

/***/ }),

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
  function Card(cardData, userId, templateSelector, handleCardClick, handleDeletePopup, handleLikeClick) {
    _classCallCheck(this, Card);
    this._name = cardData.name;
    this._link = cardData.link;
    this._id = cardData._id;
    this._likes = cardData.likes;
    this._ownerId = cardData.owner._id;
    this._userId = userId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeletePopup = handleDeletePopup;
    this._handleLikeClick = handleLikeClick;
  }

  /** Получить темплейт */
  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardElement = document.querySelector(this._templateSelector).content.querySelector(".elements__card").cloneNode(true);
      return cardElement;
    }

    /** Удалить карточку */
  }, {
    key: "_handleDeleteCard",
    value: function _handleDeleteCard() {
      this._element.remove();
    }

    /** Лайк поставален */
  }, {
    key: "_putLike",
    value: function _putLike() {
      this._elementLike.classList.add("element__like_active");
    }

    /** Нет лайка */
  }, {
    key: "_noLike",
    value: function _noLike() {
      this._elementLike.classList.remove("element__like_active");
    }

    /** Проверка, стоит ли наш лайк */
  }, {
    key: "isLiked",
    value: function isLiked() {
      var _this = this;
      var likeBool = this._likes.find(function (user) {
        return user._id == _this._userId;
      });
      return likeBool;
    }

    /** Изменить счётчик и цвет при нажатии на лайк */
  }, {
    key: "setLikes",
    value: function setLikes(newLikes) {
      this._likes = newLikes;
      this._likesCounter.textContent = this._likes.length;
      /** Менять цвет */
      if (this.isLiked()) {
        this._putLike();
      } else {
        this._noLike();
      }
    }

    /** Слушатели */
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this2 = this;
      /** Лайк */
      this._elementLike.addEventListener("click", function () {
        _this2._handleLikeClick(_this2._id);
      });
      /** Корзина */
      this._elementDelete.addEventListener("click", function () {
        _this2._handleDeletePopup(_this2._id, _this2._element);
      });
      /** Раскрыть фото */
      this._elementPhoto.addEventListener('click', function () {
        _this2._handleCardClick(_this2._name, _this2._link);
      });
    }
  }, {
    key: "generateCard",
    value: /** Сгенерировать карту */
    function generateCard() {
      this._element = this._getTemplate();
      this._elementPhoto = this._element.querySelector('.element__photo');
      this._elementLike = this._element.querySelector('.element__like');
      this._elementDelete = this._element.querySelector('.element__delete');
      this._likesCounter = this._element.querySelector('.element__like-counter');
      this._elementName = this._element.querySelector('.element__name');
      this._elementPhoto.src = this._link;
      this._elementPhoto.alt = this._name;
      this._elementName.textContent = this._name;
      this._setEventListeners();
      this.setLikes(this._likes);
      /** Удалять корзинку для чужих карточек */
      if (this._userId !== this._ownerId) {
        this._elementDelete.remove();
      }
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
    key: "unlockButton",
    value: function unlockButton() {
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
        this.unlockButton();
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
      this._popupElement.addEventListener('mousedown', function (evt) {
        if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')) {
          _this.close();
        }
      });
    }
  }]);
  return Popup;
}();

/***/ }),

/***/ "./src/components/PopupWithDeletion.js":
/*!*********************************************!*\
  !*** ./src/components/PopupWithDeletion.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupWithDeletion": () => (/* binding */ PopupWithDeletion)
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


/** Конструктор попапа подтверждения удаления */
var PopupWithDeletion = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithDeletion, _Popup);
  var _super = _createSuper(PopupWithDeletion);
  function PopupWithDeletion(_ref, popupSelector) {
    var _this;
    var handleFormSubmit = _ref.handleFormSubmit;
    _classCallCheck(this, PopupWithDeletion);
    _this = _super.call(this, popupSelector);
    _this._handleFormSubmit = handleFormSubmit;
    _this._popupElementForm = _this._popupElement.querySelector(".popup__form");
    _this._submitButton = _this._popupElementForm.querySelector(".popup__save");
    _this._submitButtonText = _this._submitButton.textContent;
    return _this;
  }

  /** Открыть попап, принимая информацию о карточке */
  _createClass(PopupWithDeletion, [{
    key: "open",
    value: function open(cardId, card) {
      _get(_getPrototypeOf(PopupWithDeletion.prototype), "open", this).call(this);
      this._cardId = cardId;
      this._card = card;
    }

    /** Менять текст кнопки сабмита при прогрузке удаления */
  }, {
    key: "renderLoading",
    value: function renderLoading(isLoading) {
      var loadingText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Удаление...';
      if (isLoading) {
        this._submitButton.textContent = loadingText;
      } else {
        this._submitButton.textContent = this._submitButtonText;
      }
    }

    /** Закрытие попапа + Реакция на сабмит */
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;
      _get(_getPrototypeOf(PopupWithDeletion.prototype), "setEventListeners", this).call(this);
      this._popupElementForm.addEventListener('submit', function (evt) {
        evt.preventDefault();
        _this2.renderLoading(true);
        _this2._handleFormSubmit(_this2._cardId, _this2._card).then(function () {
          return _this2.close();
        })["finally"](function () {
          _this2.renderLoading(false);
        });
      });
    }
  }]);
  return PopupWithDeletion;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.Popup);

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
    _this._submitButton = _this._popupElementForm.querySelector(".popup__save");
    _this._submitButtonText = _this._submitButton.textContent;
    return _this;
  }

  /** Создать объект из введённых данных */
  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var inputs = {};
      this._inputList.forEach(function (input) {
        inputs[input.name] = input.value;
      });
      return inputs;
    }
  }, {
    key: "renderLoading",
    value: /** Менять текст кнопки сабмита при загрузке */
    function renderLoading(isLoading) {
      var loadingText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Сохранение...';
      if (isLoading) {
        this._submitButton.textContent = loadingText;
      } else {
        this._submitButton.textContent = this._submitButtonText;
      }
    }

    /** Назначить value для инпутов, из объекта */
  }, {
    key: "setInputValues",
    value: function setInputValues(data) {
      this._inputList.forEach(function (input) {
        input.value = data[input.name];
      });
    }

    /** Закрыть попап со сбросом полей */
  }, {
    key: "close",
    value: function close() {
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
        _this2.renderLoading(true);
        _this2._handleFormSubmit(_this2._getInputValues()).then(function () {
          return _this2.close();
        })["finally"](function () {
          _this2.renderLoading(false);
        });
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
/** Конструктор секции для карточек */
var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var renderer = _ref.renderer;
    _classCallCheck(this, Section);
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  /** Добавить элемент начало контейнера */
  _createClass(Section, [{
    key: "addItem",
    value: function addItem(element) {
      this._container.prepend(element);
    }

    /** Добавить элемент в конец контейнера (для исходных карточек) */
  }, {
    key: "addInitialItem",
    value: function addInitialItem(element) {
      this._container.append(element);
    }

    /**  Цикл с перебором эелементов и срабатыванием _renderer на каждом*/
  }, {
    key: "renderItems",
    value: function renderItems(items) {
      items.forEach(this._renderer);
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
/** Конструктор профиля */
var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var nameSelector = _ref.nameSelector,
      professionSelector = _ref.professionSelector,
      avatarSelector = _ref.avatarSelector;
    _classCallCheck(this, UserInfo);
    this._profileName = document.querySelector(nameSelector);
    this._profileProfession = document.querySelector(professionSelector);
    this._profileAvatar = document.querySelector(avatarSelector);
  }

  /** Получить текущие данные */
  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        name: this._profileName.textContent,
        profession: this._profileProfession.textContent
      };
    }

    /** Изменить аватар */
  }, {
    key: "setAvatar",
    value: function setAvatar(data) {
      this._profileAvatar.src = data.avatar;
    }

    /** Установить данные */
  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref2) {
      var name = _ref2.name,
        about = _ref2.about,
        avatar = _ref2.avatar;
      this._profileName.textContent = name;
      this._profileProfession.textContent = about;
      this._profileAvatar.src = avatar;
    }
  }]);
  return UserInfo;
}();

/***/ }),

/***/ "./src/utils/elements.js":
/*!*******************************!*\
  !*** ./src/utils/elements.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonAddCard": () => (/* binding */ buttonAddCard),
/* harmony export */   "buttonAvatarEdit": () => (/* binding */ buttonAvatarEdit),
/* harmony export */   "buttonEdit": () => (/* binding */ buttonEdit),
/* harmony export */   "cardsContainerSelector": () => (/* binding */ cardsContainerSelector),
/* harmony export */   "configValidation": () => (/* binding */ configValidation),
/* harmony export */   "formAddCard": () => (/* binding */ formAddCard),
/* harmony export */   "formAvatarEdit": () => (/* binding */ formAvatarEdit),
/* harmony export */   "formProfileEdit2": () => (/* binding */ formProfileEdit2),
/* harmony export */   "popUpAddCardSelector": () => (/* binding */ popUpAddCardSelector),
/* harmony export */   "popUpDeletionSelector": () => (/* binding */ popUpDeletionSelector),
/* harmony export */   "popUpEditAvatarSelector": () => (/* binding */ popUpEditAvatarSelector),
/* harmony export */   "popUpEditProfileSelector": () => (/* binding */ popUpEditProfileSelector),
/* harmony export */   "popUpPhotoSelector": () => (/* binding */ popUpPhotoSelector),
/* harmony export */   "profileAvatarSelector": () => (/* binding */ profileAvatarSelector),
/* harmony export */   "profileNameSelector": () => (/* binding */ profileNameSelector),
/* harmony export */   "profileProfessionSelector": () => (/* binding */ profileProfessionSelector)
/* harmony export */ });
/** Кнопки */
var buttonEdit = document.querySelector(".profile__edit");
var buttonAddCard = document.querySelector(".profile__button-add");
var buttonAvatarEdit = document.querySelector(".profile__avatar-edit");

/** Попапы */
var popUpEditProfile = document.querySelector(".popup_type_profile");
var popUpAddCard = document.querySelector(".popup_type_card");
var popUpEditAvatar = document.querySelector(".popup_type_avatar");
var popUpDeletion = document.querySelector(".popup_type_delete");

/** Формы */
var formProfileEdit2 = popUpEditProfile.querySelector(".popup__form");
var formAvatarEdit = popUpEditAvatar.querySelector(".popup__form");
var formAddCard = popUpAddCard.querySelector(".popup__form");

/** Селекторы */
var popUpAddCardSelector = '.popup_type_card';
var popUpPhotoSelector = ".popup_type_photo";
var popUpEditAvatarSelector = '.popup_type_avatar';
var popUpDeletionSelector = '.popup_type_delete';
var popUpEditProfileSelector = '.popup_type_profile';
var profileNameSelector = ".profile__name";
var profileProfessionSelector = ".profile__profession";
var profileAvatarSelector = ".profile__avatar";
var cardsContainerSelector = '.elements__list';

/** Конфиг с селекторами для валидации*/
var configValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_incorrect',
  errorClass: 'popup__error_visible'
};

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
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_PopupWithDeletion_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithDeletion.js */ "./src/components/PopupWithDeletion.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Api.js */ "./src/components/Api.js");
/* harmony import */ var _utils_elements_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/elements.js */ "./src/utils/elements.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// import './index.css';











/** Создание экземпляра API */
var api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_7__.Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-55',
  headers: {
    authorization: 'a4c51acb-46f0-4f52-b5e2-f7cb5110adaa',
    'Content-Type': 'application/json'
  }
});

/** Создать попап с картинкой */
var popupZoom = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_4__.PopupWithImage(_utils_elements_js__WEBPACK_IMPORTED_MODULE_8__.popUpPhotoSelector);

/** Создать валидаторы форм */
var formProfileEditValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_0__.FormValidator(_utils_elements_js__WEBPACK_IMPORTED_MODULE_8__.configValidation, _utils_elements_js__WEBPACK_IMPORTED_MODULE_8__.formProfileEdit2);
var formAddCardValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_0__.FormValidator(_utils_elements_js__WEBPACK_IMPORTED_MODULE_8__.configValidation, _utils_elements_js__WEBPACK_IMPORTED_MODULE_8__.formAddCard);
var formEditingAvatarValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_0__.FormValidator(_utils_elements_js__WEBPACK_IMPORTED_MODULE_8__.configValidation, _utils_elements_js__WEBPACK_IMPORTED_MODULE_8__.formAvatarEdit);
// refactor: создать один бъект со всеми валидаторами

/** Создать экземпляр главной секции */
var section = new _components_Section_js__WEBPACK_IMPORTED_MODULE_1__.Section({
  renderer: function renderer(item) {
    section.addInitialItem(createCard(item));
  }
}, _utils_elements_js__WEBPACK_IMPORTED_MODULE_8__.cardsContainerSelector);

/** Функция генерации новой карточки */
function createCard(object) {
  var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_2__.Card(object, userId, '#card', /** Функция-реакция нажатия на фото */
  function (name, link) {
    popupZoom.open(name, link);
  }, /** Функция-реакция нажатия на корзину */
  function (id, card) {
    popupDeleteCard.open(id, card);
  }, /** Функция-реакция нажатия на лайк */
  function (id) {
    if (card.isLiked()) {
      api.deleteLike(id).then(function (res) {
        card.setLikes(res.likes);
      })["catch"](function (err) {
        console.log(err);
      });
      ;
    } else {
      api.addLike(id).then(function (res) {
        card.setLikes(res.likes);
      })["catch"](function (err) {
        console.log(err);
      });
      ;
    }
  });
  return card.generateCard();
}

/** Экземпляр попапа для добавления нового фото (с реакцией на самбит) */
var popupCard = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_3__.PopupWithForm({
  handleFormSubmit: function handleFormSubmit(_ref) {
    var place = _ref.place,
      link = _ref.link;
    return api.addCard(place, link).then(function (res) {
      /** Создание карточки из полученных данных с сервера */
      section.addItem(createCard(res));
    })["catch"](function (err) {
      console.log(err);
    });
  }
}, _utils_elements_js__WEBPACK_IMPORTED_MODULE_8__.popUpAddCardSelector);

/** Экземпляр отображаемого аккаунта */
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__.UserInfo({
  nameSelector: _utils_elements_js__WEBPACK_IMPORTED_MODULE_8__.profileNameSelector,
  professionSelector: _utils_elements_js__WEBPACK_IMPORTED_MODULE_8__.profileProfessionSelector,
  avatarSelector: _utils_elements_js__WEBPACK_IMPORTED_MODULE_8__.profileAvatarSelector
});

/** Экземпляр попапа для редактирования имени и описания (с реакцией на самбит) */
var popupProfile = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_3__.PopupWithForm({
  handleFormSubmit: function handleFormSubmit(data) {
    return api.editProfile(data.name, data.profession).then(function (res) {
      userInfo.setUserInfo({
        name: res.name,
        about: res.about,
        avatar: res.avatar
      });
    })["catch"](function (err) {
      console.log(err);
    });
  }
}, _utils_elements_js__WEBPACK_IMPORTED_MODULE_8__.popUpEditProfileSelector);

/** Экземпляр попапа с изменением аватара  */
var popupAvatar = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_3__.PopupWithForm({
  handleFormSubmit: function handleFormSubmit(data) {
    return api.editAvatar(data.avatar).then(function (res) {
      userInfo.setAvatar(res);
      formEditingAvatarValidator.blockButton();
    })["catch"](function (err) {
      console.log(err);
    });
  }
}, _utils_elements_js__WEBPACK_IMPORTED_MODULE_8__.popUpEditAvatarSelector);

/** Экземпляр попапа для подтверждения удаления  */
var popupDeleteCard = new _components_PopupWithDeletion_js__WEBPACK_IMPORTED_MODULE_5__.PopupWithDeletion({
  handleFormSubmit: function handleFormSubmit(cardId, card) {
    return api.deleteCard(cardId).then(function () {
      card.remove();
    })["catch"](function (err) {
      console.log(err);
    });
  }
}, _utils_elements_js__WEBPACK_IMPORTED_MODULE_8__.popUpDeletionSelector);
var userId = '';

/** Выгрузить имя, описание и аватар из сервера.
Поочерёдно отобразить на странице все карточки из сервера */
Promise.all([api.getProfile(), api.getInitialCards()]).then(function (_ref2) {
  var _ref3 = _slicedToArray(_ref2, 2),
    profileInfo = _ref3[0],
    cardList = _ref3[1];
  userInfo.setUserInfo({
    name: profileInfo.name,
    about: profileInfo.about,
    avatar: profileInfo.avatar
  });
  userId = profileInfo._id;
  section.renderItems(cardList);
})["catch"](function (err) {
  console.log(err);
});

/** Нажатие на карандаш для изменения профиля */
_utils_elements_js__WEBPACK_IMPORTED_MODULE_8__.buttonEdit.addEventListener("click", function () {
  formProfileEditValidator.clearErrors();
  formProfileEditValidator.unlockButton();
  var userInfoData = userInfo.getUserInfo();
  popupProfile.setInputValues(userInfoData);
  popupProfile.open();
});

/** Нажатие на [+] для добавления карточки */
_utils_elements_js__WEBPACK_IMPORTED_MODULE_8__.buttonAddCard.addEventListener("click", function () {
  formAddCardValidator.blockButton();
  formAddCardValidator.clearErrors();
  popupCard.open();
});

/** Нажатие на аватар для изменения фото */
_utils_elements_js__WEBPACK_IMPORTED_MODULE_8__.buttonAvatarEdit.addEventListener("click", function () {
  formEditingAvatarValidator.blockButton();
  formEditingAvatarValidator.clearErrors();
  popupAvatar.open();
});

/** Активировать слушатели у попапов*/
popupProfile.setEventListeners();
popupCard.setEventListeners();
popupZoom.setEventListeners();
popupAvatar.setEventListeners();
popupDeleteCard.setEventListeners();

/** Подключение проверки валидности форм */
formProfileEditValidator.enableValidation();
formAddCardValidator.enableValidation();
formEditingAvatarValidator.enableValidation();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ08sSUFBTUEsR0FBRztFQUNkLG1CQUFrQztJQUFBLElBQXBCQyxPQUFPLFFBQVBBLE9BQU87TUFBRUMsT0FBTyxRQUFQQSxPQUFPO0lBQUE7SUFDNUIsSUFBSSxDQUFDQyxRQUFRLEdBQUdGLE9BQU87SUFDdkIsSUFBSSxDQUFDRyxRQUFRLEdBQUdGLE9BQU87RUFDekI7O0VBRUE7RUFBQTtJQUFBO0lBQUEsT0FDQSx3QkFBZUcsR0FBRyxFQUFFO01BQ2xCLElBQUlBLEdBQUcsQ0FBQ0MsRUFBRSxFQUFFO1FBQ1YsT0FBT0QsR0FBRyxDQUFDRSxJQUFJLEVBQUU7TUFDbkIsQ0FBQyxNQUFNO1FBQ0wsT0FBT0MsT0FBTyxDQUFDQyxNQUFNLGlEQUFZSixHQUFHLENBQUNLLE1BQU0sRUFBRztNQUNoRDtJQUNGOztJQUVBO0VBQUE7SUFBQTtJQUFBLE9BQ0Esc0JBQWE7TUFDWCxPQUFPQyxLQUFLLFdBQUksSUFBSSxDQUFDUixRQUFRLGdCQUFhO1FBQ3hDRCxPQUFPLEVBQUUsSUFBSSxDQUFDRTtNQUNoQixDQUFDLENBQUMsQ0FBQ1EsSUFBSSxDQUFDLElBQUksQ0FBQ0MsY0FBYyxDQUFDO0lBQzlCOztJQUVBO0VBQUE7SUFBQTtJQUFBLE9BQ0EsMkJBQWtCO01BQ2hCLE9BQU9GLEtBQUssV0FBSSxJQUFJLENBQUNSLFFBQVEsYUFBVTtRQUNyQ0QsT0FBTyxFQUFFLElBQUksQ0FBQ0U7TUFDaEIsQ0FBQyxDQUFDLENBQUNRLElBQUksQ0FBQyxJQUFJLENBQUNDLGNBQWMsQ0FBQztJQUM5Qjs7SUFFQTtFQUFBO0lBQUE7SUFBQSxPQUNBLHFCQUFZQyxJQUFJLEVBQUVDLFVBQVUsRUFBRTtNQUM1QixPQUFPSixLQUFLLFdBQUksSUFBSSxDQUFDUixRQUFRLGdCQUFhO1FBQ3hDYSxNQUFNLEVBQUUsT0FBTztRQUNmZCxPQUFPLEVBQUUsSUFBSSxDQUFDRSxRQUFRO1FBQ3RCYSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDO1VBQ25CTCxJQUFJLEVBQUVBLElBQUk7VUFDVk0sS0FBSyxFQUFFTDtRQUNULENBQUM7TUFDSCxDQUFDLENBQUMsQ0FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQ0MsY0FBYyxDQUFDO0lBQzlCOztJQUVBO0VBQUE7SUFBQTtJQUFBLE9BQ0EsaUJBQVFDLElBQUksRUFBRU8sSUFBSSxFQUFFO01BQ2xCLE9BQU9WLEtBQUssV0FBSSxJQUFJLENBQUNSLFFBQVEsYUFBVTtRQUNyQ2EsTUFBTSxFQUFFLE1BQU07UUFDZGQsT0FBTyxFQUFFLElBQUksQ0FBQ0UsUUFBUTtRQUN0QmEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQztVQUNuQkwsSUFBSSxFQUFFQSxJQUFJO1VBQ1ZPLElBQUksRUFBRUE7UUFDUixDQUFDO01BQ0gsQ0FBQyxDQUFDLENBQUNULElBQUksQ0FBQyxJQUFJLENBQUNDLGNBQWMsQ0FBQztJQUM5Qjs7SUFFQTtFQUFBO0lBQUE7SUFBQSxPQUNBLG9CQUFXUyxNQUFNLEVBQUU7TUFDakIsT0FBT1gsS0FBSyxXQUFJLElBQUksQ0FBQ1IsUUFBUSxvQkFBVW1CLE1BQU0sR0FBSTtRQUMvQ04sTUFBTSxFQUFFLFFBQVE7UUFDaEJkLE9BQU8sRUFBRSxJQUFJLENBQUNFO01BQ2hCLENBQUMsQ0FBQyxDQUFDUSxJQUFJLENBQUMsSUFBSSxDQUFDQyxjQUFjLENBQUM7SUFDOUI7O0lBRUE7RUFBQTtJQUFBO0lBQUEsT0FDQSxvQkFBV1MsTUFBTSxFQUFFO01BQ2pCLE9BQU9YLEtBQUssV0FBSSxJQUFJLENBQUNSLFFBQVEsb0JBQVVtQixNQUFNLGFBQVU7UUFDckROLE1BQU0sRUFBRSxRQUFRO1FBQ2hCZCxPQUFPLEVBQUUsSUFBSSxDQUFDRTtNQUNoQixDQUFDLENBQUMsQ0FBQ1EsSUFBSSxDQUFDLElBQUksQ0FBQ0MsY0FBYyxDQUFDO0lBQzlCOztJQUVBO0VBQUE7SUFBQTtJQUFBLE9BQ0EsaUJBQVFTLE1BQU0sRUFBRTtNQUNkLE9BQU9YLEtBQUssV0FBSSxJQUFJLENBQUNSLFFBQVEsb0JBQVVtQixNQUFNLGFBQVU7UUFDckROLE1BQU0sRUFBRSxLQUFLO1FBQ2JkLE9BQU8sRUFBRSxJQUFJLENBQUNFO01BQ2hCLENBQUMsQ0FBQyxDQUFDUSxJQUFJLENBQUMsSUFBSSxDQUFDQyxjQUFjLENBQUM7SUFDOUI7O0lBRUE7RUFBQTtJQUFBO0lBQUEsT0FDQSxvQkFBV1UsTUFBTSxFQUFFO01BQ2pCLE9BQU9aLEtBQUssV0FBSSxJQUFJLENBQUNSLFFBQVEsdUJBQW9CO1FBQy9DYSxNQUFNLEVBQUUsT0FBTztRQUNmZCxPQUFPLEVBQUUsSUFBSSxDQUFDRSxRQUFRO1FBQ3RCYSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDO1VBQ25CSSxNQUFNLEVBQUVBO1FBQ1YsQ0FBQztNQUNILENBQUMsQ0FBQyxDQUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDQyxjQUFjLENBQUM7SUFDOUI7O0lBRUE7RUFBQTtFQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekZLLElBQU1XLElBQUk7RUFDZixjQUFZQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsZ0JBQWdCLEVBQUVDLGVBQWUsRUFBRUMsaUJBQWlCLEVBQUVDLGVBQWUsRUFBRTtJQUFBO0lBQ25HLElBQUksQ0FBQ0MsS0FBSyxHQUFHTixRQUFRLENBQUNYLElBQUk7SUFDMUIsSUFBSSxDQUFDa0IsS0FBSyxHQUFHUCxRQUFRLENBQUNKLElBQUk7SUFDMUIsSUFBSSxDQUFDWSxHQUFHLEdBQUdSLFFBQVEsQ0FBQ1EsR0FBRztJQUN2QixJQUFJLENBQUNDLE1BQU0sR0FBR1QsUUFBUSxDQUFDVSxLQUFLO0lBQzVCLElBQUksQ0FBQ0MsUUFBUSxHQUFHWCxRQUFRLENBQUNZLEtBQUssQ0FBQ0osR0FBRztJQUNsQyxJQUFJLENBQUNLLE9BQU8sR0FBR1osTUFBTTtJQUNyQixJQUFJLENBQUNhLGlCQUFpQixHQUFHWixnQkFBZ0I7SUFDekMsSUFBSSxDQUFDYSxnQkFBZ0IsR0FBR1osZUFBZTtJQUN2QyxJQUFJLENBQUNhLGtCQUFrQixHQUFHWixpQkFBaUI7SUFDM0MsSUFBSSxDQUFDYSxnQkFBZ0IsR0FBR1osZUFBZTtFQUN6Qzs7RUFFQTtFQUFBO0lBQUE7SUFBQSxPQUNBLHdCQUFlO01BQ2IsSUFBTWEsV0FBVyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUNOLGlCQUFpQixDQUFDLENBQy9ETyxPQUFPLENBQUNELGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUN4Q0UsU0FBUyxDQUFDLElBQUksQ0FBQztNQUNsQixPQUFPSixXQUFXO0lBQ3BCOztJQUVBO0VBQUE7SUFBQTtJQUFBLE9BQ0EsNkJBQW9CO01BQ2xCLElBQUksQ0FBQ0ssUUFBUSxDQUFDQyxNQUFNLEVBQUU7SUFDeEI7O0lBRUE7RUFBQTtJQUFBO0lBQUEsT0FDQSxvQkFBVztNQUNULElBQUksQ0FBQ0MsWUFBWSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztJQUN6RDs7SUFFQTtFQUFBO0lBQUE7SUFBQSxPQUNBLG1CQUFVO01BQ1IsSUFBSSxDQUFDRixZQUFZLENBQUNDLFNBQVMsQ0FBQ0YsTUFBTSxDQUFDLHNCQUFzQixDQUFDO0lBQzVEOztJQUVBO0VBQUE7SUFBQTtJQUFBLE9BQ0EsbUJBQVU7TUFBQTtNQUNSLElBQU1JLFFBQVEsR0FBRyxJQUFJLENBQUNuQixNQUFNLENBQUNvQixJQUFJLENBQUMsVUFBQUMsSUFBSTtRQUFBLE9BQUlBLElBQUksQ0FBQ3RCLEdBQUcsSUFBSSxLQUFJLENBQUNLLE9BQU87TUFBQSxFQUFDO01BQ25FLE9BQU9lLFFBQVE7SUFDakI7O0lBRUE7RUFBQTtJQUFBO0lBQUEsT0FDQSxrQkFBU0csUUFBUSxFQUFFO01BQ2pCLElBQUksQ0FBQ3RCLE1BQU0sR0FBR3NCLFFBQVE7TUFDdEIsSUFBSSxDQUFDQyxhQUFhLENBQUNDLFdBQVcsR0FBRyxJQUFJLENBQUN4QixNQUFNLENBQUN5QixNQUFNO01BQ25EO01BQ0EsSUFBSSxJQUFJLENBQUNDLE9BQU8sRUFBRSxFQUFFO1FBQ2xCLElBQUksQ0FBQ0MsUUFBUSxFQUFFO01BQ2pCLENBQUMsTUFBTTtRQUNMLElBQUksQ0FBQ0MsT0FBTyxFQUFFO01BQ2hCO0lBQ0Y7O0lBRUE7RUFBQTtJQUFBO0lBQUEsT0FDQSw4QkFBcUI7TUFBQTtNQUNuQjtNQUNBLElBQUksQ0FBQ1osWUFBWSxDQUFDYSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtRQUNoRCxNQUFJLENBQUNyQixnQkFBZ0IsQ0FBQyxNQUFJLENBQUNULEdBQUcsQ0FBQztNQUNqQyxDQUFDLENBQUM7TUFDRjtNQUNBLElBQUksQ0FBQytCLGNBQWMsQ0FBQ0QsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07UUFDbEQsTUFBSSxDQUFDdEIsa0JBQWtCLENBQUMsTUFBSSxDQUFDUixHQUFHLEVBQUUsTUFBSSxDQUFDZSxRQUFRLENBQUM7TUFDbEQsQ0FBQyxDQUFDO01BQ0Y7TUFDQSxJQUFJLENBQUNpQixhQUFhLENBQUNGLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO1FBQ2pELE1BQUksQ0FBQ3ZCLGdCQUFnQixDQUFDLE1BQUksQ0FBQ1QsS0FBSyxFQUFFLE1BQUksQ0FBQ0MsS0FBSyxDQUFDO01BQy9DLENBQUMsQ0FBQztJQUNKO0VBQUM7SUFBQTtJQUFBLE9BRUQ7SUFDQSx3QkFBZTtNQUNiLElBQUksQ0FBQ2dCLFFBQVEsR0FBRyxJQUFJLENBQUNrQixZQUFZLEVBQUU7TUFDbkMsSUFBSSxDQUFDRCxhQUFhLEdBQUcsSUFBSSxDQUFDakIsUUFBUSxDQUFDSCxhQUFhLENBQUMsaUJBQWlCLENBQUM7TUFDbkUsSUFBSSxDQUFDSyxZQUFZLEdBQUcsSUFBSSxDQUFDRixRQUFRLENBQUNILGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztNQUNqRSxJQUFJLENBQUNtQixjQUFjLEdBQUcsSUFBSSxDQUFDaEIsUUFBUSxDQUFDSCxhQUFhLENBQUMsa0JBQWtCLENBQUM7TUFDckUsSUFBSSxDQUFDWSxhQUFhLEdBQUcsSUFBSSxDQUFDVCxRQUFRLENBQUNILGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQztNQUMxRSxJQUFJLENBQUNzQixZQUFZLEdBQUcsSUFBSSxDQUFDbkIsUUFBUSxDQUFDSCxhQUFhLENBQUMsZ0JBQWdCLENBQUM7TUFDakUsSUFBSSxDQUFDb0IsYUFBYSxDQUFDRyxHQUFHLEdBQUcsSUFBSSxDQUFDcEMsS0FBSztNQUNuQyxJQUFJLENBQUNpQyxhQUFhLENBQUNJLEdBQUcsR0FBRyxJQUFJLENBQUN0QyxLQUFLO01BQ25DLElBQUksQ0FBQ29DLFlBQVksQ0FBQ1QsV0FBVyxHQUFHLElBQUksQ0FBQzNCLEtBQUs7TUFDMUMsSUFBSSxDQUFDdUMsa0JBQWtCLEVBQUU7TUFDekIsSUFBSSxDQUFDQyxRQUFRLENBQUMsSUFBSSxDQUFDckMsTUFBTSxDQUFDO01BQzFCO01BQ0EsSUFBSSxJQUFJLENBQUNJLE9BQU8sS0FBSyxJQUFJLENBQUNGLFFBQVEsRUFBRTtRQUNsQyxJQUFJLENBQUM0QixjQUFjLENBQUNmLE1BQU0sRUFBRTtNQUM5QjtNQUNBLE9BQU8sSUFBSSxDQUFDRCxRQUFRO0lBQ3RCO0VBQUM7RUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pGSSxJQUFNd0IsYUFBYTtFQUN4Qix1QkFBWUMsTUFBTSxFQUFFQyxXQUFXLEVBQUU7SUFBQTtJQUMvQixJQUFJLENBQUNDLE9BQU8sR0FBR0YsTUFBTTtJQUNyQixJQUFJLENBQUNHLGFBQWEsR0FBR0gsTUFBTSxDQUFDSSxZQUFZO0lBQ3hDLElBQUksQ0FBQ0MsY0FBYyxHQUFHTCxNQUFNLENBQUNNLGFBQWE7SUFDMUMsSUFBSSxDQUFDQyxxQkFBcUIsR0FBR1AsTUFBTSxDQUFDUSxvQkFBb0I7SUFDeEQsSUFBSSxDQUFDQyxvQkFBb0IsR0FBR1QsTUFBTSxDQUFDVSxtQkFBbUI7SUFDdEQsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR1gsTUFBTSxDQUFDWSxlQUFlO0lBQzlDLElBQUksQ0FBQ0MsV0FBVyxHQUFHYixNQUFNLENBQUNjLFVBQVU7SUFDcEMsSUFBSSxDQUFDQyxZQUFZLEdBQUdkLFdBQVc7RUFDakM7O0VBRUE7RUFBQTtJQUFBO0lBQUEsT0FDQSw0QkFBbUI7TUFDakIsT0FBTyxJQUFJLENBQUNlLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDLFVBQVVDLFlBQVksRUFBRTtRQUNsRCxPQUFPQSxZQUFZLENBQUNDLGFBQWEsRUFBRSxLQUFLLEtBQUs7TUFDL0MsQ0FBQyxDQUFDO0lBQ0o7RUFBQztJQUFBO0lBQUEsT0FFRDtJQUNBLHVCQUFjO01BQ1osSUFBSSxDQUFDQyxjQUFjLENBQUMxQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUM4QixvQkFBb0IsQ0FBQztNQUM1RCxJQUFJLENBQUNXLGNBQWMsQ0FBQ0MsUUFBUSxHQUFHLElBQUk7SUFDckM7O0lBRUE7RUFBQTtJQUFBO0lBQUEsT0FDQSx3QkFBZTtNQUNiLElBQUksQ0FBQ0QsY0FBYyxDQUFDMUMsU0FBUyxDQUFDRixNQUFNLENBQUMsSUFBSSxDQUFDaUMsb0JBQW9CLENBQUM7TUFDL0QsSUFBSSxDQUFDVyxjQUFjLENBQUNFLGVBQWUsQ0FBQyxVQUFVLENBQUM7SUFDakQ7O0lBRUE7RUFBQTtJQUFBO0lBQUEsT0FDQSw4QkFBcUI7TUFDbkIsSUFBSSxJQUFJLENBQUNDLGdCQUFnQixFQUFFLEVBQUU7UUFDM0IsSUFBSSxDQUFDQyxXQUFXLEVBQUU7TUFDcEIsQ0FBQyxNQUFNO1FBQ0wsSUFBSSxDQUFDQyxZQUFZLEVBQUU7TUFDckI7SUFDRjs7SUFFQTtFQUFBO0lBQUE7SUFBQSxPQUNBLHlCQUFnQlAsWUFBWSxFQUFFO01BQzVCLElBQU1RLFlBQVksR0FBRyxJQUFJLENBQUNYLFlBQVksQ0FBQzNDLGFBQWEsWUFBSzhDLFlBQVksQ0FBQ1MsRUFBRSxZQUFTO01BQ2pGVCxZQUFZLENBQUN4QyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNnQyxnQkFBZ0IsQ0FBQztNQUNqRGUsWUFBWSxDQUFDekMsV0FBVyxHQUFHaUMsWUFBWSxDQUFDVSxpQkFBaUI7SUFDM0Q7RUFBQztJQUFBO0lBQUEsT0FFRDtJQUNBLHlCQUFnQlYsWUFBWSxFQUFFO01BQzVCLElBQU1RLFlBQVksR0FBRyxJQUFJLENBQUNYLFlBQVksQ0FBQzNDLGFBQWEsWUFBSzhDLFlBQVksQ0FBQ1MsRUFBRSxZQUFTO01BQ2pGVCxZQUFZLENBQUN4QyxTQUFTLENBQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUNtQyxnQkFBZ0IsQ0FBQztNQUNwRGUsWUFBWSxDQUFDekMsV0FBVyxHQUFHLEVBQUU7SUFDL0I7RUFBQztJQUFBO0lBQUEsT0FFRDtJQUNBLDZCQUFvQmlDLFlBQVksRUFBRTtNQUNoQyxJQUFJQSxZQUFZLENBQUNDLGFBQWEsRUFBRSxFQUFFO1FBQ2hDLElBQUksQ0FBQ1UsZUFBZSxDQUFDWCxZQUFZLENBQUM7TUFDcEMsQ0FBQyxNQUNJO1FBQ0gsSUFBSSxDQUFDWSxlQUFlLENBQUNaLFlBQVksQ0FBQztNQUNwQztJQUNGOztJQUVBO0VBQUE7SUFBQTtJQUFBLE9BQ0EsdUJBQWM7TUFBQTtNQUNaLElBQUksQ0FBQ0YsVUFBVSxDQUFDZSxPQUFPLENBQUMsVUFBQ2IsWUFBWSxFQUFLO1FBQ3hDLEtBQUksQ0FBQ1csZUFBZSxDQUFDWCxZQUFZLENBQUM7TUFDbkMsQ0FBQyxDQUFDO0lBQ0g7O0lBRUY7RUFBQTtJQUFBO0lBQUEsT0FDQSw0QkFBbUI7TUFBQTtNQUNqQixJQUFJLENBQUNGLFVBQVUsR0FBR2dCLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQ2xCLFlBQVksQ0FBQ21CLGdCQUFnQixDQUFDLElBQUksQ0FBQzdCLGNBQWMsQ0FBQyxDQUFDO01BQ3JGLElBQUksQ0FBQ2UsY0FBYyxHQUFHLElBQUksQ0FBQ0wsWUFBWSxDQUFDM0MsYUFBYSxDQUFDLElBQUksQ0FBQ21DLHFCQUFxQixDQUFDO01BQ2pGLElBQUksQ0FBQzRCLGtCQUFrQixFQUFFO01BQ3pCLElBQUksQ0FBQ25CLFVBQVUsQ0FBQ2UsT0FBTyxDQUFDLFVBQUNiLFlBQVksRUFBSztRQUN4Q0EsWUFBWSxDQUFDNUIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07VUFDM0MsTUFBSSxDQUFDOEMsbUJBQW1CLENBQUNsQixZQUFZLENBQUM7VUFDdEMsTUFBSSxDQUFDaUIsa0JBQWtCLEVBQUU7UUFDM0IsQ0FBQyxDQUFDO01BQ0osQ0FBQyxDQUFDO0lBQ0o7RUFBQztFQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZIO0FBQ08sSUFBTUUsS0FBSztFQUNoQixlQUFZQyxhQUFhLEVBQUU7SUFBQTtJQUN6QixJQUFJLENBQUNDLGFBQWEsR0FBR3BFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDa0UsYUFBYSxDQUFDO0lBQzFELElBQUksQ0FBQ0UsZUFBZSxHQUFHLElBQUksQ0FBQ0EsZUFBZSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0VBQ3hEOztFQUVBO0VBQUE7SUFBQTtJQUFBLE9BQ0EseUJBQWdCQyxHQUFHLEVBQUU7TUFDbkIsSUFBSUEsR0FBRyxDQUFDQyxHQUFHLElBQUksUUFBUSxFQUFFO1FBQ3ZCLElBQUksQ0FBQ0MsS0FBSyxFQUFFO01BQ2Q7SUFDRjs7SUFFQTtFQUFBO0lBQUE7SUFBQSxPQUNBLGdCQUFPO01BQ0wsSUFBSSxDQUFDTCxhQUFhLENBQUM3RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7TUFDaERSLFFBQVEsQ0FBQ21CLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUNrRCxlQUFlLENBQUM7SUFDNUQ7O0lBRUE7RUFBQTtJQUFBO0lBQUEsT0FDQSxpQkFBUTtNQUNOLElBQUksQ0FBQ0QsYUFBYSxDQUFDN0QsU0FBUyxDQUFDRixNQUFNLENBQUMsY0FBYyxDQUFDO01BQ25ETCxRQUFRLENBQUMwRSxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDTCxlQUFlLENBQUM7SUFDL0Q7O0lBRUE7RUFBQTtJQUFBO0lBQUEsT0FDQSw2QkFBb0I7TUFBQTtNQUNsQixJQUFJLENBQUNELGFBQWEsQ0FBQ2pELGdCQUFnQixDQUFDLFdBQVcsRUFBRSxVQUFDb0QsR0FBRyxFQUFLO1FBQ3hELElBQUlBLEdBQUcsQ0FBQ0ksTUFBTSxLQUFLSixHQUFHLENBQUNLLGFBQWEsSUFBSUwsR0FBRyxDQUFDSSxNQUFNLENBQUNwRSxTQUFTLENBQUNzRSxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUU7VUFDckYsS0FBSSxDQUFDSixLQUFLLEVBQUU7UUFDZDtNQUNGLENBQUMsQ0FBQztJQUNKO0VBQUM7RUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNnQzs7QUFFbkM7QUFDTyxJQUFNSyxpQkFBaUI7RUFBQTtFQUFBO0VBQzVCLGlDQUFrQ1gsYUFBYSxFQUFFO0lBQUE7SUFBQSxJQUFuQ1ksZ0JBQWdCLFFBQWhCQSxnQkFBZ0I7SUFBQTtJQUM1QiwwQkFBTVosYUFBYTtJQUNuQixNQUFLYSxpQkFBaUIsR0FBR0QsZ0JBQWdCO0lBQ3pDLE1BQUtFLGlCQUFpQixHQUFHLE1BQUtiLGFBQWEsQ0FBQ25FLGFBQWEsQ0FBQyxjQUFjLENBQUM7SUFDekUsTUFBS2lGLGFBQWEsR0FBRyxNQUFLRCxpQkFBaUIsQ0FBQ2hGLGFBQWEsQ0FBQyxjQUFjLENBQUM7SUFDekUsTUFBS2tGLGlCQUFpQixHQUFHLE1BQUtELGFBQWEsQ0FBQ3BFLFdBQVc7SUFBQztFQUMxRDs7RUFFQTtFQUFBO0lBQUE7SUFBQSxPQUNBLGNBQUtwQyxNQUFNLEVBQUUwRyxJQUFJLEVBQUU7TUFDakI7TUFDQSxJQUFJLENBQUNDLE9BQU8sR0FBRzNHLE1BQU07TUFDckIsSUFBSSxDQUFDNEcsS0FBSyxHQUFHRixJQUFJO0lBQ25COztJQUVFO0VBQUE7SUFBQTtJQUFBLE9BQ0EsdUJBQWNHLFNBQVMsRUFBK0I7TUFBQSxJQUE3QkMsV0FBVyx1RUFBRyxhQUFhO01BQ2xELElBQUlELFNBQVMsRUFBRTtRQUNiLElBQUksQ0FBQ0wsYUFBYSxDQUFDcEUsV0FBVyxHQUFHMEUsV0FBVztNQUM5QyxDQUFDLE1BQU07UUFDTCxJQUFJLENBQUNOLGFBQWEsQ0FBQ3BFLFdBQVcsR0FBRyxJQUFJLENBQUNxRSxpQkFBaUI7TUFDekQ7SUFDRjs7SUFFRjtFQUFBO0lBQUE7SUFBQSxPQUNBLDZCQUFvQjtNQUFBO01BQ2xCO01BQ0EsSUFBSSxDQUFDRixpQkFBaUIsQ0FBQzlELGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDb0QsR0FBRyxFQUFLO1FBQ3pEQSxHQUFHLENBQUNrQixjQUFjLEVBQUU7UUFDcEIsTUFBSSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBQ3hCLE1BQUksQ0FBQ1YsaUJBQWlCLENBQUMsTUFBSSxDQUFDSyxPQUFPLEVBQUUsTUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FDL0N0SCxJQUFJLENBQUM7VUFBQSxPQUFNLE1BQUksQ0FBQ3lHLEtBQUssRUFBRTtRQUFBLEVBQUMsV0FDakIsQ0FBQyxZQUFNO1VBQ2IsTUFBSSxDQUFDaUIsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUMzQixDQUFDLENBQUM7TUFDSixDQUFDLENBQUM7SUFDSjtFQUFDO0VBQUE7QUFBQSxFQXJDb0N4Qiw0Q0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hUOztBQUVuQztBQUNPLElBQU15QixhQUFhO0VBQUE7RUFBQTtFQUN4Qiw2QkFBa0N4QixhQUFhLEVBQUU7SUFBQTtJQUFBLElBQW5DWSxnQkFBZ0IsUUFBaEJBLGdCQUFnQjtJQUFBO0lBQzVCLDBCQUFNWixhQUFhO0lBQ25CLE1BQUthLGlCQUFpQixHQUFHRCxnQkFBZ0I7SUFDekMsTUFBS2xDLFVBQVUsR0FBRyxNQUFLdUIsYUFBYSxDQUFDTCxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7SUFDdEUsTUFBS2tCLGlCQUFpQixHQUFHLE1BQUtiLGFBQWEsQ0FBQ25FLGFBQWEsQ0FBQyxjQUFjLENBQUM7SUFDekUsTUFBS2lGLGFBQWEsR0FBRyxNQUFLRCxpQkFBaUIsQ0FBQ2hGLGFBQWEsQ0FBQyxjQUFjLENBQUM7SUFDekUsTUFBS2tGLGlCQUFpQixHQUFHLE1BQUtELGFBQWEsQ0FBQ3BFLFdBQVc7SUFBQztFQUMxRDs7RUFFQTtFQUFBO0lBQUE7SUFBQSxPQUNBLDJCQUFrQjtNQUNoQixJQUFNOEUsTUFBTSxHQUFHLENBQUMsQ0FBQztNQUNqQixJQUFJLENBQUMvQyxVQUFVLENBQUNlLE9BQU8sQ0FBQyxVQUFDaUMsS0FBSyxFQUFLO1FBQ2pDRCxNQUFNLENBQUNDLEtBQUssQ0FBQzNILElBQUksQ0FBQyxHQUFHMkgsS0FBSyxDQUFDQyxLQUFLO01BQ2xDLENBQUMsQ0FBQztNQUNGLE9BQU9GLE1BQU07SUFDZjtFQUFDO0lBQUE7SUFBQSxPQUVEO0lBQ0EsdUJBQWNMLFNBQVMsRUFBaUM7TUFBQSxJQUEvQkMsV0FBVyx1RUFBRyxlQUFlO01BQ3BELElBQUlELFNBQVMsRUFBRTtRQUNiLElBQUksQ0FBQ0wsYUFBYSxDQUFDcEUsV0FBVyxHQUFHMEUsV0FBVztNQUM5QyxDQUFDLE1BQU07UUFDTCxJQUFJLENBQUNOLGFBQWEsQ0FBQ3BFLFdBQVcsR0FBRyxJQUFJLENBQUNxRSxpQkFBaUI7TUFDekQ7SUFDRjs7SUFFQTtFQUFBO0lBQUE7SUFBQSxPQUNBLHdCQUFlWSxJQUFJLEVBQUU7TUFDbkIsSUFBSSxDQUFDbEQsVUFBVSxDQUFDZSxPQUFPLENBQUMsVUFBQ2lDLEtBQUssRUFBSztRQUNqQ0EsS0FBSyxDQUFDQyxLQUFLLEdBQUdDLElBQUksQ0FBQ0YsS0FBSyxDQUFDM0gsSUFBSSxDQUFDO01BQ2hDLENBQUMsQ0FBQztJQUNKOztJQUVBO0VBQUE7SUFBQTtJQUFBLE9BQ0EsaUJBQVE7TUFDTjtNQUNBLElBQUksQ0FBQytHLGlCQUFpQixDQUFDZSxLQUFLLEVBQUU7SUFDaEM7O0lBRUE7RUFBQTtJQUFBO0lBQUEsT0FDQSw2QkFBb0I7TUFBQTtNQUNsQjtNQUNBLElBQUksQ0FBQ2YsaUJBQWlCLENBQUM5RCxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQ29ELEdBQUcsRUFBSztRQUN6REEsR0FBRyxDQUFDa0IsY0FBYyxFQUFFO1FBQ3BCLE1BQUksQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztRQUN4QixNQUFJLENBQUNWLGlCQUFpQixDQUFDLE1BQUksQ0FBQ2lCLGVBQWUsRUFBRSxDQUFDLENBQzdDakksSUFBSSxDQUFDO1VBQUEsT0FBTSxNQUFJLENBQUN5RyxLQUFLLEVBQUU7UUFBQSxFQUFDLFdBQ2pCLENBQUMsWUFBTTtVQUNiLE1BQUksQ0FBQ2lCLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxDQUFDO01BQ0osQ0FBQyxDQUFDO0lBQ0o7RUFBQztFQUFBO0FBQUEsRUFyRGdDeEIsNENBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNITDs7QUFFbkM7QUFDTyxJQUFNZ0MsY0FBYztFQUFBO0VBQUE7RUFDekIsd0JBQVkvQixhQUFhLEVBQUU7SUFBQTtJQUFBO0lBQ3pCLDBCQUFNQSxhQUFhO0lBQ25CLE1BQUtnQyxXQUFXLEdBQUcsTUFBSy9CLGFBQWEsQ0FBQ25FLGFBQWEsQ0FBQyxlQUFlLENBQUM7SUFDcEUsTUFBS21HLGFBQWEsR0FBRyxNQUFLaEMsYUFBYSxDQUFDbkUsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0lBQUM7RUFDM0U7RUFBQztJQUFBO0lBQUEsT0FFRCxjQUFLL0IsSUFBSSxFQUFFTyxJQUFJLEVBQUU7TUFDZixJQUFJLENBQUMwSCxXQUFXLENBQUMzRSxHQUFHLEdBQUcvQyxJQUFJO01BQzNCLElBQUksQ0FBQzBILFdBQVcsQ0FBQzFFLEdBQUcsR0FBR3ZELElBQUk7TUFDM0IsSUFBSSxDQUFDa0ksYUFBYSxDQUFDdEYsV0FBVyxHQUFHNUMsSUFBSTtNQUNyQztJQUNGO0VBQUM7RUFBQTtBQUFBLEVBWmlDZ0csNENBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHpDO0FBQ08sSUFBTW1DLE9BQU87RUFDbEIsdUJBQTBCQyxpQkFBaUIsRUFBRTtJQUFBLElBQS9CQyxRQUFRLFFBQVJBLFFBQVE7SUFBQTtJQUNwQixJQUFJLENBQUNDLFNBQVMsR0FBR0QsUUFBUTtJQUN6QixJQUFJLENBQUNFLFVBQVUsR0FBR3pHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDcUcsaUJBQWlCLENBQUM7RUFDN0Q7O0VBRUE7RUFBQTtJQUFBO0lBQUEsT0FDQSxpQkFBUUksT0FBTyxFQUFFO01BQ2YsSUFBSSxDQUFDRCxVQUFVLENBQUNFLE9BQU8sQ0FBQ0QsT0FBTyxDQUFDO0lBQ2xDOztJQUVBO0VBQUE7SUFBQTtJQUFBLE9BQ0Esd0JBQWVBLE9BQU8sRUFBRTtNQUN0QixJQUFJLENBQUNELFVBQVUsQ0FBQ0csTUFBTSxDQUFDRixPQUFPLENBQUM7SUFDakM7O0lBRUE7RUFBQTtJQUFBO0lBQUEsT0FDQSxxQkFBWUcsS0FBSyxFQUFFO01BQ2pCQSxLQUFLLENBQUNqRCxPQUFPLENBQUMsSUFBSSxDQUFDNEMsU0FBUyxDQUFDO0lBQy9CO0VBQUM7RUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCSDtBQUNPLElBQU1NLFFBQVE7RUFDbkIsd0JBQWtFO0lBQUEsSUFBcERDLFlBQVksUUFBWkEsWUFBWTtNQUFFQyxrQkFBa0IsUUFBbEJBLGtCQUFrQjtNQUFFQyxjQUFjLFFBQWRBLGNBQWM7SUFBQTtJQUM1RCxJQUFJLENBQUNDLFlBQVksR0FBR2xILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDOEcsWUFBWSxDQUFDO0lBQ3hELElBQUksQ0FBQ0ksa0JBQWtCLEdBQUduSCxRQUFRLENBQUNDLGFBQWEsQ0FBQytHLGtCQUFrQixDQUFDO0lBQ3BFLElBQUksQ0FBQ0ksY0FBYyxHQUFHcEgsUUFBUSxDQUFDQyxhQUFhLENBQUNnSCxjQUFjLENBQUM7RUFDOUQ7O0VBRUE7RUFBQTtJQUFBO0lBQUEsT0FDQSx1QkFBYztNQUNaLE9BQU87UUFDTC9JLElBQUksRUFBRSxJQUFJLENBQUNnSixZQUFZLENBQUNwRyxXQUFXO1FBQ25DM0MsVUFBVSxFQUFFLElBQUksQ0FBQ2dKLGtCQUFrQixDQUFDckc7TUFDdEMsQ0FBQztJQUNIOztJQUVBO0VBQUE7SUFBQTtJQUFBLE9BQ0EsbUJBQVVpRixJQUFJLEVBQUU7TUFDZCxJQUFJLENBQUNxQixjQUFjLENBQUM1RixHQUFHLEdBQUd1RSxJQUFJLENBQUNwSCxNQUFNO0lBQ3ZDOztJQUVBO0VBQUE7SUFBQTtJQUFBLE9BQ0EsNEJBQXFDO01BQUEsSUFBdkJULElBQUksU0FBSkEsSUFBSTtRQUFFTSxLQUFLLFNBQUxBLEtBQUs7UUFBRUcsTUFBTSxTQUFOQSxNQUFNO01BQy9CLElBQUksQ0FBQ3VJLFlBQVksQ0FBQ3BHLFdBQVcsR0FBRzVDLElBQUk7TUFDcEMsSUFBSSxDQUFDaUosa0JBQWtCLENBQUNyRyxXQUFXLEdBQUd0QyxLQUFLO01BQzNDLElBQUksQ0FBQzRJLGNBQWMsQ0FBQzVGLEdBQUcsR0FBRzdDLE1BQU07SUFDbEM7RUFBQztFQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJIO0FBQ08sSUFBTTBJLFVBQVUsR0FBR3JILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBQzNELElBQU1xSCxhQUFhLEdBQUd0SCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQztBQUNwRSxJQUFNc0gsZ0JBQWdCLEdBQUd2SCxRQUFRLENBQUNDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQzs7QUFFL0U7QUFDQSxJQUFNdUgsZ0JBQWdCLEdBQUd4SCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztBQUN0RSxJQUFNd0gsWUFBWSxHQUFHekgsUUFBUSxDQUFDQyxhQUFhLENBQUMsa0JBQWtCLENBQUM7QUFDL0QsSUFBTXlILGVBQWUsR0FBRzFILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG9CQUFvQixDQUFDO0FBQ3BFLElBQU0wSCxhQUFhLEdBQUczSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQzs7QUFFbEU7QUFDTyxJQUFNMkgsZ0JBQWdCLEdBQUdKLGdCQUFnQixDQUFDdkgsYUFBYSxDQUFDLGNBQWMsQ0FBQztBQUN2RSxJQUFNNEgsY0FBYyxHQUFHSCxlQUFlLENBQUN6SCxhQUFhLENBQUMsY0FBYyxDQUFDO0FBQ3BFLElBQU02SCxXQUFXLEdBQUdMLFlBQVksQ0FBQ3hILGFBQWEsQ0FBQyxjQUFjLENBQUM7O0FBR3JFO0FBQ08sSUFBTThILG9CQUFvQixHQUFHLGtCQUFrQjtBQUMvQyxJQUFNQyxrQkFBa0IsR0FBRyxtQkFBbUI7QUFDOUMsSUFBTUMsdUJBQXVCLEdBQUcsb0JBQW9CO0FBQ3BELElBQU1DLHFCQUFxQixHQUFHLG9CQUFvQjtBQUNsRCxJQUFNQyx3QkFBd0IsR0FBRyxxQkFBcUI7QUFDdEQsSUFBTUMsbUJBQW1CLEdBQUcsZ0JBQWdCO0FBQzVDLElBQU1DLHlCQUF5QixHQUFHLHNCQUFzQjtBQUN4RCxJQUFNQyxxQkFBcUIsR0FBRyxrQkFBa0I7QUFDaEQsSUFBTUMsc0JBQXNCLEdBQUcsaUJBQWlCOztBQUV2RDtBQUNPLElBQU1DLGdCQUFnQixHQUFHO0VBQzVCdkcsWUFBWSxFQUFFLGNBQWM7RUFDNUJFLGFBQWEsRUFBRSxlQUFlO0VBQzlCRSxvQkFBb0IsRUFBRSxjQUFjO0VBQ3BDRSxtQkFBbUIsRUFBRSxzQkFBc0I7RUFDM0NFLGVBQWUsRUFBRSw2QkFBNkI7RUFDOUNFLFVBQVUsRUFBRTtBQUNkLENBQUM7Ozs7OztVQ3BDSDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7QUFFK0Q7QUFDWjtBQUNOO0FBQ2tCO0FBQ0U7QUFDTTtBQUNsQjtBQUNWO0FBbUJiOztBQUc5QjtBQUNBLElBQU04RixHQUFHLEdBQUcsSUFBSXJMLG1EQUFHLENBQUM7RUFDbEJDLE9BQU8sRUFBRSw2Q0FBNkM7RUFDdERDLE9BQU8sRUFBRTtJQUNQb0wsYUFBYSxFQUFFLHNDQUFzQztJQUNyRCxjQUFjLEVBQUU7RUFDbEI7QUFDRixDQUFDLENBQUM7O0FBR0Y7QUFDQSxJQUFNQyxTQUFTLEdBQUcsSUFBSXpDLHlFQUFjLENBQUM4QixrRUFBa0IsQ0FBQzs7QUFHeEQ7QUFDQSxJQUFNWSx3QkFBd0IsR0FBRyxJQUFJaEgsdUVBQWEsQ0FBQzRHLGdFQUFnQixFQUFFWixnRUFBZ0IsQ0FBQztBQUN0RixJQUFNaUIsb0JBQW9CLEdBQUcsSUFBSWpILHVFQUFhLENBQUM0RyxnRUFBZ0IsRUFBRVYsMkRBQVcsQ0FBQztBQUM3RSxJQUFNZ0IsMEJBQTBCLEdBQUcsSUFBSWxILHVFQUFhLENBQUM0RyxnRUFBZ0IsRUFBRVgsOERBQWMsQ0FBQztBQUN0Rjs7QUFHQTtBQUNBLElBQU1rQixPQUFPLEdBQUcsSUFBSTFDLDJEQUFPLENBQUM7RUFDMUJFLFFBQVEsRUFBRSxrQkFBQ3lDLElBQUksRUFBSztJQUNsQkQsT0FBTyxDQUFDRSxjQUFjLENBQUNDLFVBQVUsQ0FBQ0YsSUFBSSxDQUFDLENBQUM7RUFDMUM7QUFDRixDQUFDLEVBQ0NULHNFQUFzQixDQUFDOztBQUd6QjtBQUNBLFNBQVNXLFVBQVUsQ0FBQ0MsTUFBTSxFQUFFO0VBQzFCLElBQU0vRCxJQUFJLEdBQUcsSUFBSXhHLHFEQUFJLENBQUN1SyxNQUFNLEVBQzFCckssTUFBTSxFQUNOLE9BQU8sRUFDUDtFQUNBLFVBQUNaLElBQUksRUFBRU8sSUFBSSxFQUFLO0lBQUVrSyxTQUFTLENBQUNTLElBQUksQ0FBQ2xMLElBQUksRUFBRU8sSUFBSSxDQUFDO0VBQUMsQ0FBQyxFQUM5QztFQUNBLFVBQUMrRSxFQUFFLEVBQUU0QixJQUFJLEVBQUs7SUFDWmlFLGVBQWUsQ0FBQ0QsSUFBSSxDQUFDNUYsRUFBRSxFQUFFNEIsSUFBSSxDQUFDO0VBQ2hDLENBQUMsRUFDRDtFQUNBLFVBQUM1QixFQUFFLEVBQUs7SUFDTixJQUFJNEIsSUFBSSxDQUFDcEUsT0FBTyxFQUFFLEVBQUU7TUFDbEJ5SCxHQUFHLENBQUNhLFVBQVUsQ0FBQzlGLEVBQUUsQ0FBQyxDQUNmeEYsSUFBSSxDQUFDLFVBQUNQLEdBQUcsRUFBSztRQUNiMkgsSUFBSSxDQUFDekQsUUFBUSxDQUFDbEUsR0FBRyxDQUFDOEIsS0FBSyxDQUFDO01BQzFCLENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQ2dLLEdBQUcsRUFBSztRQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDO01BQ2xCLENBQUMsQ0FBQztNQUFDO0lBQ1AsQ0FBQyxNQUFNO01BQ0xkLEdBQUcsQ0FBQ2lCLE9BQU8sQ0FBQ2xHLEVBQUUsQ0FBQyxDQUNaeEYsSUFBSSxDQUFDLFVBQUNQLEdBQUcsRUFBSztRQUNiMkgsSUFBSSxDQUFDekQsUUFBUSxDQUFDbEUsR0FBRyxDQUFDOEIsS0FBSyxDQUFDO01BQzFCLENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQ2dLLEdBQUcsRUFBSztRQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDO01BQ2xCLENBQUMsQ0FBQztNQUFDO0lBQ1A7RUFDRixDQUFDLENBQUM7RUFDSixPQUFPbkUsSUFBSSxDQUFDdUUsWUFBWSxFQUFFO0FBQzVCOztBQUdBO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLElBQUlqRSx1RUFBYSxDQUFDO0VBQ2xDWixnQkFBZ0IsRUFBRSxnQ0FBcUI7SUFBQSxJQUFsQjhFLEtBQUssUUFBTEEsS0FBSztNQUFFcEwsSUFBSSxRQUFKQSxJQUFJO0lBQzlCLE9BQU9nSyxHQUFHLENBQUNxQixPQUFPLENBQUNELEtBQUssRUFBRXBMLElBQUksQ0FBQyxDQUFDVCxJQUFJLENBQUMsVUFBQ1AsR0FBRyxFQUFLO01BQzVDO01BQ0FzTCxPQUFPLENBQUNnQixPQUFPLENBQUNiLFVBQVUsQ0FBQ3pMLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUMsQ0FBQyxTQUNNLENBQUMsVUFBQzhMLEdBQUcsRUFBSztNQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDO0lBQ2xCLENBQUMsQ0FBQztFQUNOO0FBQ0YsQ0FBQyxFQUFFeEIsb0VBQW9CLENBQUM7O0FBR3hCO0FBQ0EsSUFBTWlDLFFBQVEsR0FBRyxJQUFJbEQsNkRBQVEsQ0FDM0I7RUFDRUMsWUFBWSxFQUFFcUIsbUVBQW1CO0VBQ2pDcEIsa0JBQWtCLEVBQUVxQix5RUFBeUI7RUFDN0NwQixjQUFjLEVBQUVxQixxRUFBcUJBO0FBQ3ZDLENBQUMsQ0FBQzs7QUFHSjtBQUNBLElBQU0yQixZQUFZLEdBQUcsSUFBSXRFLHVFQUFhLENBQUM7RUFDckNaLGdCQUFnQixFQUFFLDBCQUFDZ0IsSUFBSSxFQUFLO0lBQzFCLE9BQU8wQyxHQUFHLENBQUN5QixXQUFXLENBQUNuRSxJQUFJLENBQUM3SCxJQUFJLEVBQUU2SCxJQUFJLENBQUM1SCxVQUFVLENBQUMsQ0FDL0NILElBQUksQ0FBQyxVQUFDUCxHQUFHLEVBQUs7TUFDYnVNLFFBQVEsQ0FBQ0csV0FBVyxDQUFDO1FBQ25Cak0sSUFBSSxFQUFFVCxHQUFHLENBQUNTLElBQUk7UUFDZE0sS0FBSyxFQUFFZixHQUFHLENBQUNlLEtBQUs7UUFDaEJHLE1BQU0sRUFBRWxCLEdBQUcsQ0FBQ2tCO01BQ2QsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFDNEssR0FBRyxFQUFLO01BQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUM7SUFDbEIsQ0FBQyxDQUFDO0VBQ047QUFDRixDQUFDLEVBQUVwQix3RUFBd0IsQ0FBQzs7QUFHNUI7QUFDQSxJQUFNaUMsV0FBVyxHQUFHLElBQUl6RSx1RUFBYSxDQUFDO0VBQ3BDWixnQkFBZ0IsRUFBRSwwQkFBQ2dCLElBQUksRUFBSztJQUMxQixPQUFPMEMsR0FBRyxDQUFDNEIsVUFBVSxDQUFDdEUsSUFBSSxDQUFDcEgsTUFBTSxDQUFDLENBQy9CWCxJQUFJLENBQUMsVUFBQ1AsR0FBRyxFQUFLO01BQ2J1TSxRQUFRLENBQUNNLFNBQVMsQ0FBQzdNLEdBQUcsQ0FBQztNQUN2QnFMLDBCQUEwQixDQUFDekYsV0FBVyxFQUFFO0lBQzFDLENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQ2tHLEdBQUcsRUFBSztNQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDO0lBQ2xCLENBQUMsQ0FBQztFQUNOO0FBQ0YsQ0FBQyxFQUFFdEIsdUVBQXVCLENBQUM7O0FBRzNCO0FBQ0EsSUFBTW9CLGVBQWUsR0FBRyxJQUFJdkUsK0VBQWlCLENBQUM7RUFDNUNDLGdCQUFnQixFQUFFLDBCQUFDckcsTUFBTSxFQUFFMEcsSUFBSSxFQUFLO0lBQ2xDLE9BQU9xRCxHQUFHLENBQUM4QixVQUFVLENBQUM3TCxNQUFNLENBQUMsQ0FBQ1YsSUFBSSxDQUFDLFlBQU07TUFDdkNvSCxJQUFJLENBQUMvRSxNQUFNLEVBQUU7SUFDZixDQUFDLENBQUMsU0FDTSxDQUFDLFVBQUNrSixHQUFHLEVBQUs7TUFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQztJQUNsQixDQUFDLENBQUM7RUFDTjtBQUNGLENBQUMsRUFBRXJCLHFFQUFxQixDQUFDO0FBR3pCLElBQUlwSixNQUFNLEdBQUcsRUFBRTs7QUFHZjtBQUNBO0FBQ0FsQixPQUFPLENBQUM0TSxHQUFHLENBQUMsQ0FBQy9CLEdBQUcsQ0FBQ2dDLFVBQVUsRUFBRSxFQUFFaEMsR0FBRyxDQUFDaUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUNuRDFNLElBQUksQ0FBQyxpQkFBNkI7RUFBQTtJQUEzQjJNLFdBQVc7SUFBRUMsUUFBUTtFQUMzQlosUUFBUSxDQUFDRyxXQUFXLENBQ2xCO0lBQ0VqTSxJQUFJLEVBQUV5TSxXQUFXLENBQUN6TSxJQUFJO0lBQ3RCTSxLQUFLLEVBQUVtTSxXQUFXLENBQUNuTSxLQUFLO0lBQ3hCRyxNQUFNLEVBQUVnTSxXQUFXLENBQUNoTTtFQUN0QixDQUFDLENBQUM7RUFDSkcsTUFBTSxHQUFHNkwsV0FBVyxDQUFDdEwsR0FBRztFQUN4QjBKLE9BQU8sQ0FBQzhCLFdBQVcsQ0FBQ0QsUUFBUSxDQUFDO0FBQy9CLENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQ3JCLEdBQUcsRUFBSztFQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDO0FBQ2xCLENBQUMsQ0FBQzs7QUFHSjtBQUNBbEMsMkVBQTJCLENBQUMsT0FBTyxFQUFFLFlBQVk7RUFDL0N1Qix3QkFBd0IsQ0FBQ2tDLFdBQVcsRUFBRTtFQUN0Q2xDLHdCQUF3QixDQUFDdEYsWUFBWSxFQUFFO0VBQ3ZDLElBQU15SCxZQUFZLEdBQUdmLFFBQVEsQ0FBQ2dCLFdBQVcsRUFBRTtFQUMzQ2YsWUFBWSxDQUFDZ0IsY0FBYyxDQUFDRixZQUFZLENBQUM7RUFDekNkLFlBQVksQ0FBQ2IsSUFBSSxFQUFFO0FBQ3JCLENBQUMsQ0FBQzs7QUFHRjtBQUNBOUIsOEVBQThCLENBQUMsT0FBTyxFQUFFLFlBQVk7RUFDbER1QixvQkFBb0IsQ0FBQ3hGLFdBQVcsRUFBRTtFQUNsQ3dGLG9CQUFvQixDQUFDaUMsV0FBVyxFQUFFO0VBQ2xDbEIsU0FBUyxDQUFDUixJQUFJLEVBQUU7QUFDbEIsQ0FBQyxDQUFDOztBQUdGO0FBQ0E3QixpRkFBaUMsQ0FBQyxPQUFPLEVBQUUsWUFBWTtFQUNyRHVCLDBCQUEwQixDQUFDekYsV0FBVyxFQUFFO0VBQ3hDeUYsMEJBQTBCLENBQUNnQyxXQUFXLEVBQUU7RUFDeENWLFdBQVcsQ0FBQ2hCLElBQUksRUFBRTtBQUNwQixDQUFDLENBQUM7O0FBR0Y7QUFDQWEsWUFBWSxDQUFDaUIsaUJBQWlCLEVBQUU7QUFDaEN0QixTQUFTLENBQUNzQixpQkFBaUIsRUFBRTtBQUM3QnZDLFNBQVMsQ0FBQ3VDLGlCQUFpQixFQUFFO0FBQzdCZCxXQUFXLENBQUNjLGlCQUFpQixFQUFFO0FBQy9CN0IsZUFBZSxDQUFDNkIsaUJBQWlCLEVBQUU7O0FBR25DO0FBQ0F0Qyx3QkFBd0IsQ0FBQ3VDLGdCQUFnQixFQUFFO0FBQzNDdEMsb0JBQW9CLENBQUNzQyxnQkFBZ0IsRUFBRTtBQUN2Q3JDLDBCQUEwQixDQUFDcUMsZ0JBQWdCLEVBQUUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvQXBpLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aERlbGV0aW9uLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3V0aWxzL2VsZW1lbnRzLmpzIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqINCa0L7QvdGB0YLRgNGD0LrRgtC+0YAgQVBJICovXG5leHBvcnQgY2xhc3MgQXBpIHtcbiAgY29uc3RydWN0b3IoeyBiYXNlVXJsLCBoZWFkZXJzIH0pIHtcbiAgICB0aGlzLl9iYXNlVXJsID0gYmFzZVVybDtcbiAgICB0aGlzLl9oZWFkZXJzID0gaGVhZGVycztcbiAgfVxuXG4gIC8qKiDQn9GA0L7QstC10YDQutCwINC+0YLQstC10YLQsCDRgSDRgdC10YDQstC10YDQsCAqL1xuICBfY2hlY2tSZXNwb25zZShyZXMpIHtcbiAgICBpZiAocmVzLm9rKSB7XG4gICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGDQntGI0LjQsdC60LA6ICR7cmVzLnN0YXR1c31gKTtcbiAgICB9XG4gIH1cblxuICAvKiog0JfQsNC/0YDQvtGB0LjRgtGMINC00LDQvdC90YvQtSDQviDRgdCy0L7RkdC8INC/0YDQvtGE0LjQu9C1ICovXG4gIGdldFByb2ZpbGUoKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L3VzZXJzL21lYCwge1xuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICB9KS50aGVuKHRoaXMuX2NoZWNrUmVzcG9uc2UpO1xuICB9XG5cbiAgLyoqINCX0LDQv9GA0L7RgdC40YLRjCDQstGB0LUg0LrQsNGA0YLQvtGH0LrQuCDRgSDRgdC10YDQstC10YDQsCAqL1xuICBnZXRJbml0aWFsQ2FyZHMoKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzYCwge1xuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICB9KS50aGVuKHRoaXMuX2NoZWNrUmVzcG9uc2UpO1xuICB9XG5cbiAgLyoqINCe0YLQv9GA0LDQstC40YLRjCDQuNC30LzQtdC90LXQvdC40Y8g0LjQvdGE0L7RgNC80LDRhtC40Lgg0L4g0YHQtdCx0LUgKi9cbiAgZWRpdFByb2ZpbGUobmFtZSwgcHJvZmVzc2lvbikge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfS91c2Vycy9tZWAsIHtcbiAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGFib3V0OiBwcm9mZXNzaW9uXG4gICAgICB9KVxuICAgIH0pLnRoZW4odGhpcy5fY2hlY2tSZXNwb25zZSk7XG4gIH1cblxuICAvKiog0JTQvtCx0LDQstC40YLRjCDRgdCy0L7RjiDQutCw0YDRgtC+0YfQutGDINC90LAg0YHQtdGA0LLQtdGAICovXG4gIGFkZENhcmQobmFtZSwgbGluaykge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfS9jYXJkc2AsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgbGluazogbGlua1xuICAgICAgfSlcbiAgICB9KS50aGVuKHRoaXMuX2NoZWNrUmVzcG9uc2UpO1xuICB9XG5cbiAgLyoqINCj0LTQsNC70LjRgtGMINC60LDRgNGC0L7Rh9C60YMg0YEg0YHQtdGA0LLQtdGA0LAgKi9cbiAgZGVsZXRlQ2FyZChjYXJkSWQpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vY2FyZHMvJHtjYXJkSWR9YCwge1xuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXG4gICAgfSkudGhlbih0aGlzLl9jaGVja1Jlc3BvbnNlKTtcbiAgfVxuXG4gIC8qKiDQo9C00LDQu9C40YLRjCDRgdCy0L7QuSDQu9Cw0LnQuiAqL1xuICBkZWxldGVMaWtlKGNhcmRJZCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfS9jYXJkcy8ke2NhcmRJZH0vbGlrZXNgLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICB9KS50aGVuKHRoaXMuX2NoZWNrUmVzcG9uc2UpO1xuICB9XG5cbiAgLyoqINCU0L7QsdCw0LLQuNGC0Ywg0YHQstC+0Lkg0LvQsNC50LogKi9cbiAgYWRkTGlrZShjYXJkSWQpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vY2FyZHMvJHtjYXJkSWR9L2xpa2VzYCwge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXG4gICAgfSkudGhlbih0aGlzLl9jaGVja1Jlc3BvbnNlKTtcbiAgfVxuXG4gIC8qKiDQntGC0L/RgNCw0LLQuNGC0Ywg0YHQstC+0Lkg0LDQstCw0YLQsNGAICovXG4gIGVkaXRBdmF0YXIoYXZhdGFyKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L3VzZXJzL21lL2F2YXRhcmAsIHtcbiAgICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGF2YXRhcjogYXZhdGFyXG4gICAgICB9KVxuICAgIH0pLnRoZW4odGhpcy5fY2hlY2tSZXNwb25zZSk7XG4gIH1cblxuICAvLyByZWZhY3Rvcjog0YHQvtC30LTQsNGC0Ywg0LzQtdGC0L7QtCBfcmVxdWVzdCgpLCDRg9C90LjQstC10YDRgdCw0LvRjNC90YvQuSDQvNC10YLQvtC0INC30LDQv9GA0L7RgdCwINGBINC/0YDQvtCy0LXRgNC60L7QuSDQvtGC0LLQtdGC0LBcbn1cblxuXG5cbiIsImV4cG9ydCBjbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IoY2FyZERhdGEsIHVzZXJJZCwgdGVtcGxhdGVTZWxlY3RvciwgaGFuZGxlQ2FyZENsaWNrLCBoYW5kbGVEZWxldGVQb3B1cCwgaGFuZGxlTGlrZUNsaWNrKSB7XG4gICAgdGhpcy5fbmFtZSA9IGNhcmREYXRhLm5hbWU7XG4gICAgdGhpcy5fbGluayA9IGNhcmREYXRhLmxpbms7XG4gICAgdGhpcy5faWQgPSBjYXJkRGF0YS5faWQ7XG4gICAgdGhpcy5fbGlrZXMgPSBjYXJkRGF0YS5saWtlcztcbiAgICB0aGlzLl9vd25lcklkID0gY2FyZERhdGEub3duZXIuX2lkO1xuICAgIHRoaXMuX3VzZXJJZCA9IHVzZXJJZDtcbiAgICB0aGlzLl90ZW1wbGF0ZVNlbGVjdG9yID0gdGVtcGxhdGVTZWxlY3RvcjtcbiAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sgPSBoYW5kbGVDYXJkQ2xpY2s7XG4gICAgdGhpcy5faGFuZGxlRGVsZXRlUG9wdXAgPSBoYW5kbGVEZWxldGVQb3B1cDtcbiAgICB0aGlzLl9oYW5kbGVMaWtlQ2xpY2sgPSBoYW5kbGVMaWtlQ2xpY2s7XG4gIH1cblxuICAvKiog0J/QvtC70YPRh9C40YLRjCDRgtC10LzQv9C70LXQudGCICovXG4gIF9nZXRUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fdGVtcGxhdGVTZWxlY3RvcilcbiAgICAgIC5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHNfX2NhcmRcIilcbiAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgcmV0dXJuIGNhcmRFbGVtZW50O1xuICB9XG5cbiAgLyoqINCj0LTQsNC70LjRgtGMINC60LDRgNGC0L7Rh9C60YMgKi9cbiAgX2hhbmRsZURlbGV0ZUNhcmQoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuXG4gIC8qKiDQm9Cw0LnQuiDQv9C+0YHRgtCw0LLQsNC70LXQvSAqL1xuICBfcHV0TGlrZSgpIHtcbiAgICB0aGlzLl9lbGVtZW50TGlrZS5jbGFzc0xpc3QuYWRkKFwiZWxlbWVudF9fbGlrZV9hY3RpdmVcIik7XG4gIH1cblxuICAvKiog0J3QtdGCINC70LDQudC60LAgKi9cbiAgX25vTGlrZSgpIHtcbiAgICB0aGlzLl9lbGVtZW50TGlrZS5jbGFzc0xpc3QucmVtb3ZlKFwiZWxlbWVudF9fbGlrZV9hY3RpdmVcIik7XG4gIH1cblxuICAvKiog0J/RgNC+0LLQtdGA0LrQsCwg0YHRgtC+0LjRgiDQu9C4INC90LDRiCDQu9Cw0LnQuiAqL1xuICBpc0xpa2VkKCkge1xuICAgIGNvbnN0IGxpa2VCb29sID0gdGhpcy5fbGlrZXMuZmluZCh1c2VyID0+IHVzZXIuX2lkID09IHRoaXMuX3VzZXJJZCk7XG4gICAgcmV0dXJuIGxpa2VCb29sO1xuICB9XG5cbiAgLyoqINCY0LfQvNC10L3QuNGC0Ywg0YHRh9GR0YLRh9C40Log0Lgg0YbQstC10YIg0L/RgNC4INC90LDQttCw0YLQuNC4INC90LAg0LvQsNC50LogKi9cbiAgc2V0TGlrZXMobmV3TGlrZXMpIHtcbiAgICB0aGlzLl9saWtlcyA9IG5ld0xpa2VzO1xuICAgIHRoaXMuX2xpa2VzQ291bnRlci50ZXh0Q29udGVudCA9IHRoaXMuX2xpa2VzLmxlbmd0aDtcbiAgICAvKiog0JzQtdC90Y/RgtGMINGG0LLQtdGCICovXG4gICAgaWYgKHRoaXMuaXNMaWtlZCgpKSB7XG4gICAgICB0aGlzLl9wdXRMaWtlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX25vTGlrZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiDQodC70YPRiNCw0YLQtdC70LggKi9cbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIC8qKiDQm9Cw0LnQuiAqL1xuICAgIHRoaXMuX2VsZW1lbnRMaWtlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLl9oYW5kbGVMaWtlQ2xpY2sodGhpcy5faWQpO1xuICAgIH0pXG4gICAgLyoqINCa0L7RgNC30LjQvdCwICovXG4gICAgdGhpcy5fZWxlbWVudERlbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlRGVsZXRlUG9wdXAodGhpcy5faWQsIHRoaXMuX2VsZW1lbnQpO1xuICAgIH0pXG4gICAgLyoqINCg0LDRgdC60YDRi9GC0Ywg0YTQvtGC0L4gKi9cbiAgICB0aGlzLl9lbGVtZW50UGhvdG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sodGhpcy5fbmFtZSwgdGhpcy5fbGluayk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqINCh0LPQtdC90LXRgNC40YDQvtCy0LDRgtGMINC60LDRgNGC0YMgKi9cbiAgZ2VuZXJhdGVDYXJkKCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xuICAgIHRoaXMuX2VsZW1lbnRQaG90byA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX3Bob3RvJyk7XG4gICAgdGhpcy5fZWxlbWVudExpa2UgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19saWtlJyk7XG4gICAgdGhpcy5fZWxlbWVudERlbGV0ZSA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX2RlbGV0ZScpO1xuICAgIHRoaXMuX2xpa2VzQ291bnRlciA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX2xpa2UtY291bnRlcicpO1xuICAgIHRoaXMuX2VsZW1lbnROYW1lID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudF9fbmFtZScpO1xuICAgIHRoaXMuX2VsZW1lbnRQaG90by5zcmMgPSB0aGlzLl9saW5rO1xuICAgIHRoaXMuX2VsZW1lbnRQaG90by5hbHQgPSB0aGlzLl9uYW1lO1xuICAgIHRoaXMuX2VsZW1lbnROYW1lLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuc2V0TGlrZXModGhpcy5fbGlrZXMpO1xuICAgIC8qKiDQo9C00LDQu9GP0YLRjCDQutC+0YDQt9C40L3QutGDINC00LvRjyDRh9GD0LbQuNGFINC60LDRgNGC0L7Rh9C10LogKi9cbiAgICBpZiAodGhpcy5fdXNlcklkICE9PSB0aGlzLl9vd25lcklkKSB7XG4gICAgICB0aGlzLl9lbGVtZW50RGVsZXRlLnJlbW92ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3Rvcihjb25maWcsIGZvcm1FbGVtZW50KSB7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuX2Zvcm1TZWxlY3RvciA9IGNvbmZpZy5mb3JtU2VsZWN0b3I7XG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IGNvbmZpZy5pbnB1dFNlbGVjdG9yO1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gY29uZmlnLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBjb25maWcuaW5hY3RpdmVCdXR0b25DbGFzcztcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBjb25maWcuaW5wdXRFcnJvckNsYXNzO1xuICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBjb25maWcuZXJyb3JDbGFzcztcbiAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGZvcm1FbGVtZW50O1xuICB9XG5cbiAgLyoqINCf0YDQvtCy0LXRgNC60LAg0L3QsCDQvdCw0LvQuNGH0LjQtSDQvdC10LLQtdGA0L3Ri9GFINC/0L7Qu9C10Lkg0LIg0YTQvtGA0LzQtSAqL1xuICBfaGFzSW52YWxpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnB1dExpc3Quc29tZShmdW5jdGlvbiAoaW5wdXRFbGVtZW50KSB7XG4gICAgICByZXR1cm4gaW5wdXRFbGVtZW50LmNoZWNrVmFsaWRpdHkoKSA9PT0gZmFsc2U7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqINCR0LvQvtC60LjRgNC+0LLQutCwINC60L3QvtC/0LrQuCAqL1xuICBibG9ja0J1dHRvbigpIHtcbiAgICB0aGlzLl9idXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICAvKiog0KDQsNC30LHQu9C+0LrQuNGA0L7QstC60LAg0LrQvdC+0L/QutC4ICovXG4gIHVubG9ja0J1dHRvbigpIHtcbiAgICB0aGlzLl9idXR0b25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gIH1cblxuICAvKiog0KDQtdCw0LrRhtC40Y8g0LrQvdC+0L/QutC4INC90LAg0L3QtdCy0LXRgNC90YvQtSDQv9C+0LvRjyAqL1xuICBfdG9nZ2xlQnV0dG9uU3RhdGUoKSB7XG4gICAgaWYgKHRoaXMuX2hhc0ludmFsaWRJbnB1dCgpKSB7XG4gICAgICB0aGlzLmJsb2NrQnV0dG9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudW5sb2NrQnV0dG9uKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqINCf0L7QutCw0LfQsNGC0Ywg0L7RiNC40LHQutGDINC00LvRjyDQvdC10LLQtdGA0L3QvtCz0L4g0LjQvdC/0YPRgtCwICovXG4gIF9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYCk7XG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKVxuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZTtcbiAgfTtcblxuICAvKiog0KHQutGA0YvRgtGMINC+0YjQuNCx0LrRgyDQtNC70Y8g0LLQtdGA0L3QvtCz0L4g0LjQvdC/0YPRgtCwICovXG4gIF9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYCk7XG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcbiAgfTtcblxuICAvKiog0JLQsNC70LjQtNCw0YbQuNGPINC/0L7Qu9GPICovXG4gIF9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KSB7XG4gICAgaWYgKGlucHV0RWxlbWVudC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICAvKiog0KHQsdGA0L7RgdC40YLRjCDRgdC+0L7QsdGJ0LXQvdC40Y8g0LLQsNC70LjQtNCw0YbQuNC4ICovXG4gIGNsZWFyRXJyb3JzKCkge1xuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XG4gICAgIH0pXG4gICAgfVxuXG4gIC8qKiDQn9GA0L7QstC10YDQutCwINCy0YHQtdGFINC40L3Qv9GD0YLQvtCyINGE0L7RgNC80Ysg0L3QsCDQstCw0LvQuNC00L3QvtGB0YLRjCAqL1xuICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20odGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKSk7XG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xuICAgICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KTtcbiAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuIiwiLyoqINCa0L7QvdGB0YLRgNGD0LrRgtC+0YAg0L7QsdGJ0LXQs9C+INC/0L7Qv9Cw0L/QsCAqL1xuZXhwb3J0IGNsYXNzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5faGFuZGxlRXNjQ2xvc2UgPSB0aGlzLl9oYW5kbGVFc2NDbG9zZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqINCX0LDQutGA0YvRgtC40LUg0L/RgNC4INC90LDQttCw0YLQuNC4INC90LAgRVNDICovXG4gIF9oYW5kbGVFc2NDbG9zZShldnQpIHtcbiAgICBpZiAoZXZ0LmtleSA9PSAnRXNjYXBlJykge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiDQntGC0LrRgNGL0YLQuNC1ICovXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3BvcHVwX29wZW5lZCcpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cblxuICAvKiog0JfQsNC60YDRi9GC0LjQtSAqL1xuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXBfb3BlbmVkJyk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcbiAgfVxuXG4gIC8qKiDQodC70YPRiNCw0YLQtdC70Ywg0LrRgNC10YHRgtC40LrQsCDQuCDQvdCw0LbQsNGC0LjRjyDQvdCwINC+0LLQtdGA0LvQtdC5LCDRgSDRgNC10LDQutGG0LjQtdC5INC30LDQutGA0YvRgtC40Y8gKi9cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldnQpID0+IHtcbiAgICAgIGlmIChldnQudGFyZ2V0ID09PSBldnQuY3VycmVudFRhcmdldCB8fCBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncG9wdXBfX2Nsb3NlJykpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiIsImltcG9ydCB7IFBvcHVwIH0gZnJvbSAnLi9Qb3B1cC5qcyc7XG5cbi8qKiDQmtC+0L3RgdGC0YDRg9C60YLQvtGAINC/0L7Qv9Cw0L/QsCDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRjyDRg9C00LDQu9C10L3QuNGPICovXG5leHBvcnQgY2xhc3MgUG9wdXBXaXRoRGVsZXRpb24gZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHsgaGFuZGxlRm9ybVN1Ym1pdCB9LCBwb3B1cFNlbGVjdG9yKSB7XG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCA9IGhhbmRsZUZvcm1TdWJtaXQ7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50Rm9ybSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19mb3JtXCIpO1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbiA9IHRoaXMuX3BvcHVwRWxlbWVudEZvcm0ucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fc2F2ZVwiKTtcbiAgICB0aGlzLl9zdWJtaXRCdXR0b25UZXh0ID0gdGhpcy5fc3VibWl0QnV0dG9uLnRleHRDb250ZW50O1xuICB9XG5cbiAgLyoqINCe0YLQutGA0YvRgtGMINC/0L7Qv9Cw0L8sINC/0YDQuNC90LjQvNCw0Y8g0LjQvdGE0L7RgNC80LDRhtC40Y4g0L4g0LrQsNGA0YLQvtGH0LrQtSAqL1xuICBvcGVuKGNhcmRJZCwgY2FyZCkge1xuICAgIHN1cGVyLm9wZW4oKTtcbiAgICB0aGlzLl9jYXJkSWQgPSBjYXJkSWQ7XG4gICAgdGhpcy5fY2FyZCA9IGNhcmQ7XG4gIH1cblxuICAgIC8qKiDQnNC10L3Rj9GC0Ywg0YLQtdC60YHRgiDQutC90L7Qv9C60Lgg0YHQsNCx0LzQuNGC0LAg0L/RgNC4INC/0YDQvtCz0YDRg9C30LrQtSDRg9C00LDQu9C10L3QuNGPICovXG4gICAgcmVuZGVyTG9hZGluZyhpc0xvYWRpbmcsIGxvYWRpbmdUZXh0ID0gJ9Cj0LTQsNC70LXQvdC40LUuLi4nKSB7XG4gICAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IGxvYWRpbmdUZXh0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gdGhpcy5fc3VibWl0QnV0dG9uVGV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgLyoqINCX0LDQutGA0YvRgtC40LUg0L/QvtC/0LDQv9CwICsg0KDQtdCw0LrRhtC40Y8g0L3QsCDRgdCw0LHQvNC40YIgKi9cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldnQpID0+IHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5yZW5kZXJMb2FkaW5nKHRydWUpO1xuICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCh0aGlzLl9jYXJkSWQsIHRoaXMuX2NhcmQpXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmNsb3NlKCkpXG4gICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIHRoaXMucmVuZGVyTG9hZGluZyhmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgeyBQb3B1cCB9IGZyb20gJy4vUG9wdXAuanMnO1xuXG4vKiog0JrQvtC90YHRgtGA0YPQutGC0L7RgCDQv9C+0L/QsNC/0LAg0LTQu9GPINC40LfQvNC10L3QtdC90LjRjyDQuNC90YTQvtGA0LzQsNGG0LjQuCDQviDQv9C+0LvRjNC30L7QstCw0YLQtdC70LUgKi9cbmV4cG9ydCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcih7IGhhbmRsZUZvcm1TdWJtaXQgfSwgcG9wdXBTZWxlY3Rvcikge1xuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQgPSBoYW5kbGVGb3JtU3VibWl0O1xuICAgIHRoaXMuX2lucHV0TGlzdCA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX2lucHV0Jyk7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50Rm9ybSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19mb3JtXCIpO1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbiA9IHRoaXMuX3BvcHVwRWxlbWVudEZvcm0ucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fc2F2ZVwiKTtcbiAgICB0aGlzLl9zdWJtaXRCdXR0b25UZXh0ID0gdGhpcy5fc3VibWl0QnV0dG9uLnRleHRDb250ZW50O1xuICB9XG5cbiAgLyoqINCh0L7Qt9C00LDRgtGMINC+0LHRitC10LrRgiDQuNC3INCy0LLQtdC00ZHQvdC90YvRhSDQtNCw0L3QvdGL0YUgKi9cbiAgX2dldElucHV0VmFsdWVzKCkge1xuICAgIGNvbnN0IGlucHV0cyA9IHt9O1xuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgaW5wdXRzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGlucHV0cztcbiAgfTtcblxuICAvKiog0JzQtdC90Y/RgtGMINGC0LXQutGB0YIg0LrQvdC+0L/QutC4INGB0LDQsdC80LjRgtCwINC/0YDQuCDQt9Cw0LPRgNGD0LfQutC1ICovXG4gIHJlbmRlckxvYWRpbmcoaXNMb2FkaW5nLCBsb2FkaW5nVGV4dCA9ICfQodC+0YXRgNCw0L3QtdC90LjQtS4uLicpIHtcbiAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBsb2FkaW5nVGV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gdGhpcy5fc3VibWl0QnV0dG9uVGV4dDtcbiAgICB9XG4gIH1cblxuICAvKiog0J3QsNC30L3QsNGH0LjRgtGMIHZhbHVlINC00LvRjyDQuNC90L/Rg9GC0L7Qsiwg0LjQtyDQvtCx0YrQtdC60YLQsCAqL1xuICBzZXRJbnB1dFZhbHVlcyhkYXRhKSB7XG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBpbnB1dC52YWx1ZSA9IGRhdGFbaW5wdXQubmFtZV07XG4gICAgfSlcbiAgfVxuXG4gIC8qKiDQl9Cw0LrRgNGL0YLRjCDQv9C+0L/QsNC/INGB0L4g0YHQsdGA0L7RgdC+0Lwg0L/QvtC70LXQuSAqL1xuICBjbG9zZSgpIHtcbiAgICBzdXBlci5jbG9zZSgpO1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudEZvcm0ucmVzZXQoKTtcbiAgfVxuXG4gIC8qKiDQl9Cw0LrRgNGL0YLQuNC1INC/0L7Qv9Cw0L/QsCArINCg0LXQsNC60YbQuNGPINC90LAg0YHQsNCx0LzQuNGCOiDRgdCx0YDQvtGBINGB0YLQsNC90LTQsNGA0YLQvdC+0LPQviDRgdC+0LHRi9GC0LjRjywg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LUg0LTQsNC90L3Ri9GFINGE0L7RgNC80Ysg0Lgg0LfQsNC60YDRi9GC0LjQtSAqL1xuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2dCkgPT4ge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnJlbmRlckxvYWRpbmcodHJ1ZSk7XG4gICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0KHRoaXMuX2dldElucHV0VmFsdWVzKCkpXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmNsb3NlKCkpXG4gICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIHRoaXMucmVuZGVyTG9hZGluZyhmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUG9wdXAgfSBmcm9tICcuL1BvcHVwLmpzJztcblxuLyoqINCa0L7QvdGB0YLRgNGD0LrRgtC+0YAg0L/QvtC/0LDQv9CwINGBINGD0LLQtdC70LjRh9C10L3QvdGL0Lwg0YTQvtGC0L4gKi9cbmV4cG9ydCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuX3Bob3RvSW1hZ2UgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19waG90bycpO1xuICAgIHRoaXMuX3Bob3RvQ2FwdGlvbiA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2NhcHRpb24nKTtcbiAgfVxuXG4gIG9wZW4obmFtZSwgbGluaykge1xuICAgIHRoaXMuX3Bob3RvSW1hZ2Uuc3JjID0gbGluaztcbiAgICB0aGlzLl9waG90b0ltYWdlLmFsdCA9IG5hbWU7XG4gICAgdGhpcy5fcGhvdG9DYXB0aW9uLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBzdXBlci5vcGVuKCk7XG4gIH1cbn1cbiIsIi8qKiDQmtC+0L3RgdGC0YDRg9C60YLQvtGAINGB0LXQutGG0LjQuCDQtNC70Y8g0LrQsNGA0YLQvtGH0LXQuiAqL1xuZXhwb3J0IGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcih7IHJlbmRlcmVyIH0sIGNvbnRhaW5lclNlbGVjdG9yKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcbiAgfVxuXG4gIC8qKiDQlNC+0LHQsNCy0LjRgtGMINGN0LvQtdC80LXQvdGCINC90LDRh9Cw0LvQviDQutC+0L3RgtC10LnQvdC10YDQsCAqL1xuICBhZGRJdGVtKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcbiAgfVxuXG4gIC8qKiDQlNC+0LHQsNCy0LjRgtGMINGN0LvQtdC80LXQvdGCINCyINC60L7QvdC10YYg0LrQvtC90YLQtdC50L3QtdGA0LAgKNC00LvRjyDQuNGB0YXQvtC00L3Ri9GFINC60LDRgNGC0L7Rh9C10LopICovXG4gIGFkZEluaXRpYWxJdGVtKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9jb250YWluZXIuYXBwZW5kKGVsZW1lbnQpO1xuICB9XG5cbiAgLyoqICDQptC40LrQuyDRgSDQv9C10YDQtdCx0L7RgNC+0Lwg0Y3QtdC70LXQvNC10L3RgtC+0LIg0Lgg0YHRgNCw0LHQsNGC0YvQstCw0L3QuNC10LwgX3JlbmRlcmVyINC90LAg0LrQsNC20LTQvtC8Ki9cbiAgcmVuZGVySXRlbXMoaXRlbXMpIHtcbiAgICBpdGVtcy5mb3JFYWNoKHRoaXMuX3JlbmRlcmVyKTtcbiAgfVxufVxuIiwiLyoqINCa0L7QvdGB0YLRgNGD0LrRgtC+0YAg0L/RgNC+0YTQuNC70Y8gKi9cbmV4cG9ydCBjbGFzcyBVc2VySW5mbyB7XG4gIGNvbnN0cnVjdG9yKHsgbmFtZVNlbGVjdG9yLCBwcm9mZXNzaW9uU2VsZWN0b3IsIGF2YXRhclNlbGVjdG9yIH0pIHtcbiAgICB0aGlzLl9wcm9maWxlTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmFtZVNlbGVjdG9yKTtcbiAgICB0aGlzLl9wcm9maWxlUHJvZmVzc2lvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJvZmVzc2lvblNlbGVjdG9yKTtcbiAgICB0aGlzLl9wcm9maWxlQXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhdmF0YXJTZWxlY3Rvcik7XG4gIH1cblxuICAvKiog0J/QvtC70YPRh9C40YLRjCDRgtC10LrRg9GJ0LjQtSDQtNCw0L3QvdGL0LUgKi9cbiAgZ2V0VXNlckluZm8oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMuX3Byb2ZpbGVOYW1lLnRleHRDb250ZW50LFxuICAgICAgcHJvZmVzc2lvbjogdGhpcy5fcHJvZmlsZVByb2Zlc3Npb24udGV4dENvbnRlbnQsXG4gICAgfVxuICB9XG5cbiAgLyoqINCY0LfQvNC10L3QuNGC0Ywg0LDQstCw0YLQsNGAICovXG4gIHNldEF2YXRhcihkYXRhKSB7XG4gICAgdGhpcy5fcHJvZmlsZUF2YXRhci5zcmMgPSBkYXRhLmF2YXRhcjtcbiAgfVxuXG4gIC8qKiDQo9GB0YLQsNC90L7QstC40YLRjCDQtNCw0L3QvdGL0LUgKi9cbiAgc2V0VXNlckluZm8oeyBuYW1lLCBhYm91dCwgYXZhdGFyIH0pIHtcbiAgICB0aGlzLl9wcm9maWxlTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgdGhpcy5fcHJvZmlsZVByb2Zlc3Npb24udGV4dENvbnRlbnQgPSBhYm91dDtcbiAgICB0aGlzLl9wcm9maWxlQXZhdGFyLnNyYyA9IGF2YXRhcjtcbiAgfVxufVxuIiwiLyoqINCa0L3QvtC/0LrQuCAqL1xuZXhwb3J0IGNvbnN0IGJ1dHRvbkVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXRcIik7XG5leHBvcnQgY29uc3QgYnV0dG9uQWRkQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYnV0dG9uLWFkZFwiKTtcbmV4cG9ydCBjb25zdCBidXR0b25BdmF0YXJFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hdmF0YXItZWRpdFwiKTtcblxuLyoqINCf0L7Qv9Cw0L/RiyAqL1xuY29uc3QgcG9wVXBFZGl0UHJvZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfdHlwZV9wcm9maWxlXCIpO1xuY29uc3QgcG9wVXBBZGRDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF90eXBlX2NhcmRcIik7XG5jb25zdCBwb3BVcEVkaXRBdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX3R5cGVfYXZhdGFyXCIpO1xuY29uc3QgcG9wVXBEZWxldGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfdHlwZV9kZWxldGVcIik7XG5cbi8qKiDQpNC+0YDQvNGLICovXG5leHBvcnQgY29uc3QgZm9ybVByb2ZpbGVFZGl0MiA9IHBvcFVwRWRpdFByb2ZpbGUucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybVwiKTtcbmV4cG9ydCBjb25zdCBmb3JtQXZhdGFyRWRpdCA9IHBvcFVwRWRpdEF2YXRhci5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19mb3JtXCIpO1xuZXhwb3J0IGNvbnN0IGZvcm1BZGRDYXJkID0gcG9wVXBBZGRDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm1cIik7XG5cblxuLyoqINCh0LXQu9C10LrRgtC+0YDRiyAqL1xuZXhwb3J0IGNvbnN0IHBvcFVwQWRkQ2FyZFNlbGVjdG9yID0gJy5wb3B1cF90eXBlX2NhcmQnO1xuZXhwb3J0IGNvbnN0IHBvcFVwUGhvdG9TZWxlY3RvciA9IFwiLnBvcHVwX3R5cGVfcGhvdG9cIjtcbmV4cG9ydCBjb25zdCBwb3BVcEVkaXRBdmF0YXJTZWxlY3RvciA9ICcucG9wdXBfdHlwZV9hdmF0YXInO1xuZXhwb3J0IGNvbnN0IHBvcFVwRGVsZXRpb25TZWxlY3RvciA9ICcucG9wdXBfdHlwZV9kZWxldGUnO1xuZXhwb3J0IGNvbnN0IHBvcFVwRWRpdFByb2ZpbGVTZWxlY3RvciA9ICcucG9wdXBfdHlwZV9wcm9maWxlJztcbmV4cG9ydCBjb25zdCBwcm9maWxlTmFtZVNlbGVjdG9yID0gXCIucHJvZmlsZV9fbmFtZVwiO1xuZXhwb3J0IGNvbnN0IHByb2ZpbGVQcm9mZXNzaW9uU2VsZWN0b3IgPSBcIi5wcm9maWxlX19wcm9mZXNzaW9uXCI7XG5leHBvcnQgY29uc3QgcHJvZmlsZUF2YXRhclNlbGVjdG9yID0gXCIucHJvZmlsZV9fYXZhdGFyXCI7XG5leHBvcnQgY29uc3QgY2FyZHNDb250YWluZXJTZWxlY3RvciA9ICcuZWxlbWVudHNfX2xpc3QnO1xuXG4vKiog0JrQvtC90YTQuNCzINGBINGB0LXQu9C10LrRgtC+0YDQsNC80Lgg0LTQu9GPINCy0LDQu9C40LTQsNGG0LjQuCovXG5leHBvcnQgY29uc3QgY29uZmlnVmFsaWRhdGlvbiA9IHtcbiAgICBmb3JtU2VsZWN0b3I6ICcucG9wdXBfX2Zvcm0nLFxuICAgIGlucHV0U2VsZWN0b3I6ICcucG9wdXBfX2lucHV0JyxcbiAgICBzdWJtaXRCdXR0b25TZWxlY3RvcjogJy5wb3B1cF9fc2F2ZScsXG4gICAgaW5hY3RpdmVCdXR0b25DbGFzczogJ3BvcHVwX19zYXZlX2Rpc2FibGVkJyxcbiAgICBpbnB1dEVycm9yQ2xhc3M6ICdwb3B1cF9faW5wdXRfdHlwZV9pbmNvcnJlY3QnLFxuICAgIGVycm9yQ2xhc3M6ICdwb3B1cF9fZXJyb3JfdmlzaWJsZSdcbiAgfVxuXG5cblxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbmltcG9ydCB7IEZvcm1WYWxpZGF0b3IgfSBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMnO1xuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvU2VjdGlvbi5qcyc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkLmpzJztcbmltcG9ydCB7IFBvcHVwV2l0aEZvcm0gfSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMnO1xuaW1wb3J0IHsgUG9wdXBXaXRoSW1hZ2UgfSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzJztcbmltcG9ydCB7IFBvcHVwV2l0aERlbGV0aW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhEZWxldGlvbi5qcyc7XG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gJy4uL2NvbXBvbmVudHMvVXNlckluZm8uanMnO1xuaW1wb3J0IHsgQXBpIH0gZnJvbSAnLi4vY29tcG9uZW50cy9BcGkuanMnO1xuXG5pbXBvcnQge1xuICBidXR0b25FZGl0LFxuICBidXR0b25BZGRDYXJkLFxuICBidXR0b25BdmF0YXJFZGl0LFxuICBmb3JtQXZhdGFyRWRpdCxcbiAgZm9ybUFkZENhcmQsXG4gIGZvcm1Qcm9maWxlRWRpdDIsXG4gIGNhcmRzQ29udGFpbmVyU2VsZWN0b3IsXG4gIHBvcFVwRWRpdFByb2ZpbGVTZWxlY3RvcixcbiAgcG9wVXBBZGRDYXJkU2VsZWN0b3IsXG4gIHBvcFVwUGhvdG9TZWxlY3RvcixcbiAgcG9wVXBFZGl0QXZhdGFyU2VsZWN0b3IsXG4gIHByb2ZpbGVOYW1lU2VsZWN0b3IsXG4gIHByb2ZpbGVQcm9mZXNzaW9uU2VsZWN0b3IsXG4gIHByb2ZpbGVBdmF0YXJTZWxlY3RvcixcbiAgcG9wVXBEZWxldGlvblNlbGVjdG9yLFxuICBjb25maWdWYWxpZGF0aW9uLFxufSBmcm9tICcuLi91dGlscy9lbGVtZW50cy5qcyc7XG5cblxuLyoqINCh0L7Qt9C00LDQvdC40LUg0Y3QutC30LXQvNC/0LvRj9GA0LAgQVBJICovXG5jb25zdCBhcGkgPSBuZXcgQXBpKHtcbiAgYmFzZVVybDogJ2h0dHBzOi8vbWVzdG8ubm9tb3JlcGFydGllcy5jby92MS9jb2hvcnQtNTUnLFxuICBoZWFkZXJzOiB7XG4gICAgYXV0aG9yaXphdGlvbjogJ2E0YzUxYWNiLTQ2ZjAtNGY1Mi1iNWUyLWY3Y2I1MTEwYWRhYScsXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICB9XG59KTtcblxuXG4vKiog0KHQvtC30LTQsNGC0Ywg0L/QvtC/0LDQvyDRgSDQutCw0YDRgtC40L3QutC+0LkgKi9cbmNvbnN0IHBvcHVwWm9vbSA9IG5ldyBQb3B1cFdpdGhJbWFnZShwb3BVcFBob3RvU2VsZWN0b3IpO1xuXG5cbi8qKiDQodC+0LfQtNCw0YLRjCDQstCw0LvQuNC00LDRgtC+0YDRiyDRhNC+0YDQvCAqL1xuY29uc3QgZm9ybVByb2ZpbGVFZGl0VmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoY29uZmlnVmFsaWRhdGlvbiwgZm9ybVByb2ZpbGVFZGl0Mik7XG5jb25zdCBmb3JtQWRkQ2FyZFZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKGNvbmZpZ1ZhbGlkYXRpb24sIGZvcm1BZGRDYXJkKTtcbmNvbnN0IGZvcm1FZGl0aW5nQXZhdGFyVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoY29uZmlnVmFsaWRhdGlvbiwgZm9ybUF2YXRhckVkaXQpO1xuLy8gcmVmYWN0b3I6INGB0L7Qt9C00LDRgtGMINC+0LTQuNC9INCx0YrQtdC60YIg0YHQviDQstGB0LXQvNC4INCy0LDQu9C40LTQsNGC0L7RgNCw0LzQuFxuXG5cbi8qKiDQodC+0LfQtNCw0YLRjCDRjdC60LfQtdC80L/Qu9GP0YAg0LPQu9Cw0LLQvdC+0Lkg0YHQtdC60YbQuNC4ICovXG5jb25zdCBzZWN0aW9uID0gbmV3IFNlY3Rpb24oe1xuICByZW5kZXJlcjogKGl0ZW0pID0+IHtcbiAgICBzZWN0aW9uLmFkZEluaXRpYWxJdGVtKGNyZWF0ZUNhcmQoaXRlbSkpO1xuICB9XG59LFxuICBjYXJkc0NvbnRhaW5lclNlbGVjdG9yKTtcblxuXG4vKiog0KTRg9C90LrRhtC40Y8g0LPQtdC90LXRgNCw0YbQuNC4INC90L7QstC+0Lkg0LrQsNGA0YLQvtGH0LrQuCAqL1xuZnVuY3Rpb24gY3JlYXRlQ2FyZChvYmplY3QpIHtcbiAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKG9iamVjdCxcbiAgICB1c2VySWQsXG4gICAgJyNjYXJkJyxcbiAgICAvKiog0KTRg9C90LrRhtC40Y8t0YDQtdCw0LrRhtC40Y8g0L3QsNC20LDRgtC40Y8g0L3QsCDRhNC+0YLQviAqL1xuICAgIChuYW1lLCBsaW5rKSA9PiB7IHBvcHVwWm9vbS5vcGVuKG5hbWUsIGxpbmspIH0sXG4gICAgLyoqINCk0YPQvdC60YbQuNGPLdGA0LXQsNC60YbQuNGPINC90LDQttCw0YLQuNGPINC90LAg0LrQvtGA0LfQuNC90YMgKi9cbiAgICAoaWQsIGNhcmQpID0+IHtcbiAgICAgIHBvcHVwRGVsZXRlQ2FyZC5vcGVuKGlkLCBjYXJkKTtcbiAgICB9LFxuICAgIC8qKiDQpNGD0L3QutGG0LjRjy3RgNC10LDQutGG0LjRjyDQvdCw0LbQsNGC0LjRjyDQvdCwINC70LDQudC6ICovXG4gICAgKGlkKSA9PiB7XG4gICAgICBpZiAoY2FyZC5pc0xpa2VkKCkpIHtcbiAgICAgICAgYXBpLmRlbGV0ZUxpa2UoaWQpXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY2FyZC5zZXRMaWtlcyhyZXMubGlrZXMpXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICB9KTs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcGkuYWRkTGlrZShpZClcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBjYXJkLnNldExpa2VzKHJlcy5saWtlcylcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIH0pOztcbiAgICAgIH1cbiAgICB9KVxuICByZXR1cm4gY2FyZC5nZW5lcmF0ZUNhcmQoKTtcbn1cblxuXG4vKiog0K3QutC30LXQvNC/0LvRj9GAINC/0L7Qv9Cw0L/QsCDQtNC70Y8g0LTQvtCx0LDQstC70LXQvdC40Y8g0L3QvtCy0L7Qs9C+INGE0L7RgtC+ICjRgSDRgNC10LDQutGG0LjQtdC5INC90LAg0YHQsNC80LHQuNGCKSAqL1xuY29uc3QgcG9wdXBDYXJkID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xuICBoYW5kbGVGb3JtU3VibWl0OiAoeyBwbGFjZSwgbGluayB9KSA9PiB7XG4gICAgcmV0dXJuIGFwaS5hZGRDYXJkKHBsYWNlLCBsaW5rKS50aGVuKChyZXMpID0+IHtcbiAgICAgIC8qKiDQodC+0LfQtNCw0L3QuNC1INC60LDRgNGC0L7Rh9C60Lgg0LjQtyDQv9C+0LvRg9GH0LXQvdC90YvRhSDQtNCw0L3QvdGL0YUg0YEg0YHQtdGA0LLQtdGA0LAgKi9cbiAgICAgIHNlY3Rpb24uYWRkSXRlbShjcmVhdGVDYXJkKHJlcykpXG4gICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfVxufSwgcG9wVXBBZGRDYXJkU2VsZWN0b3IpO1xuXG5cbi8qKiDQrdC60LfQtdC80L/Qu9GP0YAg0L7RgtC+0LHRgNCw0LbQsNC10LzQvtCz0L4g0LDQutC60LDRg9C90YLQsCAqL1xuY29uc3QgdXNlckluZm8gPSBuZXcgVXNlckluZm8oXG4gIHtcbiAgICBuYW1lU2VsZWN0b3I6IHByb2ZpbGVOYW1lU2VsZWN0b3IsXG4gICAgcHJvZmVzc2lvblNlbGVjdG9yOiBwcm9maWxlUHJvZmVzc2lvblNlbGVjdG9yLFxuICAgIGF2YXRhclNlbGVjdG9yOiBwcm9maWxlQXZhdGFyU2VsZWN0b3JcbiAgfSk7XG5cblxuLyoqINCt0LrQt9C10LzQv9C70Y/RgCDQv9C+0L/QsNC/0LAg0LTQu9GPINGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y8g0LjQvNC10L3QuCDQuCDQvtC/0LjRgdCw0L3QuNGPICjRgSDRgNC10LDQutGG0LjQtdC5INC90LAg0YHQsNC80LHQuNGCKSAqL1xuY29uc3QgcG9wdXBQcm9maWxlID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xuICBoYW5kbGVGb3JtU3VibWl0OiAoZGF0YSkgPT4ge1xuICAgIHJldHVybiBhcGkuZWRpdFByb2ZpbGUoZGF0YS5uYW1lLCBkYXRhLnByb2Zlc3Npb24pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKHtcbiAgICAgICAgICBuYW1lOiByZXMubmFtZSxcbiAgICAgICAgICBhYm91dDogcmVzLmFib3V0LFxuICAgICAgICAgIGF2YXRhcjogcmVzLmF2YXRhcixcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cbn0sIHBvcFVwRWRpdFByb2ZpbGVTZWxlY3Rvcik7XG5cblxuLyoqINCt0LrQt9C10LzQv9C70Y/RgCDQv9C+0L/QsNC/0LAg0YEg0LjQt9C80LXQvdC10L3QuNC10Lwg0LDQstCw0YLQsNGA0LAgICovXG5jb25zdCBwb3B1cEF2YXRhciA9IG5ldyBQb3B1cFdpdGhGb3JtKHtcbiAgaGFuZGxlRm9ybVN1Ym1pdDogKGRhdGEpID0+IHtcbiAgICByZXR1cm4gYXBpLmVkaXRBdmF0YXIoZGF0YS5hdmF0YXIpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHVzZXJJbmZvLnNldEF2YXRhcihyZXMpO1xuICAgICAgICBmb3JtRWRpdGluZ0F2YXRhclZhbGlkYXRvci5ibG9ja0J1dHRvbigpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfVxufSwgcG9wVXBFZGl0QXZhdGFyU2VsZWN0b3IpO1xuXG5cbi8qKiDQrdC60LfQtdC80L/Qu9GP0YAg0L/QvtC/0LDQv9CwINC00LvRjyDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRjyDRg9C00LDQu9C10L3QuNGPICAqL1xuY29uc3QgcG9wdXBEZWxldGVDYXJkID0gbmV3IFBvcHVwV2l0aERlbGV0aW9uKHtcbiAgaGFuZGxlRm9ybVN1Ym1pdDogKGNhcmRJZCwgY2FyZCkgPT4ge1xuICAgIHJldHVybiBhcGkuZGVsZXRlQ2FyZChjYXJkSWQpLnRoZW4oKCkgPT4ge1xuICAgICAgY2FyZC5yZW1vdmUoKTtcbiAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG59LCBwb3BVcERlbGV0aW9uU2VsZWN0b3IpO1xuXG5cbmxldCB1c2VySWQgPSAnJztcblxuXG4vKiog0JLRi9Cz0YDRg9C30LjRgtGMINC40LzRjywg0L7Qv9C40YHQsNC90LjQtSDQuCDQsNCy0LDRgtCw0YAg0LjQtyDRgdC10YDQstC10YDQsC5cbtCf0L7QvtGH0LXRgNGR0LTQvdC+INC+0YLQvtCx0YDQsNC30LjRgtGMINC90LAg0YHRgtGA0LDQvdC40YbQtSDQstGB0LUg0LrQsNGA0YLQvtGH0LrQuCDQuNC3INGB0LXRgNCy0LXRgNCwICovXG5Qcm9taXNlLmFsbChbYXBpLmdldFByb2ZpbGUoKSwgYXBpLmdldEluaXRpYWxDYXJkcygpXSlcbiAgLnRoZW4oKFtwcm9maWxlSW5mbywgY2FyZExpc3RdKSA9PiB7XG4gICAgdXNlckluZm8uc2V0VXNlckluZm8oXG4gICAgICB7XG4gICAgICAgIG5hbWU6IHByb2ZpbGVJbmZvLm5hbWUsXG4gICAgICAgIGFib3V0OiBwcm9maWxlSW5mby5hYm91dCxcbiAgICAgICAgYXZhdGFyOiBwcm9maWxlSW5mby5hdmF0YXIsXG4gICAgICB9KTtcbiAgICB1c2VySWQgPSBwcm9maWxlSW5mby5faWQ7XG4gICAgc2VjdGlvbi5yZW5kZXJJdGVtcyhjYXJkTGlzdCk7XG4gIH0pXG4gIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfSk7XG5cblxuLyoqINCd0LDQttCw0YLQuNC1INC90LAg0LrQsNGA0LDQvdC00LDRiCDQtNC70Y8g0LjQt9C80LXQvdC10L3QuNGPINC/0YDQvtGE0LjQu9GPICovXG5idXR0b25FZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGZvcm1Qcm9maWxlRWRpdFZhbGlkYXRvci5jbGVhckVycm9ycygpO1xuICBmb3JtUHJvZmlsZUVkaXRWYWxpZGF0b3IudW5sb2NrQnV0dG9uKCk7XG4gIGNvbnN0IHVzZXJJbmZvRGF0YSA9IHVzZXJJbmZvLmdldFVzZXJJbmZvKCk7XG4gIHBvcHVwUHJvZmlsZS5zZXRJbnB1dFZhbHVlcyh1c2VySW5mb0RhdGEpO1xuICBwb3B1cFByb2ZpbGUub3BlbigpO1xufSk7XG5cblxuLyoqINCd0LDQttCw0YLQuNC1INC90LAgWytdINC00LvRjyDQtNC+0LHQsNCy0LvQtdC90LjRjyDQutCw0YDRgtC+0YfQutC4ICovXG5idXR0b25BZGRDYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGZvcm1BZGRDYXJkVmFsaWRhdG9yLmJsb2NrQnV0dG9uKClcbiAgZm9ybUFkZENhcmRWYWxpZGF0b3IuY2xlYXJFcnJvcnMoKTtcbiAgcG9wdXBDYXJkLm9wZW4oKTtcbn0pO1xuXG5cbi8qKiDQndCw0LbQsNGC0LjQtSDQvdCwINCw0LLQsNGC0LDRgCDQtNC70Y8g0LjQt9C80LXQvdC10L3QuNGPINGE0L7RgtC+ICovXG5idXR0b25BdmF0YXJFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGZvcm1FZGl0aW5nQXZhdGFyVmFsaWRhdG9yLmJsb2NrQnV0dG9uKCk7XG4gIGZvcm1FZGl0aW5nQXZhdGFyVmFsaWRhdG9yLmNsZWFyRXJyb3JzKCk7XG4gIHBvcHVwQXZhdGFyLm9wZW4oKTtcbn0pO1xuXG5cbi8qKiDQkNC60YLQuNCy0LjRgNC+0LLQsNGC0Ywg0YHQu9GD0YjQsNGC0LXQu9C4INGDINC/0L7Qv9Cw0L/QvtCyKi9cbnBvcHVwUHJvZmlsZS5zZXRFdmVudExpc3RlbmVycygpO1xucG9wdXBDYXJkLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5wb3B1cFpvb20uc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbnBvcHVwQXZhdGFyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5wb3B1cERlbGV0ZUNhcmQuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuXG4vKiog0J/QvtC00LrQu9GO0YfQtdC90LjQtSDQv9GA0L7QstC10YDQutC4INCy0LDQu9C40LTQvdC+0YHRgtC4INGE0L7RgNC8ICovXG5mb3JtUHJvZmlsZUVkaXRWYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuZm9ybUFkZENhcmRWYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuZm9ybUVkaXRpbmdBdmF0YXJWYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuXG4iXSwibmFtZXMiOlsiQXBpIiwiYmFzZVVybCIsImhlYWRlcnMiLCJfYmFzZVVybCIsIl9oZWFkZXJzIiwicmVzIiwib2siLCJqc29uIiwiUHJvbWlzZSIsInJlamVjdCIsInN0YXR1cyIsImZldGNoIiwidGhlbiIsIl9jaGVja1Jlc3BvbnNlIiwibmFtZSIsInByb2Zlc3Npb24iLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImFib3V0IiwibGluayIsImNhcmRJZCIsImF2YXRhciIsIkNhcmQiLCJjYXJkRGF0YSIsInVzZXJJZCIsInRlbXBsYXRlU2VsZWN0b3IiLCJoYW5kbGVDYXJkQ2xpY2siLCJoYW5kbGVEZWxldGVQb3B1cCIsImhhbmRsZUxpa2VDbGljayIsIl9uYW1lIiwiX2xpbmsiLCJfaWQiLCJfbGlrZXMiLCJsaWtlcyIsIl9vd25lcklkIiwib3duZXIiLCJfdXNlcklkIiwiX3RlbXBsYXRlU2VsZWN0b3IiLCJfaGFuZGxlQ2FyZENsaWNrIiwiX2hhbmRsZURlbGV0ZVBvcHVwIiwiX2hhbmRsZUxpa2VDbGljayIsImNhcmRFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNsb25lTm9kZSIsIl9lbGVtZW50IiwicmVtb3ZlIiwiX2VsZW1lbnRMaWtlIiwiY2xhc3NMaXN0IiwiYWRkIiwibGlrZUJvb2wiLCJmaW5kIiwidXNlciIsIm5ld0xpa2VzIiwiX2xpa2VzQ291bnRlciIsInRleHRDb250ZW50IiwibGVuZ3RoIiwiaXNMaWtlZCIsIl9wdXRMaWtlIiwiX25vTGlrZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfZWxlbWVudERlbGV0ZSIsIl9lbGVtZW50UGhvdG8iLCJfZ2V0VGVtcGxhdGUiLCJfZWxlbWVudE5hbWUiLCJzcmMiLCJhbHQiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJzZXRMaWtlcyIsIkZvcm1WYWxpZGF0b3IiLCJjb25maWciLCJmb3JtRWxlbWVudCIsIl9jb25maWciLCJfZm9ybVNlbGVjdG9yIiwiZm9ybVNlbGVjdG9yIiwiX2lucHV0U2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJfaW5wdXRFcnJvckNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiX2Vycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiX2Zvcm1FbGVtZW50IiwiX2lucHV0TGlzdCIsInNvbWUiLCJpbnB1dEVsZW1lbnQiLCJjaGVja1ZhbGlkaXR5IiwiX2J1dHRvbkVsZW1lbnQiLCJkaXNhYmxlZCIsInJlbW92ZUF0dHJpYnV0ZSIsIl9oYXNJbnZhbGlkSW5wdXQiLCJibG9ja0J1dHRvbiIsInVubG9ja0J1dHRvbiIsImVycm9yRWxlbWVudCIsImlkIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaGlkZUlucHV0RXJyb3IiLCJfc2hvd0lucHV0RXJyb3IiLCJmb3JFYWNoIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsIl90b2dnbGVCdXR0b25TdGF0ZSIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJQb3B1cCIsInBvcHVwU2VsZWN0b3IiLCJfcG9wdXBFbGVtZW50IiwiX2hhbmRsZUVzY0Nsb3NlIiwiYmluZCIsImV2dCIsImtleSIsImNsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJjb250YWlucyIsIlBvcHVwV2l0aERlbGV0aW9uIiwiaGFuZGxlRm9ybVN1Ym1pdCIsIl9oYW5kbGVGb3JtU3VibWl0IiwiX3BvcHVwRWxlbWVudEZvcm0iLCJfc3VibWl0QnV0dG9uIiwiX3N1Ym1pdEJ1dHRvblRleHQiLCJjYXJkIiwiX2NhcmRJZCIsIl9jYXJkIiwiaXNMb2FkaW5nIiwibG9hZGluZ1RleHQiLCJwcmV2ZW50RGVmYXVsdCIsInJlbmRlckxvYWRpbmciLCJQb3B1cFdpdGhGb3JtIiwiaW5wdXRzIiwiaW5wdXQiLCJ2YWx1ZSIsImRhdGEiLCJyZXNldCIsIl9nZXRJbnB1dFZhbHVlcyIsIlBvcHVwV2l0aEltYWdlIiwiX3Bob3RvSW1hZ2UiLCJfcGhvdG9DYXB0aW9uIiwiU2VjdGlvbiIsImNvbnRhaW5lclNlbGVjdG9yIiwicmVuZGVyZXIiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwiZWxlbWVudCIsInByZXBlbmQiLCJhcHBlbmQiLCJpdGVtcyIsIlVzZXJJbmZvIiwibmFtZVNlbGVjdG9yIiwicHJvZmVzc2lvblNlbGVjdG9yIiwiYXZhdGFyU2VsZWN0b3IiLCJfcHJvZmlsZU5hbWUiLCJfcHJvZmlsZVByb2Zlc3Npb24iLCJfcHJvZmlsZUF2YXRhciIsImJ1dHRvbkVkaXQiLCJidXR0b25BZGRDYXJkIiwiYnV0dG9uQXZhdGFyRWRpdCIsInBvcFVwRWRpdFByb2ZpbGUiLCJwb3BVcEFkZENhcmQiLCJwb3BVcEVkaXRBdmF0YXIiLCJwb3BVcERlbGV0aW9uIiwiZm9ybVByb2ZpbGVFZGl0MiIsImZvcm1BdmF0YXJFZGl0IiwiZm9ybUFkZENhcmQiLCJwb3BVcEFkZENhcmRTZWxlY3RvciIsInBvcFVwUGhvdG9TZWxlY3RvciIsInBvcFVwRWRpdEF2YXRhclNlbGVjdG9yIiwicG9wVXBEZWxldGlvblNlbGVjdG9yIiwicG9wVXBFZGl0UHJvZmlsZVNlbGVjdG9yIiwicHJvZmlsZU5hbWVTZWxlY3RvciIsInByb2ZpbGVQcm9mZXNzaW9uU2VsZWN0b3IiLCJwcm9maWxlQXZhdGFyU2VsZWN0b3IiLCJjYXJkc0NvbnRhaW5lclNlbGVjdG9yIiwiY29uZmlnVmFsaWRhdGlvbiIsImFwaSIsImF1dGhvcml6YXRpb24iLCJwb3B1cFpvb20iLCJmb3JtUHJvZmlsZUVkaXRWYWxpZGF0b3IiLCJmb3JtQWRkQ2FyZFZhbGlkYXRvciIsImZvcm1FZGl0aW5nQXZhdGFyVmFsaWRhdG9yIiwic2VjdGlvbiIsIml0ZW0iLCJhZGRJbml0aWFsSXRlbSIsImNyZWF0ZUNhcmQiLCJvYmplY3QiLCJvcGVuIiwicG9wdXBEZWxldGVDYXJkIiwiZGVsZXRlTGlrZSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJhZGRMaWtlIiwiZ2VuZXJhdGVDYXJkIiwicG9wdXBDYXJkIiwicGxhY2UiLCJhZGRDYXJkIiwiYWRkSXRlbSIsInVzZXJJbmZvIiwicG9wdXBQcm9maWxlIiwiZWRpdFByb2ZpbGUiLCJzZXRVc2VySW5mbyIsInBvcHVwQXZhdGFyIiwiZWRpdEF2YXRhciIsInNldEF2YXRhciIsImRlbGV0ZUNhcmQiLCJhbGwiLCJnZXRQcm9maWxlIiwiZ2V0SW5pdGlhbENhcmRzIiwicHJvZmlsZUluZm8iLCJjYXJkTGlzdCIsInJlbmRlckl0ZW1zIiwiY2xlYXJFcnJvcnMiLCJ1c2VySW5mb0RhdGEiLCJnZXRVc2VySW5mbyIsInNldElucHV0VmFsdWVzIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJlbmFibGVWYWxpZGF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==