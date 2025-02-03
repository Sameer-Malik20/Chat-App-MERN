const express = require("express");
const User = require("../models/user.js");  // ✅ Import the User Model
const router = express.Router();
const bcrypt = require("bcryptjs");  // ✅ Import bcrypt properly
const jwt = require("jsonwebtoken");  // ✅ Import jsonwebtoken properly

// 🔹 Signup Route
router.post("/signup", async (req, res) => {
    const { name, password } = req.body;  // `name` instead of `userName`
  
    console.log("Received signup request with:", { name, password });  // Log name and password
  
    try {
      const existUser = await User.findOne({ name });  // Find user by `name`
      if (existUser) {
        return res.status(400).json({ message: "User already exists" });
      }
  
      const hashedPass = await bcrypt.hash(password, 12);
      const newUser = new User({ name, password: hashedPass });
      await newUser.save();
  
      return res.status(201).json({ message: "User created successfully" });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Server error" });
    }
  });
  
  

// 🔹 Login Route
const secret = "sam";
router.post("/login", async (req, res) => {
  const { name, password } = req.body;

  try {
    // 🔹 Find User in Database
    const user = await User.findOne({ name });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 🔹 Log the user and hashed password to debug
    console.log("User found:", user);
    console.log("Entered Password:", password);
    console.log("Stored Hashed Password:", user.password);

    // 🔹 Compare Hashed Password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // 🔹 Generate JWT Token
    const token = jwt.sign({ userId: user._id }, secret, { expiresIn: "7d" });

    // Log the successful login
    console.log(`User: ${name} logged in successfully`);
    return res.status(200).json({ message: "Login successful", token });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;  // ✅ Correct Export
