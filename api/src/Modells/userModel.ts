import mongoose, { Document, model, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
import { UserSchema } from '../validations/challengeSchema';

interface IUser extends Document {
  firstName: string;
  lastName: string; // Fixed typo
  email: string;
  password: string;
  
}

const userSchema: Schema<IUser> = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }, // Fixed typo

    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    
  },
  {
    timestamps: true,
  }
);



const User = mongoose.model<IUser>('User', userSchema);

export default model<IUser>('User', userSchema);
