const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const input = process.argv[2];
if (!input) {
  console.log("Enter a valid location");
} else {
  geocode(input, (error, data) => {
    if (error) {
      return console.log(error);
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(data.location);
      console.log(forecastData);
    });
  });
}
