const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    entityType: {
      type: String,
      required: true,
      enum: ["company", "individual", "investor", "trust"],
    },
    ownerType: {
      type: String,
      required: true,
      enum: ["competitor", "seller", "investor", "professional"],
    },
    address: { type: String, required: true, unique: true },
    totalHoldings: { type: Number, required: true },
  },
  { timestamps: true }
);

const Owner = mongoose.model("Owner", ownerSchema);

module.exports = Owner;
