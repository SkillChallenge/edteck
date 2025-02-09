"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    throw new Error("Please define MONGODB_URI in your .env file");
}
globalThis.mongooseCache = globalThis.mongooseCache || { conn: null, promise: null };
function dbConnect() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (globalThis.mongooseCache.conn) {
                return globalThis.mongooseCache.conn;
            }
            if (!globalThis.mongooseCache.promise) {
                globalThis.mongooseCache.promise = mongoose_1.default.connect(MONGODB_URI, {
                    serverSelectionTimeoutMS: 5000,
                    socketTimeoutMS: 45000,
                    maxPoolSize: 10,
                    connectTimeoutMS: 10000,
                }).then((mongoose) => {
                    console.log('MongoDB connected successfully');
                    return mongoose;
                });
            }
            globalThis.mongooseCache.conn = yield globalThis.mongooseCache.promise;
            return globalThis.mongooseCache.conn;
        }
        catch (error) {
            console.error('MongoDB connection error:', error);
            throw error;
        }
    });
}
exports.default = dbConnect;
