const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect(
      "mongodb+srv://shubhamkm5382:8Dz6H4ku4zrobqhD@cluster0.kdp06.mongodb.net/Cohort"
    )
    .then(() => {
      console.log("connect to DB");
    });
}

module.exports = connectToDB;
