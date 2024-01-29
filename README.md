# WeatherCast App

WeatherCast is a web application that provides weather information, air pollution data, a 15-day weather forecast, and astronomical information for a given location.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [APIs Used](#apis-used)
- [Design Decisions](#design-decisions)
- [Contributing](#contributing)
- [License](#license)

## Features

- Display current weather conditions including temperature, humidity, wind speed, and more.
- Show air pollution data including Air Quality Index (AQI) and pollutant levels.
- Provide a 15-day weather forecast with daily minimum and maximum temperatures.
- Include astronomical information such as sunrise, sunset, and moonrise times.
- Visualize the location on a map.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node.js package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/diorsjoy/APIWeather.git
   ```

2. Navigate to the project directory:

   ```bash
   cd weatherep
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Run the application:

   ```bash
   npm start
   ```

2. Open your web browser and visit [http://localhost:3000](http://localhost:3000).

3. Enter a location in the search bar and click "Go" to retrieve weather information.

## APIs Used

- [OpenWeatherMap API](https://openweathermap.org/api): Used for fetching current weather data, air pollution data, and 2-day forecast.
- [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api): Used for fetching a 15-day weather forecast.
- [ipgeolocation.io Astronomy API](https://ipgeolocation.io/astronomy-api.html): Used for fetching astronomical information.

## Design Decisions

- **Express.js:** Chosen as the backend framework for its simplicity and flexibility.
- **EJS:** Used as the templating engine for rendering dynamic content on the frontend.
- **Leaflet.js:** Used for displaying the location on a map.
- **Node-fetch:** Used for making HTTP requests to fetch data from external APIs.

## Contributing

Contributions are welcome! Please follow the [Contributing Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
```
