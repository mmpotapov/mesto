export class Card {
  constructor(cardData, userId, templateSelector, handleCardClick, handleDeletePopup, handleLikeClick) {
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
  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector)
      .content.querySelector(".elements__card")
      .cloneNode(true);
    return cardElement;
  }

  /** Удалить карточку */
  _handleDeleteCard() {
    this._element.remove();
  }

  /** Лайк поставален */
  _putLike() {
    this._elementLike.classList.add("element__like_active");
  }

  /** Нет лайка */
  _noLike() {
    this._elementLike.classList.remove("element__like_active");
  }

  /** Проверка, стоит ли наш лайк */
  isLiked() {
    const likeBool = this._likes.find(user => user._id == this._userId);
    return likeBool;
  }

  /** Изменить счётчик и цвет при нажатии на лайк */
  setLikes(newLikes) {
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
  _setEventListeners() {
    /** Лайк */
    this._elementLike.addEventListener("click", () => {
      this._handleLikeClick(this._id);
    })
    /** Корзина */
    this._elementDelete.addEventListener("click", () => {
      this._handleDeletePopup(this._id, this._element);
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
}
