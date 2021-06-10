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
const locationCity = document.querySelector(".city");
const termsOfUse = document.getElementById("checkbox1");

//affichage du formulaire
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}



/***********************************************************************fermeture du formulaire************************************************************************/


//close modal event
 btnClose.addEventListener("click", closeModal);

//close modal form 
function closeModal() {
  modalbg.style.display = "none";
}

/***********************************************************************validation du formulaire*************************************************************/





//rattrachement au bouton d'envoie
submitForm.addEventListener("click", validate);

//fonction validation des inputs
function validate(event){
  event.preventDefault(); //annule l'action par défaut du requiered
  //validation prénom
  infoFirstName.addEventListener("blur", function(event){
    if(infoFirstName.validity.valueMissing){
      infoFirstName.closest(".formData").setAttribute("data-error", "Veuillez remplir le formulaire");
    }else if (infoFirstName.validity.patternMismatch){
      infoFirstName.closest(".formData").setAttribute("data-error", "attention : lettres MINUSCULES, pas de chiffre ni de caractères speciaux" );
    }else{
      infoFirstName.closest(".formData").setAttribute("data-error","");
      return true;
    }
  });
  //validation nom
  infoLastName.addEventListener("blur", function(event){
    if(infoLastName.validity.valueMissing){
      infoLastName.closest(".formData").setAttribute("data-error", "Veuillez remplir ce champ");
    }else if (infoLastName.value < minlength){
      infoLastName.closest(".formData").setAttribute("data-error", "Veuillez entrer 2 caractères minimum" );
    }else if (infoLastName.validity.patternMismatch){
      infoLastName.closest(".formData").setAttribute("data-error", "attention: lettres MAJUSCULES pas de chiffre ni de caractères speciaux" );
    }else{
      infoLastName.closest(".formData").setAttribute("data-error","");
    }
  });
  //validation email
  infoEmail.addEventListener("blur", function(event){
    if(infoEmail.validity.valueMissing){
      infoEmail.closest(".formData").setAttribute("data-error", "Veuillez remplir ce champ");
    }else if (infoEmail.validity.typeMismatch){
      infoEmail.closest(".formData").setAttribute("data-error", "Veuillez entrer une adresse email valide (par exemple:  monemail@gmail.com)");
    }else{
      infoEmail.closest(".formData").setAttribute("data-error","");
    }
  });
  // validation date de naissance
infoBirthdate.addEventListener("blur", function(event){
  if(infoBirthdate.validity.valueMissing){
    infoBirthdate.closest(".formData").setAttribute("data-error", "Veuillez remplir ce champ");
  }else{
    infoBirthdate.closest(".formData").setAttribute("data-error","");
  }
  });
  //validation experience gameOn
gameonMatch.addEventListener("blur", function(event){
  if(gameonMatch.validity.valueMissing){
    gameonMatch.closest(".formData").setAttribute("data-error", "Veuillez remplir ce champ");
  }else{
    gameonMatch.closest(".formData").setAttribute("data-error","");
  }
  });
  //validation villes : ! ne fonctionne pas
    if(locationCity.validity.typeMismatch){
      locationCity.closest(".formData").setAttribute("data-error", "Veuillez remplir ce champ");
    }else{
      locationCity.closest(".formData").setAttribute("data-error","");
    };
  //validation condition d'utilisation
  termsOfUse.addEventListener("change", function(event){
    if(this.checked == false){
      termsOfUse.closest(".formData").setAttribute("data-error", "Veuillez accepter les conditions d'utilisation");
    }else{
      infoBirthdate.closest(".formData").setAttribute("data-error","");
    }
    }); 


}


/*function validate(){
  infoFirstName.addEventListener("input", function(event){
    event.preventDefault();
    if (infoFirstName.validity.valueMissing){
      document.getElementById("TextInvalid").innerHTML="Veuillez entrer votre prénom (exemple:Jean-paul)";
      return false;
    }else if(infoFirstName.value !== "[A-Z]{1}[a-z -]{2,30}[a-z]"){
      document.getElementById("TextInvalid").innerHTML = "Votre prénom doit commencer par une majuscule et peut comporter un (-) et non des chiffres ";
      return false;
  }else{
    document.getElementById("TextInvalid").innerHTML = "";
  }
  });

}*/