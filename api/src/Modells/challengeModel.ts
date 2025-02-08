// src/Modells/challengeModel.ts
import mongoose, { Document, Schema } from 'mongoose';

// Define the Challenge schema
const challengeSchema = new Schema({
  title: { type: String, required: true },
  // deadline: { type: Date, required: false },
  duration: { type: String, required: true },
  prize: { type: String, required: true },
  contactEmail: { type: String, required: true },
  projectDescription: { type: String, required: true },
  projectBrief: { type: String, required: true },
  projectDescriptionAndTasks: { type: String, required: true }
});

// Define the TypeScript interface for Challenge document
export interface Challenge extends Document {
  title: string;
  // deadline: Date;
  duration: string;
  prize: string;
  contactEmail: string;
  projectDescription: string;
  projectBrief: string;
  projectDescriptionAndTasks: string;
}

// Create the model using the schema and interface
export const ChallengeModel = mongoose.model<Challenge>('Challenge', challengeSchema);

// Export the schema if needed separately
export { challengeSchema };
