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

//affichage du formulaire
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}






//fermeture du formulaire
//close modal event
 btnClose.addEventListener("click", closeModal);

//close modal form 
function closeModal() {
  modalbg.style.display = "none";
}




// pour repondre au champs non vide : ajout de l'attribut required au formulaire avec une boucle for...of

const infoFirstName = document.getElementById("first");
const infoLastName = document.getElementById("last");
const infoEmail = document.getElementById("email");
const infoBirthdate = document.getElementById("birthdate");
const infoNumberOfGameonMatch = document.getElementById("quantity");

let infoForm = [infoFirstName,infoLastName, infoEmail , infoBirthdate, infoNumberOfGameonMatch ];

for ( let infoRequiered of infoForm){
  console.log(infoRequiered.setAttribute("required",""));
}

// 

//champ info prénom : valide
infoFirstName.setAttribute("pattern", "[A-Z]{1}[a-z -]{2,30}[a-z]");
infoFirstName.setAttribute("placeholder", "Jean-paul");

// champ info nom: valide

infoLastName.setAttribute("minlength", "2");
infoLastName.setAttribute("pattern", "[A-Z -]{2,30}[A-Z]");
infoLastName.setAttribute("placeholder", "DUPOND-MARTIN");

//pattern email







