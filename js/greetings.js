const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function handleOnLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function usernameCap(username) {
  return username.charAt(0).toUpperCase() + username.slice(1);
}

function paintGreetings(username) {
  const capitalizedUsername = usernameCap(username);
  greeting.innerText = `Hello, ${capitalizedUsername}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', handleOnLoginSubmit);
} else {
  // show the greetings
  paintGreetings(savedUsername);
}
