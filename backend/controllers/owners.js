const getAllOwners = (req, res) => {
  res.json({ message: "Get ALL owners" });
};
const getOwnerById = (req, res) => {
  res.json({ message: "Get owner by ID" });
};
const createOwner = (req, res) => {
  res.json({ message: "create new owner" });
};
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
