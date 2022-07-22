module.exports = app => {
    // Controllers
    const currency = require("../controllers/currency_controller.js");
    const wallet = require("../controllers/wallet_controller");
    const exchangeRate = require('../controllers/exchangerate_controller.js')
    const authentication = require('../controllers/authentication_controller.js')
  
    var router = require("express").Router();
  
    // Currency Controller

    // Retrieve all currency data based on user id
    router.get("/currency/:id", currency.findAllWalletCurrency);
    router.delete("/currency/:id", currency.delete);
    router.get("/wallet/:id", wallet.findAllByUserID);
    router.delete("/wallet/:id", wallet.delete);
    router.post("/wallet/", wallet.create);
    router.put("/wallet/:id", wallet.update);

    // Exchange Rate Routes
    router.get('/exchange',exchangeRate.findAllExchangeRates)

    // Auth routes
    router.post('/auth/login',authentication.login)
    router.get('/auth/logout',authentication.protect,authentication.logout)
    router.post('/auth/register',authentication.register)

    // Base route
    app.use('/api', router);
  };