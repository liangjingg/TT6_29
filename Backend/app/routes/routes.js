module.exports = app => {
    // Controllers
    const currency = require("../controllers/currency_controller.js");
    const exchangeRate = require('../controllers/exchangerate_controller.js')
  
    var router = require("express").Router();
  
    // Currency Controller

    // Retrieve all currency data based on user id
    router.get("/currency/:id", currency.findAllWalletCurrency);

    // Exchange Rate Routes
    router.get('/exchange',exchangeRate.findAllExchangeRates)

    // Base route
    app.use('/api', router);
  };