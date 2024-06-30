const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutButton = document.querySelector(".logout");

const showOnLogin = [
  document.querySelector("#greeting"),
  document.querySelector("#todo-form"),
  document.querySelector("#todo-list"),
  logoutButton
];

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  
  showOnLogin.forEach(element => {
    element.classList.remove(HIDDEN_CLASSNAME);
  });
  
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
}

function logout() {
  localStorage.removeItem(USERNAME_KEY);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);

  showOnLogin.forEach(element => {
    element.classList.add(HIDDEN_CLASSNAME);
  });

  loginInput.value = ""; 
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);

  showOnLogin.forEach(element => {
    element.classList.remove(HIDDEN_CLASSNAME);
  });

}

logoutButton.addEventListener("click", logout);