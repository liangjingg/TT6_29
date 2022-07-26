const dotenv = require("dotenv")
const Sequelize = require("sequelize");

// Load .env variables
dotenv.config()

const sequelize = new Sequelize(process.env.DATABASE, process.env.DB, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: "mysql",
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.currency = require("./currency.js")(sequelize, Sequelize.DataTypes);
db.wallet = require("./wallet.js")(sequelize, Sequelize.DataTypes);
db.exchange_rate = require("./exchange_rate.js")(sequelize, Sequelize.DataTypes);
db.transaction = require("./transaction.js")(sequelize, Sequelize.DataTypes);
db.user = require("./user.js")(sequelize, Sequelize.DataTypes);

module.exports = db;