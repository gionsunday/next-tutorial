import mongoose from "mongoose";

let isConnected = false; // track connection state

export const connectDB = async () => {
  if (isConnected) {
    console.log("✅ MongoDB already connected");
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("❌ Missing MONGODB_URI environment variable");
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "NEXT-APP", // optional: replace with your DB name
    });

    isConnected = db.connections[0].readyState;
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
};
