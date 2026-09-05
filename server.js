require("dotenv").config();
const express = require("express");
const sequelize = require("./config/database");   // fixed path
const authRoutes = require("./routes/auth");      // same folder, lowercase
const evidenceRoutes = require("./routes/evidence"); // fixed path

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/evidence", evidenceRoutes); 

            // fixed typo

sequelize.authenticate()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.error("DB connection error:", err));

app.listen(3000, () => console.log("Server running on port 3000"));
