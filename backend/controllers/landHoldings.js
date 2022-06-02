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
    throw new Error(`No owner with ID ${req.params.id} found`);
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
    ownerId,
    legalEntity,
    netMineralAcres,
    royaltyPercentage,
    sectionName,
    section,
    township,
    range,
    titleSource,
  } = req.body;

  //TODO: can optimize this with a validation library like yup
  if (
    !ownerId ||
    !legalEntity ||
    !netMineralAcres ||
    !royaltyPercentage ||
    !section ||
    !township ||
    !range ||
    !titleSource
  ) {
    throw new Error("Please enter all fields");
  }
  //test change internet error
  //check if the owner is a valid owner
  const owner = await Owner.findById(ownerId);
  if (!owner) {
    throw new Error(`No owner found with that ID`);
  }
});

const updateLandHolding = (req, res) => {
  res.json({ message: "update landholding" });
};
const deleteLandHolding = (req, res) => {
  res.json({ message: "delete landholding" });
};

module.exports = {
  getAllLandHoldings,
  getLandHoldingById,
  createLandHolding,
  deleteLandHolding,
  updateLandHolding,
};
