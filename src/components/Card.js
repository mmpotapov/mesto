export class Card {
  constructor(cardData, templateSelector, handleCardClick) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  /** Получить темплейт */
  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector(".elements__card").cloneNode(true);
    return cardElement;
  }

  /** Изменить цвет лайка */
  _handleLikeClick(evt) {
    evt.target.classList.toggle("element__like_active");
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  /** Слушатели */
  _setEventListeners() {
    this._element.querySelector('.element__like').addEventListener('click', this._handleLikeClick)
    this._element.querySelector('.element__delete').addEventListener("click", () => {
      this._handleDeleteCard();
    })
    this._elementPhoto.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  };

  /** Сгенерировать карту */
  generateCard() {
    this._element = this._getTemplate();
    this._elementPhoto = this._element.querySelector('.element__photo');
    this._setEventListeners();
    this._elementPhoto.src = this._link;
    this._elementPhoto.alt = this._name;
    this._element.querySelector('.element__name').textContent = this._name;

    return this._element;
  }
}
