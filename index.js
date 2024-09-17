const express = require("express");
require("dotenv").config();

const { getWeatherByCity } = require("./src/weather");
const { createTodo, deleteTodo, viewAllTodo } = require("./src/todo");

const app = express();
app.use(express.json());
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

app.post("/todo", (req, res) => {
  const task = req.body.task;
  if (!task) {
    return res.status(400).json({ error: "Task content is required" });
  }
  const result = createTodo(task);
  res.status(201).json({ message: result });
});

app.delete("/todo/:index", (req, res) => {
  const index = parseInt(req.params.index) - 1;
  const result = deleteTodo(index);
  res.status(200).json({ message: result });
});

app.get("/todo", (req, res) => {
  const result = viewAllTodo();
  res.status(200).json({ todos: result });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
