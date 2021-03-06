const Owner = require("../models/owner.js");
const LandHolding = require("../models/landHolding.js");

const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

//GET ALL
const getAllOwners = asyncHandler(async (req, res) => {
  const owners = await Owner.find();
  if (owners) {
    res.status(200).json({
      message: "Get all owners successful",
      ammountOfOwners: owners.length,
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
    name: name.toLowerCase(),
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
  const body = req.body;
  const owner = await Owner.findById(_id);

  if (req.body.name !== owner?.name) {
    await LandHolding.updateMany(
      { owner: owner?.name },
      { owner: req.body.name },
      { new: true }
    );
  }

  const updatedOwner = await Owner.findByIdAndUpdate(
    _id,
    { ...body, _id },
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
const deleteOwner = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    throw new Error(`No owner with ID ${req.params.id} found`);
  }

  const deletedOwner = await Owner.findByIdAndDelete(req.params.id);
  const numberOfDeletedHoldings = await LandHolding.deleteMany({
    owner: deletedOwner.name,
  });
  if (deletedOwner) {
    res.status(200).json({
      message: `Successfully deleted Owner with ID ${req.params.id}`,
      deletedHoldings: numberOfDeletedHoldings?.deletedCount,
    });
  } else {
    res.status(400);
    throw new Error("Error deleting owner");
  }
});

module.exports = {
  getAllOwners,
  getOwnerById,
  createOwner,
  deleteOwner,
  updateOwner,
};
