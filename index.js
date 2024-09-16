const express = require("express");
require("dotenv").config();

const { getWeatherByCity } = require("./scr/weather");

const app = express();
const port = 3000;

app.get("/weather/:city", async (req, res) => {
  const city = req.params.city;
  const weatherData = await getWeatherByCity(city);

  if (weatherData.error) {
    res.status(400).json(weatherData);
  } else {
    res.status(200).json(weatherData);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
