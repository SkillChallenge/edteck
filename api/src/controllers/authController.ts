import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../Modells/userModel';
import dbConnect from '../db';

// Define a custom interface to extend Request
interface AuthRequest extends Request {
  user?: { id: string };
}

// Generate JWT token
const generateToken = (userId: string) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET as string, { expiresIn: '30d' });
};

export class UserController {
  // Register a new user
  static async register(req: Request, res: Response) {
    await dbConnect();
    try {
      const { firstName, lastName, email, password } = req.body;

      if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already in use' });
      }

      // Hash the password before saving
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({ firstName, lastName, email, password: hashedPassword });
      await newUser.save();

      res.status(201).json({
        message: 'User registered successfully',
        token: generateToken(newUser.id.toString()), // Use newUser.id
        user: { id: newUser.id, firstName, lastName, email }, // Ensure consistent ID usage
      });
    } catch (error) {
      console.error('Registration Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Login user
  static async login(req: Request, res: Response) {
    await dbConnect();
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }

      // const isMatch = await bcrypt.compare(password, user.password);
      // if (!isMatch) {
      //   return res.status(400).json({ message: 'Invalid email or password' });
      // }

      //check if user is an admin

      const adminEmails = (process.env.ADMIN_EMAILS || "").split(",");
    const isAdmin = adminEmails.includes(user.email);

      res.status(200).json({
        message: 'Login successful',
        token: generateToken(user.id.toString()), // Use user.id
        user: { id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email, isAdmin,
          redirecfulUrl: isAdmin ? '/dashboard' : '/home',
         },
      });
    } catch (error) {
      console.log('Login fail:');
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  //Check if the user is an admin



  // Get all users
  static async getAll(req: Request, res: Response) {
    await dbConnect();
    try {
      const users = await User.find().select('-password'); // Exclude password from response
      res.status(200).json(users);
    } catch (error) {
      console.error('Get Users Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Get user by ID
  static async getById(req: Request, res: Response) {
    await dbConnect();
    try {
      const { id } = req.params;
      const user = await User.findById(id).select('-password');

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json(user);
    } catch (error) {
      console.error('Get User Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Get User Profile (Protected Route)
  static async getProfile(req: AuthRequest, res: Response) {
    await dbConnect();
    try {
      if (!req.user || !req.user.id) {
        return res.status(401).json({ message: 'Not authorized, no user data' });
      }

      const user = await User.findById(req.user.id).select('-password');
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json(user);
    } catch (error) {
      console.error('Get Profile Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Update user
  static async update(req: Request, res: Response) {
    await dbConnect();
    try {
      const { id } = req.params;
      const { firstName, lastName, email, password } = req.body;

      let updatedData: Partial<{ firstName: string; lastName: string; email: string; password?: string }> = {
        firstName,
        lastName,
        email,
      };

      if (password) {
        updatedData.password = await bcrypt.hash(password, 10); // Hash password if updated
      }

      const updatedUser = await User.findByIdAndUpdate(id, updatedData, { new: true }).select('-password');

      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json(updatedUser);
    } catch (error) {
      console.error('Update User Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Delete user
  static async delete(req: Request, res: Response) {
    await dbConnect();
    try {
      const { id } = req.params;
      const deletedUser = await User.findByIdAndDelete(id);

      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Delete User Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
