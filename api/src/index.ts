import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req: any, res: { send: (arg0: string) => void; }) => {
    res.send("TypeScript API is working!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
