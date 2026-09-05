const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");
const Skill = require("./Skill");

const Evidence = sequelize.define("Evidence", {
  evidenceid: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  userid: { type: DataTypes.INTEGER },
  skillid: { type: DataTypes.INTEGER },
  description: { type: DataTypes.TEXT },
  statusid: { type: DataTypes.INTEGER },
  attachmenturl: { type: DataTypes.TEXT }
}, { 
  tableName: "evidence", 
  timestamps: false   // disable createdAt/updatedAt since not in table
});

// ✅ Associations must match your DB column names
Evidence.belongsTo(User, { foreignKey: "userid" });
Evidence.belongsTo(Skill, { foreignKey: "skillid" });

module.exports = Evidence;
