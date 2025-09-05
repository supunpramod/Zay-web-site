import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

// MongoDB connection
const MONGO_URI = "mongodb+srv://pramodsupun06_db_user:HEB7yO545DQtwGZD@cluster0.fwgjhbf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`); // ✅ Use backticks
});
