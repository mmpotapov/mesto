export class UserInfo {
  constructor({ nameSelector, professionSelector }) {
    this._profileName = document.querySelector(nameSelector);
    this._profileProfession = document.querySelector(professionSelector);
  }

  getUserInfo() {
    const userInfo = {}
    userInfo.name = this._profileName.textContent;
    userInfo.profession = this._profileProfession.textContent;
    return userInfo;
  }

  setUserInfo(data) {
    this._profileName.textContent = data.name;
    this._profileProfession.textContent = data.profession;
  }
}
