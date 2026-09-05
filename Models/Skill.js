const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Skill = sequelize.define("Skill", {
  skillId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  skillName: { type: DataTypes.STRING(100), allowNull: false },
  category: { type: DataTypes.STRING(50), allowNull: false }
}, { tableName: "skills", timestamps: false });

module.exports = Skill;
