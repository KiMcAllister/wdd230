const apiKey = 'e528d9e6a0e372f8a07a6e790f6a1f37';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Nephi&appid=${apiKey}&units=imperial`;

// Fetch the weather data
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Update the weather information in the HTML
        document.querySelector('#temp').textContent = data.main.temp;
        document.querySelector('#condition').textContent = data.weather[0].description;
        document.querySelector('#icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`);
        document.querySelector('#wind-speed').textContent = data.wind.speed;
        const windChill = calculateWindChill(data.main.temp, data.wind.speed);
        document.querySelector('#wind-chill').textContent = isNaN(windChill) ? 'N/A' : windChill.toFixed(1) + " ℉";
    });

// Calculate the wind chill using the current temperature and wind speed
function calculateWindChill(temp, speed) {
    const windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    return (temp <= 50 && speed >= 3) ? windChill : NaN;
}
