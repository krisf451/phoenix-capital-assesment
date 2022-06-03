//LANDHOLDINGS
const router = require("express").Router();
const {
  getAllLandHoldings,
  getLandHoldingById,
  createLandHolding,
  deleteLandHolding,
  updateLandHolding,
} = require("../controllers/landHoldings.js");
const auth = require("../middleware/auth.js");
const validateLandHolding = require("../middleware/validateLandHolding.js");

router
  .route("/")
  .get(auth, getAllLandHoldings)
  .post(auth, validateLandHolding, createLandHolding);
router
  .route("/:id")
  .get(auth, getLandHoldingById)
  .delete(auth, deleteLandHolding)
  .put(auth, validateLandHolding, updateLandHolding);

module.exports = router;
