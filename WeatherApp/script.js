const apiKey = "1ad907f9a796fc6dfb1fc0cd18a667c1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const weatherIcons = {
    "Clouds": "images/clouds.png",
    "Clear": "images/clear.png",
    "Drizzle": "images/drizzle.png",
    "Mist": "images/mist.png",
    "Haze": "images/mist.png",
    "Rain": "images/rain.png",
    "Snow": "images/snow.png"
};

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {

        const data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "%";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/hr";

        weatherIcon.src = weatherIcons[data.weather[0].main] || "images/default.png";

        
        /* if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
        if (data.weather[0].main == "Haze") {
            weatherIcon.src = "images/mist.png";
        }
        if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
        } */

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})