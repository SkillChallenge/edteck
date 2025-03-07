import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../Modells/userModel';
import dotenv from 'dotenv';

dotenv.config(); // ✅ Ensure environment variables are loaded

interface DecodedToken {
  id: string;
  iat: number;
  exp: number;
}

interface AuthRequest extends Request {
  user?: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
}

// ✅ Authentication Middleware (Protect Routes)
export const protect = async (req: AuthRequest, res: Response, next: NextFunction) => {
  let token: string | undefined;

  console.log("🔍 Headers Received:", req.headers); // Debugging line

  if (req.headers.authorization?.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
    console.log("🔑 Extracted Token:", token); // Debugging line
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }

  if (!process.env.JWT_SECRET) {
    console.error('❌ JWT_SECRET is missing in environment variables');
    return res.status(500).json({ message: 'Internal server error' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET) as DecodedToken;
    console.log("✅ Decoded Token:", decoded);

    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
      return res.status(401).json({ message: 'User not found, authorization denied' });
    }

    // Attach user information to the request object
    req.user = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };

    next();
  } catch (error) {
    console.error('❌ Auth Middleware Error:', error);
    return res.status(401).json({ message: 'Not authorized, invalid token' });
  }
};

// ✅ Admin Authorization Middleware
export const isAdmin = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Unauthorized. No user data found.' });
  }

  // ✅ Check if the user's email is in the admin list
  const adminEmails = (process.env.ADMIN_EMAILS || "").split(",");
  if (adminEmails.includes(req.user.email)) {
    console.log(`🔑 Admin Access Granted: ${req.user.email}`);
    return next();
  }

  console.log(`🚫 Admin Access Denied: ${req.user.email}`);
  return res.status(403).json({ message: 'Access denied. Admins only.' });
};
