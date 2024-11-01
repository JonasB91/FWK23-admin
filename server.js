require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
const adminRoutes = require("./routes/adminRoutes");
app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Admin-service körs på port ${PORT}`);
});
