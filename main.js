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

  /** Запросить данные о своём профиле */
  _createClass(Api, [{
    key: "getProfile",
    value: function getProfile() {
      return fetch("".concat(this._baseUrl, "/users/me"), {
        headers: this._headers
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status));
        }
      });
    }

    /** Запросить все карточки с сервера */
  }, {
    key: "getInitialCards",
    value: function getInitialCards() {
      return fetch("".concat(this._baseUrl, "/cards"), {
        headers: this._headers
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status));
        }
      });
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
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status));
        }
      });
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
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status));
        }
      });
    }

    /** Удалить карточку с сервера */
  }, {
    key: "deleteCard",
    value: function deleteCard(cardId) {
      return fetch("".concat(this._baseUrl, "/cards/").concat(cardId), {
        method: 'DELETE',
        headers: this._headers
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status));
        }
      });
    }

    /** Удалить свой лайк */
  }, {
    key: "deleteLike",
    value: function deleteLike(cardId) {
      return fetch("".concat(this._baseUrl, "/cards/").concat(cardId, "/likes"), {
        method: 'DELETE',
        headers: this._headers
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status));
        }
      });
    }

    /** Добавить свой лайк */
  }, {
    key: "addLike",
    value: function addLike(cardId) {
      return fetch("".concat(this._baseUrl, "/cards/").concat(cardId, "/likes"), {
        method: 'PUT',
        headers: this._headers
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status));
        }
      });
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
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status));
        }
      });
    }
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
  function Card(cardData, templateSelector, handleCardClick, handleDeletePopup, handleLikeClick) {
    _classCallCheck(this, Card);
    this._name = cardData.name;
    this._link = cardData.link;
    this._id = cardData.id;
    this._likes = cardData.likes;
    this._userId = cardData.userId;
    this._ownerId = cardData.ownerId;
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

    /** Закрытие попапа + Реакция на сабмит */
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;
      _get(_getPrototypeOf(PopupWithDeletion.prototype), "setEventListeners", this).call(this);
      this._popupElementForm.addEventListener('submit', function (evt) {
        evt.preventDefault();
        _this2._handleFormSubmit(_this2._cardId, _this2._card);
        _this2.close();
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
    key: "close",
    value: /** Закрыть попап со сбросом полей */
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
  function Section(containerSelector) {
    _classCallCheck(this, Section);
    this._container = document.querySelector(containerSelector);
  }

  /** Очистить контейнер */
  _createClass(Section, [{
    key: "clear",
    value: function clear() {
      this._container.innerHTML = '';
    }

    /** Добавить элемент начало контейнера */
  }, {
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

    /** Установить данные */
  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref2) {
      var username = _ref2.username,
        userprofession = _ref2.userprofession,
        useravatar = _ref2.useravatar;
      this._profileName.textContent = username;
      this._profileProfession.textContent = userprofession;
      this._profileAvatar.src = useravatar;
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
/* harmony export */   "avatar": () => (/* binding */ avatar),
/* harmony export */   "buttonAddCard": () => (/* binding */ buttonAddCard),
/* harmony export */   "buttonAvatarEdit": () => (/* binding */ buttonAvatarEdit),
/* harmony export */   "buttonEdit": () => (/* binding */ buttonEdit),
/* harmony export */   "cardsContainerSelector": () => (/* binding */ cardsContainerSelector),
/* harmony export */   "configValidation": () => (/* binding */ configValidation),
/* harmony export */   "formAddCard": () => (/* binding */ formAddCard),
/* harmony export */   "formAddCardSubmitButton": () => (/* binding */ formAddCardSubmitButton),
/* harmony export */   "formAvatarEdit": () => (/* binding */ formAvatarEdit),
/* harmony export */   "formConfirmDeletionSubmitButton": () => (/* binding */ formConfirmDeletionSubmitButton),
/* harmony export */   "formEditAvatarSubmitButton": () => (/* binding */ formEditAvatarSubmitButton),
/* harmony export */   "formProfileEdit": () => (/* binding */ formProfileEdit),
/* harmony export */   "formProfileEditSubmitButton": () => (/* binding */ formProfileEditSubmitButton),
/* harmony export */   "jobInput": () => (/* binding */ jobInput),
/* harmony export */   "nameInput": () => (/* binding */ nameInput),
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
var formProfileEdit = popUpEditProfile.querySelector(".popup__form");
var formAvatarEdit = popUpEditAvatar.querySelector(".popup__form");
var formAddCard = popUpAddCard.querySelector(".popup__form");

/** Кнопки сабмитов форм */
var formProfileEditSubmitButton = popUpEditProfile.querySelector(".popup__save");
var formAddCardSubmitButton = popUpAddCard.querySelector(".popup__save");
var formEditAvatarSubmitButton = popUpEditAvatar.querySelector(".popup__save");
var formConfirmDeletionSubmitButton = popUpDeletion.querySelector(".popup__save");

/** Инпуты */
var nameInput = formProfileEdit.querySelector(".popup__input_value_name");
var jobInput = formProfileEdit.querySelector(".popup__input_value_profession");

/** Изображение аватара */
var avatar = document.querySelector(".profile__avatar");

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
/* harmony import */ var _components_PopupWithDeletion_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PopupWithDeletion.js */ "./src/components/PopupWithDeletion.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Api.js */ "./src/components/Api.js");
/* harmony import */ var _utils_elements_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/elements.js */ "./src/utils/elements.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











/** Создание экземпляра API */
var api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_8__.Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-55',
  headers: {
    authorization: 'a4c51acb-46f0-4f52-b5e2-f7cb5110adaa',
    'Content-Type': 'application/json'
  }
});

/** Создать попап с картинкой */
var popupZoom = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__.PopupWithImage(_utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.popUpPhotoSelector);

/** Создать валидаторы форм */
var formProfileEditValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__.FormValidator(_utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.configValidation, _utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.formProfileEdit);
var formAddCardValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__.FormValidator(_utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.configValidation, _utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.formAddCard);
var formEditingAvatarValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__.FormValidator(_utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.configValidation, _utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.formAvatarEdit);

/** Создать пустую секцию */
var section = new _components_Section_js__WEBPACK_IMPORTED_MODULE_2__.Section(_utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.cardsContainerSelector);

/** Функция генерации новой карточки */
function createCard(object) {
  var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_3__.Card(object, '#card', /** Функция-реакция нажатия на фото */
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
var popupCard = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__.PopupWithForm({
  handleFormSubmit: function handleFormSubmit(_ref) {
    var place = _ref.place,
      link = _ref.link;
    _utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.formAddCardSubmitButton.textContent = 'Сохранение...';
    api.addCard(place, link).then(function (res) {
      /** Создание карточки из полученных данных с сервера */
      var card = createCard({
        name: res.name,
        link: res.link,
        likes: res.likes,
        id: res._id,
        userId: userId,
        ownerId: res.owner._id
      });
      section.addItem(card);
      popupCard.close();
      _utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.formAddCardSubmitButton.textContent = 'Сохранить';
      formAddCardValidator.blockButton();
    })["catch"](function (err) {
      console.log(err);
    });
  }
}, _utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.popUpAddCardSelector);

/** Экземпляр отображаемого аккаунта */
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__.UserInfo({
  nameSelector: _utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.profileNameSelector,
  professionSelector: _utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.profileProfessionSelector,
  avatarSelector: _utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.profileAvatarSelector
});

/** Экземпляр попапа для редактирования имени и описания (с реакцией на самбит) */
var popupProfile = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__.PopupWithForm({
  handleFormSubmit: function handleFormSubmit(data) {
    _utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.formProfileEditSubmitButton.textContent = 'Сохранение...';
    api.editProfile(data.name, data.profession).then(function (res) {
      userInfo.setUserInfo({
        username: res.name,
        userprofession: res.about
      });
      _utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.avatar.src = res.avatar;
      popupProfile.close();
      _utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.formProfileEditSubmitButton.textContent = 'Сохранить';
    })["catch"](function (err) {
      console.log(err);
    });
    ;
  }
}, _utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.popUpEditProfileSelector);

/** Экземпляр попапа с изменением аватара  */
var popupAvatar = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__.PopupWithForm({
  handleFormSubmit: function handleFormSubmit(data) {
    _utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.formEditAvatarSubmitButton.textContent = 'Сохранение...';
    api.editAvatar(data.avatar).then(function (res) {
      _utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.avatar.src = res.avatar;
      popupAvatar.close();
      _utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.formEditAvatarSubmitButton.textContent = 'Сохранить';
      formEditingAvatarValidator.blockButton();
    })["catch"](function (err) {
      console.log(err);
    });
  }
}, _utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.popUpEditAvatarSelector);

/** Экземпляр попапа для подтверждения удаления  */
var popupDeleteCard = new _components_PopupWithDeletion_js__WEBPACK_IMPORTED_MODULE_6__.PopupWithDeletion({
  handleFormSubmit: function handleFormSubmit(cardId, card) {
    _utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.formConfirmDeletionSubmitButton.textContent = "Удаление...";
    api.deleteCard(cardId).then(function () {
      card.remove();
      _utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.formConfirmDeletionSubmitButton.textContent = "Да";
    })["catch"](function (err) {
      console.log(err);
    });
  }
}, _utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.popUpDeletionSelector);
var userId = '';

/** Выгрузить имя, описание и аватар из сервера */
api.getProfile().then(function (res) {
  userInfo.setUserInfo({
    username: res.name,
    userprofession: res.about,
    useravatar: res.avatar
  });
  userId = res._id;
})["catch"](function (err) {
  console.log(err);
});

/** Поочерёдно отобразить на странице все карточки из сервера */
Promise.all([api.getProfile(), api.getInitialCards()]).then(function (_ref2) {
  var _ref3 = _slicedToArray(_ref2, 2),
    profileInfo = _ref3[0],
    cardList = _ref3[1];
  cardList.forEach(function (res) {
    var card = createCard({
      name: res.name,
      link: res.link,
      likes: res.likes,
      id: res._id,
      userId: profileInfo._id,
      ownerId: res.owner._id
    });
    section.addInitialItem(card);
  });
})["catch"](function (err) {
  console.log(err);
});

/** Нажатие на карандаш для изменения профиля */
_utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.buttonEdit.addEventListener("click", function () {
  formProfileEditValidator.clearErrors();
  var userInfoData = userInfo.getUserInfo();
  _utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.nameInput.value = userInfoData.name;
  _utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.jobInput.value = userInfoData.profession;
  popupProfile.open();
});

/** Нажатие на [+] для добавления карточки */
_utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.buttonAddCard.addEventListener("click", function () {
  formAddCardValidator.clearErrors();
  popupCard.open();
});

/** Нажатие на аватар для изменения фото */
_utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.buttonAvatarEdit.addEventListener("click", function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsRUFBSztFQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDO0FBQ2xCLENBQUMsQ0FBQzs7QUFFSjtBQUNBdEMsMkVBQTJCLENBQUMsT0FBTyxFQUFFLFlBQVk7RUFDL0M2Qix3QkFBd0IsQ0FBQ2lDLFdBQVcsRUFBRTtFQUN0QyxJQUFNQyxZQUFZLEdBQUdmLFFBQVEsQ0FBQ2dCLFdBQVcsRUFBRTtFQUMzQ2xELCtEQUFlLEdBQUdpRCxZQUFZLENBQUM3TSxJQUFJO0VBQ25DNkosOERBQWMsR0FBR2dELFlBQVksQ0FBQzVNLFVBQVU7RUFDeEM4TCxZQUFZLENBQUNkLElBQUksRUFBRTtBQUNyQixDQUFDLENBQUM7O0FBR0Y7QUFDQWxDLDhFQUE4QixDQUFDLE9BQU8sRUFBRSxZQUFZO0VBQ2xENkIsb0JBQW9CLENBQUNnQyxXQUFXLEVBQUU7RUFDbENuQixTQUFTLENBQUNSLElBQUksRUFBRTtBQUNsQixDQUFDLENBQUM7O0FBR0Y7QUFDQWpDLGlGQUFpQyxDQUFDLE9BQU8sRUFBRSxZQUFZO0VBQ3JENkIsMEJBQTBCLENBQUMrQixXQUFXLEVBQUU7RUFDeENULFdBQVcsQ0FBQ2xCLElBQUksRUFBRTtBQUNwQixDQUFDLENBQUM7O0FBR0Y7QUFDQWMsWUFBWSxDQUFDZ0IsaUJBQWlCLEVBQUU7QUFDaEN0QixTQUFTLENBQUNzQixpQkFBaUIsRUFBRTtBQUM3QnJDLFNBQVMsQ0FBQ3FDLGlCQUFpQixFQUFFO0FBQzdCWixXQUFXLENBQUNZLGlCQUFpQixFQUFFO0FBQy9CN0IsZUFBZSxDQUFDNkIsaUJBQWlCLEVBQUU7O0FBR25DO0FBQ0FwQyx3QkFBd0IsQ0FBQ3FDLGdCQUFnQixFQUFFO0FBQzNDcEMsb0JBQW9CLENBQUNvQyxnQkFBZ0IsRUFBRTtBQUN2Q25DLDBCQUEwQixDQUFDbUMsZ0JBQWdCLEVBQUUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvQXBpLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aERlbGV0aW9uLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3V0aWxzL2VsZW1lbnRzLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21lc3RvLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiDQmtC+0L3RgdGC0YDRg9C60YLQvtGAIEFQSSAqL1xuZXhwb3J0IGNsYXNzIEFwaSB7XG4gIGNvbnN0cnVjdG9yKHsgYmFzZVVybCwgaGVhZGVycyB9KSB7XG4gICAgdGhpcy5fYmFzZVVybCA9IGJhc2VVcmw7XG4gICAgdGhpcy5faGVhZGVycyA9IGhlYWRlcnM7XG4gIH1cblxuICAvKiog0JfQsNC/0YDQvtGB0LjRgtGMINC00LDQvdC90YvQtSDQviDRgdCy0L7RkdC8INC/0YDQvtGE0LjQu9C1ICovXG4gIGdldFByb2ZpbGUoKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L3VzZXJzL21lYCwge1xuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYNCe0YjQuNCx0LrQsDogJHtyZXMuc3RhdHVzfWApO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKiog0JfQsNC/0YDQvtGB0LjRgtGMINCy0YHQtSDQutCw0YDRgtC+0YfQutC4INGBINGB0LXRgNCy0LXRgNCwICovXG4gIGdldEluaXRpYWxDYXJkcygpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vY2FyZHNgLCB7XG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYNCe0YjQuNCx0LrQsDogJHtyZXMuc3RhdHVzfWApO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKiog0J7RgtC/0YDQsNCy0LjRgtGMINC40LfQvNC10L3QtdC90LjRjyDQuNC90YTQvtGA0LzQsNGG0LjQuCDQviDRgdC10LHQtSAqL1xuICBlZGl0UHJvZmlsZShuYW1lLCBwcm9mZXNzaW9uKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L3VzZXJzL21lYCwge1xuICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgYWJvdXQ6IHByb2Zlc3Npb25cbiAgICAgIH0pXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChg0J7RiNC40LHQutCwOiAke3Jlcy5zdGF0dXN9YCk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKiDQlNC+0LHQsNCy0LjRgtGMINGB0LLQvtGOINC60LDRgNGC0L7Rh9C60YMg0L3QsCDRgdC10YDQstC10YAgKi9cbiAgYWRkQ2FyZChuYW1lLCBsaW5rKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBsaW5rOiBsaW5rXG4gICAgICB9KVxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYNCe0YjQuNCx0LrQsDogJHtyZXMuc3RhdHVzfWApO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKiog0KPQtNCw0LvQuNGC0Ywg0LrQsNGA0YLQvtGH0LrRgyDRgSDRgdC10YDQstC10YDQsCAqL1xuICBkZWxldGVDYXJkKGNhcmRJZCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfS9jYXJkcy8ke2NhcmRJZH1gLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGDQntGI0LjQsdC60LA6ICR7cmVzLnN0YXR1c31gKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqINCj0LTQsNC70LjRgtGMINGB0LLQvtC5INC70LDQudC6ICovXG4gIGRlbGV0ZUxpa2UoY2FyZElkKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzLyR7Y2FyZElkfS9saWtlc2AsIHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYNCe0YjQuNCx0LrQsDogJHtyZXMuc3RhdHVzfWApO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKiog0JTQvtCx0LDQstC40YLRjCDRgdCy0L7QuSDQu9Cw0LnQuiAqL1xuICBhZGRMaWtlKGNhcmRJZCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfS9jYXJkcy8ke2NhcmRJZH0vbGlrZXNgLCB7XG4gICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGDQntGI0LjQsdC60LA6ICR7cmVzLnN0YXR1c31gKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgICAvKiog0J7RgtC/0YDQsNCy0LjRgtGMINGB0LLQvtC5INCw0LLQsNGC0LDRgCAqL1xuICAgIGVkaXRBdmF0YXIoYXZhdGFyKSB7XG4gICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vdXNlcnMvbWUvYXZhdGFyYCwge1xuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBhdmF0YXI6IGF2YXRhclxuICAgICAgICB9KVxuICAgICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYNCe0YjQuNCx0LrQsDogJHtyZXMuc3RhdHVzfWApO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxufVxuXG5cblxuIiwiZXhwb3J0IGNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3RvcihjYXJkRGF0YSwgdGVtcGxhdGVTZWxlY3RvciwgaGFuZGxlQ2FyZENsaWNrLCBoYW5kbGVEZWxldGVQb3B1cCwgaGFuZGxlTGlrZUNsaWNrKSB7XG4gICAgdGhpcy5fbmFtZSA9IGNhcmREYXRhLm5hbWU7XG4gICAgdGhpcy5fbGluayA9IGNhcmREYXRhLmxpbms7XG4gICAgdGhpcy5faWQgPSBjYXJkRGF0YS5pZDtcbiAgICB0aGlzLl9saWtlcyA9IGNhcmREYXRhLmxpa2VzO1xuICAgIHRoaXMuX3VzZXJJZCA9IGNhcmREYXRhLnVzZXJJZDtcbiAgICB0aGlzLl9vd25lcklkID0gY2FyZERhdGEub3duZXJJZDtcbiAgICB0aGlzLl90ZW1wbGF0ZVNlbGVjdG9yID0gdGVtcGxhdGVTZWxlY3RvcjtcbiAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sgPSBoYW5kbGVDYXJkQ2xpY2s7XG4gICAgdGhpcy5faGFuZGxlRGVsZXRlUG9wdXAgPSBoYW5kbGVEZWxldGVQb3B1cDtcbiAgICB0aGlzLl9oYW5kbGVMaWtlQ2xpY2sgPSBoYW5kbGVMaWtlQ2xpY2s7XG4gIH1cblxuICAvKiog0J/QvtC70YPRh9C40YLRjCDRgtC10LzQv9C70LXQudGCICovXG4gIF9nZXRUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fdGVtcGxhdGVTZWxlY3RvcilcbiAgICAgIC5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHNfX2NhcmRcIilcbiAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgcmV0dXJuIGNhcmRFbGVtZW50O1xuICB9XG5cbiAgLyoqINCj0LTQsNC70LjRgtGMINC60LDRgNGC0L7Rh9C60YMgKi9cbiAgX2hhbmRsZURlbGV0ZUNhcmQoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuXG4gIC8qKiDQm9Cw0LnQuiDQv9C+0YHRgtCw0LLQsNC70LXQvSAqL1xuICBfcHV0TGlrZSgpIHtcbiAgICB0aGlzLl9lbGVtZW50TGlrZS5jbGFzc0xpc3QuYWRkKFwiZWxlbWVudF9fbGlrZV9hY3RpdmVcIik7XG4gIH1cblxuICAvKiog0J3QtdGCINC70LDQudC60LAgKi9cbiAgX25vTGlrZSgpIHtcbiAgICB0aGlzLl9lbGVtZW50TGlrZS5jbGFzc0xpc3QucmVtb3ZlKFwiZWxlbWVudF9fbGlrZV9hY3RpdmVcIik7XG4gIH1cblxuICAvKiog0J/RgNC+0LLQtdGA0LrQsCwg0YHRgtC+0LjRgiDQu9C4INC90LDRiCDQu9Cw0LnQuiAqL1xuICBpc0xpa2VkKCkge1xuICAgIGNvbnN0IGxpa2VCb29sID0gdGhpcy5fbGlrZXMuZmluZCh1c2VyID0+IHVzZXIuX2lkID09IHRoaXMuX3VzZXJJZCk7XG4gICAgcmV0dXJuIGxpa2VCb29sO1xuICB9XG5cbiAgLyoqINCY0LfQvNC10L3QuNGC0Ywg0YHRh9GR0YLRh9C40Log0Lgg0YbQstC10YIg0L/RgNC4INC90LDQttCw0YLQuNC4INC90LAg0LvQsNC50LogKi9cbiAgc2V0TGlrZXMobmV3TGlrZXMpIHtcbiAgICB0aGlzLl9saWtlcyA9IG5ld0xpa2VzO1xuICAgIHRoaXMuX2xpa2VzQ291bnRlci50ZXh0Q29udGVudCA9IHRoaXMuX2xpa2VzLmxlbmd0aDtcbiAgICAvKiog0JzQtdC90Y/RgtGMINGG0LLQtdGCICovXG4gICAgaWYgKHRoaXMuaXNMaWtlZCgpKSB7XG4gICAgICB0aGlzLl9wdXRMaWtlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX25vTGlrZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiDQodC70YPRiNCw0YLQtdC70LggKi9cbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIC8qKiDQm9Cw0LnQuiAqL1xuICAgIHRoaXMuX2VsZW1lbnRMaWtlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLl9oYW5kbGVMaWtlQ2xpY2sodGhpcy5faWQpO1xuICAgIH0pXG4gICAgLyoqINCa0L7RgNC30LjQvdCwICovXG4gICAgdGhpcy5fZWxlbWVudERlbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlRGVsZXRlUG9wdXAodGhpcy5faWQsIHRoaXMuX2VsZW1lbnQpO1xuICAgIH0pXG4gICAgLyoqINCg0LDRgdC60YDRi9GC0Ywg0YTQvtGC0L4gKi9cbiAgICB0aGlzLl9lbGVtZW50UGhvdG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sodGhpcy5fbmFtZSwgdGhpcy5fbGluayk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqINCh0LPQtdC90LXRgNC40YDQvtCy0LDRgtGMINC60LDRgNGC0YMgKi9cbiAgZ2VuZXJhdGVDYXJkKCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xuICAgIHRoaXMuX2VsZW1lbnRQaG90byA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX3Bob3RvJyk7XG4gICAgdGhpcy5fZWxlbWVudExpa2UgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19saWtlJyk7XG4gICAgdGhpcy5fZWxlbWVudERlbGV0ZSA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX2RlbGV0ZScpO1xuICAgIHRoaXMuX2xpa2VzQ291bnRlciA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX2xpa2UtY291bnRlcicpO1xuICAgIHRoaXMuX2VsZW1lbnROYW1lID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudF9fbmFtZScpO1xuICAgIHRoaXMuX2VsZW1lbnRQaG90by5zcmMgPSB0aGlzLl9saW5rO1xuICAgIHRoaXMuX2VsZW1lbnRQaG90by5hbHQgPSB0aGlzLl9uYW1lO1xuICAgIHRoaXMuX2VsZW1lbnROYW1lLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuc2V0TGlrZXModGhpcy5fbGlrZXMpO1xuICAgIC8qKiDQo9C00LDQu9GP0YLRjCDQutC+0YDQt9C40L3QutGDINC00LvRjyDRh9GD0LbQuNGFINC60LDRgNGC0L7Rh9C10LogKi9cbiAgICBpZiAodGhpcy5fdXNlcklkICE9PSB0aGlzLl9vd25lcklkKSB7XG4gICAgICB0aGlzLl9lbGVtZW50RGVsZXRlLnJlbW92ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3Rvcihjb25maWcsIGZvcm1FbGVtZW50KSB7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuX2Zvcm1TZWxlY3RvciA9IGNvbmZpZy5mb3JtU2VsZWN0b3I7XG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IGNvbmZpZy5pbnB1dFNlbGVjdG9yO1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gY29uZmlnLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBjb25maWcuaW5hY3RpdmVCdXR0b25DbGFzcztcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBjb25maWcuaW5wdXRFcnJvckNsYXNzO1xuICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBjb25maWcuZXJyb3JDbGFzcztcbiAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGZvcm1FbGVtZW50O1xuICB9XG5cbiAgLyoqINCf0YDQvtCy0LXRgNC60LAg0L3QsCDQvdCw0LvQuNGH0LjQtSDQvdC10LLQtdGA0L3Ri9GFINC/0L7Qu9C10Lkg0LIg0YTQvtGA0LzQtSAqL1xuICBfaGFzSW52YWxpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnB1dExpc3Quc29tZShmdW5jdGlvbiAoaW5wdXRFbGVtZW50KSB7XG4gICAgICByZXR1cm4gaW5wdXRFbGVtZW50LmNoZWNrVmFsaWRpdHkoKSA9PT0gZmFsc2U7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqINCR0LvQvtC60LjRgNC+0LLQutCwINC60L3QvtC/0LrQuCAqL1xuICBibG9ja0J1dHRvbigpIHtcbiAgICB0aGlzLl9idXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICAvKiog0KDQsNC30LHQu9C+0LrQuNGA0L7QstC60LAg0LrQvdC+0L/QutC4ICovXG4gIF91bmxvY2tCdXR0b24oKSB7XG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICB9XG5cbiAgLyoqINCg0LXQsNC60YbQuNGPINC60L3QvtC/0LrQuCDQvdCwINC90LXQstC10YDQvdGL0LUg0L/QvtC70Y8gKi9cbiAgX3RvZ2dsZUJ1dHRvblN0YXRlKCkge1xuICAgIGlmICh0aGlzLl9oYXNJbnZhbGlkSW5wdXQoKSkge1xuICAgICAgdGhpcy5ibG9ja0J1dHRvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl91bmxvY2tCdXR0b24oKTtcbiAgICB9XG4gIH1cblxuICAvKiog0J/QvtC60LDQt9Cw0YLRjCDQvtGI0LjQsdC60YMg0LTQu9GPINC90LXQstC10YDQvdC+0LPQviDQuNC90L/Rg9GC0LAgKi9cbiAgX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCkge1xuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgKTtcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlO1xuICB9O1xuXG4gIC8qKiDQodC60YDRi9GC0Ywg0L7RiNC40LHQutGDINC00LvRjyDQstC10YDQvdC+0LPQviDQuNC90L/Rg9GC0LAgKi9cbiAgX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCkge1xuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgKTtcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICB9O1xuXG4gIC8qKiDQktCw0LvQuNC00LDRhtC40Y8g0L/QvtC70Y8gKi9cbiAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpIHtcbiAgICBpZiAoaW5wdXRFbGVtZW50LmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiDQodCx0YDQvtGB0LjRgtGMINGB0L7QvtCx0YnQtdC90LjRjyDQstCw0LvQuNC00LDRhtC40LggKi9cbiAgY2xlYXJFcnJvcnMoKSB7XG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcbiAgICAgfSlcbiAgICB9XG5cbiAgLyoqINCf0YDQvtCy0LXRgNC60LAg0LLRgdC10YUg0LjQvdC/0YPRgtC+0LIg0YTQvtGA0LzRiyDQvdCwINCy0LDQu9C40LTQvdC+0YHRgtGMICovXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpKTtcbiAgICB0aGlzLl9idXR0b25FbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvcik7XG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoKTtcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpO1xuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG4iLCIvKiog0JrQvtC90YHRgtGA0YPQutGC0L7RgCDQvtCx0YnQtdCz0L4g0L/QvtC/0LDQv9CwICovXG5leHBvcnQgY2xhc3MgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cFNlbGVjdG9yKTtcbiAgICB0aGlzLl9oYW5kbGVFc2NDbG9zZSA9IHRoaXMuX2hhbmRsZUVzY0Nsb3NlLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKiog0JfQsNC60YDRi9GC0LjQtSDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCBFU0MgKi9cbiAgX2hhbmRsZUVzY0Nsb3NlKGV2dCkge1xuICAgIGlmIChldnQua2V5ID09ICdFc2NhcGUnKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqINCe0YLQutGA0YvRgtC40LUgKi9cbiAgb3BlbigpIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncG9wdXBfb3BlbmVkJyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcbiAgfVxuXG4gIC8qKiDQl9Cw0LrRgNGL0YLQuNC1ICovXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdwb3B1cF9vcGVuZWQnKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xuICB9XG5cbiAgLyoqINCh0LvRg9GI0LDRgtC10LvRjCDQutGA0LXRgdGC0LjQutCwINC4INC90LDQttCw0YLQuNGPINC90LAg0L7QstC10YDQu9C10LksINGBINGA0LXQsNC60YbQuNC10Lkg0LfQsNC60YDRi9GC0LjRjyAqL1xuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB7XG4gICAgICBpZiAoZXZ0LnRhcmdldCA9PT0gZXZ0LmN1cnJlbnRUYXJnZXQgfHwgZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwX19jbG9zZScpKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgeyBQb3B1cCB9IGZyb20gJy4vUG9wdXAuanMnO1xuXG4vKiog0JrQvtC90YHRgtGA0YPQutGC0L7RgCDQv9C+0L/QsNC/0LAg0L/QvtC00YLQstC10YDQttC00LXQvdC40Y8g0YPQtNCw0LvQtdC90LjRjyAqL1xuZXhwb3J0IGNsYXNzIFBvcHVwV2l0aERlbGV0aW9uIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcih7IGhhbmRsZUZvcm1TdWJtaXQgfSwgcG9wdXBTZWxlY3Rvcikge1xuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQgPSBoYW5kbGVGb3JtU3VibWl0O1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudEZvcm0gPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybVwiKTtcbiAgfVxuXG4gIC8qKiDQntGC0LrRgNGL0YLRjCDQv9C+0L/QsNC/LCDQv9GA0LjQvdC40LzQsNGPINC40L3RhNC+0YDQvNCw0YbQuNGOINC+INC60LDRgNGC0L7Rh9C60LUgKi9cbiAgb3BlbihjYXJkSWQsIGNhcmQpIHtcbiAgICBzdXBlci5vcGVuKCk7XG4gICAgdGhpcy5fY2FyZElkID0gY2FyZElkO1xuICAgIHRoaXMuX2NhcmQgPSBjYXJkO1xuICB9XG5cbiAgLyoqINCX0LDQutGA0YvRgtC40LUg0L/QvtC/0LDQv9CwICsg0KDQtdCw0LrRhtC40Y8g0L3QsCDRgdCw0LHQvNC40YIgKi9cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldnQpID0+IHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCh0aGlzLl9jYXJkSWQsIHRoaXMuX2NhcmQpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pXG4gIH1cbn1cbiIsImltcG9ydCB7IFBvcHVwIH0gZnJvbSAnLi9Qb3B1cC5qcyc7XG5cbi8qKiDQmtC+0L3RgdGC0YDRg9C60YLQvtGAINC/0L7Qv9Cw0L/QsCDQtNC70Y8g0LjQt9C80LXQvdC10L3QuNGPINC40L3RhNC+0YDQvNCw0YbQuNC4INC+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtSAqL1xuZXhwb3J0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHsgaGFuZGxlRm9ybVN1Ym1pdCB9LCBwb3B1cFNlbGVjdG9yKSB7XG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCA9IGhhbmRsZUZvcm1TdWJtaXQ7XG4gICAgdGhpcy5faW5wdXRMaXN0ID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cF9faW5wdXQnKTtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnRGb3JtID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm1cIik7XG4gIH1cblxuICAvKiog0KHQvtC30LTQsNGC0Ywg0L7QsdGK0LXQutGCINC40Lcg0LLQstC10LTRkdC90L3Ri9GFINC00LDQvdC90YvRhSAqL1xuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XG4gICAgY29uc3QgaW5wdXRzID0ge307XG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBpbnB1dHNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5wdXRzO1xuICB9O1xuXG4gIC8qKiDQl9Cw0LrRgNGL0YLRjCDQv9C+0L/QsNC/INGB0L4g0YHQsdGA0L7RgdC+0Lwg0L/QvtC70LXQuSAqL1xuICBjbG9zZSgpIHtcbiAgICBzdXBlci5jbG9zZSgpO1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudEZvcm0ucmVzZXQoKTtcbiAgfVxuXG4gIC8qKiDQl9Cw0LrRgNGL0YLQuNC1INC/0L7Qv9Cw0L/QsCArINCg0LXQsNC60YbQuNGPINC90LAg0YHQsNCx0LzQuNGCOiDRgdCx0YDQvtGBINGB0YLQsNC90LTQsNGA0YLQvdC+0LPQviDRgdC+0LHRi9GC0LjRjywg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LUg0LTQsNC90L3Ri9GFINGE0L7RgNC80Ysg0Lgg0LfQsNC60YDRi9GC0LjQtSAqL1xuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2dCkgPT4ge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0KHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQb3B1cCB9IGZyb20gJy4vUG9wdXAuanMnO1xuXG4vKiog0JrQvtC90YHRgtGA0YPQutGC0L7RgCDQv9C+0L/QsNC/0LAg0YEg0YPQstC10LvQuNGH0LXQvdC90YvQvCDRhNC+0YLQviAqL1xuZXhwb3J0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5fcGhvdG9JbWFnZSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3Bob3RvJyk7XG4gICAgdGhpcy5fcGhvdG9DYXB0aW9uID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY2FwdGlvbicpO1xuICB9XG5cbiAgb3BlbihuYW1lLCBsaW5rKSB7XG4gICAgdGhpcy5fcGhvdG9JbWFnZS5zcmMgPSBsaW5rO1xuICAgIHRoaXMuX3Bob3RvSW1hZ2UuYWx0ID0gbmFtZTtcbiAgICB0aGlzLl9waG90b0NhcHRpb24udGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIHN1cGVyLm9wZW4oKTtcbiAgfVxufVxuIiwiLyoqINCa0L7QvdGB0YLRgNGD0LrRgtC+0YAg0YHQtdC60YbQuNC4INC00LvRjyDQutCw0YDRgtC+0YfQtdC6ICovXG5leHBvcnQgY2xhc3MgU2VjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKSB7XG4gICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJTZWxlY3Rvcik7XG4gIH1cblxuICAvKiog0J7Rh9C40YHRgtC40YLRjCDQutC+0L3RgtC10LnQvdC10YAgKi9cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5fY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgLyoqINCU0L7QsdCw0LLQuNGC0Ywg0Y3Qu9C10LzQtdC90YIg0L3QsNGH0LDQu9C+INC60L7QvdGC0LXQudC90LXRgNCwICovXG4gIGFkZEl0ZW0oZWxlbWVudCkge1xuICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGVsZW1lbnQpO1xuICB9XG5cbiAgLyoqINCU0L7QsdCw0LLQuNGC0Ywg0Y3Qu9C10LzQtdC90YIg0LIg0LrQvtC90LXRhiDQutC+0L3RgtC10LnQvdC10YDQsCAo0LTQu9GPINC40YHRhdC+0LTQvdGL0YUg0LrQsNGA0YLQvtGH0LXQuikgKi9cbiAgYWRkSW5pdGlhbEl0ZW0oZWxlbWVudCkge1xuICAgIHRoaXMuX2NvbnRhaW5lci5hcHBlbmQoZWxlbWVudCk7XG4gIH1cblxufVxuIiwiLyoqINCa0L7QvdGB0YLRgNGD0LrRgtC+0YAg0L/RgNC+0YTQuNC70Y8gKi9cbmV4cG9ydCBjbGFzcyBVc2VySW5mbyB7XG4gIGNvbnN0cnVjdG9yKHsgbmFtZVNlbGVjdG9yLCBwcm9mZXNzaW9uU2VsZWN0b3IsIGF2YXRhclNlbGVjdG9yIH0pIHtcbiAgICB0aGlzLl9wcm9maWxlTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmFtZVNlbGVjdG9yKTtcbiAgICB0aGlzLl9wcm9maWxlUHJvZmVzc2lvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJvZmVzc2lvblNlbGVjdG9yKTtcbiAgICB0aGlzLl9wcm9maWxlQXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhdmF0YXJTZWxlY3Rvcik7XG4gIH1cblxuICAvKiog0J/QvtC70YPRh9C40YLRjCDRgtC10LrRg9GJ0LjQtSDQtNCw0L3QvdGL0LUgKi9cbiAgZ2V0VXNlckluZm8oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMuX3Byb2ZpbGVOYW1lLnRleHRDb250ZW50LFxuICAgICAgcHJvZmVzc2lvbjogdGhpcy5fcHJvZmlsZVByb2Zlc3Npb24udGV4dENvbnRlbnQsXG4gICAgfVxuICB9XG5cbiAgLyoqINCj0YHRgtCw0L3QvtCy0LjRgtGMINC00LDQvdC90YvQtSAqL1xuICBzZXRVc2VySW5mbyh7IHVzZXJuYW1lLCB1c2VycHJvZmVzc2lvbiwgdXNlcmF2YXRhciB9KSB7XG4gICAgdGhpcy5fcHJvZmlsZU5hbWUudGV4dENvbnRlbnQgPSB1c2VybmFtZTtcbiAgICB0aGlzLl9wcm9maWxlUHJvZmVzc2lvbi50ZXh0Q29udGVudCA9IHVzZXJwcm9mZXNzaW9uO1xuICAgIHRoaXMuX3Byb2ZpbGVBdmF0YXIuc3JjID0gdXNlcmF2YXRhcjtcbiAgfVxufVxuIiwiLyoqINCa0L3QvtC/0LrQuCAqL1xuZXhwb3J0IGNvbnN0IGJ1dHRvbkVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXRcIik7XG5leHBvcnQgY29uc3QgYnV0dG9uQWRkQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYnV0dG9uLWFkZFwiKTtcbmV4cG9ydCBjb25zdCBidXR0b25BdmF0YXJFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hdmF0YXItZWRpdFwiKTtcblxuLyoqINCf0L7Qv9Cw0L/RiyAqL1xuY29uc3QgcG9wVXBFZGl0UHJvZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfdHlwZV9wcm9maWxlXCIpO1xuY29uc3QgcG9wVXBBZGRDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF90eXBlX2NhcmRcIik7XG5jb25zdCBwb3BVcEVkaXRBdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX3R5cGVfYXZhdGFyXCIpO1xuY29uc3QgcG9wVXBEZWxldGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfdHlwZV9kZWxldGVcIik7XG5cbi8qKiDQpNC+0YDQvNGLICovXG5leHBvcnQgY29uc3QgZm9ybVByb2ZpbGVFZGl0ID0gcG9wVXBFZGl0UHJvZmlsZS5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19mb3JtXCIpO1xuZXhwb3J0IGNvbnN0IGZvcm1BdmF0YXJFZGl0ID0gcG9wVXBFZGl0QXZhdGFyLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm1cIik7XG5leHBvcnQgY29uc3QgZm9ybUFkZENhcmQgPSBwb3BVcEFkZENhcmQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybVwiKTtcblxuLyoqINCa0L3QvtC/0LrQuCDRgdCw0LHQvNC40YLQvtCyINGE0L7RgNC8ICovXG5leHBvcnQgY29uc3QgZm9ybVByb2ZpbGVFZGl0U3VibWl0QnV0dG9uID0gcG9wVXBFZGl0UHJvZmlsZS5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19zYXZlXCIpO1xuZXhwb3J0IGNvbnN0IGZvcm1BZGRDYXJkU3VibWl0QnV0dG9uID0gcG9wVXBBZGRDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX3NhdmVcIik7XG5leHBvcnQgY29uc3QgZm9ybUVkaXRBdmF0YXJTdWJtaXRCdXR0b24gPSBwb3BVcEVkaXRBdmF0YXIucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fc2F2ZVwiKTtcbmV4cG9ydCBjb25zdCBmb3JtQ29uZmlybURlbGV0aW9uU3VibWl0QnV0dG9uID0gcG9wVXBEZWxldGlvbi5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19zYXZlXCIpO1xuXG4vKiog0JjQvdC/0YPRgtGLICovXG5leHBvcnQgY29uc3QgbmFtZUlucHV0ID0gZm9ybVByb2ZpbGVFZGl0LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2lucHV0X3ZhbHVlX25hbWVcIik7XG5leHBvcnQgY29uc3Qgam9iSW5wdXQgPSBmb3JtUHJvZmlsZUVkaXQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW5wdXRfdmFsdWVfcHJvZmVzc2lvblwiKTtcblxuLyoqINCY0LfQvtCx0YDQsNC20LXQvdC40LUg0LDQstCw0YLQsNGA0LAgKi9cbmV4cG9ydCBjb25zdCBhdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2F2YXRhclwiKTtcblxuXG4vKiog0KHQtdC70LXQutGC0L7RgNGLICovXG5leHBvcnQgY29uc3QgcG9wVXBBZGRDYXJkU2VsZWN0b3IgPSAnLnBvcHVwX3R5cGVfY2FyZCc7XG5leHBvcnQgY29uc3QgcG9wVXBQaG90b1NlbGVjdG9yID0gXCIucG9wdXBfdHlwZV9waG90b1wiO1xuZXhwb3J0IGNvbnN0IHBvcFVwRWRpdEF2YXRhclNlbGVjdG9yID0gJy5wb3B1cF90eXBlX2F2YXRhcic7XG5leHBvcnQgY29uc3QgcG9wVXBEZWxldGlvblNlbGVjdG9yID0gJy5wb3B1cF90eXBlX2RlbGV0ZSc7XG5leHBvcnQgY29uc3QgcG9wVXBFZGl0UHJvZmlsZVNlbGVjdG9yID0gJy5wb3B1cF90eXBlX3Byb2ZpbGUnO1xuZXhwb3J0IGNvbnN0IHByb2ZpbGVOYW1lU2VsZWN0b3IgPSBcIi5wcm9maWxlX19uYW1lXCI7XG5leHBvcnQgY29uc3QgcHJvZmlsZVByb2Zlc3Npb25TZWxlY3RvciA9IFwiLnByb2ZpbGVfX3Byb2Zlc3Npb25cIjtcbmV4cG9ydCBjb25zdCBwcm9maWxlQXZhdGFyU2VsZWN0b3IgPSBcIi5wcm9maWxlX19hdmF0YXJcIjtcbmV4cG9ydCBjb25zdCBjYXJkc0NvbnRhaW5lclNlbGVjdG9yID0gJy5lbGVtZW50c19fbGlzdCc7XG5cbi8qKiDQmtC+0L3RhNC40LMg0YEg0YHQtdC70LXQutGC0L7RgNCw0LzQuCDQtNC70Y8g0LLQsNC70LjQtNCw0YbQuNC4Ki9cbmV4cG9ydCBjb25zdCBjb25maWdWYWxpZGF0aW9uID0ge1xuICAgIGZvcm1TZWxlY3RvcjogJy5wb3B1cF9fZm9ybScsXG4gICAgaW5wdXRTZWxlY3RvcjogJy5wb3B1cF9faW5wdXQnLFxuICAgIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiAnLnBvcHVwX19zYXZlJyxcbiAgICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiAncG9wdXBfX3NhdmVfZGlzYWJsZWQnLFxuICAgIGlucHV0RXJyb3JDbGFzczogJ3BvcHVwX19pbnB1dF90eXBlX2luY29ycmVjdCcsXG4gICAgZXJyb3JDbGFzczogJ3BvcHVwX19lcnJvcl92aXNpYmxlJ1xuICB9XG5cblxuXG5cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcblxuaW1wb3J0IHsgRm9ybVZhbGlkYXRvciB9IGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyc7XG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi9jb21wb25lbnRzL0NhcmQuanMnO1xuaW1wb3J0IHsgUG9wdXBXaXRoRm9ybSB9IGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyc7XG5pbXBvcnQgeyBQb3B1cFdpdGhJbWFnZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMnO1xuaW1wb3J0IHsgUG9wdXBXaXRoRGVsZXRpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aERlbGV0aW9uLmpzJztcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VySW5mby5qcyc7XG5pbXBvcnQgeyBBcGkgfSBmcm9tICcuLi9jb21wb25lbnRzL0FwaS5qcyc7XG5cbmltcG9ydCB7XG4gIGJ1dHRvbkVkaXQsXG4gIGJ1dHRvbkFkZENhcmQsXG4gIGJ1dHRvbkF2YXRhckVkaXQsXG4gIGZvcm1BdmF0YXJFZGl0LFxuICBmb3JtQWRkQ2FyZCxcbiAgZm9ybVByb2ZpbGVFZGl0LFxuICBmb3JtUHJvZmlsZUVkaXRTdWJtaXRCdXR0b24sXG4gIGZvcm1BZGRDYXJkU3VibWl0QnV0dG9uLFxuICBmb3JtRWRpdEF2YXRhclN1Ym1pdEJ1dHRvbixcbiAgZm9ybUNvbmZpcm1EZWxldGlvblN1Ym1pdEJ1dHRvbixcbiAgbmFtZUlucHV0LFxuICBqb2JJbnB1dCxcbiAgYXZhdGFyLFxuICBjYXJkc0NvbnRhaW5lclNlbGVjdG9yLFxuICBwb3BVcEVkaXRQcm9maWxlU2VsZWN0b3IsXG4gIHBvcFVwQWRkQ2FyZFNlbGVjdG9yLFxuICBwb3BVcFBob3RvU2VsZWN0b3IsXG4gIHBvcFVwRWRpdEF2YXRhclNlbGVjdG9yLFxuICBwcm9maWxlTmFtZVNlbGVjdG9yLFxuICBwcm9maWxlUHJvZmVzc2lvblNlbGVjdG9yLFxuICBwcm9maWxlQXZhdGFyU2VsZWN0b3IsXG4gIHBvcFVwRGVsZXRpb25TZWxlY3RvcixcbiAgY29uZmlnVmFsaWRhdGlvbixcbn0gZnJvbSAnLi4vdXRpbHMvZWxlbWVudHMuanMnO1xuXG5cbi8qKiDQodC+0LfQtNCw0L3QuNC1INGN0LrQt9C10LzQv9C70Y/RgNCwIEFQSSAqL1xuY29uc3QgYXBpID0gbmV3IEFwaSh7XG4gIGJhc2VVcmw6ICdodHRwczovL21lc3RvLm5vbW9yZXBhcnRpZXMuY28vdjEvY29ob3J0LTU1JyxcbiAgaGVhZGVyczoge1xuICAgIGF1dGhvcml6YXRpb246ICdhNGM1MWFjYi00NmYwLTRmNTItYjVlMi1mN2NiNTExMGFkYWEnLFxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgfVxufSk7XG5cblxuLyoqINCh0L7Qt9C00LDRgtGMINC/0L7Qv9Cw0L8g0YEg0LrQsNGA0YLQuNC90LrQvtC5ICovXG5jb25zdCBwb3B1cFpvb20gPSBuZXcgUG9wdXBXaXRoSW1hZ2UocG9wVXBQaG90b1NlbGVjdG9yKTtcblxuXG4vKiog0KHQvtC30LTQsNGC0Ywg0LLQsNC70LjQtNCw0YLQvtGA0Ysg0YTQvtGA0LwgKi9cbmNvbnN0IGZvcm1Qcm9maWxlRWRpdFZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKGNvbmZpZ1ZhbGlkYXRpb24sIGZvcm1Qcm9maWxlRWRpdCk7XG5jb25zdCBmb3JtQWRkQ2FyZFZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKGNvbmZpZ1ZhbGlkYXRpb24sIGZvcm1BZGRDYXJkKTtcbmNvbnN0IGZvcm1FZGl0aW5nQXZhdGFyVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoY29uZmlnVmFsaWRhdGlvbiwgZm9ybUF2YXRhckVkaXQpO1xuXG5cbi8qKiDQodC+0LfQtNCw0YLRjCDQv9GD0YHRgtGD0Y4g0YHQtdC60YbQuNGOICovXG5jb25zdCBzZWN0aW9uID0gbmV3IFNlY3Rpb24oY2FyZHNDb250YWluZXJTZWxlY3Rvcik7XG5cblxuLyoqINCk0YPQvdC60YbQuNGPINCz0LXQvdC10YDQsNGG0LjQuCDQvdC+0LLQvtC5INC60LDRgNGC0L7Rh9C60LggKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhcmQob2JqZWN0KSB7XG4gIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChvYmplY3QsXG4gICAgJyNjYXJkJyxcbiAgICAvKiog0KTRg9C90LrRhtC40Y8t0YDQtdCw0LrRhtC40Y8g0L3QsNC20LDRgtC40Y8g0L3QsCDRhNC+0YLQviAqL1xuICAgIChuYW1lLCBsaW5rKSA9PiB7IHBvcHVwWm9vbS5vcGVuKG5hbWUsIGxpbmspIH0sXG4gICAgLyoqINCk0YPQvdC60YbQuNGPLdGA0LXQsNC60YbQuNGPINC90LDQttCw0YLQuNGPINC90LAg0LrQvtGA0LfQuNC90YMgKi9cbiAgICAoaWQsIGNhcmQpID0+IHtcbiAgICAgIHBvcHVwRGVsZXRlQ2FyZC5vcGVuKGlkLCBjYXJkKTtcbiAgICB9LFxuICAgIC8qKiDQpNGD0L3QutGG0LjRjy3RgNC10LDQutGG0LjRjyDQvdCw0LbQsNGC0LjRjyDQvdCwINC70LDQudC6ICovXG4gICAgKGlkKSA9PiB7XG4gICAgICBpZiAoY2FyZC5pc0xpa2VkKCkpIHtcbiAgICAgICAgYXBpLmRlbGV0ZUxpa2UoaWQpXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY2FyZC5zZXRMaWtlcyhyZXMubGlrZXMpXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICB9KTs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcGkuYWRkTGlrZShpZClcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBjYXJkLnNldExpa2VzKHJlcy5saWtlcylcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIH0pOztcbiAgICAgIH1cbiAgICB9KVxuICByZXR1cm4gY2FyZC5nZW5lcmF0ZUNhcmQoKTtcbn1cblxuXG4vKiog0K3QutC30LXQvNC/0LvRj9GAINC/0L7Qv9Cw0L/QsCDQtNC70Y8g0LTQvtCx0LDQstC70LXQvdC40Y8g0L3QvtCy0L7Qs9C+INGE0L7RgtC+ICjRgSDRgNC10LDQutGG0LjQtdC5INC90LAg0YHQsNC80LHQuNGCKSAqL1xuY29uc3QgcG9wdXBDYXJkID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xuICBoYW5kbGVGb3JtU3VibWl0OiAoeyBwbGFjZSwgbGluayB9KSA9PiB7XG4gICAgZm9ybUFkZENhcmRTdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAn0KHQvtGF0YDQsNC90LXQvdC40LUuLi4nO1xuICAgIGFwaS5hZGRDYXJkKHBsYWNlLCBsaW5rKS50aGVuKChyZXMpID0+IHtcbiAgICAgIC8qKiDQodC+0LfQtNCw0L3QuNC1INC60LDRgNGC0L7Rh9C60Lgg0LjQtyDQv9C+0LvRg9GH0LXQvdC90YvRhSDQtNCw0L3QvdGL0YUg0YEg0YHQtdGA0LLQtdGA0LAgKi9cbiAgICAgIGNvbnN0IGNhcmQgPSBjcmVhdGVDYXJkKHtcbiAgICAgICAgbmFtZTogcmVzLm5hbWUsXG4gICAgICAgIGxpbms6IHJlcy5saW5rLFxuICAgICAgICBsaWtlczogcmVzLmxpa2VzLFxuICAgICAgICBpZDogcmVzLl9pZCxcbiAgICAgICAgdXNlcklkOiB1c2VySWQsXG4gICAgICAgIG93bmVySWQ6IHJlcy5vd25lci5faWQsXG4gICAgICB9KTtcbiAgICAgIHNlY3Rpb24uYWRkSXRlbShjYXJkKTtcbiAgICAgIHBvcHVwQ2FyZC5jbG9zZSgpO1xuICAgICAgZm9ybUFkZENhcmRTdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAn0KHQvtGF0YDQsNC90LjRgtGMJztcbiAgICAgIGZvcm1BZGRDYXJkVmFsaWRhdG9yLmJsb2NrQnV0dG9uKCk7XG4gICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfVxufSwgcG9wVXBBZGRDYXJkU2VsZWN0b3IpO1xuXG5cbi8qKiDQrdC60LfQtdC80L/Qu9GP0YAg0L7RgtC+0LHRgNCw0LbQsNC10LzQvtCz0L4g0LDQutC60LDRg9C90YLQsCAqL1xuY29uc3QgdXNlckluZm8gPSBuZXcgVXNlckluZm8oXG4gIHtcbiAgICBuYW1lU2VsZWN0b3I6IHByb2ZpbGVOYW1lU2VsZWN0b3IsXG4gICAgcHJvZmVzc2lvblNlbGVjdG9yOiBwcm9maWxlUHJvZmVzc2lvblNlbGVjdG9yLFxuICAgIGF2YXRhclNlbGVjdG9yOiBwcm9maWxlQXZhdGFyU2VsZWN0b3JcbiAgfSk7XG5cblxuLyoqINCt0LrQt9C10LzQv9C70Y/RgCDQv9C+0L/QsNC/0LAg0LTQu9GPINGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y8g0LjQvNC10L3QuCDQuCDQvtC/0LjRgdCw0L3QuNGPICjRgSDRgNC10LDQutGG0LjQtdC5INC90LAg0YHQsNC80LHQuNGCKSAqL1xuY29uc3QgcG9wdXBQcm9maWxlID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xuICBoYW5kbGVGb3JtU3VibWl0OiAoZGF0YSkgPT4ge1xuICAgIGZvcm1Qcm9maWxlRWRpdFN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICfQodC+0YXRgNCw0L3QtdC90LjQtS4uLic7XG4gICAgYXBpLmVkaXRQcm9maWxlKGRhdGEubmFtZSwgZGF0YS5wcm9mZXNzaW9uKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB1c2VySW5mby5zZXRVc2VySW5mbyh7XG4gICAgICAgICAgdXNlcm5hbWU6IHJlcy5uYW1lLFxuICAgICAgICAgIHVzZXJwcm9mZXNzaW9uOiByZXMuYWJvdXQsXG4gICAgICAgIH0pXG4gICAgICAgIGF2YXRhci5zcmMgPSByZXMuYXZhdGFyO1xuICAgICAgICBwb3B1cFByb2ZpbGUuY2xvc2UoKTtcbiAgICAgICAgZm9ybVByb2ZpbGVFZGl0U3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ9Ch0L7RhdGA0LDQvdC40YLRjCc7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pOztcbiAgfVxufSwgcG9wVXBFZGl0UHJvZmlsZVNlbGVjdG9yKTtcblxuXG4vKiog0K3QutC30LXQvNC/0LvRj9GAINC/0L7Qv9Cw0L/QsCDRgSDQuNC30LzQtdC90LXQvdC40LXQvCDQsNCy0LDRgtCw0YDQsCAgKi9cbmNvbnN0IHBvcHVwQXZhdGFyID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xuICBoYW5kbGVGb3JtU3VibWl0OiAoZGF0YSkgPT4ge1xuICAgIGZvcm1FZGl0QXZhdGFyU3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ9Ch0L7RhdGA0LDQvdC10L3QuNC1Li4uJztcbiAgICBhcGkuZWRpdEF2YXRhcihkYXRhLmF2YXRhcilcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgYXZhdGFyLnNyYyA9IHJlcy5hdmF0YXJcbiAgICAgICAgcG9wdXBBdmF0YXIuY2xvc2UoKTtcbiAgICAgICAgZm9ybUVkaXRBdmF0YXJTdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAn0KHQvtGF0YDQsNC90LjRgtGMJztcbiAgICAgICAgZm9ybUVkaXRpbmdBdmF0YXJWYWxpZGF0b3IuYmxvY2tCdXR0b24oKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cbn0sIHBvcFVwRWRpdEF2YXRhclNlbGVjdG9yKTtcblxuXG4vKiog0K3QutC30LXQvNC/0LvRj9GAINC/0L7Qv9Cw0L/QsCDQtNC70Y8g0L/QvtC00YLQstC10YDQttC00LXQvdC40Y8g0YPQtNCw0LvQtdC90LjRjyAgKi9cbmNvbnN0IHBvcHVwRGVsZXRlQ2FyZCA9IG5ldyBQb3B1cFdpdGhEZWxldGlvbih7XG4gIGhhbmRsZUZvcm1TdWJtaXQ6IChjYXJkSWQsIGNhcmQpID0+IHtcbiAgICBmb3JtQ29uZmlybURlbGV0aW9uU3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCLQo9C00LDQu9C10L3QuNC1Li4uXCI7XG4gICAgYXBpLmRlbGV0ZUNhcmQoY2FyZElkKS50aGVuKCgpID0+IHtcbiAgICAgIGNhcmQucmVtb3ZlKCk7XG4gICAgICBmb3JtQ29uZmlybURlbGV0aW9uU3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCLQlNCwXCI7XG4gICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfVxufSwgcG9wVXBEZWxldGlvblNlbGVjdG9yKTtcblxuXG5sZXQgdXNlcklkID0gJyc7XG5cbi8qKiDQktGL0LPRgNGD0LfQuNGC0Ywg0LjQvNGPLCDQvtC/0LjRgdCw0L3QuNC1INC4INCw0LLQsNGC0LDRgCDQuNC3INGB0LXRgNCy0LXRgNCwICovXG5hcGkuZ2V0UHJvZmlsZSgpXG4gIC50aGVuKChyZXMpID0+IHtcbiAgICB1c2VySW5mby5zZXRVc2VySW5mbyh7IHVzZXJuYW1lOiByZXMubmFtZSwgdXNlcnByb2Zlc3Npb246IHJlcy5hYm91dCwgdXNlcmF2YXRhcjogcmVzLmF2YXRhciB9KTtcbiAgICB1c2VySWQgPSByZXMuX2lkO1xuICB9KVxuICAuY2F0Y2goKGVycikgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH0pO1xuXG5cbi8qKiDQn9C+0L7Rh9C10YDRkdC00L3QviDQvtGC0L7QsdGA0LDQt9C40YLRjCDQvdCwINGB0YLRgNCw0L3QuNGG0LUg0LLRgdC1INC60LDRgNGC0L7Rh9C60Lgg0LjQtyDRgdC10YDQstC10YDQsCAqL1xuUHJvbWlzZS5hbGwoW2FwaS5nZXRQcm9maWxlKCksIGFwaS5nZXRJbml0aWFsQ2FyZHMoKV0pXG4gIC50aGVuKChbcHJvZmlsZUluZm8sIGNhcmRMaXN0XSkgPT4ge1xuICAgIGNhcmRMaXN0LmZvckVhY2goKHJlcykgPT4ge1xuICAgICAgY29uc3QgY2FyZCA9IGNyZWF0ZUNhcmQoe1xuICAgICAgICBuYW1lOiByZXMubmFtZSxcbiAgICAgICAgbGluazogcmVzLmxpbmssXG4gICAgICAgIGxpa2VzOiByZXMubGlrZXMsXG4gICAgICAgIGlkOiByZXMuX2lkLFxuICAgICAgICB1c2VySWQ6IHByb2ZpbGVJbmZvLl9pZCxcbiAgICAgICAgb3duZXJJZDogcmVzLm93bmVyLl9pZCxcbiAgICAgIH0pO1xuICAgICAgc2VjdGlvbi5hZGRJbml0aWFsSXRlbShjYXJkKVxuICAgIH0pXG4gIH0pXG4gIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgfSk7XG5cbi8qKiDQndCw0LbQsNGC0LjQtSDQvdCwINC60LDRgNCw0L3QtNCw0Ygg0LTQu9GPINC40LfQvNC10L3QtdC90LjRjyDQv9GA0L7RhNC40LvRjyAqL1xuYnV0dG9uRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBmb3JtUHJvZmlsZUVkaXRWYWxpZGF0b3IuY2xlYXJFcnJvcnMoKTtcbiAgY29uc3QgdXNlckluZm9EYXRhID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcbiAgbmFtZUlucHV0LnZhbHVlID0gdXNlckluZm9EYXRhLm5hbWU7XG4gIGpvYklucHV0LnZhbHVlID0gdXNlckluZm9EYXRhLnByb2Zlc3Npb247XG4gIHBvcHVwUHJvZmlsZS5vcGVuKCk7XG59KTtcblxuXG4vKiog0J3QsNC20LDRgtC40LUg0L3QsCBbK10g0LTQu9GPINC00L7QsdCw0LLQu9C10L3QuNGPINC60LDRgNGC0L7Rh9C60LggKi9cbmJ1dHRvbkFkZENhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgZm9ybUFkZENhcmRWYWxpZGF0b3IuY2xlYXJFcnJvcnMoKTtcbiAgcG9wdXBDYXJkLm9wZW4oKTtcbn0pO1xuXG5cbi8qKiDQndCw0LbQsNGC0LjQtSDQvdCwINCw0LLQsNGC0LDRgCDQtNC70Y8g0LjQt9C80LXQvdC10L3QuNGPINGE0L7RgtC+ICovXG5idXR0b25BdmF0YXJFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGZvcm1FZGl0aW5nQXZhdGFyVmFsaWRhdG9yLmNsZWFyRXJyb3JzKCk7XG4gIHBvcHVwQXZhdGFyLm9wZW4oKTtcbn0pO1xuXG5cbi8qKiDQkNC60YLQuNCy0LjRgNC+0LLQsNGC0Ywg0YHQu9GD0YjQsNGC0LXQu9C4INGDINC/0L7Qv9Cw0L/QvtCyKi9cbnBvcHVwUHJvZmlsZS5zZXRFdmVudExpc3RlbmVycygpO1xucG9wdXBDYXJkLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5wb3B1cFpvb20uc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbnBvcHVwQXZhdGFyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5wb3B1cERlbGV0ZUNhcmQuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuXG4vKiog0J/QvtC00LrQu9GO0YfQtdC90LjQtSDQv9GA0L7QstC10YDQutC4INCy0LDQu9C40LTQvdC+0YHRgtC4INGE0L7RgNC8ICovXG5mb3JtUHJvZmlsZUVkaXRWYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuZm9ybUFkZENhcmRWYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuZm9ybUVkaXRpbmdBdmF0YXJWYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuXG4iXSwibmFtZXMiOlsiQXBpIiwiYmFzZVVybCIsImhlYWRlcnMiLCJfYmFzZVVybCIsIl9oZWFkZXJzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwib2siLCJqc29uIiwiUHJvbWlzZSIsInJlamVjdCIsInN0YXR1cyIsIm5hbWUiLCJwcm9mZXNzaW9uIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhYm91dCIsImxpbmsiLCJjYXJkSWQiLCJhdmF0YXIiLCJDYXJkIiwiY2FyZERhdGEiLCJ0ZW1wbGF0ZVNlbGVjdG9yIiwiaGFuZGxlQ2FyZENsaWNrIiwiaGFuZGxlRGVsZXRlUG9wdXAiLCJoYW5kbGVMaWtlQ2xpY2siLCJfbmFtZSIsIl9saW5rIiwiX2lkIiwiaWQiLCJfbGlrZXMiLCJsaWtlcyIsIl91c2VySWQiLCJ1c2VySWQiLCJfb3duZXJJZCIsIm93bmVySWQiLCJfdGVtcGxhdGVTZWxlY3RvciIsIl9oYW5kbGVDYXJkQ2xpY2siLCJfaGFuZGxlRGVsZXRlUG9wdXAiLCJfaGFuZGxlTGlrZUNsaWNrIiwiY2FyZEVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiX2VsZW1lbnQiLCJyZW1vdmUiLCJfZWxlbWVudExpa2UiLCJjbGFzc0xpc3QiLCJhZGQiLCJsaWtlQm9vbCIsImZpbmQiLCJ1c2VyIiwibmV3TGlrZXMiLCJfbGlrZXNDb3VudGVyIiwidGV4dENvbnRlbnQiLCJsZW5ndGgiLCJpc0xpa2VkIiwiX3B1dExpa2UiLCJfbm9MaWtlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9lbGVtZW50RGVsZXRlIiwiX2VsZW1lbnRQaG90byIsIl9nZXRUZW1wbGF0ZSIsIl9lbGVtZW50TmFtZSIsInNyYyIsImFsdCIsIl9zZXRFdmVudExpc3RlbmVycyIsInNldExpa2VzIiwiRm9ybVZhbGlkYXRvciIsImNvbmZpZyIsImZvcm1FbGVtZW50IiwiX2NvbmZpZyIsIl9mb3JtU2VsZWN0b3IiLCJmb3JtU2VsZWN0b3IiLCJfaW5wdXRTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJfc3VibWl0QnV0dG9uU2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsIl9pbnB1dEVycm9yQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJfZXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJfZm9ybUVsZW1lbnQiLCJfaW5wdXRMaXN0Iiwic29tZSIsImlucHV0RWxlbWVudCIsImNoZWNrVmFsaWRpdHkiLCJfYnV0dG9uRWxlbWVudCIsImRpc2FibGVkIiwicmVtb3ZlQXR0cmlidXRlIiwiX2hhc0ludmFsaWRJbnB1dCIsImJsb2NrQnV0dG9uIiwiX3VubG9ja0J1dHRvbiIsImVycm9yRWxlbWVudCIsInZhbGlkYXRpb25NZXNzYWdlIiwiX2hpZGVJbnB1dEVycm9yIiwiX3Nob3dJbnB1dEVycm9yIiwiZm9yRWFjaCIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfdG9nZ2xlQnV0dG9uU3RhdGUiLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiX3BvcHVwRWxlbWVudCIsIl9oYW5kbGVFc2NDbG9zZSIsImJpbmQiLCJldnQiLCJrZXkiLCJjbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiY29udGFpbnMiLCJQb3B1cFdpdGhEZWxldGlvbiIsImhhbmRsZUZvcm1TdWJtaXQiLCJfaGFuZGxlRm9ybVN1Ym1pdCIsIl9wb3B1cEVsZW1lbnRGb3JtIiwiY2FyZCIsIl9jYXJkSWQiLCJfY2FyZCIsInByZXZlbnREZWZhdWx0IiwiUG9wdXBXaXRoRm9ybSIsImlucHV0cyIsImlucHV0IiwidmFsdWUiLCJyZXNldCIsIl9nZXRJbnB1dFZhbHVlcyIsIlBvcHVwV2l0aEltYWdlIiwiX3Bob3RvSW1hZ2UiLCJfcGhvdG9DYXB0aW9uIiwiU2VjdGlvbiIsImNvbnRhaW5lclNlbGVjdG9yIiwiX2NvbnRhaW5lciIsImlubmVySFRNTCIsImVsZW1lbnQiLCJwcmVwZW5kIiwiYXBwZW5kIiwiVXNlckluZm8iLCJuYW1lU2VsZWN0b3IiLCJwcm9mZXNzaW9uU2VsZWN0b3IiLCJhdmF0YXJTZWxlY3RvciIsIl9wcm9maWxlTmFtZSIsIl9wcm9maWxlUHJvZmVzc2lvbiIsIl9wcm9maWxlQXZhdGFyIiwidXNlcm5hbWUiLCJ1c2VycHJvZmVzc2lvbiIsInVzZXJhdmF0YXIiLCJidXR0b25FZGl0IiwiYnV0dG9uQWRkQ2FyZCIsImJ1dHRvbkF2YXRhckVkaXQiLCJwb3BVcEVkaXRQcm9maWxlIiwicG9wVXBBZGRDYXJkIiwicG9wVXBFZGl0QXZhdGFyIiwicG9wVXBEZWxldGlvbiIsImZvcm1Qcm9maWxlRWRpdCIsImZvcm1BdmF0YXJFZGl0IiwiZm9ybUFkZENhcmQiLCJmb3JtUHJvZmlsZUVkaXRTdWJtaXRCdXR0b24iLCJmb3JtQWRkQ2FyZFN1Ym1pdEJ1dHRvbiIsImZvcm1FZGl0QXZhdGFyU3VibWl0QnV0dG9uIiwiZm9ybUNvbmZpcm1EZWxldGlvblN1Ym1pdEJ1dHRvbiIsIm5hbWVJbnB1dCIsImpvYklucHV0IiwicG9wVXBBZGRDYXJkU2VsZWN0b3IiLCJwb3BVcFBob3RvU2VsZWN0b3IiLCJwb3BVcEVkaXRBdmF0YXJTZWxlY3RvciIsInBvcFVwRGVsZXRpb25TZWxlY3RvciIsInBvcFVwRWRpdFByb2ZpbGVTZWxlY3RvciIsInByb2ZpbGVOYW1lU2VsZWN0b3IiLCJwcm9maWxlUHJvZmVzc2lvblNlbGVjdG9yIiwicHJvZmlsZUF2YXRhclNlbGVjdG9yIiwiY2FyZHNDb250YWluZXJTZWxlY3RvciIsImNvbmZpZ1ZhbGlkYXRpb24iLCJhcGkiLCJhdXRob3JpemF0aW9uIiwicG9wdXBab29tIiwiZm9ybVByb2ZpbGVFZGl0VmFsaWRhdG9yIiwiZm9ybUFkZENhcmRWYWxpZGF0b3IiLCJmb3JtRWRpdGluZ0F2YXRhclZhbGlkYXRvciIsInNlY3Rpb24iLCJjcmVhdGVDYXJkIiwib2JqZWN0Iiwib3BlbiIsInBvcHVwRGVsZXRlQ2FyZCIsImRlbGV0ZUxpa2UiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiYWRkTGlrZSIsImdlbmVyYXRlQ2FyZCIsInBvcHVwQ2FyZCIsInBsYWNlIiwiYWRkQ2FyZCIsIm93bmVyIiwiYWRkSXRlbSIsInVzZXJJbmZvIiwicG9wdXBQcm9maWxlIiwiZGF0YSIsImVkaXRQcm9maWxlIiwic2V0VXNlckluZm8iLCJwb3B1cEF2YXRhciIsImVkaXRBdmF0YXIiLCJkZWxldGVDYXJkIiwiZ2V0UHJvZmlsZSIsImFsbCIsImdldEluaXRpYWxDYXJkcyIsInByb2ZpbGVJbmZvIiwiY2FyZExpc3QiLCJhZGRJbml0aWFsSXRlbSIsImNsZWFyRXJyb3JzIiwidXNlckluZm9EYXRhIiwiZ2V0VXNlckluZm8iLCJzZXRFdmVudExpc3RlbmVycyIsImVuYWJsZVZhbGlkYXRpb24iXSwic291cmNlUm9vdCI6IiJ9