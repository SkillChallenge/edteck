import express, { Application, Request, Response, NextFunction } from "express";
import allRouter from "./routes";
import cors from "cors";
import { swaggerRouter } from "./swagger";
import mongoose from "mongoose";

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());

// Setup Swagger API docs
app.use(swaggerRouter);

// Routes
app.use("/api/edtech", allRouter);

// Global error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("Server Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});
const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📄 Swagger docs available at http://localhost:${PORT}/api-docs`);
});