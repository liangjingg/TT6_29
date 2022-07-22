const db = require("../models");
const Wallet = db.wallet;
const Op = db.Sequelize.Op;

// Create and Save
exports.create = (req, res) => {
    Wallet.create({
        user_id: req.body.user_id, 
        name: req.body.name
    })
    .then(result => {
        res.status(200).json({
            message: "Wallet created"
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
};
// Retrieve all items from the table.
exports.findAllByUserID = (req, res) => {
  Wallet.findAll({ where: {user_id: req.params.id}})
  .then(datas => {
        res.status(200).json({
            status: res.status,
            count: datas.length,
            wallet: datas.map(data => {
                return {
                    id: data.id,
                    user_id: data.user_id,
                    name: data.name
                }
            })
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
};
// Update an item by the id in the request
exports.update = (req, res) => {
  Wallet.update({
    user_id: req.body.user_id, 
    name: req.body.name}, {
    where: {
        id: req.params.id
    }
  }).then(result => {
    res.status(200).json({
        message: "Wallet updated"
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
        error: err
    });
});
};
// Delete an item with the specified id in the request
exports.delete = (req, res) => {
  Wallet.destroy({ where: { id: req.params.id}})
  .then(result => {
        res.status(200).json({
            message: "Wallet deleted"
        })
    })
  .catch(err => {
        res.status(500).json({
            error: err
        });
    });
};
