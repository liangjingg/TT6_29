var DataTypes = require("sequelize").DataTypes;
var _currency = require("./currency");
var _exchange_rate = require("./exchange_rate");
var _transaction = require("./transaction");
var _user = require("./user");
var _wallet = require("./wallet");

function initModels(sequelize) {
  var currency = _currency(sequelize, DataTypes);
  var exchange_rate = _exchange_rate(sequelize, DataTypes);
  var transaction = _transaction(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var wallet = _wallet(sequelize, DataTypes);

  transaction.belongsTo(currency, { as: "debit", foreignKey: "debit_id"});
  currency.hasMany(transaction, { as: "transactions", foreignKey: "debit_id"});
  transaction.belongsTo(currency, { as: "credit", foreignKey: "credit_id"});
  currency.hasMany(transaction, { as: "credit_transactions", foreignKey: "credit_id"});
  currency.belongsTo(wallet, { as: "wallet", foreignKey: "wallet_id"});
  wallet.hasMany(currency, { as: "currencies", foreignKey: "wallet_id"});
  transaction.belongsTo(wallet, { as: "wallet", foreignKey: "wallet_id"});
  wallet.hasMany(transaction, { as: "transactions", foreignKey: "wallet_id"});

  return {
    currency,
    exchange_rate,
    transaction,
    user,
    wallet,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
