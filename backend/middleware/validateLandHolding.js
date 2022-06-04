const asyncHandler = require("express-async-handler");

const validateLandHolding = asyncHandler(async (req, res, next) => {
  const { ownerName, section, township, range, titleSource } = req.body;

  if (!ownerName || !section || !township || !range || !titleSource) {
    throw new Error("Please enter all fields");
  }

  //lets do regex for the section/township/range
  const rightFormatSection = new RegExp(/^[0-9]{3}$/);
  const rightFormatTownship = new RegExp(/^[0-9]{3}[NSns]$/);
  const rightFormatRange = new RegExp(/^[0-9]{3}[EWew]$/);
  if (
    !rightFormatRange.test(range) ||
    !rightFormatSection.test(section) ||
    !rightFormatTownship.test(township)
  ) {
    throw new Error(
      "something wrong with the formatting of the section/township or range"
    );
  }
  next();
});

module.exports = validateLandHolding;
