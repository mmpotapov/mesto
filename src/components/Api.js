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
        return Promise.reject(res.status)
      }
    })
      .catch((res) => { console.log(res) })
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
        return Promise.reject(res.status)
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
        return Promise.reject(res.status)
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
          return Promise.reject(res.status)
        }
      })
    }

}



