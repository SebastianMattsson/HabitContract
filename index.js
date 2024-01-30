let modal = document.getElementById("modal");
let navbarBtnSignIn = document.getElementById("btnLogIn");
let navbarBtnSignUp = document.getElementById("btnRegister");
var span = document.getElementsByClassName("close")[0];
let btnGetStarted = document.getElementById("btnGetStarted");
console.log(btnGetStarted);
// When the user clicks the button, open the modal
navbarBtnSignIn.onclick = function () {
  modal.style.display = "block";
  document.getElementById("modalBodySignIn").style.display = "flex";
  document.getElementById("modalBodySignUp").style.display = "none";
  setActiveTab("signIn");
};

btnGetStarted.addEventListener("click", function () {
  modal.style.display = "block";
  document.getElementById("modalBodySignIn").style.display = "flex";
  document.getElementById("modalBodySignUp").style.display = "none";
  setActiveTab("signIn");
});

navbarBtnSignUp.onclick = function () {
  modal.style.display = "block";

  document.getElementById("modalBodySignUp").style.display = "flex";
  document.getElementById("modalBodySignIn").style.display = "none";
  setActiveTab("signUp");
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function setActiveTab(tab) {
  if (tab == "signUp") {
    singInTab.style.backgroundColor = "rgba(0,0,0,0.5)";
    singInTab.style.textDecoration = "none";
    singUpTab.style.textDecoration = "underline";
    singUpTab.style.backgroundColor = "";
    $("#registerUsername").focus();
  } else {
    singUpTab.style.backgroundColor = "rgba(0,0,0,0.5)";
    singUpTab.style.textDecoration = "none";
    singInTab.style.textDecoration = "underline";
    singInTab.style.backgroundColor = "";
    $("#username").focus();
  }
}

let singUpTab = document.getElementById("signUpTab");
singUpTab.addEventListener("click", function () {
  document.getElementById("modalBodySignIn").style.display = "none";
  document.getElementById("modalBodySignUp").style.display = "flex";
  console.log("clicked");
  setActiveTab("signUp");
});

let singInTab = document.getElementById("signInTab");
singInTab.addEventListener("click", function () {
  document.getElementById("modalBodySignIn").style.display = "flex";
  document.getElementById("modalBodySignUp").style.display = "none";
  console.log("clicked");
  setActiveTab("signIn");
});

let inputUsername = document.getElementById("username");
inputUsername.addEventListener("keydown", function () {
  document.getElementById("errorUsername").innerHTML = "";
});

let inputPassword = document.getElementById("password");
inputPassword.addEventListener("keydown", function () {
  document.getElementById("errorPassword").innerHTML = "";
});

let btnLogIn = document.getElementById("modalBtnLogIn");
btnLogIn.addEventListener("click", function () {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  document.getElementById("errorUsername").innerHTML = "";

  if (username == "" || password == "") {
    document.getElementById("errorMessage").innerHTML =
      "All fields must be filled";
  } else if (username == "Sebastian" && password == "Sebastian") {
    window.location.replace("pages/dashboard.html");
  } else {
    document.getElementById("errorPassword").innerHTML = "Felaktigt lösenord";
    document.getElementById("errorPassword").style.color = "red";
  }
});

let modalBtnRegister = document.getElementById("modalBtnRegister");
modalBtnRegister.addEventListener("click", function () {
  console.log("hej");
  let username = document.getElementById("registerUsername").value;
  let password = document.getElementById("registerPassword").value;
  let rePassword = document.getElementById("rePassword").value;
  let email = document.getElementById("registerEmail").value;

  if (username == "" || password == "" || rePassword == "" || email == "") {
    console.log("error");
    document.getElementById("errorRegisterMessage").innerHTML =
      "All fields must be filled";
  } else if (password != rePassword) {
    document.getElementById("errorRegisterPassword").innerHTML =
      "Passwords must match";
    document.getElementById("errorRegisterRePassword").innerHTML =
      "Passwords must match";
  } else {
    alert("Registration succesful");
    location.reload();
  }
});

let modalBtnCancelSignIn = document.getElementById("modalBtnCancelSignIn");
modalBtnCancelSignIn.addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});

let modalBtnCancelSignUp = document.getElementById("modalBtnCancelRegister");
modalBtnCancelSignUp.addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});

$(document).keydown(function (key) {
  if (key.which == 27) {
    $("#modal").hide();
  }
});

$("input").keyup(function (key) {
  if (key.which == 13 && $("#modalBodySignIn").is(":visible")) {
    $("#modalBtnLogIn").click();
  } else if (key.which == 13 && $("#modalBodySignUp").is(":visible")) {
    $("#modalBtnRegister").click();
  }
});
