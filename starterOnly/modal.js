function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const btnClose = document.querySelector(".close");
const infoFirstName = document.getElementById("first");
const infoLastName = document.getElementById("last");
const infoEmail = document.getElementById("email");
const infoBirthdate = document.getElementById("birthdate");
const form = document.getElementsByName("form");
const submitForm = document.getElementById("submit-form");
const minlength = document.getElementsByTagName("minlength");
const gameonMatch = document.getElementById("quantity");
const locationCity = document.getElementsByName("location");
const termsOfUse = document.getElementById("checkbox1");
const maxlength = document.getElementsByTagName("maxlength");
const cityChecked = document.getElementsByTagName("checked");
const classNameLocationCity = document.querySelector(".city");
const input = document.getElementsByTagName("input");
const message = document.querySelector(".message-sendData");

//affichage du formulaire
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}



/***********************************************************************fermeture du formulaire************************************************************************/

//on définit une fonction pour faire fonctionner la croix de fermeture de la modale : closemodal 
const closeModal = () => {
  modalbg.style.display = "none";
}

//on cré un évènement sur le bouton de fermeture de la modale
btnClose.addEventListener("click", closeModal);



/***********************************************************************fonctions validation du formulaire ************************************************************/

// variables regex
let regexNameAndLastName = /^[A-Za-z ,.'-]+$/i;
let regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
let regexBirthdate = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;



/*fonction validation prénom: on vérifie si le champ est vide, si le texte saisi est conforme au regex, si le nombre de caractère n'est pas inférieur à 2*/
const validFirstName = () => {
  if (infoFirstName.validity.valueMissing) {
    infoFirstName.closest(".formData").setAttribute("data-error", "Veuillez remplir le formulaire");
    infoFirstName.style.borderColor = "#e54858";

  } else if (!regexNameAndLastName.test(infoFirstName.value)) {
    infoFirstName.closest(".formData").setAttribute("data-error", " Ecrivez en miniscule ou majuscule , pas de nombre, seuls caractères autorisés: . - ' et espaces");
    infoFirstName.style.borderColor = "#e54858";

  } else if (infoFirstName.value.length < 2) {
    infoFirstName.closest(".formData").setAttribute("data-error", "Veuillez entrer entre 2 et 30 caractères pour valider ce champ ");
    infoFirstName.style.borderColor = "#e54858";

  } else {
    infoFirstName.closest(".formData").setAttribute("data-error", "");
    infoFirstName.style.borderColor = "";
    return true;
  }
}



/*fonction validation nom : mêmes vérifications que le champ infoFirstName (fonction validFirstName)*/
const validLastName = () => {
  if (infoLastName.validity.valueMissing) {
    infoLastName.closest(".formData").setAttribute("data-error", "Veuillez remplir ce champ");
    infoLastName.style.borderColor = "#e54858";

  } else if (!regexNameAndLastName.test(infoLastName.value)) {
    infoLastName.closest(".formData").setAttribute("data-error", " Ecrivez en miniscule ou majuscule , pas de nombre, seuls caractères autorisés: . - ' et espaces");
    infoLastName.style.borderColor = "#e54858";

  } else if (infoLastName.value.length < 2) {
    infoLastName.closest(".formData").setAttribute("data-error", "Veuillez entrer entre 2 et 30 caractères pour valider ce champ ");
    infoLastName.style.borderColor = "#e54858";

  } else {
    infoLastName.closest(".formData").setAttribute("data-error", "");
    infoLastName.style.borderColor = "";
    return true;
  }
}



/*fonction validation email: on vérifie si le champ est vide, si le texte saisi est conforme au regex email*/
const validEmail = () => {
  if (infoEmail.validity.valueMissing) {
    infoEmail.closest(".formData").setAttribute("data-error", "Veuillez remplir ce champ");
    infoEmail.style.borderColor = "#e54858";

  } else if (!regexEmail.test(infoEmail.value)) {
    infoEmail.closest(".formData").setAttribute("data-error", "Veuillez rentrer une adresse email valide (par exemple: monemail@yahoo.com");
    infoEmail.style.borderColor = "#e54858";

  } else {
    infoEmail.closest(".formData").setAttribute("data-error", "");
    infoEmail.style.borderColor = "";
    return true;
  }
}



/*fonction validation experience gameOn : on vérifie si le champ est vide, si la valeur entrée est inférieure à 1 ou supérieure à 99*/
const infoMatchGameon = () => {
  console.log(gameonMatch.value);
  if (gameonMatch.validity.valueMissing) {
    gameonMatch.closest(".formData").setAttribute("data-error", "Veuillez remplir ce champ");
    gameonMatch.style.borderColor = "#e54858";

  } else if (gameonMatch.value > 99 || gameonMatch.value <= 0) {
    gameonMatch.closest(".formData").setAttribute("data-error", "Veuillez indiquer un nombre entre 1 et 99");
    gameonMatch.style.borderColor = "#e54858";

  } else {
    gameonMatch.closest(".formData").setAttribute("data-error", "");
    gameonMatch.style.borderColor = "";
    return true;
  }
}



/*fonction validation date de naissance : on vérifie si le champ est vide, si la date de naissance saisie est conforme à la regex Birthdate, si la personne est en age de participer au tournois (min. 13 ans)*/
const validBirthdate = () => {
  const minAge = "2008-31-12";
  const maxAge="1920-31-12";

  if (infoBirthdate.validity.valueMissing) {
    infoBirthdate.closest(".formData").setAttribute("data-error", "Veuillez remplir ce champ");
    infoBirthdate.style.borderColor = "#e54858";

  } else if (!regexBirthdate.test(infoBirthdate.value)) {
    infoBirthdate.closest(".formData").setAttribute("data-error", "Veuillez rentrer une date de naissance valide : JJ/MM/AAAA");
    infoBirthdate.style.borderColor = "#e54858";

  } else if (infoBirthdate.value < maxAge){
    infoBirthdate.closest(".formData").setAttribute("data-error", "Vous devez avoir moins de 100 ans pour participer à ce tournois");
    infoBirthdate.style.borderColor = "#e54858";

  } else if (infoBirthdate.value > minAge) {
    infoBirthdate.closest(".formData").setAttribute("data-error", "Vous devez avoir plus de 13 ans pour participer à ce tournois");
    infoBirthdate.style.borderColor = "#e54858";

  } else {
    infoBirthdate.closest(".formData").setAttribute("data-error", "");
    infoBirthdate.style.borderColor = "";
    return true;
  }
}



/*fonction validation ville : on vérifie si au moins une ville est selectionnée*/
const validCheckCity = () => {

  //on utilise une boucle for pour récupérer la liste de toutes les villes qui ont reçu la valeur "checked"
  let nbBoxChecked = 0;
  for (let i = 0; i < locationCity.length; i++) {
    if (locationCity[i].checked == true) {
      nbBoxChecked++;
    }
  }

  if (nbBoxChecked < 1) {
    classNameLocationCity.closest(".formData").setAttribute("data-error", "Veuillez choisir une ville");

  } else {
    classNameLocationCity.closest(".formData").setAttribute("data-error", "");
    return true;
  }
}



/*fonction validation condition d'utilisation : on vérifie si la case : conditions d'utilisation est "checked"*/
const validTermsOfUse = () => {
  if (!termsOfUse.checked) {
    termsOfUse.closest(".formData").setAttribute("data-error", "Veuillez accepter les conditions d'utilisation");

  } else {
    termsOfUse.closest(".formData").setAttribute("data-error", "");
    return true;
  }
}

const messageClosed = () => {
  message.style.display = "none";
}


/*****************************************************************************Envoie du formulaire***************************************************************/

/* on crée une fonction validation du formulaire*/

const validate = (event) => {
  event.preventDefault();
  //on appelle toutes les fonctions
  validFirstName();
  validLastName();
  validEmail();
  validBirthdate();
  infoMatchGameon();
  validCheckCity();
  validTermsOfUse();

  //on verifie la validité de chaques input puis on affiche un message de validation d'envoie du formulaire , suivi de sa fermeture si c'est "true".  
  if ((validFirstName() == true) && (validLastName() == true) && (validEmail() == true) && (validBirthdate() == true) && (validBirthdate() == true) && (infoMatchGameon() == true) && (validCheckCity() == true) && (validTermsOfUse() == true)) {
    message.style.display = "block";
  }else {
    return false;
  }
}




/*on cré un évènement au click sur le bouton submit avec la fonction validate en callback, et l'action pardéfaut du submit n'est pas exécuté tant que les valeurs sont : false*/
submitForm.addEventListener("click", validate,  (event) => {
  event.preventDefault();
});


