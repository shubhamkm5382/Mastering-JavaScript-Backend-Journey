const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.send("this is hone page");
});

app.get("/about", (req, res) => {
  res.send("this is abount page");
});

app.listen(3000, (req, res) => {
  console.log("server is running on port 3000");
});
