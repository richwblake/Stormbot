const fetch = require('node-fetch');

function API(zip) {
  // Please create an account at https://openweathermap.org and get an API key.
  this.key = "";
  this.endpoint = "https://api.openweathermap.org/data/2.5/weather?zip=";
  this.zip = zip;
}

// returns a JSON object containing hourly forcast information for a given city
API.prototype.hourlyForcast = function() {
  return `${this.endpoint}${this.zip}&appid=${this.key}`
}

API.prototype.fetchHourlyWeatherForcastFromApi = async function() {
  const response = await fetch(this.hourlyForcast());
  if (!response.ok) {
    throw new Error(`HTTP request error: ${response.status}`)
  } else {
    const weather = await response.json();
    return {
      weather_pattern: weather.weather[0].description,
      weather_info: weather.main,
      city: weather.name,
      time_of_request: weather.dt,
      sunrise: weather.sys.sunrise,
      sunset: weather.sys.sunset
    }
  }

}

module.exports = API;