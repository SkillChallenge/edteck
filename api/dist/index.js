"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
// Now you can use the cors package as corsPackage
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/edtech", routes_1.default);
app.post("/challenge", (req, res) => {
    console.log("Received Body: ", req.body);
    res.json({ message: "Data received", data: req.body });
});
app.use((err, req, res, next) => {
    console.error("Server Error:", err); // Log error for debugging
    res.status(500).json({ error: "Internal Server Error" });
});
app.get("/", (req, res) => {
    res.send("TypeScript API is working!");
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
