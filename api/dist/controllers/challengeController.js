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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChallengeController = void 0;
const zod_1 = require("zod");
const challengeModel_1 = require("../Modells/challengeModel");
const challengeSchema_1 = require("../validations/challengeSchema");
class ChallengeController {
    // Create a new challenge
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const challengeData = challengeSchema_1.ChallengeSchema.parse(req.body);
                const newChallenge = new challengeModel_1.ChallengeModel(challengeData);
                yield newChallenge.save();
                res.status(201).json(newChallenge);
            }
            catch (error) {
                if (error instanceof zod_1.z.ZodError) {
                    console.error("Zod Validation Error:", error.errors);
                    res.status(400).json({ error: error.errors });
                }
                else {
                    res.status(500).json({ error: "Internal server error" });
                }
            }
        });
    }
    // Get all challenges
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const challenges = yield challengeModel_1.ChallengeModel.find();
                res.status(200).json(challenges);
            }
            catch (error) {
                res.status(500).json({ error: "Internal server error" });
            }
        });
    }
    // Get a single challenge by ID
    static getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const challenge = yield challengeModel_1.ChallengeModel.findById(id);
                if (!challenge) {
                    return res.status(404).json({ error: "Challenge not found" });
                }
                res.status(200).json(challenge);
            }
            catch (error) {
                res.status(500).json({ error: "Internal server error" });
            }
        });
    }
    // Update a challenge
    static update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const updateData = challengeSchema_1.ChallengeSchema.partial().parse(req.body);
                const updatedChallenge = yield challengeModel_1.ChallengeModel.findByIdAndUpdate(id, updateData, { new: true });
                if (updatedChallenge) {
                    res.status(200).json(updatedChallenge);
                }
                else {
                    res.status(404).json({ error: "Challenge not found" });
                }
            }
            catch (error) {
                if (error instanceof zod_1.z.ZodError) {
                    res.status(400).json({ error: error.errors });
                }
                else {
                    next(error);
                }
            }
        });
    }
    // Delete a challenge
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const deleted = yield challengeModel_1.ChallengeModel.findByIdAndDelete(id);
                if (!deleted) {
                    return res.status(404).json({ error: "Challenge not found" });
                }
                res.status(204).send();
            }
            catch (error) {
                res.status(500).json({ error: "Internal server error" });
            }
        });
    }
}
exports.ChallengeController = ChallengeController;
