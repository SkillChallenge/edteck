import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
  firstName: string;
  laststName: string;
  email: string;
  password: string;
}

const userSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },

    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<IUser>('User', userSchema);

export default User;
