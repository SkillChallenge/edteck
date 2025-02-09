"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRoutes_1 = __importDefault(require("../routes/authRoutes"));
const challengeRoutes_1 = __importDefault(require("./challengeRoutes"));
const allRouter = express_1.default.Router();
allRouter.use('/users', authRoutes_1.default);
allRouter.use('/challenge', challengeRoutes_1.default);
exports.default = allRouter;
