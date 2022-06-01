//LANDHOLDINGS
const router = require("express").Router();
const {
  getAllLandHoldings,
  getLandHoldingById,
  createLandHolding,
  deleteLandHolding,
  updateLandHolding,
} = require("../controllers/landHoldings.js");

router.route("/").get(getAllLandHoldings).post(createLandHolding);
router
  .route("/:id")
  .get(getLandHoldingById)
  .delete(deleteLandHolding)
  .put(updateLandHolding);

module.exports = router;
