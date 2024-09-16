# Weather App And ToDo List App

# Weather App

This is a simple **Weather App** built with **Node.js** and **Express.js**, which fetches real-time weather data from the **OpenWeather API**. The app allows users to get the current weather for any city by making a GET request to an endpoint.

## Features

- Fetch real-time weather data for any city.
- Provides information about the current temperature, weather description, and wind speed.
- Implements environment variables for API keys using `.env` to enhance security.

## Project Structure
.
├── node_modules/           # Node.js modules
├── scr/
│   └─ weather.js           # Handles API calls to OpenWeather
├── .env                    # Stores environment variables (API key)
├── .gitignore              # Prevents committing sensitive data
├── index.js                # Main server file using Express.js
├── package.json            # Project dependencies and metadata
└── README.md               # Project documentation

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

## How to Use
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

## Environment Variables
- The project uses the dotenv package to manage environment variables. Make sure to create a .env file in the root directory and create your OpenWeather account get the API key and add your OpenWeather API key.

```bash
API_KEY=your_openweather_api_key_here
```

## Dependencies
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
- Implement front-end to display weather data in a user-friendly interface.

## License
This project is licensed under the MIT License.


### This `README.md` provides a comprehensive overview of your project, including features, setup instructions, usage, and other relevant details. Let me know if there's anything else you need!
