const express = require("express");
const User = require("../models/User");


const router = express.Router();

router.get("/students", async (req, res) => {
  try {
    const students = await User.findAll({
      where: { stakeholderid: 1 },
      attributes: { exclude: ["password"] }
    });
    res.json({ success: true, students });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});