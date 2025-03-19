const apiEndpoint = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'bd5e378503939ddaee76f12ad7a97608'; // Replace with your API key

const cityInput = document.getElementById('city');
const searchBtn = document.getElementById('search-btn');
const cityNameElement = document.getElementById('city-name');
const weatherDescriptionElement = document.getElementById('weather-description');
const temperatureElement = document.getElementById('temperature');
const humidityElement = document.getElementById('humidity');
const windSpeedElement = document.getElementById('wind-speed');

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        fetch(`${apiEndpoint}?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                cityNameElement.textContent = data.name;
                weatherDescriptionElement.textContent = data.weather[0].description;
                temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
                humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
                windSpeedElement.textContent = `Wind Speed: ${data.wind.speed} m/s`;
            })
            .catch(error => console.error(error));
    }
});