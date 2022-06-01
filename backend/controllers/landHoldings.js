const getAllLandHoldings = (req, res) => {
  res.json({ message: "Get ALL Land Holdings" });
};
const getLandHoldingById = (req, res) => {
  res.json({ message: "Get land holding by ID" });
};
const createLandHolding = (req, res) => {
  res.json({ message: "create new land holding" });
};
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
