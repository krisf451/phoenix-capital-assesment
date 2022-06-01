const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/user.js");

//SIGNUP
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

//SIGNIN
const signin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  //check if the user already exists
  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    res.status(400);
    throw new Error("User does not exist");
  }

  const isPasswordCorrect = await bcrypt.compare(
    password,
    existingUser.password
  );
  if (!isPasswordCorrect) {
    res.status(400);
    throw new Error("Invalid Credentials, Passwords do not match");
  }

  const token = jwt.sign(
    { email: existingUser.email, id: existingUser._id },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );

  if (existingUser) {
    res.status(200).json({
      message: "Signin Success!",
      _id: existingUser._id,
      email: existingUser.email,
      token: token,
    });
  } else {
    res.status(400);
    throw new Error("Something went wrong trying to signin");
  }
});

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
