function getWeather() {
    const apiKey = 'c1817376b7dfd7dac30644b559bcdfd5'; // Personal API key for OpenWeatherMap
    const city = document.getElementById('city').value; // City input from user

    if (!city) {
        alert('Please enter a city!');
        return; // Halts function from executing
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch(currentWeatherUrl)
        .then(response => {
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching current weather data:', error);
            alert('Error fetching current weather data. Please try again.');
        })

    fetch(forecastUrl)
        .then(response => {
            return response.json();
        })
        .then(data => {
            displayHourlyForecast(data);
        })
        .catch(error => {
            console.error('Error fetching hourly forecast data:', error);
            alert('Error fetching hourly forecast data. Please try again.');
        })
}

function displayWeather(data) {

}

function displayHourlyForecast(data) {

}