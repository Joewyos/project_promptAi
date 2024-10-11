import mongoose from "mongoose";

let isConnected = false; // Track the connection status

export const connectToDB = async () => {
  mongoose.set("strictQuery", true); // Optional: Customize mongoose settings

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    // Attempt to connect to the MongoDB using the connection string from environment variables
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt", // Ensure the correct database name
    });

    isConnected = true; // Mark connection as successful
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message || error); // Log the error message
    throw new Error("Failed to connect to MongoDB"); // Throw the error for better error tracking
  }
};
