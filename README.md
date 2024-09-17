# Weather App And ToDo List App

This is a simple **Weather App** and **To-Do List API** built with **Node.js** and **Express.js**

## Weather App

which fetches real-time weather data from the **OpenWeather API**. The app allows users to get the current weather for any city by making a GET request to an endpoint. Users can add, remove, and view their tasks via API endpoints for the todo list app.

## Features

### For the weather app
- Fetch real-time weather data for any city.
- Provides information about the current temperature, weather description, and wind speed.
- Implements environment variables for API keys using `.env` to enhance security.

### For the todo list app
- Add new tasks to the To-Do list
- View all tasks in the To-Do list
- Remove tasks by index

# Project Structure
- node_modules/           # Node.js modules
- scr/
    - weather.js          # Handles API calls to OpenWeather
    - todo.js             # To-Do list functionality
- .env                    # Stores environment variables (API key)
- .gitignore              # Prevents committing sensitive data
- index.js                # Main server file using Express.js
- package.json            # Project dependencies and metadata
- README.md               # Project documentation

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Fast, unopinionated, and minimalist web framework for Node.js.
- **node-fetch**: A lightweight library to make HTTP requests.
- **dotenv**: A module to load environment variables from a `.env` file.

## Prerequisites

- **Node.js** (version >= 14)
- **npm** (Node package manager)

## Setup

1. Clone the repository:
```bash 
git clone https://github.com/sbendavid/WeatherAndToDo.git 
```
2. Navigate into the project directory:
```bash 
cd WeatherAndToDo 
```
3.  Install the dependencies:
```bash 
npm install 
```
4. Create a .env file in the root directory:
```bash 
touch .env 
```
5. Inside the .env file, add your OpenWeather API key:
```bash 
API_KEY=your_openweather_api_key_here 
```
6. Run the app:
```bash 
node index.js 
```

# Usage

## For the Weather
Once the server is running, you can fetch weather data by sending a GET request to the following endpoint:

## Example Request:
```bash 
http://localhost:3000/weather/{city} 
```

Replace `{city}` with the name of the city you want to get the weather for.

## Example:
```bash 
http://localhost:3000/weather/Abuja 
```

## Example Response:
```json
{
  "city": "London",
  "temperature": "15.35",
  "description": "clear sky",
  "wind_speed": 2.06
} 
``` 
If the city is not found, you’ll get an error response:

```json
{
  "error": "city not found"
}
```

## For the Todo 
Use a tool like Postman or cURL to test the API endpoints:

Adding a Task
`POST /todo`

Request Body (JSON):
```json
{
  "task": "Buy groceries"
}
```

Response:
```json
{
  "message": "Task 'Buy groceries' added to your To-Do list."
}
```

Viewing All Tasks
`GET /todo`

Response (Example):

```json
{
  "todos": "1. Buy groceries\n2. Complete the project\n3. Read a book"
}
```
Removing a Task by Index
`DELETE /todo/:index`

Example: /todo/1

Response:

```json
{
  "message": "Task 'Buy groceries' removed from your To-Do list."
}
```

# API Endpoints	

| Method     | Endpoint        | Description                                        |
|------------|-----------------|----------------------------------------------------|
| POST       | /todo           | Add a new task                                     |
| GET        | /todo           | View all tasks                                     |
| DELETE     | /todo/:index    | Remove a task by its index (1-based)               |
| Get        | /weather/:city  | Get the weather data based on the location (abuja) |


# Environment Variables
- The project uses the dotenv package to manage environment variables. Make sure to create a .env file in the root directory and create your OpenWeather account get the API key and add your OpenWeather API key.

```bash
API_KEY=your_openweather_api_key_here
```

# Dependencies
- express: For creating the server and defining routes.
- node-fetch: For making HTTP requests to the OpenWeather API.
- dotenv: For managing environment variables.
- Install all dependencies by running:

```bash
npm install
```

## API Used
- OpenWeather API: Provides real-time weather data. You can get an API key by registering at OpenWeather.

## Future Enhancements
- Add more detailed weather information (e.g., humidity, pressure).
- Add support for fetching weather data by geographic coordinates (latitude and longitude).
- Implement front-end to display weather data and todo list app in a user-friendly interface.

## License
This project is licensed under the MIT License.

### Explanation:
- The **Installation** section provides steps for setting up the project.
- The **Usage** section describes how to use the API endpoints with examples of requests and responses.
- The **Project Structure** outlines the directory and file layout.
- The **API Endpoints** section provides a table of the available routes and their descriptions.


### This `README.md` provides a comprehensive overview of your project, including features, setup instructions, usage, and other relevant details. Let me know if there's anything else you need!
