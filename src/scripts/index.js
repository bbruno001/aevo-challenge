import { config } from "dotenv";

config();

const ACCESS_KEY = process.env.KEY;
const locationName = document.querySelector(".search-input");
const temperature = document.querySelector(".temp");
const searchLocal = document.querySelector(".search");

searchLocal.addEventListener("keyup", function (e) {
  var key = e.which || e.keyCode;
  if (key == 13) {
    e.preventDefault();
    console.log("test");
    populatePage();
  }
});

function getLocation() {
  const access_key = ACCESS_KEY;

  const apiRequest =
    "http://api.weatherstack.com/current?access_key=" +
    access_key +
    "&query=" +
    locationName.value;

  const response = fetch(apiRequest);
  const weather = response.json();

  return weather;
}

function populatePage() {
  const weather = getLocation();
  temperature.innerHTML = weather.current.temperature;
}
