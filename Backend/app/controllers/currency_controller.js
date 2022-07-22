const Sequelize = require('sequelize');
const db = require("../models");
const Currency = db.currency;
const Op = db.Sequelize.Op;

// Connection for raw query
const sequelize = new Sequelize(process.env.DATABASE, process.env.DB, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// Retrieve all currency in wallet based on user id.
exports.findAllWalletCurrency = (req, res) => {
  const user_id = req.params.id;

  sequelize.query(
      "SELECT wallet_id, currency, amount FROM currency INNER JOIN wallet ON currency.wallet_id = wallet.id WHERE wallet.user_id = ?",
      {
        replacements: [user_id],
        type: sequelize.QueryTypes.SELECT,
      }
  ).then(data => {
      if (data) {
          res.send(data)
      } else {
          res.status(404).send({
              message: `Cannot find any wallets belonging to user id=${user_id}.`
          });
      }
  })
  .catch(err => {
    res.status(500).json({
        error: err
    });
});
};

// Delete an item with the specified id in the request
exports.delete = (req, res) => {
  console.log("id: " + req.params.id);
  Currency.destroy({ where: { id: req.params.id}})
  .then(result => {
        res.status(200).json({
            message: "Currency deleted"
        })
    })
  .catch(err => {
        res.status(500).json({
            error: err
        });
    });
};
