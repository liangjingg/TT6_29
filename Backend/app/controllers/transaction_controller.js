const db = require("../models");
const Transaction = db.transaction;
const Op = db.Sequelize.Op;

// Insert transaction into db
exports.insertTransaction = (req, res) => {
    const user_id = req.body.userid;
    const username = req.body.user;
    const wallet_id = req.body.walletid;
    const debit_id = req.body.debitid;
    const debit_currency = req.body.debitcurrency;
    const debit_amt = req.body.debitamt;
    const credit_id = req.body.creditid;
    const credit_currency = req.body.creditcurrency;
    const credit_amt = req.body.creditamt;
    const desc = req.body.desc;
    
    Transaction.create({
        user_id: user_id,
        wallet_id: wallet_id,
        debit_id: debit_id,
        debit_currency: debit_currency,
        debit_amount: debit_amt,
        credit_id: credit_id,
        credit_currency: credit_currency,
        credit_amount: credit_amt,
        description: desc,
        created_by: username
    }).then(data => {
        res.status(200).json({
            message: "Transaction created"
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
};
