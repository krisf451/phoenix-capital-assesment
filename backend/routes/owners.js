//OWNERS
const router = require("express").Router();
const {
  getAllOwners,
  getOwnerById,
  createOwner,
  deleteOwner,
  updateOwner,
} = require("../controllers/owners.js");

router.route("/").get(getAllOwners).post(createOwner);
router.route("/:id").get(getOwnerById).delete(deleteOwner).put(updateOwner);

module.exports = router;
