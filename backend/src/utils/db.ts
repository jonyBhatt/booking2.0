import mongoose from "mongoose";

export async function ConnectDB() {
  try {
    const connect = await mongoose.connect(
      (process.env.MONGODB_CONNECTION_STRING as string) ||
        "mongodb://localhost:27017"
    );

    console.log(
      `Your mongodb connection in the port ${connect.connection.host}`
    );
  } catch (error: any) {
    console.error("Error connecting to MongoDB:", error.message);
    if (error instanceof mongoose.Error) {
      // Handle Mongoose-specific errors
      if (error.name === "MongoNetworkError") {
        console.error("MongoDB Network Error. Check your network connection.");
      } else if (error.name === "MongoTimeoutError") {
        console.error(
          "MongoDB Connection Timeout. Ensure the server is running."
        );
      }
      // Handle other Mongoose errors as needed
    } else {
      // Handle generic errors
      console.error("Unexpected error:", error);
    }
  }
}
