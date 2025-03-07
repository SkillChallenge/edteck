import { Router } from "express";
import { UserController } from "../controllers/authController";
import { protect } from "../middleware/authMiddleware";

const userRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User authentication and management
 */

/**
 * @swagger
 * /api/edtech/users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: "John"
 *               lastName:
 *                 type: string
 *                 example: "Doe"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "johndoe@example.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "strongpassword123"
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Invalid input data
 *       500:
 *         description: Server error
 */
userRouter.post("/register", UserController.register);

/**
 * @swagger
 * /api/edtech/users/login:
 *   post:
 *     summary: Authenticate a user and return a token
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "johndoe@example.com"
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "strongpassword123"
 *     responses:
 *       200:
 *         description: Login successful, returns token
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
userRouter.post("/login", UserController.login);

/**
 * @swagger
 * /api/edtech/users/profile:
 *   get:
 *     summary: Retrieve the authenticated user's profile
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
userRouter.get("/profile", protect, UserController.getProfile); // Protect profile route

/**
 * @swagger
 * /api/edtech/users:
 *   get:
 *     summary: Retrieve all users (Admin only)
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of users retrieved successfully
 *       403:
 *         description: Forbidden (Admin only)
 *       500:
 *         description: Server error
 */
userRouter.get("/", protect, UserController.getAll); 

/**
 * @swagger
 * /api/edtech/users/{id}:
 *   get:
 *     summary: Get a specific user by ID
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user's ID
 *     responses:
 *       200:
 *         description: User retrieved successfully
 *       404:
 *         description: User not found
 */
userRouter.get("/:id", protect, UserController.getById); 

/**
 * @swagger
 * /api/edtech/users/{id}:
 *   put:
 *     summary: Update user information
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user's ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: "UpdatedFirst"
 *               lastName:
 *                 type: string
 *                 example: "UpdatedLast"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "updatedemail@example.com"
 *     responses:
 *       200:
 *         description: User updated successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
userRouter.put("/:id", protect, UserController.update); 

/**
 * @swagger
 * /api/edtech/users/{id}:
 *   delete:
 *     summary: Delete a user (Admin only)
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user's ID
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       403:
 *         description: Forbidden (Admin only)
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
userRouter.delete("/:id", protect, UserController.delete); // Protect this route

export default userRouter;
