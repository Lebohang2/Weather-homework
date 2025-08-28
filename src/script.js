function authoriseSearch(event) {
  event.preventDefault();
  let cityForm = document.querySelector("#city-value");
  let cityElement = document.querySelector("#city-type");
  cityElement.innerHTML = cityForm.value;
}

let formSearchElement = document.querySelector("#form-search");
formSearchElement.addEventListener("submit", authoriseSearch);
