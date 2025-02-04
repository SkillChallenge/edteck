const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
// const authRoutes = require("./controllers/authController");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use(cors({ origin: "http://localhost:5000", credentials: true }));

// app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
    console.log(`🚀 Server running on port ${process.env.PORT}`);
});
