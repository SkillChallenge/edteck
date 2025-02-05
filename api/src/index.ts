import express, { Application, Request, Response } from "express";

import challengeRoutes from "./routes/challengeRoutes";
const bodyParser = require('body-parser');


const app: Application = express();
const PORT = process.env.PORT || 5000;

// Parse JSON request bodies
app.use(bodyParser.json());
app.use(express.json());
app.use("/api", challengeRoutes);

app.post("/challenge", (req: Request, res: Response) => {
  console.log("Received Body: ", req.body);
  res.json({ message: "Data received", data: req.body });
});


app.get("/", (req: any, res: { send: (arg0: string) => void }) => {
  res.send("TypeScript API is working!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
