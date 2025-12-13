const express = require("express");

const server = express();

server.use(express.json());

let notes = [];

server.get("/home", (req, res) => {
  res.send("this is home page");
});

server.get("/about", (req, res) => {
  res.send("this is about page");
});

server.post("/notes", (req, res) => {
  console.log(req.body);
  notes.push(req.body);
  res.json({
    message: "notes add successfully",
    notes: notes,
  });
});

server.listen(3000, () => {
  console.log("server is runinng on port 3000");
});
