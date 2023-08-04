//mongodb+srv://deepkul2552003:12111226@cluster0.bowgfzd.mongodb.net/?retryWrites=true&w=majority


const { MongoClient } = require("mongodb");

// Replace the following with your MongoDB connection details
const username = encodeURIComponent("deepkul2552003");
const password = encodeURIComponent("12111226");
const cluster = "Cluster-0";
const dbName = "try"; 

const uri = `mongodb+srv://${username}:${password}@${cluster}.bowgfzd.mongodb.net/${dbName}?retryWrites=true&w=majority`;


const client = new MongoClient(uri, { useUnifiedTopology: true });

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

// Call the function to connect and perform operations
connectToMongoDB().catch(console.error);

module.exports = connectToMongoDB;

