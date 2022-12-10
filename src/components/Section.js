/** Конструктор секции для карточек */
export class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  /** Добавить элемент начало контейнера */
  addItem(element) {
    this._container.prepend(element);
  }

  /** Добавить элемент в конец контейнера (для исходных карточек) */
  addInitialItem(element) {
    this._container.append(element);
  }

  /**  Цикл с перебором эелементов и срабатыванием _renderer на каждом*/
  renderItems(items) {
    items.forEach(this._renderer);
  }
}
