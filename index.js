const APIBuilder = require('./api');
const Weather = require('./weather');
const prompt = require('prompt-sync')();

commandLineInterface();

function commandLineInterface() {
  console.log('Welcome to Stormbot. Please enter a zip code to check weather. Type exit to quit the application.')
  const input = prompt('> ');
    if (input === 'exit') {
      console.log('Gracefully shutting down. Have a great day!');
    } else {
      const api = new APIBuilder(input.toString());
      api.fetchHourlyWeatherForcastFromApi()
      .then(weather => {
        const forcast = new Weather(
          weather.city,
          weather.weather_pattern,
          weather.time_of_request, 
          weather.weather_info.temp, 
          weather.sunrise, 
          weather.sunset, 
          weather.weather_info.feels_like
          )
        forcast.printForcast();
        commandLineInterface();
      })
    }
  }

