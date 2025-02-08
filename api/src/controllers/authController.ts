import { Request, Response } from 'express';
import User from '../Modells/userModel'; // Make sure the User model is correctly imported
import dbConnect from '../db';

export class UserController {
  // Register a new user
  static async register(req: Request, res: Response) {
    await dbConnect();
    try {
      const { firstName,lastName, email, password } = req.body;

      // Validation checks
      if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      // Create a new user
      const newUser = new User({ firstName,lastName, email, password });
      console.log(newUser);
      
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully', data: newUser });
    } catch (error) {
      console.error('Registration Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Login user
  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email, password });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
      console.error('Login Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Get all users
  static async getAll(req: Request, res: Response) {
    await dbConnect();
    try {
      const users = await User.find();
      res.status(200).json({ data: users });
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Get user by ID
  static async getById(req: Request, res: Response) {
    try {
      const user = await User.findById(req.params.id);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json({ data: user });
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Update user by ID
  static async update(req: Request, res: Response) {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json({ message: 'User updated successfully', data: updatedUser });
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Delete user by ID
  static async delete(req: Request, res: Response) {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);

      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
