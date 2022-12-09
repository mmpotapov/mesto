/** Конструктор секции для карточек */
export class Section {
  constructor(containerSelector) {
    this._container = document.querySelector(containerSelector);
  }

  /** Очистить контейнер */
  clear() {
    this._container.innerHTML = '';
  }

  /** Добавить элемент начало контейнера */
  addItem(element) {
    this._container.prepend(element);
  }

  /** Добавить элемент в конец контейнера (для исходных карточек) */
  addInitialItem(element) {
    this._container.append(element);
  }

}
