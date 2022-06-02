const Owner = require("../models/owner.js");
const LandHolding = require("../models/landHolding.js");
const asyncHandler = require("express-async-handler");

const getAllOwners = (req, res) => {
  console.log(req.user);
  res.json({ message: "Get ALL owners" });
};
const getOwnerById = (req, res) => {
  res.json({ message: "Get owner by ID" });
};

//CREATE NEW OWNER
const createOwner = asyncHandler(async (req, res) => {
  const { name, entityType, ownerType, address } = req.body;
  if (!name || !entityType || !ownerType || !address) {
    res.status(400);
    throw new Error("Please provide all fields");
  }
  const newOwner = await Owner.create({
    name,
    entityType: entityType.toLowerCase(),
    ownerType: ownerType.toLowerCase(),
    address,
    totalHoldings: 0,
  });

  await newOwner.save();
  if (newOwner) {
    res.status(200).json({
      message: "Post new owner succesfully!",
      data: newOwner,
    });
  } else {
    throw new Error("Something went wrong");
  }
});

const updateOwner = (req, res) => {
  res.json({ message: "update owner" });
};
const deleteOwner = (req, res) => {
  res.json({ message: "delete owner" });
};

module.exports = {
  getAllOwners,
  getOwnerById,
  createOwner,
  deleteOwner,
  updateOwner,
};
