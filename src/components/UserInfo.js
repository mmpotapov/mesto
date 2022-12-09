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

  /** Установить данные */
  setUserInfo({ username, userprofession, useravatar }) {
    this._profileName.textContent = username;
    this._profileProfession.textContent = userprofession;
    this._profileAvatar.src = useravatar;
  }
}
