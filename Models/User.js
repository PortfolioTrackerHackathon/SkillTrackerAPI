const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("User", {
  userid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstname: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  stakeholderid: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  tableName: "users",   // must match your DB table name
  timestamps: false     // disable createdAt/updatedAt since not in table
});

module.exports = User;
