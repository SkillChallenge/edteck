import { z } from "zod";

export const ChallengeSchema = z.object({
  title: z.string(),
  deadline: z.coerce.date(),  // Ensures correct date parsing
  duration: z.string(),
  prize: z.string(),
  contactEmail: z.string().email(),
  projectDescription: z.string(),
  projectBrief: z.string(),
  projectDescriptionAndTasks: z.string(),
});
