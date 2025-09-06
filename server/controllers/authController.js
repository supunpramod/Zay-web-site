import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Admin Login Controller
export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    // Find user by email
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }
    
    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }
    
    // Create JWT payload
    const payload = { 
      user: { 
        id: user.id, 
        name: user.name 
      } 
    };
    
    // Sign token
    jwt.sign(
      payload, 
      process.env.JWT_SECRET, 
      { expiresIn: '1h' }, 
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};