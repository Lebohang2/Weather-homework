function findWeatherInfo(response) {
  let temperatueElement = document.querySelector("#weather-app-number");
  let temp = response.data.temperature.current;
  let cityElement = document.querySelector("#city-type");
  let conditionElement = document.querySelector("#condition");
  let humidityElement = document.querySelector("#humidity-value");
  let windElement = document.querySelector("#wind-unit");
  let timeElement = document.querySelector("#time-detail");
  let date = new Date(response.data.time * 1000);

  let emojiElement = document.querySelector("#weather-emojy");

  emojiElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-icon" />`;

  cityElement.innerHTML = response.data.city;
  conditionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed} km/h`;
  timeElement.innerHTML = createDate(date);
  temperatueElement.innerHTML = Math.round(temp);

  giveForecast(response.data.city);
}

function createDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
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
function giveForecast(city) {
  let apiKey = "410o3ft86210d5f3d73f24a4d34d2bab";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showForecast);
}

function showForecast(response) {
  let days = ["Tue", "Wed", "Thurs", "Fri", "Sat"];
  let castHtml = "";

  days.forEach(function (day) {
    castHtml =
      castHtml +
      `<div class="forecast-weather-day">
            <div class="forecast-day">${day}</div>
            <div class="forecast-emoji">🌞</div>
            <div class="forecast-temp">
              <div class="forecast-high-temp"><strong>23°C</strong></div>
              <div class="forecast-high-temp">15°C</div>
            </div>
          </div>
          `;
  });

  let castElement = document.querySelector("#forecasting");
  castElement.innerHTML = castHtml;
}

let formSearchElement = document.querySelector("#form-search");
formSearchElement.addEventListener("submit", authoriseSearch);

getCity("Paris");
