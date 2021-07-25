const request = require("request");
const fs = require("fs");
const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoicmFobGpvc2hpIiwiYSI6ImNrcmk3cG9pZDMwd2kyenA4NmU3Z3h3aG4ifQ.UI0c0m3RXD3Jpm0apnopzA";
  request({ url: url, json: true }, (error, response) => {
    try {
      const data = response.body.features[0];
      callback(undefined, {
        location: data.place_name,
        longitude: data.geometry.coordinates[0],
        latitude: data.geometry.coordinates[1],
      });
    } catch (e) {
      if (error) {
        callback("error connnecting to server", undefined);
      } else {
        callback("error fetching details from the server", undefined);
      }
    }
  });
};

module.exports = geocode;
