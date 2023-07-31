async function fetchWeather() {
  const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Windsor,Ontario&units=metric&appid=YOUR_API_KEY');
  const weatherData = await response.json();

  document.getElementById('weather').innerText = `Temperature in Windsor, Ontario: ${weatherData.main.temp}°C`;
}

// Fetch the weather data when the page loads
fetchWeather();
