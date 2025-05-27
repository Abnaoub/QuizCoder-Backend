const { Sequelize, DataTypes } = require("sequelize");

// Crea il database SQLite locale
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});

// Definisci il modello User con un campo "email"
const User = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
});

// Sincronizza il modello con il database
sequelize.sync();

module.exports = { sequelize, User };
