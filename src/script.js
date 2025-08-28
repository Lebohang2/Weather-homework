function findWeatherInfo(response) {
  let temperatueElement = document.querySelector("#weather-app-number");
  let temp = response.data.temperature.current;
  let cityElement = document.querySelector("#city-type");
  cityElement.innerHTML = response.data.city;

  temperatueElement.innerHTML = Math.round(temp);
}

function getCity(city) {
  let apiKey = "410o3ft86210d5f3d73f24a4d34d2bab";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(findWeatherInfo);
}

function authoriseSearch(event) {
  event.preventDefault();
  let cityForm = document.querySelector("#city-value");

  getCity(cityForm.value); // fetches API
}

let formSearchElement = document.querySelector("#form-search");
formSearchElement.addEventListener("submit", authoriseSearch);

getCity("Paris");
