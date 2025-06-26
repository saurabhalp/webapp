const express = require("express");
const { register, login } = require("../controllers/authController");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// Example protected route
router.get("/admin", protect, authorize("admin"), (req, res) => {
  res.json({ message: "Welcome, admin!" });
});

module.exports = router;

