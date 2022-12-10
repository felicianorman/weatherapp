import axios from "axios";
import { IWeatherApp } from "./models/IWeatherApp";

let inputWeather = document.getElementById("search") as HTMLInputElement;
let btn = document.getElementById("searchButton") as HTMLButtonElement;
let div = document.getElementById("displayWeather") as HTMLDivElement;

btn.addEventListener("click", displayWeather);

function displayWeather() {
  axios
    .get<IWeatherApp>(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        inputWeather.value +
        "&APPID=e7784bce760f35a597af832251f6def8&units=metric"
    )
    .then((response) => handleData(response.data));
}

function handleData(weather: IWeatherApp) {
  inputWeather.value = " ";

  console.log(weather);

  let heading = document.createElement("h3") as HTMLHeadingElement;
  heading.innerHTML = weather.name;

  let temp = document.createElement("p") as HTMLParagraphElement;
  temp.innerHTML = `Temperaturen är ${weather.main.temp} °C`;

  div.innerHTML = " ";
  div.appendChild(heading);
  div.appendChild(temp);
}
