import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";


const app = express();

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads")); 

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






// Schema & Model
const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Full name is required"], trim: true, minlength: 3 },
  email: { type: String, required: [true, "Email is required"], unique: true, lowercase: true, match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"] },
  password: { type: String, required: [true, "Password is required"], minlength: 6 },
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

const Admin = mongoose.model("Admin", userSchema);

// Register
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newAdmin = new Admin({ name, email, password: hashedPassword });
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

// Login
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });

    if (!admin) return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      process.env.JWT_SECRET || "yourSecretKey",
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      admin: { id: admin._id, name: admin.name, email: admin.email }
    });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});




//shop

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  img: { type: String }, // Multer will save image filename or path here
  category: { type: String, enum: ["Men", "Women", "Bag", "Sweater", "Sunglass"], required: true },
  rating: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

const Product = mongoose.model("Product", productSchema);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});

const fileFilter = (req, file, cb) => {
  const allowed = /jpeg|jpg|png|gif/;
  const ext = allowed.test(path.extname(file.originalname).toLowerCase());
  const mime = allowed.test(file.mimetype);
  if (ext && mime) cb(null, true);
  else cb(new Error("Only images are allowed!"));
};

const upload = multer({ storage, fileFilter });

// ------------------ Routes ------------------

// Create product
app.post("/api/products", upload.single("img"), async (req, res) => {
  try {
    const { name, price, category, rating } = req.body;
    const product = new Product({
      name,
      price,
      category,
      rating: rating || 0,
      img: req.file ? req.file.filename : null,
    });
    await product.save();
    res.status(201).json({ message: "Product created", product });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get single product
app.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update product
app.put("/api/products/:id", upload.single("img"), async (req, res) => {
  try {
    const updateData = { ...req.body };
    if (req.file) updateData.img = req.file.filename;
    const updated = await Product.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!updated) return res.status(404).json({ message: "Not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete product
app.delete("/api/products/:id", async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});




app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`); // ✅ Use backticks
});
