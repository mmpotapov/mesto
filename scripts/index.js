// элементы для редактирования профиля
const popUp = document.querySelector(".popup");
const profileName = document.querySelector(".profile__name");
const profileProfession = document.querySelector(".profile__profession");
const pencilEdit = document.querySelector(".profile__edit");
const popUpEditProfile = document.querySelector(".popup_type_profile");
const closePopUpEdit = popUpEditProfile.querySelector(".popup__close");
const formProfileEdit = popUpEditProfile.querySelector(".popup__form");
const nameInput = formProfileEdit.querySelector(".popup__input_value_name");
const jobInput = formProfileEdit.querySelector(".popup__input_value_profession");

// элементы для редактирования галереи
const buttonAddCard = document.querySelector(".profile__button-add");
const popUpAddCard = document.querySelector(".popup_type_card");
const closePopUpAddingCard = popUpAddCard.querySelector(".popup__close");
const cardsList = document.querySelector('.elements__list');
const formAddCard = popUpAddCard.querySelector(".popup__form");
const placeInput = formAddCard.querySelector(".popup__input_value_place");
const linkInput = formAddCard.querySelector(".popup__input_value_link");

// элементы для раскрытия изображения на весь экран
const popUpPhoto = document.querySelector(".popup_type_photo");
const closePopUpPhoto = popUpPhoto.querySelector(".popup__close");

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
    name: 'Рускеала',
    link: 'https://images.unsplash.com/photo-1573156667506-115190c68737?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80'
  },
  {
    name: 'Эльбрус',
    link: 'https://images.unsplash.com/photo-1599425162155-63c31bbb9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
  },
  {
    name: 'Лаго-Наки',
    link: 'https://images.unsplash.com/photo-1538649528991-427afdbe7884?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Руза',
    link: 'https://images.unsplash.com/photo-1591569135425-a5f4b34e52d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Создание карточки
function createCard(object) {
  const cardTemplate = document.querySelector('#card').content.cloneNode(true);
  cardTemplate.querySelector('.element__name').textContent = object.name;
  cardTemplate.querySelector('.element__photo').src = object.link;
  cardTemplate.querySelector('.element__photo').alt = object.name;
  // лайк
  const like = cardTemplate.querySelector('.element__like');
  like.addEventListener('click', function () {
    like.classList.toggle("element__like_active")
  });
  // корзинка
  const trash = cardTemplate.querySelector('.element__delete');
  trash.addEventListener('click', function () {
    trash.closest('.elements__card').remove()
  });
  // Открыть изображение на полный экран
  const photo = cardTemplate.querySelector('.element__photo');
  const photoImage = popUpPhoto.querySelector('.popup__photo');
  const photoCaption = popUpPhoto.querySelector('.popup__caption');
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


