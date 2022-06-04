const mongoose = require("mongoose");

const landHoldingSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    owner: { type: String, required: true },
    legalEntity: { type: String },
    netMineralAcres: { type: String },
    royaltyPercentage: { type: String },
    sectionName: { type: String, required: true },
    section: { type: String, required: true },
    township: { type: String, required: true },
    range: { type: String, required: true },
    titleSource: {
      type: String,
      required: true,
      enum: ["class a", "class b", "class c", "class d"],
    },
  },
  { timestamps: true }
);

const LandHolding = mongoose.model("LandHolding", landHoldingSchema);

module.exports = LandHolding;
