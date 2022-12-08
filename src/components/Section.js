export class Section {
  constructor(containerSelector) {
    this._container = document.querySelector(containerSelector);
  }

  /** Очистить контейнер */
  clear() {
    this._container.innerHTML = '';
  }

  /** Добавить элемент в контейнер */
  addItem(element) {
    this._container.prepend(element);
  }
}
