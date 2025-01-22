const mongoose = require("mongoose");
require("dotenv").config();

// MongoDB connection URI from environment variables
const mongoURI = process.env.MONGO_URI;

// Function to connect to the MongoDB database
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI); // No need to pass useNewUrlParser or useUnifiedTopology
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
