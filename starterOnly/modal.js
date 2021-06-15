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
let regexNameAndLastName = /^[A-Za-z ,.'-]+$/i;
let regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
let regexBirthdate = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;

function validFirstName(){
  
   //validation prénom
   infoFirstName.addEventListener("keyup", function(event){
    event.preventDefault();
    if(infoFirstName.validity.valueMissing){
      infoFirstName.closest(".formData").setAttribute("data-error", "Veuillez remplir le formulaire");
      
    }else if (!regexNameAndLastName.test(infoFirstName.value)){
      infoFirstName.closest(".formData").setAttribute("data-error", "pas de nombre, caractères autorisés: (. - ')");
      
    }else if (infoFirstName.value.length < 2){
      infoFirstName.closest(".formData").setAttribute("data-error", "Veuillez entrer entre 2 et 30 caractères pour valider ce champ " );  
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
      
    }else if (!regexNameAndLastName.test(infoLastName.value)){
      infoLastName.closest(".formData").setAttribute("data-error", "pas de nombre, caractères autorisés: (. - ')" );
     
    }else if (infoLastName.value.length < 2){
      infoLastName.closest(".formData").setAttribute("data-error", "Veuillez entrer entre 2 et 30 caractères pour valider ce champ " );
      
 
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
    }else if (!regexEmail.test(infoEmail.value)){
      infoEmail.closest(".formData").setAttribute("data-error", "Veuillez rentrer un e-mail valide (par exemple: monemail@boitemail.com" );
      
    }else if (infoEmail.validity.typeMismatch){
      infoEmail.closest(".formData").setAttribute("data-error", "Veuillez entrer une adresse email valide (par exemple:  monemail@gmail.com)");
     
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
   
  }else if (gameonMatch.value > 99 || gameonMatch.value == 0){
    gameonMatch.closest(".formData").setAttribute("data-error", "Veuillez indiquer un nombre entre 1 et 99");
    
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
  }else if (!regexBirthdate.test(infoBirthdate.value)){
    infoBirthdate.closest(".formData").setAttribute("data-error","Veuillez rentrer une date de naissance valide : JJ/MM/AAAA" );
    
  }else{
    infoBirthdate.closest(".formData").setAttribute("data-error","");
    return true;
  }
})

}



function validCheckCity(){
  let nbBoxChecked = 0;
  for(let i=0; i<locationCity.length;i++){
    nbBoxChecked++;
     //validation villes : ! ne fonctionne pa
   if(locationCity[i].checked < 1){
    classNameLocationCity.closest(".formData").setAttribute("data-error", "Veuillez choisir une ville");
    }else{
      classNameLocationCity.closest(".formData").setAttribute("data-error","");
     
      return true;
    };
  }
}


function validTermsOfUse(){
   //validation condition d'utilisation
   termsOfUse.addEventListener("change", function(event){
    event.preventDefault();
      if(this.checked == false){
        termsOfUse.closest(".formData").setAttribute("data-error", "Veuillez accepter les conditions d'utilisation");
        
      }else{
        infoBirthdate.closest(".formData").setAttribute("data-error","");
        return true;
      };  
  });
}

/*******************************************************************************************************************************************************/

function validate(){
  validFirstName();
validLastName(),
validEmail();
validBirthdate();
infoMatchGameon();
validCheckCity();
validTermsOfUse();
}



//fonction message d'envoie formulaire
function submitTheForm(){
  submitForm.addEventListener("click", function (){
    alert("Merci votre formulaire a été envoyé");
    
  })
}

submitTheForm();



