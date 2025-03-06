const WEATHER_APIKEY = '7227f07ed2bafe54d4d7485fa1b73243';

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log('your position is', lat, lon);

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_APIKEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weahter = document.querySelector('#weather span:first-child');
      const city = document.querySelector('#weather span:last-child');

      city.innerText = data.name;
      weahter.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
  console.log(url);
}

function onGeoError() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
