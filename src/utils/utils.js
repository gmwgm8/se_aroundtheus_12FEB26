// Validation configuration
export const validationConfig = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

// Initial cards data
export const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

// Selectors
export const selectors = {
  profileForm: "#profile-edit-modal .modal__form",
  addCardForm: "#add-card-modal .modal__form",
  profileEditButton: ".profile__edit-button",
  addCardButton: ".profile__add-button",
  profileNameInput: ".modal__input_type_name",
  profileJobInput: ".modal__input_type_description",
  profileTitle: ".profile__title",
  profileDescription: ".profile__description",
  cardsList: ".cards__list",
  cardTemplate: "#card-template",
  previewImageModal: "#preview-image-modal",
  profileEditModal: "#profile-edit-modal",
  addCardModal: "#add-card-modal",
};
