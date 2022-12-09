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
  formProfileEditValidator.unlockButton();
  var userInfoData = userInfo.getUserInfo();
  _utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.nameInput.value = userInfoData.name;
  _utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.jobInput.value = userInfoData.profession;
  popupProfile.open();
});

/** Нажатие на [+] для добавления карточки */
_utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.buttonAddCard.addEventListener("click", function () {
  formAddCardValidator.blockButton();
  formAddCardValidator.clearErrors();
  popupCard.open();
});

/** Нажатие на аватар для изменения фото */
_utils_elements_js__WEBPACK_IMPORTED_MODULE_9__.buttonAvatarEdit.addEventListener("click", function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvQXBpLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aERlbGV0aW9uLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3V0aWxzL2VsZW1lbnRzLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21lc3RvLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiDQmtC+0L3RgdGC0YDRg9C60YLQvtGAIEFQSSAqL1xuZXhwb3J0IGNsYXNzIEFwaSB7XG4gIGNvbnN0cnVjdG9yKHsgYmFzZVVybCwgaGVhZGVycyB9KSB7XG4gICAgdGhpcy5fYmFzZVVybCA9IGJhc2VVcmw7XG4gICAgdGhpcy5faGVhZGVycyA9IGhlYWRlcnM7XG4gIH1cblxuICAvKiog0JfQsNC/0YDQvtGB0LjRgtGMINC00LDQvdC90YvQtSDQviDRgdCy0L7RkdC8INC/0YDQvtGE0LjQu9C1ICovXG4gIGdldFByb2ZpbGUoKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L3VzZXJzL21lYCwge1xuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYNCe0YjQuNCx0LrQsDogJHtyZXMuc3RhdHVzfWApO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKiog0JfQsNC/0YDQvtGB0LjRgtGMINCy0YHQtSDQutCw0YDRgtC+0YfQutC4INGBINGB0LXRgNCy0LXRgNCwICovXG4gIGdldEluaXRpYWxDYXJkcygpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vY2FyZHNgLCB7XG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYNCe0YjQuNCx0LrQsDogJHtyZXMuc3RhdHVzfWApO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKiog0J7RgtC/0YDQsNCy0LjRgtGMINC40LfQvNC10L3QtdC90LjRjyDQuNC90YTQvtGA0LzQsNGG0LjQuCDQviDRgdC10LHQtSAqL1xuICBlZGl0UHJvZmlsZShuYW1lLCBwcm9mZXNzaW9uKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L3VzZXJzL21lYCwge1xuICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgYWJvdXQ6IHByb2Zlc3Npb25cbiAgICAgIH0pXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChg0J7RiNC40LHQutCwOiAke3Jlcy5zdGF0dXN9YCk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qKiDQlNC+0LHQsNCy0LjRgtGMINGB0LLQvtGOINC60LDRgNGC0L7Rh9C60YMg0L3QsCDRgdC10YDQstC10YAgKi9cbiAgYWRkQ2FyZChuYW1lLCBsaW5rKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBsaW5rOiBsaW5rXG4gICAgICB9KVxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYNCe0YjQuNCx0LrQsDogJHtyZXMuc3RhdHVzfWApO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKiog0KPQtNCw0LvQuNGC0Ywg0LrQsNGA0YLQvtGH0LrRgyDRgSDRgdC10YDQstC10YDQsCAqL1xuICBkZWxldGVDYXJkKGNhcmRJZCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfS9jYXJkcy8ke2NhcmRJZH1gLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGDQntGI0LjQsdC60LA6ICR7cmVzLnN0YXR1c31gKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLyoqINCj0LTQsNC70LjRgtGMINGB0LLQvtC5INC70LDQudC6ICovXG4gIGRlbGV0ZUxpa2UoY2FyZElkKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX2Jhc2VVcmx9L2NhcmRzLyR7Y2FyZElkfS9saWtlc2AsIHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYNCe0YjQuNCx0LrQsDogJHtyZXMuc3RhdHVzfWApO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKiog0JTQvtCx0LDQstC40YLRjCDRgdCy0L7QuSDQu9Cw0LnQuiAqL1xuICBhZGRMaWtlKGNhcmRJZCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfS9jYXJkcy8ke2NhcmRJZH0vbGlrZXNgLCB7XG4gICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGDQntGI0LjQsdC60LA6ICR7cmVzLnN0YXR1c31gKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgICAvKiog0J7RgtC/0YDQsNCy0LjRgtGMINGB0LLQvtC5INCw0LLQsNGC0LDRgCAqL1xuICAgIGVkaXRBdmF0YXIoYXZhdGFyKSB7XG4gICAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fYmFzZVVybH0vdXNlcnMvbWUvYXZhdGFyYCwge1xuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBhdmF0YXI6IGF2YXRhclxuICAgICAgICB9KVxuICAgICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYNCe0YjQuNCx0LrQsDogJHtyZXMuc3RhdHVzfWApO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxufVxuXG5cblxuIiwiZXhwb3J0IGNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3RvcihjYXJkRGF0YSwgdGVtcGxhdGVTZWxlY3RvciwgaGFuZGxlQ2FyZENsaWNrLCBoYW5kbGVEZWxldGVQb3B1cCwgaGFuZGxlTGlrZUNsaWNrKSB7XG4gICAgdGhpcy5fbmFtZSA9IGNhcmREYXRhLm5hbWU7XG4gICAgdGhpcy5fbGluayA9IGNhcmREYXRhLmxpbms7XG4gICAgdGhpcy5faWQgPSBjYXJkRGF0YS5pZDtcbiAgICB0aGlzLl9saWtlcyA9IGNhcmREYXRhLmxpa2VzO1xuICAgIHRoaXMuX3VzZXJJZCA9IGNhcmREYXRhLnVzZXJJZDtcbiAgICB0aGlzLl9vd25lcklkID0gY2FyZERhdGEub3duZXJJZDtcbiAgICB0aGlzLl90ZW1wbGF0ZVNlbGVjdG9yID0gdGVtcGxhdGVTZWxlY3RvcjtcbiAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sgPSBoYW5kbGVDYXJkQ2xpY2s7XG4gICAgdGhpcy5faGFuZGxlRGVsZXRlUG9wdXAgPSBoYW5kbGVEZWxldGVQb3B1cDtcbiAgICB0aGlzLl9oYW5kbGVMaWtlQ2xpY2sgPSBoYW5kbGVMaWtlQ2xpY2s7XG4gIH1cblxuICAvKiog0J/QvtC70YPRh9C40YLRjCDRgtC10LzQv9C70LXQudGCICovXG4gIF9nZXRUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fdGVtcGxhdGVTZWxlY3RvcilcbiAgICAgIC5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudHNfX2NhcmRcIilcbiAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgcmV0dXJuIGNhcmRFbGVtZW50O1xuICB9XG5cbiAgLyoqINCj0LTQsNC70LjRgtGMINC60LDRgNGC0L7Rh9C60YMgKi9cbiAgX2hhbmRsZURlbGV0ZUNhcmQoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuXG4gIC8qKiDQm9Cw0LnQuiDQv9C+0YHRgtCw0LLQsNC70LXQvSAqL1xuICBfcHV0TGlrZSgpIHtcbiAgICB0aGlzLl9lbGVtZW50TGlrZS5jbGFzc0xpc3QuYWRkKFwiZWxlbWVudF9fbGlrZV9hY3RpdmVcIik7XG4gIH1cblxuICAvKiog0J3QtdGCINC70LDQudC60LAgKi9cbiAgX25vTGlrZSgpIHtcbiAgICB0aGlzLl9lbGVtZW50TGlrZS5jbGFzc0xpc3QucmVtb3ZlKFwiZWxlbWVudF9fbGlrZV9hY3RpdmVcIik7XG4gIH1cblxuICAvKiog0J/RgNC+0LLQtdGA0LrQsCwg0YHRgtC+0LjRgiDQu9C4INC90LDRiCDQu9Cw0LnQuiAqL1xuICBpc0xpa2VkKCkge1xuICAgIGNvbnN0IGxpa2VCb29sID0gdGhpcy5fbGlrZXMuZmluZCh1c2VyID0+IHVzZXIuX2lkID09IHRoaXMuX3VzZXJJZCk7XG4gICAgcmV0dXJuIGxpa2VCb29sO1xuICB9XG5cbiAgLyoqINCY0LfQvNC10L3QuNGC0Ywg0YHRh9GR0YLRh9C40Log0Lgg0YbQstC10YIg0L/RgNC4INC90LDQttCw0YLQuNC4INC90LAg0LvQsNC50LogKi9cbiAgc2V0TGlrZXMobmV3TGlrZXMpIHtcbiAgICB0aGlzLl9saWtlcyA9IG5ld0xpa2VzO1xuICAgIHRoaXMuX2xpa2VzQ291bnRlci50ZXh0Q29udGVudCA9IHRoaXMuX2xpa2VzLmxlbmd0aDtcbiAgICAvKiog0JzQtdC90Y/RgtGMINGG0LLQtdGCICovXG4gICAgaWYgKHRoaXMuaXNMaWtlZCgpKSB7XG4gICAgICB0aGlzLl9wdXRMaWtlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX25vTGlrZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiDQodC70YPRiNCw0YLQtdC70LggKi9cbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIC8qKiDQm9Cw0LnQuiAqL1xuICAgIHRoaXMuX2VsZW1lbnRMaWtlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLl9oYW5kbGVMaWtlQ2xpY2sodGhpcy5faWQpO1xuICAgIH0pXG4gICAgLyoqINCa0L7RgNC30LjQvdCwICovXG4gICAgdGhpcy5fZWxlbWVudERlbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlRGVsZXRlUG9wdXAodGhpcy5faWQsIHRoaXMuX2VsZW1lbnQpO1xuICAgIH0pXG4gICAgLyoqINCg0LDRgdC60YDRi9GC0Ywg0YTQvtGC0L4gKi9cbiAgICB0aGlzLl9lbGVtZW50UGhvdG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sodGhpcy5fbmFtZSwgdGhpcy5fbGluayk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqINCh0LPQtdC90LXRgNC40YDQvtCy0LDRgtGMINC60LDRgNGC0YMgKi9cbiAgZ2VuZXJhdGVDYXJkKCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xuICAgIHRoaXMuX2VsZW1lbnRQaG90byA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX3Bob3RvJyk7XG4gICAgdGhpcy5fZWxlbWVudExpa2UgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19saWtlJyk7XG4gICAgdGhpcy5fZWxlbWVudERlbGV0ZSA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX2RlbGV0ZScpO1xuICAgIHRoaXMuX2xpa2VzQ291bnRlciA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX2xpa2UtY291bnRlcicpO1xuICAgIHRoaXMuX2VsZW1lbnROYW1lID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudF9fbmFtZScpO1xuICAgIHRoaXMuX2VsZW1lbnRQaG90by5zcmMgPSB0aGlzLl9saW5rO1xuICAgIHRoaXMuX2VsZW1lbnRQaG90by5hbHQgPSB0aGlzLl9uYW1lO1xuICAgIHRoaXMuX2VsZW1lbnROYW1lLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuc2V0TGlrZXModGhpcy5fbGlrZXMpO1xuICAgIC8qKiDQo9C00LDQu9GP0YLRjCDQutC+0YDQt9C40L3QutGDINC00LvRjyDRh9GD0LbQuNGFINC60LDRgNGC0L7Rh9C10LogKi9cbiAgICBpZiAodGhpcy5fdXNlcklkICE9PSB0aGlzLl9vd25lcklkKSB7XG4gICAgICB0aGlzLl9lbGVtZW50RGVsZXRlLnJlbW92ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3Rvcihjb25maWcsIGZvcm1FbGVtZW50KSB7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuX2Zvcm1TZWxlY3RvciA9IGNvbmZpZy5mb3JtU2VsZWN0b3I7XG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IGNvbmZpZy5pbnB1dFNlbGVjdG9yO1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gY29uZmlnLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBjb25maWcuaW5hY3RpdmVCdXR0b25DbGFzcztcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBjb25maWcuaW5wdXRFcnJvckNsYXNzO1xuICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBjb25maWcuZXJyb3JDbGFzcztcbiAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGZvcm1FbGVtZW50O1xuICB9XG5cbiAgLyoqINCf0YDQvtCy0LXRgNC60LAg0L3QsCDQvdCw0LvQuNGH0LjQtSDQvdC10LLQtdGA0L3Ri9GFINC/0L7Qu9C10Lkg0LIg0YTQvtGA0LzQtSAqL1xuICBfaGFzSW52YWxpZElucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnB1dExpc3Quc29tZShmdW5jdGlvbiAoaW5wdXRFbGVtZW50KSB7XG4gICAgICByZXR1cm4gaW5wdXRFbGVtZW50LmNoZWNrVmFsaWRpdHkoKSA9PT0gZmFsc2U7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqINCR0LvQvtC60LjRgNC+0LLQutCwINC60L3QvtC/0LrQuCAqL1xuICBibG9ja0J1dHRvbigpIHtcbiAgICB0aGlzLl9idXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICAvKiog0KDQsNC30LHQu9C+0LrQuNGA0L7QstC60LAg0LrQvdC+0L/QutC4ICovXG4gIHVubG9ja0J1dHRvbigpIHtcbiAgICB0aGlzLl9idXR0b25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gIH1cblxuICAvKiog0KDQtdCw0LrRhtC40Y8g0LrQvdC+0L/QutC4INC90LAg0L3QtdCy0LXRgNC90YvQtSDQv9C+0LvRjyAqL1xuICBfdG9nZ2xlQnV0dG9uU3RhdGUoKSB7XG4gICAgaWYgKHRoaXMuX2hhc0ludmFsaWRJbnB1dCgpKSB7XG4gICAgICB0aGlzLmJsb2NrQnV0dG9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudW5sb2NrQnV0dG9uKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqINCf0L7QutCw0LfQsNGC0Ywg0L7RiNC40LHQutGDINC00LvRjyDQvdC10LLQtdGA0L3QvtCz0L4g0LjQvdC/0YPRgtCwICovXG4gIF9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYCk7XG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKVxuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZTtcbiAgfTtcblxuICAvKiog0KHQutGA0YvRgtGMINC+0YjQuNCx0LrRgyDQtNC70Y8g0LLQtdGA0L3QvtCz0L4g0LjQvdC/0YPRgtCwICovXG4gIF9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYCk7XG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcbiAgfTtcblxuICAvKiog0JLQsNC70LjQtNCw0YbQuNGPINC/0L7Qu9GPICovXG4gIF9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KSB7XG4gICAgaWYgKGlucHV0RWxlbWVudC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICAvKiog0KHQsdGA0L7RgdC40YLRjCDRgdC+0L7QsdGJ0LXQvdC40Y8g0LLQsNC70LjQtNCw0YbQuNC4ICovXG4gIGNsZWFyRXJyb3JzKCkge1xuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XG4gICAgIH0pXG4gICAgfVxuXG4gIC8qKiDQn9GA0L7QstC10YDQutCwINCy0YHQtdGFINC40L3Qv9GD0YLQvtCyINGE0L7RgNC80Ysg0L3QsCDQstCw0LvQuNC00L3QvtGB0YLRjCAqL1xuICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20odGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKSk7XG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xuICAgICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KTtcbiAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuIiwiLyoqINCa0L7QvdGB0YLRgNGD0LrRgtC+0YAg0L7QsdGJ0LXQs9C+INC/0L7Qv9Cw0L/QsCAqL1xuZXhwb3J0IGNsYXNzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5faGFuZGxlRXNjQ2xvc2UgPSB0aGlzLl9oYW5kbGVFc2NDbG9zZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqINCX0LDQutGA0YvRgtC40LUg0L/RgNC4INC90LDQttCw0YLQuNC4INC90LAgRVNDICovXG4gIF9oYW5kbGVFc2NDbG9zZShldnQpIHtcbiAgICBpZiAoZXZ0LmtleSA9PSAnRXNjYXBlJykge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiDQntGC0LrRgNGL0YLQuNC1ICovXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3BvcHVwX29wZW5lZCcpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cblxuICAvKiog0JfQsNC60YDRi9GC0LjQtSAqL1xuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXBfb3BlbmVkJyk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcbiAgfVxuXG4gIC8qKiDQodC70YPRiNCw0YLQtdC70Ywg0LrRgNC10YHRgtC40LrQsCDQuCDQvdCw0LbQsNGC0LjRjyDQvdCwINC+0LLQtdGA0LvQtdC5LCDRgSDRgNC10LDQutGG0LjQtdC5INC30LDQutGA0YvRgtC40Y8gKi9cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xuICAgICAgaWYgKGV2dC50YXJnZXQgPT09IGV2dC5jdXJyZW50VGFyZ2V0IHx8IGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3B1cF9fY2xvc2UnKSkge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgUG9wdXAgfSBmcm9tICcuL1BvcHVwLmpzJztcblxuLyoqINCa0L7QvdGB0YLRgNGD0LrRgtC+0YAg0L/QvtC/0LDQv9CwINC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNGPINGD0LTQsNC70LXQvdC40Y8gKi9cbmV4cG9ydCBjbGFzcyBQb3B1cFdpdGhEZWxldGlvbiBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IoeyBoYW5kbGVGb3JtU3VibWl0IH0sIHBvcHVwU2VsZWN0b3IpIHtcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcbiAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0ID0gaGFuZGxlRm9ybVN1Ym1pdDtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnRGb3JtID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm1cIik7XG4gIH1cblxuICAvKiog0J7RgtC60YDRi9GC0Ywg0L/QvtC/0LDQvywg0L/RgNC40L3QuNC80LDRjyDQuNC90YTQvtGA0LzQsNGG0LjRjiDQviDQutCw0YDRgtC+0YfQutC1ICovXG4gIG9wZW4oY2FyZElkLCBjYXJkKSB7XG4gICAgc3VwZXIub3BlbigpO1xuICAgIHRoaXMuX2NhcmRJZCA9IGNhcmRJZDtcbiAgICB0aGlzLl9jYXJkID0gY2FyZDtcbiAgfVxuXG4gIC8qKiDQl9Cw0LrRgNGL0YLQuNC1INC/0L7Qv9Cw0L/QsCArINCg0LXQsNC60YbQuNGPINC90LAg0YHQsNCx0LzQuNGCICovXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZ0KSA9PiB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQodGhpcy5fY2FyZElkLCB0aGlzLl9jYXJkKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgeyBQb3B1cCB9IGZyb20gJy4vUG9wdXAuanMnO1xuXG4vKiog0JrQvtC90YHRgtGA0YPQutGC0L7RgCDQv9C+0L/QsNC/0LAg0LTQu9GPINC40LfQvNC10L3QtdC90LjRjyDQuNC90YTQvtGA0LzQsNGG0LjQuCDQviDQv9C+0LvRjNC30L7QstCw0YLQtdC70LUgKi9cbmV4cG9ydCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcih7IGhhbmRsZUZvcm1TdWJtaXQgfSwgcG9wdXBTZWxlY3Rvcikge1xuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQgPSBoYW5kbGVGb3JtU3VibWl0O1xuICAgIHRoaXMuX2lucHV0TGlzdCA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX2lucHV0Jyk7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50Rm9ybSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19mb3JtXCIpO1xuICB9XG5cbiAgLyoqINCh0L7Qt9C00LDRgtGMINC+0LHRitC10LrRgiDQuNC3INCy0LLQtdC00ZHQvdC90YvRhSDQtNCw0L3QvdGL0YUgKi9cbiAgX2dldElucHV0VmFsdWVzKCkge1xuICAgIGNvbnN0IGlucHV0cyA9IHt9O1xuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgaW5wdXRzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGlucHV0cztcbiAgfTtcblxuICAvKiog0JfQsNC60YDRi9GC0Ywg0L/QvtC/0LDQvyDRgdC+INGB0LHRgNC+0YHQvtC8INC/0L7Qu9C10LkgKi9cbiAgY2xvc2UoKSB7XG4gICAgc3VwZXIuY2xvc2UoKTtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnRGb3JtLnJlc2V0KCk7XG4gIH1cblxuICAvKiog0JfQsNC60YDRi9GC0LjQtSDQv9C+0L/QsNC/0LAgKyDQoNC10LDQutGG0LjRjyDQvdCwINGB0LDQsdC80LjRgjog0YHQsdGA0L7RgSDRgdGC0LDQvdC00LDRgNGC0L3QvtCz0L4g0YHQvtCx0YvRgtC40Y8sINC40YHQv9C+0LvRjNC30L7QstCw0L3QuNC1INC00LDQvdC90YvRhSDRhNC+0YDQvNGLINC4INC30LDQutGA0YvRgtC40LUgKi9cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldnQpID0+IHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUG9wdXAgfSBmcm9tICcuL1BvcHVwLmpzJztcblxuLyoqINCa0L7QvdGB0YLRgNGD0LrRgtC+0YAg0L/QvtC/0LDQv9CwINGBINGD0LLQtdC70LjRh9C10L3QvdGL0Lwg0YTQvtGC0L4gKi9cbmV4cG9ydCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuX3Bob3RvSW1hZ2UgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19waG90bycpO1xuICAgIHRoaXMuX3Bob3RvQ2FwdGlvbiA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2NhcHRpb24nKTtcbiAgfVxuXG4gIG9wZW4obmFtZSwgbGluaykge1xuICAgIHRoaXMuX3Bob3RvSW1hZ2Uuc3JjID0gbGluaztcbiAgICB0aGlzLl9waG90b0ltYWdlLmFsdCA9IG5hbWU7XG4gICAgdGhpcy5fcGhvdG9DYXB0aW9uLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBzdXBlci5vcGVuKCk7XG4gIH1cbn1cbiIsIi8qKiDQmtC+0L3RgdGC0YDRg9C60YLQvtGAINGB0LXQutGG0LjQuCDQtNC70Y8g0LrQsNGA0YLQvtGH0LXQuiAqL1xuZXhwb3J0IGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250YWluZXJTZWxlY3Rvcikge1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xuICB9XG5cbiAgLyoqINCe0YfQuNGB0YLQuNGC0Ywg0LrQvtC90YLQtdC50L3QtdGAICovXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuX2NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIC8qKiDQlNC+0LHQsNCy0LjRgtGMINGN0LvQtdC80LXQvdGCINC90LDRh9Cw0LvQviDQutC+0L3RgtC10LnQvdC10YDQsCAqL1xuICBhZGRJdGVtKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcbiAgfVxuXG4gIC8qKiDQlNC+0LHQsNCy0LjRgtGMINGN0LvQtdC80LXQvdGCINCyINC60L7QvdC10YYg0LrQvtC90YLQtdC50L3QtdGA0LAgKNC00LvRjyDQuNGB0YXQvtC00L3Ri9GFINC60LDRgNGC0L7Rh9C10LopICovXG4gIGFkZEluaXRpYWxJdGVtKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9jb250YWluZXIuYXBwZW5kKGVsZW1lbnQpO1xuICB9XG5cbn1cbiIsIi8qKiDQmtC+0L3RgdGC0YDRg9C60YLQvtGAINC/0YDQvtGE0LjQu9GPICovXG5leHBvcnQgY2xhc3MgVXNlckluZm8ge1xuICBjb25zdHJ1Y3Rvcih7IG5hbWVTZWxlY3RvciwgcHJvZmVzc2lvblNlbGVjdG9yLCBhdmF0YXJTZWxlY3RvciB9KSB7XG4gICAgdGhpcy5fcHJvZmlsZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hbWVTZWxlY3Rvcik7XG4gICAgdGhpcy5fcHJvZmlsZVByb2Zlc3Npb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb2Zlc3Npb25TZWxlY3Rvcik7XG4gICAgdGhpcy5fcHJvZmlsZUF2YXRhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYXZhdGFyU2VsZWN0b3IpO1xuICB9XG5cbiAgLyoqINCf0L7Qu9GD0YfQuNGC0Ywg0YLQtdC60YPRidC40LUg0LTQsNC90L3Ri9C1ICovXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLl9wcm9maWxlTmFtZS50ZXh0Q29udGVudCxcbiAgICAgIHByb2Zlc3Npb246IHRoaXMuX3Byb2ZpbGVQcm9mZXNzaW9uLnRleHRDb250ZW50LFxuICAgIH1cbiAgfVxuXG4gIC8qKiDQo9GB0YLQsNC90L7QstC40YLRjCDQtNCw0L3QvdGL0LUgKi9cbiAgc2V0VXNlckluZm8oeyB1c2VybmFtZSwgdXNlcnByb2Zlc3Npb24sIHVzZXJhdmF0YXIgfSkge1xuICAgIHRoaXMuX3Byb2ZpbGVOYW1lLnRleHRDb250ZW50ID0gdXNlcm5hbWU7XG4gICAgdGhpcy5fcHJvZmlsZVByb2Zlc3Npb24udGV4dENvbnRlbnQgPSB1c2VycHJvZmVzc2lvbjtcbiAgICB0aGlzLl9wcm9maWxlQXZhdGFyLnNyYyA9IHVzZXJhdmF0YXI7XG4gIH1cbn1cbiIsIi8qKiDQmtC90L7Qv9C60LggKi9cbmV4cG9ydCBjb25zdCBidXR0b25FZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19lZGl0XCIpO1xuZXhwb3J0IGNvbnN0IGJ1dHRvbkFkZENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2J1dHRvbi1hZGRcIik7XG5leHBvcnQgY29uc3QgYnV0dG9uQXZhdGFyRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYXZhdGFyLWVkaXRcIik7XG5cbi8qKiDQn9C+0L/QsNC/0YsgKi9cbmNvbnN0IHBvcFVwRWRpdFByb2ZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX3R5cGVfcHJvZmlsZVwiKTtcbmNvbnN0IHBvcFVwQWRkQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfdHlwZV9jYXJkXCIpO1xuY29uc3QgcG9wVXBFZGl0QXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF90eXBlX2F2YXRhclwiKTtcbmNvbnN0IHBvcFVwRGVsZXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX3R5cGVfZGVsZXRlXCIpO1xuXG4vKiog0KTQvtGA0LzRiyAqL1xuZXhwb3J0IGNvbnN0IGZvcm1Qcm9maWxlRWRpdCA9IHBvcFVwRWRpdFByb2ZpbGUucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybVwiKTtcbmV4cG9ydCBjb25zdCBmb3JtQXZhdGFyRWRpdCA9IHBvcFVwRWRpdEF2YXRhci5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19mb3JtXCIpO1xuZXhwb3J0IGNvbnN0IGZvcm1BZGRDYXJkID0gcG9wVXBBZGRDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm1cIik7XG5cbi8qKiDQmtC90L7Qv9C60Lgg0YHQsNCx0LzQuNGC0L7QsiDRhNC+0YDQvCAqL1xuZXhwb3J0IGNvbnN0IGZvcm1Qcm9maWxlRWRpdFN1Ym1pdEJ1dHRvbiA9IHBvcFVwRWRpdFByb2ZpbGUucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fc2F2ZVwiKTtcbmV4cG9ydCBjb25zdCBmb3JtQWRkQ2FyZFN1Ym1pdEJ1dHRvbiA9IHBvcFVwQWRkQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19zYXZlXCIpO1xuZXhwb3J0IGNvbnN0IGZvcm1FZGl0QXZhdGFyU3VibWl0QnV0dG9uID0gcG9wVXBFZGl0QXZhdGFyLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX3NhdmVcIik7XG5leHBvcnQgY29uc3QgZm9ybUNvbmZpcm1EZWxldGlvblN1Ym1pdEJ1dHRvbiA9IHBvcFVwRGVsZXRpb24ucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fc2F2ZVwiKTtcblxuLyoqINCY0L3Qv9GD0YLRiyAqL1xuZXhwb3J0IGNvbnN0IG5hbWVJbnB1dCA9IGZvcm1Qcm9maWxlRWRpdC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbnB1dF92YWx1ZV9uYW1lXCIpO1xuZXhwb3J0IGNvbnN0IGpvYklucHV0ID0gZm9ybVByb2ZpbGVFZGl0LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2lucHV0X3ZhbHVlX3Byb2Zlc3Npb25cIik7XG5cbi8qKiDQmNC30L7QsdGA0LDQttC10L3QuNC1INCw0LLQsNGC0LDRgNCwICovXG5leHBvcnQgY29uc3QgYXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hdmF0YXJcIik7XG5cblxuLyoqINCh0LXQu9C10LrRgtC+0YDRiyAqL1xuZXhwb3J0IGNvbnN0IHBvcFVwQWRkQ2FyZFNlbGVjdG9yID0gJy5wb3B1cF90eXBlX2NhcmQnO1xuZXhwb3J0IGNvbnN0IHBvcFVwUGhvdG9TZWxlY3RvciA9IFwiLnBvcHVwX3R5cGVfcGhvdG9cIjtcbmV4cG9ydCBjb25zdCBwb3BVcEVkaXRBdmF0YXJTZWxlY3RvciA9ICcucG9wdXBfdHlwZV9hdmF0YXInO1xuZXhwb3J0IGNvbnN0IHBvcFVwRGVsZXRpb25TZWxlY3RvciA9ICcucG9wdXBfdHlwZV9kZWxldGUnO1xuZXhwb3J0IGNvbnN0IHBvcFVwRWRpdFByb2ZpbGVTZWxlY3RvciA9ICcucG9wdXBfdHlwZV9wcm9maWxlJztcbmV4cG9ydCBjb25zdCBwcm9maWxlTmFtZVNlbGVjdG9yID0gXCIucHJvZmlsZV9fbmFtZVwiO1xuZXhwb3J0IGNvbnN0IHByb2ZpbGVQcm9mZXNzaW9uU2VsZWN0b3IgPSBcIi5wcm9maWxlX19wcm9mZXNzaW9uXCI7XG5leHBvcnQgY29uc3QgcHJvZmlsZUF2YXRhclNlbGVjdG9yID0gXCIucHJvZmlsZV9fYXZhdGFyXCI7XG5leHBvcnQgY29uc3QgY2FyZHNDb250YWluZXJTZWxlY3RvciA9ICcuZWxlbWVudHNfX2xpc3QnO1xuXG4vKiog0JrQvtC90YTQuNCzINGBINGB0LXQu9C10LrRgtC+0YDQsNC80Lgg0LTQu9GPINCy0LDQu9C40LTQsNGG0LjQuCovXG5leHBvcnQgY29uc3QgY29uZmlnVmFsaWRhdGlvbiA9IHtcbiAgICBmb3JtU2VsZWN0b3I6ICcucG9wdXBfX2Zvcm0nLFxuICAgIGlucHV0U2VsZWN0b3I6ICcucG9wdXBfX2lucHV0JyxcbiAgICBzdWJtaXRCdXR0b25TZWxlY3RvcjogJy5wb3B1cF9fc2F2ZScsXG4gICAgaW5hY3RpdmVCdXR0b25DbGFzczogJ3BvcHVwX19zYXZlX2Rpc2FibGVkJyxcbiAgICBpbnB1dEVycm9yQ2xhc3M6ICdwb3B1cF9faW5wdXRfdHlwZV9pbmNvcnJlY3QnLFxuICAgIGVycm9yQ2xhc3M6ICdwb3B1cF9fZXJyb3JfdmlzaWJsZSdcbiAgfVxuXG5cblxuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbmltcG9ydCB7IEZvcm1WYWxpZGF0b3IgfSBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMnO1xuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvU2VjdGlvbi5qcyc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkLmpzJztcbmltcG9ydCB7IFBvcHVwV2l0aEZvcm0gfSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMnO1xuaW1wb3J0IHsgUG9wdXBXaXRoSW1hZ2UgfSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzJztcbmltcG9ydCB7IFBvcHVwV2l0aERlbGV0aW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhEZWxldGlvbi5qcyc7XG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gJy4uL2NvbXBvbmVudHMvVXNlckluZm8uanMnO1xuaW1wb3J0IHsgQXBpIH0gZnJvbSAnLi4vY29tcG9uZW50cy9BcGkuanMnO1xuXG5pbXBvcnQge1xuICBidXR0b25FZGl0LFxuICBidXR0b25BZGRDYXJkLFxuICBidXR0b25BdmF0YXJFZGl0LFxuICBmb3JtQXZhdGFyRWRpdCxcbiAgZm9ybUFkZENhcmQsXG4gIGZvcm1Qcm9maWxlRWRpdCxcbiAgZm9ybVByb2ZpbGVFZGl0U3VibWl0QnV0dG9uLFxuICBmb3JtQWRkQ2FyZFN1Ym1pdEJ1dHRvbixcbiAgZm9ybUVkaXRBdmF0YXJTdWJtaXRCdXR0b24sXG4gIGZvcm1Db25maXJtRGVsZXRpb25TdWJtaXRCdXR0b24sXG4gIG5hbWVJbnB1dCxcbiAgam9iSW5wdXQsXG4gIGF2YXRhcixcbiAgY2FyZHNDb250YWluZXJTZWxlY3RvcixcbiAgcG9wVXBFZGl0UHJvZmlsZVNlbGVjdG9yLFxuICBwb3BVcEFkZENhcmRTZWxlY3RvcixcbiAgcG9wVXBQaG90b1NlbGVjdG9yLFxuICBwb3BVcEVkaXRBdmF0YXJTZWxlY3RvcixcbiAgcHJvZmlsZU5hbWVTZWxlY3RvcixcbiAgcHJvZmlsZVByb2Zlc3Npb25TZWxlY3RvcixcbiAgcHJvZmlsZUF2YXRhclNlbGVjdG9yLFxuICBwb3BVcERlbGV0aW9uU2VsZWN0b3IsXG4gIGNvbmZpZ1ZhbGlkYXRpb24sXG59IGZyb20gJy4uL3V0aWxzL2VsZW1lbnRzLmpzJztcblxuXG4vKiog0KHQvtC30LTQsNC90LjQtSDRjdC60LfQtdC80L/Qu9GP0YDQsCBBUEkgKi9cbmNvbnN0IGFwaSA9IG5ldyBBcGkoe1xuICBiYXNlVXJsOiAnaHR0cHM6Ly9tZXN0by5ub21vcmVwYXJ0aWVzLmNvL3YxL2NvaG9ydC01NScsXG4gIGhlYWRlcnM6IHtcbiAgICBhdXRob3JpemF0aW9uOiAnYTRjNTFhY2ItNDZmMC00ZjUyLWI1ZTItZjdjYjUxMTBhZGFhJyxcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gIH1cbn0pO1xuXG5cbi8qKiDQodC+0LfQtNCw0YLRjCDQv9C+0L/QsNC/INGBINC60LDRgNGC0LjQvdC60L7QuSAqL1xuY29uc3QgcG9wdXBab29tID0gbmV3IFBvcHVwV2l0aEltYWdlKHBvcFVwUGhvdG9TZWxlY3Rvcik7XG5cblxuLyoqINCh0L7Qt9C00LDRgtGMINCy0LDQu9C40LTQsNGC0L7RgNGLINGE0L7RgNC8ICovXG5jb25zdCBmb3JtUHJvZmlsZUVkaXRWYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihjb25maWdWYWxpZGF0aW9uLCBmb3JtUHJvZmlsZUVkaXQpO1xuY29uc3QgZm9ybUFkZENhcmRWYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihjb25maWdWYWxpZGF0aW9uLCBmb3JtQWRkQ2FyZCk7XG5jb25zdCBmb3JtRWRpdGluZ0F2YXRhclZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKGNvbmZpZ1ZhbGlkYXRpb24sIGZvcm1BdmF0YXJFZGl0KTtcblxuXG4vKiog0KHQvtC30LTQsNGC0Ywg0L/Rg9GB0YLRg9GOINGB0LXQutGG0LjRjiAqL1xuY29uc3Qgc2VjdGlvbiA9IG5ldyBTZWN0aW9uKGNhcmRzQ29udGFpbmVyU2VsZWN0b3IpO1xuXG5cbi8qKiDQpNGD0L3QutGG0LjRjyDQs9C10L3QtdGA0LDRhtC40Lgg0L3QvtCy0L7QuSDQutCw0YDRgtC+0YfQutC4ICovXG5mdW5jdGlvbiBjcmVhdGVDYXJkKG9iamVjdCkge1xuICBjb25zdCBjYXJkID0gbmV3IENhcmQob2JqZWN0LFxuICAgICcjY2FyZCcsXG4gICAgLyoqINCk0YPQvdC60YbQuNGPLdGA0LXQsNC60YbQuNGPINC90LDQttCw0YLQuNGPINC90LAg0YTQvtGC0L4gKi9cbiAgICAobmFtZSwgbGluaykgPT4geyBwb3B1cFpvb20ub3BlbihuYW1lLCBsaW5rKSB9LFxuICAgIC8qKiDQpNGD0L3QutGG0LjRjy3RgNC10LDQutGG0LjRjyDQvdCw0LbQsNGC0LjRjyDQvdCwINC60L7RgNC30LjQvdGDICovXG4gICAgKGlkLCBjYXJkKSA9PiB7XG4gICAgICBwb3B1cERlbGV0ZUNhcmQub3BlbihpZCwgY2FyZCk7XG4gICAgfSxcbiAgICAvKiog0KTRg9C90LrRhtC40Y8t0YDQtdCw0LrRhtC40Y8g0L3QsNC20LDRgtC40Y8g0L3QsCDQu9Cw0LnQuiAqL1xuICAgIChpZCkgPT4ge1xuICAgICAgaWYgKGNhcmQuaXNMaWtlZCgpKSB7XG4gICAgICAgIGFwaS5kZWxldGVMaWtlKGlkKVxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNhcmQuc2V0TGlrZXMocmVzLmxpa2VzKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgfSk7O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXBpLmFkZExpa2UoaWQpXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY2FyZC5zZXRMaWtlcyhyZXMubGlrZXMpXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICB9KTs7XG4gICAgICB9XG4gICAgfSlcbiAgcmV0dXJuIGNhcmQuZ2VuZXJhdGVDYXJkKCk7XG59XG5cblxuLyoqINCt0LrQt9C10LzQv9C70Y/RgCDQv9C+0L/QsNC/0LAg0LTQu9GPINC00L7QsdCw0LLQu9C10L3QuNGPINC90L7QstC+0LPQviDRhNC+0YLQviAo0YEg0YDQtdCw0LrRhtC40LXQuSDQvdCwINGB0LDQvNCx0LjRgikgKi9cbmNvbnN0IHBvcHVwQ2FyZCA9IG5ldyBQb3B1cFdpdGhGb3JtKHtcbiAgaGFuZGxlRm9ybVN1Ym1pdDogKHsgcGxhY2UsIGxpbmsgfSkgPT4ge1xuICAgIGZvcm1BZGRDYXJkU3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ9Ch0L7RhdGA0LDQvdC10L3QuNC1Li4uJztcbiAgICBhcGkuYWRkQ2FyZChwbGFjZSwgbGluaykudGhlbigocmVzKSA9PiB7XG4gICAgICAvKiog0KHQvtC30LTQsNC90LjQtSDQutCw0YDRgtC+0YfQutC4INC40Lcg0L/QvtC70YPRh9C10L3QvdGL0YUg0LTQsNC90L3Ri9GFINGBINGB0LXRgNCy0LXRgNCwICovXG4gICAgICBjb25zdCBjYXJkID0gY3JlYXRlQ2FyZCh7XG4gICAgICAgIG5hbWU6IHJlcy5uYW1lLFxuICAgICAgICBsaW5rOiByZXMubGluayxcbiAgICAgICAgbGlrZXM6IHJlcy5saWtlcyxcbiAgICAgICAgaWQ6IHJlcy5faWQsXG4gICAgICAgIHVzZXJJZDogdXNlcklkLFxuICAgICAgICBvd25lcklkOiByZXMub3duZXIuX2lkLFxuICAgICAgfSk7XG4gICAgICBzZWN0aW9uLmFkZEl0ZW0oY2FyZCk7XG4gICAgICBwb3B1cENhcmQuY2xvc2UoKTtcbiAgICAgIGZvcm1BZGRDYXJkU3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ9Ch0L7RhdGA0LDQvdC40YLRjCc7XG4gICAgICBmb3JtQWRkQ2FyZFZhbGlkYXRvci5ibG9ja0J1dHRvbigpO1xuICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cbn0sIHBvcFVwQWRkQ2FyZFNlbGVjdG9yKTtcblxuXG4vKiog0K3QutC30LXQvNC/0LvRj9GAINC+0YLQvtCx0YDQsNC20LDQtdC80L7Qs9C+INCw0LrQutCw0YPQvdGC0LAgKi9cbmNvbnN0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKFxuICB7XG4gICAgbmFtZVNlbGVjdG9yOiBwcm9maWxlTmFtZVNlbGVjdG9yLFxuICAgIHByb2Zlc3Npb25TZWxlY3RvcjogcHJvZmlsZVByb2Zlc3Npb25TZWxlY3RvcixcbiAgICBhdmF0YXJTZWxlY3RvcjogcHJvZmlsZUF2YXRhclNlbGVjdG9yXG4gIH0pO1xuXG5cbi8qKiDQrdC60LfQtdC80L/Qu9GP0YAg0L/QvtC/0LDQv9CwINC00LvRjyDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPINC40LzQtdC90Lgg0Lgg0L7Qv9C40YHQsNC90LjRjyAo0YEg0YDQtdCw0LrRhtC40LXQuSDQvdCwINGB0LDQvNCx0LjRgikgKi9cbmNvbnN0IHBvcHVwUHJvZmlsZSA9IG5ldyBQb3B1cFdpdGhGb3JtKHtcbiAgaGFuZGxlRm9ybVN1Ym1pdDogKGRhdGEpID0+IHtcbiAgICBmb3JtUHJvZmlsZUVkaXRTdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAn0KHQvtGF0YDQsNC90LXQvdC40LUuLi4nO1xuICAgIGFwaS5lZGl0UHJvZmlsZShkYXRhLm5hbWUsIGRhdGEucHJvZmVzc2lvbilcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgdXNlckluZm8uc2V0VXNlckluZm8oe1xuICAgICAgICAgIHVzZXJuYW1lOiByZXMubmFtZSxcbiAgICAgICAgICB1c2VycHJvZmVzc2lvbjogcmVzLmFib3V0LFxuICAgICAgICB9KVxuICAgICAgICBhdmF0YXIuc3JjID0gcmVzLmF2YXRhcjtcbiAgICAgICAgcG9wdXBQcm9maWxlLmNsb3NlKCk7XG4gICAgICAgIGZvcm1Qcm9maWxlRWRpdFN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICfQodC+0YXRgNCw0L3QuNGC0YwnO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTs7XG4gIH1cbn0sIHBvcFVwRWRpdFByb2ZpbGVTZWxlY3Rvcik7XG5cblxuLyoqINCt0LrQt9C10LzQv9C70Y/RgCDQv9C+0L/QsNC/0LAg0YEg0LjQt9C80LXQvdC10L3QuNC10Lwg0LDQstCw0YLQsNGA0LAgICovXG5jb25zdCBwb3B1cEF2YXRhciA9IG5ldyBQb3B1cFdpdGhGb3JtKHtcbiAgaGFuZGxlRm9ybVN1Ym1pdDogKGRhdGEpID0+IHtcbiAgICBmb3JtRWRpdEF2YXRhclN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICfQodC+0YXRgNCw0L3QtdC90LjQtS4uLic7XG4gICAgYXBpLmVkaXRBdmF0YXIoZGF0YS5hdmF0YXIpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGF2YXRhci5zcmMgPSByZXMuYXZhdGFyXG4gICAgICAgIHBvcHVwQXZhdGFyLmNsb3NlKCk7XG4gICAgICAgIGZvcm1FZGl0QXZhdGFyU3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ9Ch0L7RhdGA0LDQvdC40YLRjCc7XG4gICAgICAgIGZvcm1FZGl0aW5nQXZhdGFyVmFsaWRhdG9yLmJsb2NrQnV0dG9uKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG59LCBwb3BVcEVkaXRBdmF0YXJTZWxlY3Rvcik7XG5cblxuLyoqINCt0LrQt9C10LzQv9C70Y/RgCDQv9C+0L/QsNC/0LAg0LTQu9GPINC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNGPINGD0LTQsNC70LXQvdC40Y8gICovXG5jb25zdCBwb3B1cERlbGV0ZUNhcmQgPSBuZXcgUG9wdXBXaXRoRGVsZXRpb24oe1xuICBoYW5kbGVGb3JtU3VibWl0OiAoY2FyZElkLCBjYXJkKSA9PiB7XG4gICAgZm9ybUNvbmZpcm1EZWxldGlvblN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwi0KPQtNCw0LvQtdC90LjQtS4uLlwiO1xuICAgIGFwaS5kZWxldGVDYXJkKGNhcmRJZCkudGhlbigoKSA9PiB7XG4gICAgICBjYXJkLnJlbW92ZSgpO1xuICAgICAgZm9ybUNvbmZpcm1EZWxldGlvblN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwi0JTQsFwiO1xuICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cbn0sIHBvcFVwRGVsZXRpb25TZWxlY3Rvcik7XG5cblxubGV0IHVzZXJJZCA9ICcnO1xuXG4vKiog0JLRi9Cz0YDRg9C30LjRgtGMINC40LzRjywg0L7Qv9C40YHQsNC90LjQtSDQuCDQsNCy0LDRgtCw0YAg0LjQtyDRgdC10YDQstC10YDQsCAqL1xuYXBpLmdldFByb2ZpbGUoKVxuICAudGhlbigocmVzKSA9PiB7XG4gICAgdXNlckluZm8uc2V0VXNlckluZm8oeyB1c2VybmFtZTogcmVzLm5hbWUsIHVzZXJwcm9mZXNzaW9uOiByZXMuYWJvdXQsIHVzZXJhdmF0YXI6IHJlcy5hdmF0YXIgfSk7XG4gICAgdXNlcklkID0gcmVzLl9pZDtcbiAgfSlcbiAgLmNhdGNoKChlcnIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9KTtcblxuXG4vKiog0J/QvtC+0YfQtdGA0ZHQtNC90L4g0L7RgtC+0LHRgNCw0LfQuNGC0Ywg0L3QsCDRgdGC0YDQsNC90LjRhtC1INCy0YHQtSDQutCw0YDRgtC+0YfQutC4INC40Lcg0YHQtdGA0LLQtdGA0LAgKi9cblByb21pc2UuYWxsKFthcGkuZ2V0UHJvZmlsZSgpLCBhcGkuZ2V0SW5pdGlhbENhcmRzKCldKVxuICAudGhlbigoW3Byb2ZpbGVJbmZvLCBjYXJkTGlzdF0pID0+IHtcbiAgICBjYXJkTGlzdC5mb3JFYWNoKChyZXMpID0+IHtcbiAgICAgIGNvbnN0IGNhcmQgPSBjcmVhdGVDYXJkKHtcbiAgICAgICAgbmFtZTogcmVzLm5hbWUsXG4gICAgICAgIGxpbms6IHJlcy5saW5rLFxuICAgICAgICBsaWtlczogcmVzLmxpa2VzLFxuICAgICAgICBpZDogcmVzLl9pZCxcbiAgICAgICAgdXNlcklkOiBwcm9maWxlSW5mby5faWQsXG4gICAgICAgIG93bmVySWQ6IHJlcy5vd25lci5faWQsXG4gICAgICB9KTtcbiAgICAgIHNlY3Rpb24uYWRkSW5pdGlhbEl0ZW0oY2FyZClcbiAgICB9KVxuICB9KVxuICAuY2F0Y2goKGVycikgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH0pO1xuXG4vKiog0J3QsNC20LDRgtC40LUg0L3QsCDQutCw0YDQsNC90LTQsNGIINC00LvRjyDQuNC30LzQtdC90LXQvdC40Y8g0L/RgNC+0YTQuNC70Y8gKi9cbmJ1dHRvbkVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgZm9ybVByb2ZpbGVFZGl0VmFsaWRhdG9yLmNsZWFyRXJyb3JzKCk7XG4gIGZvcm1Qcm9maWxlRWRpdFZhbGlkYXRvci51bmxvY2tCdXR0b24oKTtcbiAgY29uc3QgdXNlckluZm9EYXRhID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcbiAgbmFtZUlucHV0LnZhbHVlID0gdXNlckluZm9EYXRhLm5hbWU7XG4gIGpvYklucHV0LnZhbHVlID0gdXNlckluZm9EYXRhLnByb2Zlc3Npb247XG4gIHBvcHVwUHJvZmlsZS5vcGVuKCk7XG59KTtcblxuXG4vKiog0J3QsNC20LDRgtC40LUg0L3QsCBbK10g0LTQu9GPINC00L7QsdCw0LLQu9C10L3QuNGPINC60LDRgNGC0L7Rh9C60LggKi9cbmJ1dHRvbkFkZENhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgZm9ybUFkZENhcmRWYWxpZGF0b3IuYmxvY2tCdXR0b24oKVxuICBmb3JtQWRkQ2FyZFZhbGlkYXRvci5jbGVhckVycm9ycygpO1xuICBwb3B1cENhcmQub3BlbigpO1xufSk7XG5cblxuLyoqINCd0LDQttCw0YLQuNC1INC90LAg0LDQstCw0YLQsNGAINC00LvRjyDQuNC30LzQtdC90LXQvdC40Y8g0YTQvtGC0L4gKi9cbmJ1dHRvbkF2YXRhckVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgZm9ybUVkaXRpbmdBdmF0YXJWYWxpZGF0b3IuYmxvY2tCdXR0b24oKTtcbiAgZm9ybUVkaXRpbmdBdmF0YXJWYWxpZGF0b3IuY2xlYXJFcnJvcnMoKTtcbiAgcG9wdXBBdmF0YXIub3BlbigpO1xufSk7XG5cblxuLyoqINCQ0LrRgtC40LLQuNGA0L7QstCw0YLRjCDRgdC70YPRiNCw0YLQtdC70Lgg0YMg0L/QvtC/0LDQv9C+0LIqL1xucG9wdXBQcm9maWxlLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5wb3B1cENhcmQuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbnBvcHVwWm9vbS5zZXRFdmVudExpc3RlbmVycygpO1xucG9wdXBBdmF0YXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbnBvcHVwRGVsZXRlQ2FyZC5zZXRFdmVudExpc3RlbmVycygpO1xuXG5cbi8qKiDQn9C+0LTQutC70Y7Rh9C10L3QuNC1INC/0YDQvtCy0LXRgNC60Lgg0LLQsNC70LjQtNC90L7RgdGC0Lgg0YTQvtGA0LwgKi9cbmZvcm1Qcm9maWxlRWRpdFZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG5mb3JtQWRkQ2FyZFZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG5mb3JtRWRpdGluZ0F2YXRhclZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG5cbiJdLCJuYW1lcyI6WyJBcGkiLCJiYXNlVXJsIiwiaGVhZGVycyIsIl9iYXNlVXJsIiwiX2hlYWRlcnMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJvayIsImpzb24iLCJQcm9taXNlIiwicmVqZWN0Iiwic3RhdHVzIiwibmFtZSIsInByb2Zlc3Npb24iLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImFib3V0IiwibGluayIsImNhcmRJZCIsImF2YXRhciIsIkNhcmQiLCJjYXJkRGF0YSIsInRlbXBsYXRlU2VsZWN0b3IiLCJoYW5kbGVDYXJkQ2xpY2siLCJoYW5kbGVEZWxldGVQb3B1cCIsImhhbmRsZUxpa2VDbGljayIsIl9uYW1lIiwiX2xpbmsiLCJfaWQiLCJpZCIsIl9saWtlcyIsImxpa2VzIiwiX3VzZXJJZCIsInVzZXJJZCIsIl9vd25lcklkIiwib3duZXJJZCIsIl90ZW1wbGF0ZVNlbGVjdG9yIiwiX2hhbmRsZUNhcmRDbGljayIsIl9oYW5kbGVEZWxldGVQb3B1cCIsIl9oYW5kbGVMaWtlQ2xpY2siLCJjYXJkRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJfZWxlbWVudCIsInJlbW92ZSIsIl9lbGVtZW50TGlrZSIsImNsYXNzTGlzdCIsImFkZCIsImxpa2VCb29sIiwiZmluZCIsInVzZXIiLCJuZXdMaWtlcyIsIl9saWtlc0NvdW50ZXIiLCJ0ZXh0Q29udGVudCIsImxlbmd0aCIsImlzTGlrZWQiLCJfcHV0TGlrZSIsIl9ub0xpa2UiLCJhZGRFdmVudExpc3RlbmVyIiwiX2VsZW1lbnREZWxldGUiLCJfZWxlbWVudFBob3RvIiwiX2dldFRlbXBsYXRlIiwiX2VsZW1lbnROYW1lIiwic3JjIiwiYWx0IiwiX3NldEV2ZW50TGlzdGVuZXJzIiwic2V0TGlrZXMiLCJGb3JtVmFsaWRhdG9yIiwiY29uZmlnIiwiZm9ybUVsZW1lbnQiLCJfY29uZmlnIiwiX2Zvcm1TZWxlY3RvciIsImZvcm1TZWxlY3RvciIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9mb3JtRWxlbWVudCIsIl9pbnB1dExpc3QiLCJzb21lIiwiaW5wdXRFbGVtZW50IiwiY2hlY2tWYWxpZGl0eSIsIl9idXR0b25FbGVtZW50IiwiZGlzYWJsZWQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJfaGFzSW52YWxpZElucHV0IiwiYmxvY2tCdXR0b24iLCJ1bmxvY2tCdXR0b24iLCJlcnJvckVsZW1lbnQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl9oaWRlSW5wdXRFcnJvciIsIl9zaG93SW5wdXRFcnJvciIsImZvckVhY2giLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiX3RvZ2dsZUJ1dHRvblN0YXRlIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsIlBvcHVwIiwicG9wdXBTZWxlY3RvciIsIl9wb3B1cEVsZW1lbnQiLCJfaGFuZGxlRXNjQ2xvc2UiLCJiaW5kIiwiZXZ0Iiwia2V5IiwiY2xvc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImNvbnRhaW5zIiwiUG9wdXBXaXRoRGVsZXRpb24iLCJoYW5kbGVGb3JtU3VibWl0IiwiX2hhbmRsZUZvcm1TdWJtaXQiLCJfcG9wdXBFbGVtZW50Rm9ybSIsImNhcmQiLCJfY2FyZElkIiwiX2NhcmQiLCJwcmV2ZW50RGVmYXVsdCIsIlBvcHVwV2l0aEZvcm0iLCJpbnB1dHMiLCJpbnB1dCIsInZhbHVlIiwicmVzZXQiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJQb3B1cFdpdGhJbWFnZSIsIl9waG90b0ltYWdlIiwiX3Bob3RvQ2FwdGlvbiIsIlNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RvciIsIl9jb250YWluZXIiLCJpbm5lckhUTUwiLCJlbGVtZW50IiwicHJlcGVuZCIsImFwcGVuZCIsIlVzZXJJbmZvIiwibmFtZVNlbGVjdG9yIiwicHJvZmVzc2lvblNlbGVjdG9yIiwiYXZhdGFyU2VsZWN0b3IiLCJfcHJvZmlsZU5hbWUiLCJfcHJvZmlsZVByb2Zlc3Npb24iLCJfcHJvZmlsZUF2YXRhciIsInVzZXJuYW1lIiwidXNlcnByb2Zlc3Npb24iLCJ1c2VyYXZhdGFyIiwiYnV0dG9uRWRpdCIsImJ1dHRvbkFkZENhcmQiLCJidXR0b25BdmF0YXJFZGl0IiwicG9wVXBFZGl0UHJvZmlsZSIsInBvcFVwQWRkQ2FyZCIsInBvcFVwRWRpdEF2YXRhciIsInBvcFVwRGVsZXRpb24iLCJmb3JtUHJvZmlsZUVkaXQiLCJmb3JtQXZhdGFyRWRpdCIsImZvcm1BZGRDYXJkIiwiZm9ybVByb2ZpbGVFZGl0U3VibWl0QnV0dG9uIiwiZm9ybUFkZENhcmRTdWJtaXRCdXR0b24iLCJmb3JtRWRpdEF2YXRhclN1Ym1pdEJ1dHRvbiIsImZvcm1Db25maXJtRGVsZXRpb25TdWJtaXRCdXR0b24iLCJuYW1lSW5wdXQiLCJqb2JJbnB1dCIsInBvcFVwQWRkQ2FyZFNlbGVjdG9yIiwicG9wVXBQaG90b1NlbGVjdG9yIiwicG9wVXBFZGl0QXZhdGFyU2VsZWN0b3IiLCJwb3BVcERlbGV0aW9uU2VsZWN0b3IiLCJwb3BVcEVkaXRQcm9maWxlU2VsZWN0b3IiLCJwcm9maWxlTmFtZVNlbGVjdG9yIiwicHJvZmlsZVByb2Zlc3Npb25TZWxlY3RvciIsInByb2ZpbGVBdmF0YXJTZWxlY3RvciIsImNhcmRzQ29udGFpbmVyU2VsZWN0b3IiLCJjb25maWdWYWxpZGF0aW9uIiwiYXBpIiwiYXV0aG9yaXphdGlvbiIsInBvcHVwWm9vbSIsImZvcm1Qcm9maWxlRWRpdFZhbGlkYXRvciIsImZvcm1BZGRDYXJkVmFsaWRhdG9yIiwiZm9ybUVkaXRpbmdBdmF0YXJWYWxpZGF0b3IiLCJzZWN0aW9uIiwiY3JlYXRlQ2FyZCIsIm9iamVjdCIsIm9wZW4iLCJwb3B1cERlbGV0ZUNhcmQiLCJkZWxldGVMaWtlIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImFkZExpa2UiLCJnZW5lcmF0ZUNhcmQiLCJwb3B1cENhcmQiLCJwbGFjZSIsImFkZENhcmQiLCJvd25lciIsImFkZEl0ZW0iLCJ1c2VySW5mbyIsInBvcHVwUHJvZmlsZSIsImRhdGEiLCJlZGl0UHJvZmlsZSIsInNldFVzZXJJbmZvIiwicG9wdXBBdmF0YXIiLCJlZGl0QXZhdGFyIiwiZGVsZXRlQ2FyZCIsImdldFByb2ZpbGUiLCJhbGwiLCJnZXRJbml0aWFsQ2FyZHMiLCJwcm9maWxlSW5mbyIsImNhcmRMaXN0IiwiYWRkSW5pdGlhbEl0ZW0iLCJjbGVhckVycm9ycyIsInVzZXJJbmZvRGF0YSIsImdldFVzZXJJbmZvIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJlbmFibGVWYWxpZGF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==