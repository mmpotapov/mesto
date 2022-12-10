/** Конструктор профиля */
export class UserInfo {
  constructor({ nameSelector, professionSelector, avatarSelector }) {
    this._profileName = document.querySelector(nameSelector);
    this._profileProfession = document.querySelector(professionSelector);
    this._profileAvatar = document.querySelector(avatarSelector);
  }

  /** Получить текущие данные */
  getUserInfo() {
    return {
      name: this._profileName.textContent,
      profession: this._profileProfession.textContent,
    }
  }

  /** Изменить аватар */
  setAvatar(data) {
    this._profileAvatar.src = data.avatar;
  }

  /** Установить данные */
  setUserInfo({ name, about, avatar }) {
    this._profileName.textContent = name;
    this._profileProfession.textContent = about;
    this._profileAvatar.src = avatar;
  }
}
