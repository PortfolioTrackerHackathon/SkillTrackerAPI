const express = require("express");
const Evidence = require("./models/Evidence");

const router = express.Router();

// Add evidence
router.post("/", async (req, res) => {
  try {
    const { user_id, skill_id, description, attachment_url } = req.body;
    const evidence = await Evidence.create({ user_id, skill_id, description, attachment_url });
    res.json({ success: true, evidence });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// Get evidence for user
router.get("/user/:id", async (req, res) => {
  try {
    const evidence = await Evidence.findAll({ where: { user_id: req.params.id } });
    res.json(evidence);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
