const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//DB connect
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'Password123456',
    database: ''
});

//to fix CORS erros
app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

//Error when page is not found
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

//Handling of all error
app.use((error, req, res, next) => {
    res.status(error.status || 500);
     res.json({
        error: {
            message: error.message,
            message2: rows
        }
    });
});

module.exports = app;