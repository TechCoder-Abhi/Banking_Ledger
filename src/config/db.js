const mongoose = require("mongoose");

async function connectToDB() {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not set");
  }

  await mongoose.connect(process.env.MONGO_URI);
  console.log("Server is connected to DB");
}

module.exports = connectToDB;