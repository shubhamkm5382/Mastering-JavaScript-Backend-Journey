const express = require("express");
const connectToDB = require("./src/db/db");

const app = express();
app.use(express.json());
connectToDB();

app.get("/", (req, res) => {
  res.send("Hollo World");
});

app.post("/notes", (req, res) => {
  //   const { title, content } = req.body;
  //   console.log(title, content);
  console.log(req.body);
});

app.listen(3000, () => {
  console.log("server is runing on port 3000");
});
