const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

const jwt = require('jsonwebtoken');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createAndSendToken = (user, req, res) => {
  const token = signToken(user.id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.cookie('jwt', token, cookieOptions);

  return token
};

exports.login = async (req,res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.status(400).json({
            message:"Please provide username and password"
        })
    }

    const user = await User.findOne({ where: { username, password}});

    if (!user){
        res.status(401).json({
            message:"Incorrect email or password"
        })
    }

    createAndSendToken(user,req,res);

    res.status(200).json({
        message: "Login successful!"
    })
}

exports.protect = async (req, res, next) => {
    let token;
    // 1) Getting token and check if its there
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    } else if (req.headers.cookie) {
      token = req.headers.cookie.split('=')[1];
    }
    if (!token) {
      res.status(401).json({
        message: "You are not logged in!"
    })
    }
    // 2) Verification of token
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    // 3) Check if user still exists
    const currentUser = await User.findOne({ where: { id: decoded.id}});

    if (!currentUser) {
      res.status(401).json({
        message: "No found user with this token"
      })
    }
    next();
};  

exports.logout = (req,res) => {
    res.cookie('jwt', 'loggedout', {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true,
      });

    res.status(200).json({ message: "Logout successful" });
}

exports.register = async (req,res) => {
    const {username,password,name} = req.body;

    if (!username || !password || !name){
        res.status(400).json({
            message: "Missing fields"
        })
    }
    const newUser = await User.create({ 
        username,
        password,
        name
     });

    if (!newUser) {
        res.status(401).json({
            message: "Unable to create user"
        })
    }

    createAndSendToken(newUser,req,res);

    res.status(201).json({
        message:"Register successful!"
    })
}