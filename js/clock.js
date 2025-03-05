const clock = document.querySelector('#clock');

function getClock() {
  const date = new Date();
  const currentHour = String(date.getHours()).padStart(2, '0');
  const currentMinutes = String(date.getMinutes()).padStart(2, '0');
  const currentSeconds = String(date.getSeconds()).padStart(2, '0');

  clock.innerText = `${currentHour}:${currentMinutes}:${currentSeconds}`;
}

getClock();
setInterval(getClock, 1000);
