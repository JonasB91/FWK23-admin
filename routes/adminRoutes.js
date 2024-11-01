const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { authenticateToken, authorizeAdmin } = require("../utils/authMiddleware");

// Route för att hämta alla inlägg
router.get("/all-posts", authenticateToken, authorizeAdmin, adminController.getAllPosts);

module.exports = router;
