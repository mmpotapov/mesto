/** Конструктор общего попапа */
export class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  /** Закрытие при нажатии на ESC */
  _handleEscClose(evt) {
    if (evt.key == 'Escape') {
      this.close();
    }
  }

  /** Открытие */
  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  /** Закрытие */
  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  /** Слушатель крестика и нажатия на оверлей, с реакцией закрытия */
  setEventListeners() {
    this._popupElement.addEventListener('click', (evt) => {
      if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')) {
        this.close();
      }
    })
  }
}
