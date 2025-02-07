import express, { Application, Request, Response } from "express";
import allRouter from "./routes";
import cors from "cors";

// Now you can use the cors package as corsPackage

const app: Application = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/edtech", allRouter);
app.post("/challenge", (req: Request, res: Response) => {
  console.log("Received Body: ", req.body);
  res.json({ message: "Data received", data: req.body });
});
app.use((err: any, req: Request, res: Response, next: Function) => {
  console.error("Server Error:", err); // Log error for debugging
  res.status(500).json({ error: "Internal Server Error" });
});

app.get("/", (req: any, res: { send: (arg0: string) => void }) => {
  res.send("TypeScript API is working!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
