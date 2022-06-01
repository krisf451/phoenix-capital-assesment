const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    entityType: { type: String, required: true },
    ownerType: { type: String, required: true },
    address: { type: String, required: true },
    totalHoldings: { type: Number, required: true },
  },
  { timestamps: true }
);

const Owner = mongoose.model("Owner", ownerSchema);

module.exports = Owner;
