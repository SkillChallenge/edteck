import { z } from "zod";

export const UserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string(),
  // Add other user fields as needed
});

export const ChallengeSchema = z.object({
  title: z.string(),
  description: z.string(),
  deadline: z.date(),
  duration: z.number(),
  category: z.string(),
  difficulty: z.enum(["easy", "medium", "hard"]),
  rewards: z.string().optional(),
  createdBy: z.string().optional(),
  // Add other challenge fields as needed
});
