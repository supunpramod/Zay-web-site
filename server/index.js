import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";


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



// // Routes
// // Public Route
// app.get('/', (req, res) => {
//   res.send('Public Site - Welcome Visitors!');
// });

// // Protected Admin Dashboard
// app.get('/dashboard', authMiddleware, (req, res) => {
//   res.send(`Admin Dashboard - Welcome ${req.user.name}`);
// });

// // Auth Routes
// app.use('/api/auth', authRoutes);




// Contact Schema
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [3, "Name must be at least 3 characters"],
      maxlength: [50, "Name must be less than 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Email is invalid"],
    },
    subject: {
      type: String,
      required: [true, "Subject is required"],
      trim: true,
      minlength: [3, "Subject must be at least 3 characters"],
      maxlength: [100, "Subject must be less than 100 characters"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      minlength: [10, "Message must be at least 10 characters long"],
      maxlength: [1000, "Message must be less than 1000 characters"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true } // auto adds createdAt & updatedAt
);

// Create model
const Contact = mongoose.model("Contact", contactSchema);

// Create a new contact
// app.post("/api/contac", async (req, res) => {
//   try {
//     const contact = await Contact.create(req.body);
//     res.status(201).json(contact);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

app.post("/api/contacts", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Create new contact
    const contact = new Contact({ name, email, subject, message });
    await contact.save();

    res.status(201).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});


app.get("/api/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});


app.delete("/api/contacts/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Contact deleted" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});






//register admin

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: 3
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"]
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6
    },
    isVerified: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

const Admin = mongoose.model("Admin", userSchema);



app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1. Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // 2. Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 3. Create admin
    const newAdmin = new Admin({
      name,
      email,
      password: hashedPassword,
    });

    await newAdmin.save();

    res.status(201).json({ 
      message: "Admin registered successfully",
      admin: { id: newAdmin._id, name: newAdmin.name, email: newAdmin.email }
    });
  } catch (error) {
    console.error("Error registering admin:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});









app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`); // ✅ Use backticks
});
