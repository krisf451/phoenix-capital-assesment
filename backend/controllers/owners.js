const Owner = require("../models/owner.js");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

//GET ALL
const getAllOwners = asyncHandler(async (req, res) => {
  const owners = await Owner.find();
  if (owners) {
    res.status(200).json({
      message: "Get all owners successful",
      data: owners,
    });
  } else {
    res.status(400);
    throw new Error("Error getting all owners");
  }
});

//GET BY ID
const getOwnerById = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    throw new Error(`No owner with ID ${req.params.id} found`);
  }
  const owner = await Owner.findById(req.params.id);
  if (owner) {
    res.status(200).json({
      message: "Get owner by ID successful",
      data: owner,
    });
  } else {
    res.status(400);
    throw new Error("Error getting all owners");
  }
});

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

//UPDATE OWNER DATA
const updateOwner = asyncHandler(async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    throw new Error(`No owner with ID ${_id} found`);
  }
  const owner = req.body;

  const updatedOwner = await Owner.findByIdAndUpdate(
    _id,
    { ...owner, _id },
    { new: true }
  );

  if (updatedOwner) {
    res.status(200).json({
      message: "Updated Owner Successfully!",
      data: updatedOwner,
    });
  } else {
    throw new Error("Error updating owner");
  }
});

//DELETE OWNER
//TODO: THIS IS WHERE WE NEED TO FIGURE OUT THE LOGIC FOR DELETING ALL LANDHOLDINGS RELATED TO THE OWNER THAT WAS DELETED
const deleteOwner = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    throw new Error(`No owner with ID ${req.params.id} found`);
  }
  await Owner.findByIdAndDelete(req.params.id);
  res.status(200).json({
    message: `Successfully deleted Owner with ID ${req.params.id}`,
  });
});

module.exports = {
  getAllOwners,
  getOwnerById,
  createOwner,
  deleteOwner,
  updateOwner,
};
