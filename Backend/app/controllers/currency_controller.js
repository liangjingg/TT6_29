const db = require("../models");
const Currency = db.currency;
const Op = db.Sequelize.Op;

// Retrieve all currency in wallet based on user id.
exports.findAllWalletCurrency = (req, res) => {
    const user_id = req.params.id;
    
    Currency.findByPk(user_id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find any wallets belonging to user id=${user_id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving wallet with user id=" + user_id
      });
    });
};
