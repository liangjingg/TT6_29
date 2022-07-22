const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transaction', {
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
    debit_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'currency',
        key: 'id'
      }
    },
    debit_currency: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    debit_amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    credit_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'currency',
        key: 'id'
      }
    },
    credit_currency: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    credit_amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    created_by: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    updated_by: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'transaction',
    timestamps: true,
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
        name: "FK_transaction_wallet",
        using: "BTREE",
        fields: [
          { name: "wallet_id" },
        ]
      },
      {
        name: "FK_transaction_debit",
        using: "BTREE",
        fields: [
          { name: "debit_id" },
        ]
      },
      {
        name: "FK_transaction_credit",
        using: "BTREE",
        fields: [
          { name: "credit_id" },
        ]
      },
    ]
  });
};
