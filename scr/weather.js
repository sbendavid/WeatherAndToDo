const getWeatherByCity = async (city) => {
  const fetch = (await import("node-fetch")).default;

  const API_KEY = "b0b2030f54e18a45befe3da9623a16d0";
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  try {
    const response = await fetch(weatherUrl);
    const data = await response.json();

    if (response.ok) {
      return {
        city: data.name,
        temperature: (data.main.temp - 273.15).toFixed(2),
        description: data.weather[0].description,
        wind_speed: data.wind.speed,
      };
    } else {
      return {
        error: data.message,
      };
    }
  } catch (error) {
    return {
      error: "Unable to fetch weather data",
    };
  }
};

module.exports = { getWeatherByCity };
