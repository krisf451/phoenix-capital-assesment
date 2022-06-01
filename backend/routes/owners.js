//OWNERS
const router = require("express").Router();
const {
  getAllOwners,
  getOwnerById,
  createOwner,
  deleteOwner,
  updateOwner,
} = require("../controllers/owners.js");
const auth = require("../middleware/auth.js");

router.route("/").get(auth, getAllOwners).post(auth, createOwner);
router
  .route("/:id")
  .get(auth, getOwnerById)
  .delete(auth, deleteOwner)
  .put(auth, updateOwner);

module.exports = router;
