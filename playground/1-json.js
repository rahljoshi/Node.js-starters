const fs = require("fs");

const databuffer = fs.readFileSync("1-json.json");
const data = JSON.parse(databuffer.toString());
data.name = "Rahul";
data.age = 19;
const json = JSON.stringify(data);
fs.writeFileSync("1-json.json", json);
