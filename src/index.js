
let apiKey = "d3e02cfab692a13c33a6d6d6aec2acb0";
let dateDisplay = document.querySelector("#date-display");
let date = new Date();

//Display today's date
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let currentHour = date.getHours();
  let currentMin = date.getMinutes();
  let currentDay = days[date.getDay()];
  if (date.getMinutes() < 10) {
    dateDisplay.innerHTML = `${currentDay} ${currentHour}:0${currentMin}`;
  } else if (date.getHours() < 10) {
    dateDisplay.innerHTML = `${currentDay} 0${currentHour}:${currentMin}`;
  } else {
    dateDisplay.innerHTML = `${currentDay} ${currentHour}:${currentMin}`;
  }
}

console.log(date);
formatDate(date);

//API

function changeCity(event) {
  event.preventDefault();
  let newCity = document.querySelector("#input-city").value;
  newCity = newCity.trim();
  newCity = newCity.toLowerCase();
  console.log(newCity);
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=${apiKey}&units=${unit}`;
  
  axios.get(apiUrl).then(displayWeather);
}

function displayWeather(response) {
  console.log(response);
  document.querySelector("#city-display").innerHTML = `${response.data.name}`;
  let newTemp = Math.round(response.data.main.temp);
  console.log(newTemp);
  document.querySelector("#temp-display").innerHTML = `${newTemp} °C`;
  
}

let form = document.querySelector("form");
form.addEventListener("submit", changeCity);


// F converter
function toFahr(event) {
  event.preventDefault();
  let newCity = document.querySelector("#input-city").value;
  newCity = newCity.trim();
  newCity = newCity.toLowerCase();
  console.log(newCity);
  let unit = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=${apiKey}&units=${unit}`;
  
  axios.get(apiUrl).then(displayFahr);
 
}
function displayFahr(response){
  console.log(response);
  let newTemp = Math.round(response.data.main.temp);
  console.log(newTemp);

  if (newTemp) {
    document.querySelector("#temp-display").innerHTML = `${newTemp} °F`;
  } else {
    toFahrenheit.innerHTML = "NA°F";
  }
  
}

let changeToFahr = document.querySelector("#fahrenheit-link");
changeToFahr.addEventListener("click", toFahr);

// C converter
function toCels(event) {
  event.preventDefault();
  let newCity = document.querySelector("#input-city").value;
  newCity = newCity.trim();
  newCity = newCity.toLowerCase();
  console.log(newCity.value);
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=${apiKey}&units=${unit}`;
  
  axios.get(apiUrl).then(displayCels);
}

function displayCels(response){
  console.log(response);
  let newTemp = Math.round(response.data.main.temp);
  console.log(newTemp);

  if (newTemp) {
    document.querySelector("#temp-display").innerHTML = `${newTemp} °C`;
  } else {
    toFahrenheit.innerHTML = "NA°C";
  }
  
}
let changeToCels = document.querySelector("#celsius-link");
changeToCels.addEventListener("click", toCels);

