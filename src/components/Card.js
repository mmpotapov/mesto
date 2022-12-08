export class Card {
  constructor(cardData, templateSelector, handleCardClick, handleDeletePopup, BOOOOOL) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardId = cardData._id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeletePopup = handleDeletePopup;
    this._BOOOOOL = BOOOOOL;
  }

  /** Получить темплейт */
  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector(".elements__card").cloneNode(true);
    return cardElement;
  }

  /** Лайк поставален */
  _putLike(icon) {
    icon.classList.add("element__like_active");
  }

  /** Нет лайка */
  _noLike(icon) {
    icon.classList.remove("element__like_active");
  }

  /** Удалить карточку */
  _handleDeleteCard() {
    this._element.remove();
  }

  /** Слушатели */
  _setEventListeners() {
    /** Лайк */
    this._elementLike.addEventListener('click', () => {
      if (this._elementLike.classList.contains("element__like_active")) {
        this._noLike(this._elementLike);
        this._likesCounter.textContent = 5;
      }
      else {
        this._putLike(this._elementLike);
        this._likesCounter.textContent = 12;
      }
    })
    /** Корзина */
    this._elementDelete.addEventListener("click", () => {
      this._handleDeletePopup(this._cardId, this._element);
    })
    /** Раскрыть фото */
    this._elementPhoto.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  };

  /** Сгенерировать карту */
  generateCard() {
    this._element = this._getTemplate();
    this._elementPhoto = this._element.querySelector('.element__photo');
    this._elementLike = this._element.querySelector('.element__like');
    this._elementDelete = this._element.querySelector('.element__delete');
    this._likesCounter = this._element.querySelector('.element__like-counter');
    this._setEventListeners();
    this._elementPhoto.src = this._link;
    this._elementPhoto.alt = this._name;
    this._element.querySelector('.element__name').textContent = this._name;

    /** Исключения для исходных карточек */
    if (this._BOOOOOL){
      this._elementDelete.remove();
    }

    return this._element;
  }
}
