//AUTH
const router = require("express").Router();
const { signin, signup, getAllUsers } = require("../controllers/auth.js");

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/", getAllUsers);

module.exports = router;
