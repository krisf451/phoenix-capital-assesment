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

router.route("/").get(auth, getAllLandHoldings).post(auth, createLandHolding);
router
  .route("/:id")
  .get(auth, getLandHoldingById)
  .delete(auth, deleteLandHolding)
  .put(auth, updateLandHolding);

module.exports = router;
