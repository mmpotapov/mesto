/** Конструктор профиля */
export class UserInfo {
  constructor({ nameSelector, professionSelector }) {
    this._profileName = document.querySelector(nameSelector);
    this._profileProfession = document.querySelector(professionSelector);
  }

  /** Получить текущие данные */
  getUserInfo() {
    return {
      name: this._profileName.textContent,
      profession: this._profileProfession.textContent,
    }
  }

  /** Установить данные */
  setUserInfo({ username, userprofession }) {
    this._profileName.textContent = username;
    this._profileProfession.textContent = userprofession;
  }
}
