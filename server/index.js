import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import authMiddleware from "./middleware/authMiddleware.js";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

// MongoDB connection
const MONGO_URI = "mongodb+srv://pramodsupun06_db_user:HEB7yO545DQtwGZD@cluster0.fwgjhbf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));



// Routes
// Public Route
app.get('/', (req, res) => {
  res.send('Public Site - Welcome Visitors!');
});

// Protected Admin Dashboard
app.get('/dashboard', authMiddleware, (req, res) => {
  res.send(`Admin Dashboard - Welcome ${req.user.name}`);
});

// Auth Routes
app.use('/api/auth', authRoutes);




app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`); // ✅ Use backticks
});
