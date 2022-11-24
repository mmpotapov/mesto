export class UserInfo {
  constructor({ nameSelector, professionSelector }) {
    this._profileName = document.querySelector(nameSelector);
    this._profileProfession = document.querySelector(professionSelector);
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      profession: this._profileProfession.textContent,
    }
  }


  setUserInfo({ username, userprofession }) {
    this._profileName.textContent = username;
    this._profileProfession.textContent = userprofession;
  }
}
