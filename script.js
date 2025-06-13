async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "40d5540d8306c62cdf3d87beb7d9caef"; //souce: https://openweathermap.org/api
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      const result = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>${data.weather[0].main} - ${data.weather[0].description}</p>
        <p>🌡 Temperature: ${data.main.temp} °C</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
      `;
      document.getElementById("weather-result").innerHTML = result;
    } else {
      document.getElementById("weather-result").innerText = "❌ City not found.";
    }
  } catch (error) {
    document.getElementById("weather-result").innerText = "❌ Error fetching weather data.";
  }
}