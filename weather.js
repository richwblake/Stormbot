function Weather(city, weather_pattern, lastUpdated, temperature, sunrise, sunset, feels_like) {
  this.city = city;
  this.weather_pattern = weather_pattern;
  this.temperature = temperature;
  this.currentTime = UTCToString(Date.now());
  this.lastUpdated = UTCToString(lastUpdated * 1000);
  this.sunrise = UTCToString(sunrise * 1000);
  this.sunset = UTCToString(sunset * 1000);
  this.feels_like = feels_like;
}

Weather.prototype.printForcast = function() {
  console.log(`---------- Forcast for ${this.city} at ${this.currentTime} ----------`)
  console.log(`The temperature outside is approximately ${kelvinToFahrenheit(this.temperature)} F`);
  console.log(`The temperature outside feels like ${kelvinToFahrenheit(this.feels_like)} F`);
  console.log(`Current weather pattern: ${this.weather_pattern}`);
  console.log(`Sunrise is at ${this.sunrise}`);
  console.log(`Sunset is at ${this.sunset}`);
  console.log(`Forcast was last updated at ${this.lastUpdated}`)
  console.log("-------------------------------------------------")
}

function UTCToString(time)  {
  let date = new Date(time);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  
  if (hours === 12) {
    return `${hours}:${minutes.substr(-2)} PM`;
  } else if (hours < 13) {
    return `${hours}:${minutes.substr(-2)} AM`    
  } else {
    return `${hours - 12}:${minutes.substr(-2)} PM`
  }
}

function kelvinToFahrenheit(temp) {
  return Math.trunc((temp - 273.15) * 9/5 + 32);
}

module.exports = Weather;