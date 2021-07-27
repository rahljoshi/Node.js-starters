const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=fbd9c343beaf4092c84c4638ff79425b&query=" +
    latitude +
    "," +
    longitude;

  request({ url: url, json: true }, (error, reponse) => {
    try {
      callback(
        undefined,
        "Weather Description: " +
          reponse.body.current.weather_descriptions +
          "\n" +
          "" +
          "Temperature is: " +
          reponse.body.current.temperature
      );
    } catch (e) {
      if (error) {
        //   console.log("Looks like something went wrong");
        callback("Looks like something went wrong", undefined);
      } else {
        //   console.log("Enter a valid input");
        callback("Enter a valid input", undefined);
      }
    }
  });
};

module.exports = forecast;
