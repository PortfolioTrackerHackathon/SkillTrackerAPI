const express = require("express");
const Evidence = require("../models/Evidence");

const router = express.Router();

// Add evidence
router.post("/", async (req, res) => {
  try {
    const { userid, skillid, description, attachmenturl } = req.body;
    const evidence = await Evidence.create({ userid, skillid, description, attachmenturl });
    res.json({ success: true, evidence });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// Get evidence for user
router.get("/user/:id", async (req, res) => {
  try {
    const evidence = await Evidence.findAll({ where: { userId: req.params.id } });
    res.json(evidence);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
