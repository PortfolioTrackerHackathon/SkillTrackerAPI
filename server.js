const express = require("express");
const sequelize = require("./config/database");
const authRoutes = require("routes/auth");
const evidenceRoutes = require("routes/evidence");

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/evidence", evidenceRoutes);

sequelize.authenticate()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.error("DB connection error:", err));

app.listen(3000, () => console.log("Server running on port 3000"));
