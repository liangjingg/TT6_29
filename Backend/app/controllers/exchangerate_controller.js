const db = require("../models");
const ExchangeRate = db.exchange_rate;
const Op = db.Sequelize.Op;

// Retrieve list of exchange rates
exports.findAllExchangeRates = async (req, res) => {
    try {
        const data = await ExchangeRate.findAll({})
        res.send(data)
    } catch (error) {
        res.status(500).send({
            message: "Error retrieving exchange rates"
          });
    }
}