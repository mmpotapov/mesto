export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
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

  /** Для каждого элемента из базы поочерёдно вызвать колбэк this._renderer */
  renderItems() {
    this.clear();
    this._renderedItems.forEach(item => {
      this._renderer(item);
    });
  }
}
