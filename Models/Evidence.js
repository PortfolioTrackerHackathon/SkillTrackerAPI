const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");
const Skill = require("./Skill");

const Evidence = sequelize.define("Evidence", {
  evidence_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  description: { type: DataTypes.TEXT },
  status: { type: DataTypes.STRING(20), defaultValue: "pending" },
  attachment_url: { type: DataTypes.TEXT },
}, { tableName: "evidence", timestamps: true });

Evidence.belongsTo(User, { foreignKey: "user_id" });
Evidence.belongsTo(Skill, { foreignKey: "skill_id" });

module.exports = Evidence;
