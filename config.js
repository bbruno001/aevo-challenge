const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT;

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.set("views", "./src/views");
app.set("styles", "./src/styles");
app.set("scripts", "./src/scripts");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/src"));
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/scripts"));

module.exports.express = function () {
  return app;
};
