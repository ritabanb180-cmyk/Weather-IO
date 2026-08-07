const weatherform = document.querySelector(".weather");
const input = document.querySelector(".cityinput");
const card = document.querySelector(".Weathercard");
const apiKey = "5101aaaea19ea36c63532bae9f82e159";

weatherform.addEventListener("submit", async event => {
  event.preventDefault();
  const city = input.value;
  if (city) {
    try{
        const weatherData = await getWeather(city);
        displayinfo(weatherData);
    } catch (error) {
        dispError("City not found");
    }
  }else {
    dispError("PLEASE ENTER A CITY");
  }
});

async function getWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error("Failed to fetch weather data");
    }
    return await response.json();
}

function displayinfo(data) { 
    const{name: city, 
        main: {temp, humidity},
        weather: [{id, description}]} = data;

        card.textContent = "";
        card.style.display = "flex";
        const cityName = document.createElement("h2");
        cityName.textContent = city.toUpperCase();
        card.appendChild(cityName);
        const iconElement = document.createElement("p");
        iconElement.textContent = getWeatherIcon(id);
        card.appendChild(iconElement);
        const tempElement = document.createElement("p");
       
        tempElement.textContent = `${((temp).toFixed(1))}°C`;
         card.appendChild(tempElement);
        const humidityElement = document.createElement("p");
        humidityElement.textContent = `Humidity: ${humidity}%`;
         card.appendChild(humidityElement);
        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = `${description}`;
        card.appendChild(descriptionElement);
        cityName.classList.add("city");
        tempElement.classList.add("temp");
        humidityElement.classList.add("humid");
        descriptionElement.classList.add("desc");
        iconElement.classList.add("weatherType");
 
}

function getWeatherIcon(weatherId) {
    switch (true) {
        case weatherId >= 200 && weatherId < 300:
            return "⛈️";
        case weatherId >= 300 && weatherId < 400:
            return "🌦️";
        case weatherId >= 500 && weatherId < 600:
            return "🌧️";
        case weatherId >= 600 && weatherId < 700:
            return "❄️";
        case weatherId >= 700 && weatherId < 800:
            return "🌫️";
        case weatherId === 800:
            return "☀️";
        case weatherId > 800 && weatherId < 900:
            return "☁️";
        default:
            return "❓";
    }
}

function dispError(msg) {
    const errorDisplay = document.createElement("p");
     errorDisplay.textContent = msg;
    errorDisplay.classList.add("error");
   
    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}