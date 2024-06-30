const API_KEY = "7127e6e9c7af2efaa2cd634833cb54af";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");

      const temp = data.main.temp.toFixed(1);
      let tempIcon = "";
      if (temp < 15) {
        tempIcon = '<i class="fa-solid fa-temperature-quarter" style="color: #74C0FC;"></i>';
      } else if (temp < 25) {
        tempIcon = '<i class="fa-solid fa-temperature-half" style="color: #FFD43B;"></i>';
      } else {
        tempIcon = '<i class="fa-solid fa-temperature-three-quarters" style="color: #dd0808;"></i>';
      }
      
      city.innerText = data.name;
      weather.innerHTML = `${data.weather[0].main} / ${temp}° ${tempIcon}`;
      console.log(data.name, data.weather[0].main);
    });
}

function onGeoError() {
  alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
