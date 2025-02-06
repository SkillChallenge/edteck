import { Request, Response } from "express";
import { z } from "zod";
import { ChallengeModel } from "../Modells/challengeModel"; 
import { ChallengeSchema } from "../validations/challengeSchema";

export class ChallengeController {
  // Create a new challenge
  static async create(req: Request, res: Response) {
    try {
      const challengeData = ChallengeSchema.parse(req.body);
      const newChallenge = new ChallengeModel(challengeData);
      await newChallenge.save();
      res.status(201).json(newChallenge);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error("Zod Validation Error:", error.errors);
        res.status(400).json({ error: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  }

  // Get all challenges
  static async getAll(req: Request, res: Response) {
    try {
      const challenges = await ChallengeModel.find();
      res.status(200).json(challenges);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  // Get a single challenge by ID
  static async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const challenge = await ChallengeModel.findById(id);
      if (!challenge) {
        return res.status(404).json({ error: "Challenge not found" });
      }
      res.status(200).json(challenge);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  // Update a challenge
  static async update(req: Request, res: Response, next: Function) {
    try {
      const { id } = req.params;
      const updateData = ChallengeSchema.partial().parse(req.body);
      const updatedChallenge = await ChallengeModel.findByIdAndUpdate(id, updateData, { new: true });
      if (updatedChallenge) {
        res.status(200).json(updatedChallenge);
      } else {
        res.status(404).json({ error: "Challenge not found" });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: error.errors });
      } else {
        next(error);
      }
    }
  }

  // Delete a challenge
  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deleted = await ChallengeModel.findByIdAndDelete(id);
      if (!deleted) {
        return res.status(404).json({ error: "Challenge not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
