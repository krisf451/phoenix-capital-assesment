const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/user.js");

const signup = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  //check if the user already exists
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    res.status(400);
    throw new Error("User already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 12);

  const result = await User.create({
    email,
    password: hashedPassword,
  });
  const token = jwt.sign(
    { email: result.email, id: result._id },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );

  if (result) {
    res.status(201).json({
      message: "Signup Success!",
      _id: result._id,
      email: result.email,
      token: token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

const signin = async (req, res) => {
  res.json({ message: "signup route working" });
};

//just a test route for checking all users
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.json(users);
});

module.exports = {
  signin,
  signup,
  getAllUsers,
};
