const express = require("express");
const connectToDB = require("./src/db/db");

connectToDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hollo World");
});

app.listen(3000, () => {
  console.log("Server is runing on port 3000");
});
