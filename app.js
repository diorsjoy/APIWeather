const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('index', { data: '' });
});

app.post('/', async (req, res) => {
    const location = req.body.location ? req.body.location : "Astana";
    const appId = "6d94f57eca92336c4889d792cb5431a5";
    const visualCrossingApiKey = "CQYASQHA8B9A2RX87CRED666U";

    try {
        // Fetch weather data using OpenWeatherMap API
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${appId}&units=metric`;
        const weatherResponse = await fetchData(weatherUrl);
        const weatherData = JSON.parse(weatherResponse);

        if (weatherData.cod === 200) {
            const { lat, lon } = weatherData.coord; // Extract latitude and longitude

            // Fetch air pollution data using OpenWeatherMap API
            const airPollutionUrl = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${appId}`;
            const airPollutionResponse = await fetchData(airPollutionUrl);
            const airPollutionData = JSON.parse(airPollutionResponse);

            // Fetch 15-day weather forecast data from Visual Crossing Weather API
            const visualCrossingUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}?unitGroup=metric&include=days&key=${visualCrossingApiKey}&contentType=json`;
            const visualCrossingResponse = await fetch(visualCrossingUrl);
            const visualCrossingData = await visualCrossingResponse.json();

            console.log("Visual Crossing Data:", visualCrossingData); // Log the data

            // Include astronomy API call here
            const astronomyUrl = `https://api.ipgeolocation.io/astronomy?apiKey=87302b4dcf6e444fa546df5fbd3f9c56&lat=${lat}&long=${lon}`;
            const astronomyResponse = await fetchData(astronomyUrl);
            const astronomyData = JSON.parse(astronomyResponse);

            res.render('index', {
                data: weatherData,
                airPollutionData: airPollutionData,
                forecastData: visualCrossingData.days,
                astronomyData: astronomyData
            });
        } else {
            res.render('index', { data: "0", forecastData: [], astronomyData: null });
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        res.render('index', { data: "0", forecastData: [], astronomyData: null });
    }
});

function fetchData(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            let data = '';

            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () => {
                resolve(data);
            });
        }).on('error', (error) => {
            reject(error);
        });
    });
}

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
});
