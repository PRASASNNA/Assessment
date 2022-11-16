document.addEventListener("DOMContentLoaded", (event) => {
  const rotateCard = () => {
    const cardContainer = document.querySelector(".card-container");
    cardContainer.classList.toggle("rotate");
  };
const login = document.getElementById("login");
const register = document.getElementById("register");
const button = document.getElementById("btn");

function moveRegister() {
  login.style.left = "-400px";
  register.style.left = "50px";
  button.style.left = "110px";
}

function moveLogin() {
  login.style.left = "50px";
  register.style.left = "450px";
  button.style.left = "0";
}

  const btnSignup = document.querySelector("#toggle-signup"),
  btnLogin = document.querySelector("#toggle-login");

  btnSignup.addEventListener("click", rotateCard);
  btnLogin.addEventListener("click", rotateCard);

  /*See passwod*/
  const seePassword = () => {
    const seePwdIcon = document.querySelector(".see-password"),
      pwdInput = document.querySelector(".group input");

    seePwdIcon.addEventListener("mousedown", () => {
      pwdInput.type = "text";
    });

    seePwdIcon.addEventListener("mouseup", () => {
      pwdInput.type = "password";
    });

    seePwdIcon.addEventListener("mouseover", () => {
      pwdInput.type = "password";
    });
  };

  seePassword();
});
