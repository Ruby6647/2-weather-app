function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelecotr("#wind");
    temperatureElement.innerHTML = math.round
    (response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = math.round
    (response.data.wind.speed);
}

let apiKey ="dcbc990444d2a28e9c73db10a85b7574";
let apiUrl ='https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=${apiKey}&units=metric';

axios.get(apiUrl).then(displayTemperature);