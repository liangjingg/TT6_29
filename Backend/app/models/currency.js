const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('currency', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    wallet_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'wallet',
        key: 'id'
      }
    },
    currency: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'currency',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "FK_currency_wallet",
        using: "BTREE",
        fields: [
          { name: "wallet_id" },
        ]
      },
    ]
  });
};
