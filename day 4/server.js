const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

let notes = [];

app.post("/notes", (req, res) => {
  console.log(req.body);
  notes.push(req.body);
  res.json({
    message: "Notes created successfully",
    Notes: notes,
  });
});

app.get("/notes", (req, res) => {
  res.send(notes);
});

app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;
  delete notes[index];
  res.json({
    message: "notes delete successfully",
    notes: notes,
  });
});

app.patch("/notes/:index", (req, res) => {
  const index = req.params.index;
  const { title } = req.body;
  notes[index].title = title;

  res.json({
    message: "note updated successfully",
    notes: notes,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
