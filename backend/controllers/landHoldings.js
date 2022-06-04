const LandHolding = require("../models/landHolding.js");
const Owner = require("../models/owner.js");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

//GET ALL
const getAllLandHoldings = asyncHandler(async (req, res) => {
  const landHoldings = await LandHolding.find();
  if (landHoldings) {
    res.status(200).json({
      message: "Succesfully fetched all land holdings!",
      data: landHoldings,
    });
  } else {
    res.status(400);
    throw new Error("Error fetching land holdings");
  }
});

//GET LANDHOLDING BY ID
const getLandHoldingById = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    throw new Error(`No landing holding with ID ${req.params.id} found`);
  }
  const landHolding = await LandHolding.findById(req.params.id);
  if (landHolding) {
    res.status(200).json({
      message: `Successfully fetched landholding ${req.params.id}`,
      data: landHolding,
    });
  } else {
    res.status(400);
    throw new Error(`Error fetching land holding with ID ${req.params.id}`);
  }
});

//CREATE NEW LANDHOLDING
const createLandHolding = asyncHandler(async (req, res) => {
  const {
    ownerName,
    legalEntity,
    netMineralAcres,
    royaltyPercentage,
    section,
    township,
    range,
    titleSource,
  } = req.body;

  const lowerOwnerName = ownerName.toLowerCase();
  const upperTownship = township.toUpperCase();
  const upperRange = range.toUpperCase();

  //check if the owner is a valid owner
  const [owner] = await Owner.find({ name: lowerOwnerName });
  if (!owner) {
    throw new Error(`No owner found with that name`);
  }

  const sectionName = `${section}-${upperTownship}-${upperRange}`;
  const name = `${sectionName}-${legalEntity}`;

  const newLandHolding = await LandHolding.create({
    name: name,
    owner: lowerOwnerName,
    legalEntity,
    netMineralAcres,
    royaltyPercentage,
    sectionName: sectionName,
    section,
    township: upperTownship,
    range: upperRange,
    titleSource: titleSource.toLowerCase(),
  });
  await newLandHolding.save();

  await Owner.findByIdAndUpdate(
    owner._id,
    { totalHoldings: owner.totalHoldings + 1 },
    { new: true }
  );

  if (newLandHolding) {
    res.status(200).json({
      message: "Successfully created a new land holding",
      data: newLandHolding,
    });
  } else {
    res.status(400);
    throw new Error("Something went wrong creating a land holding");
  }
});

//UPDATE LAND HOLDING
const updateLandHolding = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    throw new Error(`No landholding with ID ${req.params.id} found`);
  }
  const {
    ownerName,
    legalEntity,
    netMineralAcres,
    royaltyPercentage,
    section,
    township,
    range,
    titleSource,
  } = req.body;

  const lowerOwnerName = ownerName.toLowerCase();
  const upperTownship = township.toUpperCase();
  const upperRange = range.toUpperCase();

  //check if the owner is a valid owner
  const [owner] = await Owner.find({ name: lowerOwnerName });
  if (!owner) {
    throw new Error(`No owner found with that name`);
  }

  const sectionName = `${section}-${upperTownship}-${upperRange}`;
  const name = `${sectionName}-${legalEntity}`;

  const updatedLandHolding = await LandHolding.findByIdAndUpdate(
    req.params.id,
    {
      name: name,
      owner: lowerOwnerName,
      legalEntity,
      netMineralAcres,
      royaltyPercentage,
      sectionName: sectionName,
      section,
      township: upperTownship,
      range: upperRange,
      titleSource: titleSource.toLowerCase(),
    },
    { new: true }
  );

  if (updatedLandHolding) {
    res.status(200).json({
      message: `Succesfully updated landholding with id ${req.params.id}`,
      data: updatedLandHolding,
    });
  } else {
    res.status(400);
    throw new Error("Error updating land holding");
  }
});

//DELETE LANDHOLDING
const deleteLandHolding = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    throw new Error(`No landholding with ID ${req.params.id} found`);
  }
  const isDeleted = await LandHolding.findByIdAndDelete(req.params.id);
  const [owner] = await Owner.find({ name: isDeleted?.owner });
  if (!owner) {
    throw new Error(`No owner found with that name`);
  }

  await Owner.findByIdAndUpdate(
    owner._id,
    { totalHoldings: owner.totalHoldings - 1 },
    { new: true }
  );

  if (isDeleted) {
    res.status(200).json({
      message: `Succesfully deleted land holding with ID ${req.params.id}`,
    });
  } else {
    res.status(400);
    throw new Error(`Error deleting land holding with id ${req.params.id}`);
  }
});

module.exports = {
  getAllLandHoldings,
  getLandHoldingById,
  createLandHolding,
  deleteLandHolding,
  updateLandHolding,
};
