const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../Model/UserModel");


exports.protect = async (req, res, next) => {
  
  let token;

  if (req.cookies.jwtToken) {
    token = req.cookies.jwtToken;
  }
  console.log(token);
  if (!token) {
    res.status(400).json("You are not logged in! Please log in to get access.");
  } else {
    
    const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);

    
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      res
        .status(400)
        .json("The user belonging to this token does no longer exist.");
    }
    
    req.user = currentUser;
    res.locals.user = currentUser;
  }
  next();
};

exports.login = async (req, res) => {
  const { name, password } = req.body;
  console.log(name, password);
  const login = await User.findOne({ name, password });
  if (!login) {
    res.status(400).send("error");


  } else {
    const token = jwt.sign({ id: login._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });





    res.cookie("jwtToken", token, {
      expires: new Date(
        Date.now() + 270000
      ),
      httpOnly: true,
    });
    res.send("user login Successfully");
  }
};

exports.registration = async (req, res) => {
  const data = await User.create(req.body);
  res.send(data);
};

