import React from "react";

const LandHolding = ({ landHolding }) => {
  return (
    <div>
      {landHolding.name}-{landHolding.owner}
    </div>
  );
};

export default LandHolding;
