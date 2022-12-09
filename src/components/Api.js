/** Конструктор API */
export class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  /** Запросить данные о своём профиле */
  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }

  /** Запросить все карточки с сервера */
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }

  /** Отправить изменения информации о себе */
  editProfile(name, profession) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: profession
      })
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }

  /** Добавить свою карточку на сервер */
  addCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }

  /** Удалить карточку с сервера */
  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }

  /** Удалить свой лайк */
  deleteLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }

  /** Добавить свой лайк */
  addLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }

    /** Отправить свой аватар */
    editAvatar(avatar) {
      return fetch(`${this._baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          avatar: avatar
        })
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }
        else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      })
    }

}



