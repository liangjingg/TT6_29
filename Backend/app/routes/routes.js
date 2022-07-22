module.exports = app => {
    // Controllers
    const currency = require("../controllers/currency_controller.js");
  
    var router = require("express").Router();
  
    // Currency Controller

    // Retrieve all currency data based on user id
    router.get("/currency/:id", currency.findAllWalletCurrency);
  
    // Base route
    app.use('/api', router);
  };