const axios = require("axios");

// Hämtar alla inlägg från domain-service
exports.getAllPosts = async (req, res) => {
  try {
    // Domain-service URL (anpassa vid behov)
    const response = await axios.get("http://localhost:5001/api/posts", {
      headers: { Authorization: `Bearer ${req.headers.authorization.split(" ")[1]}` }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Kunde inte hämta inlägg" });
  }
};

