import { Popup } from './Popup.js';

/** Конструктор попапа с увеличенным фото */
export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._photoImage = this._popupElement.querySelector('.popup__photo');
    this._photoCaption = this._popupElement.querySelector('.popup__caption');
  }

  open(name, link) {
    this._photoImage.src = link;
    this._photoImage.alt = name;
    this._photoCaption.textContent = name;
    super.open();
  }
}
