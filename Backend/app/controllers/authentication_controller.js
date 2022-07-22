const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

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

    res.status(200).json({
        message: "Login successful!"
    })
}

exports.logout = (req,res) => {
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
    res.status(201).json({
        message:"Register successful!"
    })
}