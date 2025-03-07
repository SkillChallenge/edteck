import { Request, Response } from 'express';

export class AdminController {
  static getDashboard(req: Request, res: Response) {
    res.status(200).json({ message: 'Welcome to the Admin Dashboard' });
  }
}
