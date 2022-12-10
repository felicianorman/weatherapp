import axios from "axios";

let inputWeather = document.getElementById("search") as HTMLInputElement;
let btn = document.getElementById("searchButton") as HTMLButtonElement;

btn.addEventListener("click", displayWeather);

function displayWeather() {
  axios
    .get(
      "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e7784bce760f35a597af832251f6def8"
    )
    .then((response) => console.log(response.data));
}

