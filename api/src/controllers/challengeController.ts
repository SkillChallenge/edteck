import { Request, Response } from "express";
import { z } from "zod";
import { ChallengeModel, Challenge } from "../Modells/challengeModel"; // Corrected import

// Hypothetical database interface
interface Database {
  create(data: Challenge): Promise<Challenge>;
  findById(id: string): Promise<Challenge | null>;
  findAll(): Promise<Challenge[]>;
  update(id: string, data: Partial<Challenge>): Promise<Challenge | null>;
  delete(id: string): Promise<boolean>;
}

// Replace this with your actual database implementation
const db: Database = {
  async create(data: Challenge): Promise<Challenge> {
    const challenge = new ChallengeModel(data);
    return await challenge.save();
  },
  async findById(id: string): Promise<Challenge | null> {
    return ChallengeModel.findById(id).exec();
  },
  async findAll(): Promise<Challenge[]> {
    return ChallengeModel.find().exec();
  },
  async update(id: string, data: Partial<Challenge>): Promise<Challenge | null> {
    return ChallengeModel.findByIdAndUpdate(id, data, { new: true }).exec();
  },
  async delete(id: string): Promise<boolean> {
    const result = await ChallengeModel.findByIdAndDelete(id).exec();
    return result !== null;
  }
};

export class ChallengeController {
  // Create a new challenge
  static async create(req: Request, res: Response) {
    try {
      const challengeData = ChallengeSchema.parse(req.body);
      const newChallenge = await db.create(challengeData);
      res.status(201).json(newChallenge);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  }

  // Get all challenges
  static async getAll(req: Request, res: Response) {
    try {
      const challenges = await db.findAll();
      res.status(200).json(challenges);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  // Get a single challenge by ID
  static async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const challenge = await db.findById(id);
      if (challenge) {
        res.status(200).json(challenge);
      } else {
        res.status(404).json({ error: "Challenge not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  // Update a challenge
  static async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updateData = ChallengeSchema.partial().parse(req.body);
      const updatedChallenge = await db.update(id, updateData);
      if (updatedChallenge) {
        res.status(200).json(updatedChallenge);
      } else {
        res.status(404).json({ error: "Challenge not found" });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  }

  // Delete a challenge
  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deleted = await db.delete(id);
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: "Challenge not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
