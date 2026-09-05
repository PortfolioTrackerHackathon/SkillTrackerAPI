const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  try {
    const { firstname, lastname, email, password, stakeholderid } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ firstname, lastname, email, password: hashedPassword, stakeholderid });
    res.json({ success: true, user });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(401).json({ success: false, message: "Invalid email or password" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ success: false, message: "Invalid email or password" });

    //const token = jwt.sign({ id: user.user_id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ success: true, message: "Login successful" /*token*/ });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ✅ Get all students by stakeholderid
router.get("/students", async (req, res) => {
  try {
    const students = await User.findAll({
      where: { stakeholderid: 1 },   // filter by stakeholderid
      attributes: { exclude: ["password"] } // hide password field
    });
    res.json({ success: true, students });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
