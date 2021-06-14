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
const classNameLocationCity=document.querySelector(".city");

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

/***********************************************************************fonctions validation du formulaire************************************************************/
let regexName = /^[a-z ,.'-]+$/i; 


function validFirstName(){
  
   //validation prénom
   infoFirstName.addEventListener("keyup", function(event){
    event.preventDefault();
    
   
    if(infoFirstName.validity.valueMissing){
      infoFirstName.closest(".formData").setAttribute("data-error", "Veuillez remplir le formulaire");
      return false;
    }else if (regexName.test(infoFirstName.value)==false){
      infoFirstName.closest(".formData").setAttribute("data-error", "pas de nombre, caractères autorisés: (. - ')");
      return false;
    }else if (infoFirstName.value.length < 2){
      infoFirstName.closest(".formData").setAttribute("data-error", "Veuillez entrer entre 2 et 30 caractères pour valider ce champ " );
      return false;
      
    }
    else{
      infoFirstName.closest(".formData").setAttribute("data-error", "" );
      return true;
      
    }
})
}

function validLastName(){
  //validation nom
  infoLastName.addEventListener("keyup", function(event){
    event.preventDefault();
    if(infoLastName.validity.valueMissing){
      infoLastName.closest(".formData").setAttribute("data-error", "Veuillez remplir ce champ");
      return false;
    }else if (regexName.test(infoLastName.value)==false){
      infoLastName.closest(".formData").setAttribute("data-error", "pas de nombre, caractères autorisés: (. - ')" );
      return false;
    }else if (infoLastName.value.length < 2){
      infoLastName.closest(".formData").setAttribute("data-error", "Veuillez entrer entre 2 et 30 caractères pour valider ce champ " );
      return false;
 
    }else{
      infoLastName.closest(".formData").setAttribute("data-error","");
      return true;
    }
})
}

function validEmail(){
   //validation email
   infoEmail.addEventListener("keyup", function(event){
    if(infoEmail.validity.valueMissing){
      infoEmail.closest(".formData").setAttribute("data-error", "Veuillez remplir ce champ");
      return false;
    }else if (infoEmail.validity.typeMismatch){
      infoEmail.closest(".formData").setAttribute("data-error", "Veuillez entrer une adresse email valide (par exemple:  monemail@gmail.com)");
      return false;
    }else{
      infoEmail.closest(".formData").setAttribute("data-error","");
      return true;
    }
})
}
//validation experience gameOn
function infoMatchGameon(){
  gameonMatch.addEventListener("keyup", function(event){
    event.preventDefault();
  if(gameonMatch.validity.typeMismatch){
    gameonMatch.closest(".formData").setAttribute("data-error", "Veuillez remplir ce champ");
    return false;
  }else if (gameonMatch.value > 99){
    gameonMatch.closest(".formData").setAttribute("data-error", "Veuillez indiquer un nombre entre 1 et 99");
    return false;
  }
  else{
    gameonMatch.closest(".formData").setAttribute("data-error","");
    return true;
  }
});
}

function validBirthdate(){
   // validation date de naissance
   infoBirthdate.addEventListener("blur", function(event){
    event.preventDefault();
  if(infoBirthdate.validity.valueMissing){
    infoBirthdate.closest(".formData").setAttribute("data-error", "Veuillez remplir ce champ");
    return false;
  }else{
    infoBirthdate.closest(".formData").setAttribute("data-error","");
    return true;
  }
})
}

function validCheckCity(){
  for(let i=0; i<locationCity.length;i++){
     //validation villes : ! ne fonctionne pa
   if(locationCity[i].checked !== true){
    classNameLocationCity.closest(".formData").setAttribute("data-error", "Veuillez choisir une ville");
      return true; 
    }else{
      classNameLocationCity.closest(".formData").setAttribute("data-error","");
     
      return false;
    };
}
}


/*let caseChecked = function(){
  for(let i=0; i<locationCity.length;i++){
    if(locationCity[i].checked){
      return true;
    }else{
      locationCity.closest(".formData").setAttribute("data-error","");
    }
  }
}*/

function validTermsOfUse(){
   //validation condition d'utilisation
   termsOfUse.addEventListener("change", function(event){
    event.preventDefault();
      if(this.checked == false){
        termsOfUse.closest(".formData").setAttribute("data-error", "Veuillez accepter les conditions d'utilisation");
        return false;
      }else{
        infoBirthdate.closest(".formData").setAttribute("data-error","");
        return true;
      };  
  });
}

/*******************************************************************************************************************************************************/

let listInputValid =
validFirstName();
validLastName(),
validEmail();
validBirthdate();
infoMatchGameon();
validCheckCity();
validTermsOfUse();


//fonction message d'envoie formulaire
function submitTheForm(){
  submitForm.addEventListener("click", function (){
    alert("Merci votre formulaire a été envoyé");
    
  })
}

submitTheForm();



