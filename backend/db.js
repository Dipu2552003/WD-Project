const mongoose = require("mongoose");

// Connection URL for MongoDB using the provided connection string
const mongoDBURL = "mongodb://localhost:27017/db";

// Connect to MongoDB using Mongoose
mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB using Mongoose");
    // You can define Mongoose schemas and models here
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB using Mongoose:", error);
  });


  