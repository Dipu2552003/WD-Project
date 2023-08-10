// Import required libraries
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

// Connection URL for MongoDB Atlas (or your local MongoDB instance)
const mongoDBURL = "mongodb://localhost:27017/wikiDB";

// Connect to MongoDB using the native driver
async function connectToMongoDB() {
  const client = new MongoClient(mongoDBURL, { useNewUrlParser: true });

  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log("Connected to MongoDB using native driver");

    // Perform operations using the client

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    // Close the connection when done
    await client.close();
    console.log("MongoDB connection closed");
  }
}

// Connect to MongoDB using Mongoose
mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB using Mongoose");
    // You can define Mongoose schemas and models here
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB using Mongoose:", error);
  });

// Call the function to connect to MongoDB using native driver
connectToMongoDB();
