const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { errorHandler } = require("./middleware/errorMiddleware.js");

require("dotenv").config();

const landHoldingRoutes = require("./routes/landHoldings.js");
const ownerRoutes = require("./routes/owners.js");
const authRoutes = require("./routes/auth.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const PORT = process.env.PORT || 9000;

app.use("/api/v1/landHoldings", landHoldingRoutes);
app.use("/api/v1/owners", ownerRoutes);
app.use("/api/v1/auth", authRoutes);

app.get("/api/v1", (req, res) => {
  res.json({ message: "Sanity Check Passed" });
});

app.use(errorHandler);

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
