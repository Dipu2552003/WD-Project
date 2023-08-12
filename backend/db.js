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

// const { MongoClient } = require("mongodb");
// const mongoose = require("mongoose");

// const username = encodeURIComponent("deepkul2552003");
// const password = encodeURIComponent("12111226");
// const cluster = "Cluster-0";
// const dbName = "db"; 

// const uri = `mongodb+srv://${username}:${password}@${cluster}.bowgfzd.mongodb.net/${dbName}?retryWrites=true&w=majority`;


// const client = new MongoClient(uri, { useUnifiedTopology: true });

// async function connectToMongoDB() {
//   try {
//     await client.connect();
//     console.log("Conn to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// }

// // Call the function to connect and perform operations
// connectToMongoDB().catch(console.error);

// module.exports = connectToMongoDB;

  