const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';

function handleOnLoginSumit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem('username', username);
  const usernnameCap = username.charAt(0).toUpperCase() + username.slice(1);
  greeting.innerText = `Hello, ${usernnameCap}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener('submit', handleOnLoginSumit);
