"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChallengeSchema = exports.UserSchema = void 0;
const zod_1 = require("zod");
exports.UserSchema = zod_1.z.object({
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
    // Add other user fields as needed
});
exports.ChallengeSchema = zod_1.z.object({
    title: zod_1.z.string(),
    description: zod_1.z.string(),
    deadline: zod_1.z.date(),
    duration: zod_1.z.number(),
    category: zod_1.z.string(),
    difficulty: zod_1.z.enum(["easy", "medium", "hard"]),
    rewards: zod_1.z.string().optional(),
    createdBy: zod_1.z.string().optional(),
    // Add other challenge fields as needed
});
