import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in your .env file");
}

interface MongooseCache {
  conn: mongoose.Mongoose | null;
  promise: Promise<mongoose.Mongoose> | null;
}

declare global {
  var mongooseCache: MongooseCache;
}

globalThis.mongooseCache = globalThis.mongooseCache || { conn: null, promise: null };

async function dbConnect() {
  try {
    if (globalThis.mongooseCache.conn) {
      return globalThis.mongooseCache.conn;
    }

    if (!globalThis.mongooseCache.promise) {
      globalThis.mongooseCache.promise = mongoose.connect(MONGODB_URI, {
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
        maxPoolSize: 10,
        connectTimeoutMS: 10000,
      }).then((mongoose) => {
        console.log('MongoDB connected successfully');
        return mongoose;
      });
    }

    globalThis.mongooseCache.conn = await globalThis.mongooseCache.promise;
    return globalThis.mongooseCache.conn;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

export default dbConnect;