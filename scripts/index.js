// элементы для редактирования профиля
let popUp = document.querySelector(".popup");
let profileName = document.querySelector(".profile__name");
let profileProfession = document.querySelector(".profile__profession");
let pencilEdit = document.querySelector(".profile__edit");
let popUpEditProfile = document.querySelector(".popup_type_profile");
let closePopUpEdit = popUpEditProfile.querySelector(".popup__close");
let formProfileEdit = popUpEditProfile.querySelector(".popup__form");
let nameInput = formProfileEdit.querySelector(".popup__input_value_name");
let jobInput = formProfileEdit.querySelector(".popup__input_value_profession");

// элементы для редактирования галереи
let buttonAddCard = document.querySelector(".profile__button-add");
let popUpAddCard = document.querySelector(".popup_type_card");
let closePopUpAddingCard = popUpAddCard.querySelector(".popup__close");
let cardsList = document.querySelector('.elements__list');
let formAddCard = popUpAddCard.querySelector(".popup__form");
let placeInput = formAddCard.querySelector(".popup__input_value_place");
let linkInput = formAddCard.querySelector(".popup__input_value_link");

// элементы для раскрытия изображения на весь экран
let popUpPhoto = document.querySelector(".popup_type_photo");
let closePopUpPhoto = popUpPhoto.querySelector(".popup__close");




// общие функции открытия и закрытия попапов
function openPopUp(type) {
  type.classList.add("popup_opened");
}

function closePopUp(type) {
  type.classList.remove("popup_opened")
}

// нажатие на крестик для закрытия попапов
closePopUpEdit.addEventListener("click", function () {
  closePopUp(popUpEditProfile);
});

closePopUpAddingCard.addEventListener("click", function () {
  closePopUp(popUpAddCard);
});

closePopUpPhoto.addEventListener("click", function () {
  closePopUp(popUpPhoto);
});


// нажатие на карандаш для изменения профиля
pencilEdit.addEventListener("click", function () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
  openPopUp(popUpEditProfile);
});

// нажатие на + для добавления места
buttonAddCard.addEventListener("click", function () {
  openPopUp(popUpAddCard);
});

// отправка формы для изменения имени
function formChangingProfile(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopUp(popUpEditProfile);
}

formProfileEdit.addEventListener('submit', formChangingProfile);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Создание карточки
function createCard(object) {
  let cardTemplate = document.querySelector('#card').content.cloneNode(true);
  cardTemplate.querySelector('.element__name').textContent = object.name;
  cardTemplate.querySelector('.element__photo').src = object.link;
  cardTemplate.querySelector('.element__photo').alt = object.name;
  // лайк
  let like = cardTemplate.querySelector('.element__like');
  like.addEventListener('click', function () {
    like.classList.toggle("element__like_active")
  });
  // корзинка
  let trash = cardTemplate.querySelector('.element__delete');
  trash.addEventListener('click', function () {
    trash.closest('.elements__card').remove()
  });
  // Открыть изображение на полный экран
  let photo = cardTemplate.querySelector('.element__photo');
  let photoImage = popUpPhoto.querySelector('.popup__photo');
  let photoCaption = popUpPhoto.querySelector('.popup__caption');
  photo.addEventListener('click', function () {
    openPopUp(popUpPhoto);
    console.log(photo);
    photoImage.src = object.link;
    photoImage.alt = object.name;
    photoCaption.textContent = object.name;

  });
  return cardTemplate;
}

// 6 исходных карточек
initialCards.forEach(function (element) {
  cardsList.append(createCard(element));
})


// Добавление карточки с помощью +
function formAddNewCard(event) {
  event.preventDefault();
  let pair = {
    name: placeInput.value,
    link: linkInput.value
  }
  cardsList.prepend(createCard(pair));
  closePopUp(popUpAddCard);
  event.target.reset()
}

formAddCard.addEventListener('submit', formAddNewCard);


